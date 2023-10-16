<?php


namespace Botble\Stock\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\WalletInterface;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Illuminate\Http\Request;
use Exception;
use Botble\Stock\Tables\ContractTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Stock\Forms\ContractForm;
use Botble\Stock\Http\Requests\ContractRequest;
use Botble\Base\Forms\FormBuilder;
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;
use PhpOffice\PhpWord\TemplateProcessor;
use function Symfony\Component\String\upper;
use Illuminate\Support\Str;

class ContractController extends BaseController
{
    /**
     * @var ContractInterface
     */
    protected $contractRepository;
     /**
     * @var CustomerInterface
     */
    protected $customerRepository;

    protected $packageRepository;

    protected $customerWalletRepository;

    /**
     * ContractController constructor.
     * @param ContractInterface $contractRepository
     */
    public function __construct(
        ContractInterface $contractRepository,
        CustomerInterface $customerRepository,
        PackageInterface $packageRepository,
        WalletInterface $customerWalletRepository
    )
    {
        $this->contractRepository = $contractRepository;
        $this->customerRepository = $customerRepository;
        $this->packageRepository = $packageRepository;
        $this->customerWalletRepository = $customerWalletRepository;
    }
    
    /**
     * @param ContractTable $table
     * @return \Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(ContractTable $table)
    {
        return $table->renderTable();
    }

    /**
     * @param $id
     * @param Request $request
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function edit($id, FormBuilder $formBuilder, Request $request)
    {
        $contract = $this->contractRepository->findOrFail($id);

        $customerId = $contract->customer_id;
        $customer = $this->customerRepository->findById($customerId);

        //Get presenter id and customer phone
        $presenterID = $contract->presenter_id;
        $presenter = $this->customerRepository->getFirstBy(['affiliation_id' => $presenterID]);
       
        
        event(new BeforeEditContentEvent($request, $contract));

        page_title()->setTitle("Chỉnh sửa " . $contract->name . '"');

        return $formBuilder->create(ContractForm::class, ['model' => $contract],['customer' => $customer, 'presenter' => $presenter])->renderForm();
    }

    /**
     * @param $id
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, ContractRequest $request, BaseHttpResponse $response)
    {
        $contract = $this->contractRepository->findOrFail($id);

        $contract->fill($request->input());
        $contract->customer_info = json_encode($request->input('customer_info'));

        $this->contractRepository->createOrUpdate($contract);

        event(new UpdatedContentEvent(CONTRACT_MODULE_SCREEN_NAME, $request, $contract));
        return $response
            ->setPreviousUrl(route('contract.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }
    /**
     * @param Request $request
     * @param $id
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function destroy(Request $request, $id, BaseHttpResponse $response)
    {
        try {
            $contract = $this->contractRepository->findOrFail($id);

            $this->contractRepository->delete($contract);

            event(new DeletedContentEvent(CONTRACT_MODULE_SCREEN_NAME, $request, $contract));
            return $response->setMessage(trans('core/base::notices.delete_success_message'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Exception
     */
    public function deletes(Request $request, BaseHttpResponse $response)
    {
        $ids = $request->input('ids');
        if (empty($ids)) {
            return $response
                ->setError()
                ->setMessage(trans('core/base::notices.no_select'));
        }

        foreach ($ids as $id) {
            $contract = $this->contractRepository->findOrFail($id);
            $this->contractRepository->delete($contract);
            event(new DeletedContentEvent(CONTRACT_MODULE_SCREEN_NAME, $request, $contract));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }

    public function exportStock($id, BaseHttpResponse $response){
        $phpWord = new PhpWord();
        $path = 'storage/hop-dong-cp/'.date('Y').'/'.date('m');
        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }
        $day = date('d');
        $month = date('m');
        $year = date('Y');

        $contract = $this->contractRepository->getFirstBy(['id'=>$id]);
        $customer = $this->customerRepository->findById($contract->customer_id);
        $customer_infor = json_decode($contract->customer_info);

        if(is_null($customer_infor)){
            return $response->setError()->setMessage('Vui lòng nhập đủ thông tin khách hàng để in hợp đồng !');
        }

        $package = $this->packageRepository->findById($contract->package_id);

        $templateProcessor = new TemplateProcessor('storage/hd-co-phan-v3.docx');
        $templateProcessor->setValue('contract_hard_code', $contract->contract_hard_code);
        $templateProcessor->setValue('full_name', Str::upper($customer->name));
        $templateProcessor->setValue('day', $day);
        $templateProcessor->setValue('month', $month);
        $templateProcessor->setValue('year', $year);
        $templateProcessor->setValue('address', $contract->address);
        $templateProcessor->setValue('email', $customer->email);
        $templateProcessor->setValue('phone', $customer->phone);
        $templateProcessor->setValue('qty_of_stock', $package->qty_of_stock);
        $templateProcessor->setValue('price_per_stock', number_format($package->price_per_stock,0,',','.'));
        $priceString = $this->convert_number_to_words($package->price_per_stock);
        $templateProcessor->setValue('price_string', $priceString);
        $templateProcessor->setValue('total_price', number_format($contract->first_buy_price,0,',','.'));
        $totalPriceString = $this->convert_number_to_words($contract->first_buy_price);
        $templateProcessor->setValue('total_price_string', $totalPriceString);
        $end_date = getMonthByDay($package->end_date);
        $templateProcessor->setValue('end_date', $end_date);
        $templateProcessor->setValue('percent_paid_by_ubgxu', $contract->percent_paid_by_ubgxu);
        $templateProcessor->setValue('percent_paid_by_money', $contract->percent_paid_by_money);
        //% tích xu theo tháng
        $percentXuMonth = round($contract->percent_paid_by_ubgxu/12,2,PHP_ROUND_HALF_DOWN);
        $templateProcessor->setValue('percent_ubgxu_month',$percentXuMonth );
        //% tiền theo tháng
        $percentMoneyMonth = round($contract->percent_paid_by_money/12,2,PHP_ROUND_HALF_DOWN);
        $templateProcessor->setValue('percent_money_month',$percentMoneyMonth );
        // tổng % lợi nhuận
        $totalPercentYear = ($contract->percent_paid_by_ubgxu+$contract->percent_paid_by_money);
        $templateProcessor->setValue('total_percent_year',$totalPercentYear );
        $totalPercentMonth = round($totalPercentYear/12,2,PHP_ROUND_HALF_DOWN);
        $templateProcessor->setValue('total_percent_month',$totalPercentMonth );
        //số tài khoản khách hàng
        $bankInfor = $this->customerWalletRepository->getFirstBy(['customer_id'=>$customer->id]);
        if(!is_null($bankInfor)){
            $bank_infor = json_decode($bankInfor->bank_info);
            $bank_name = $bank_infor->name;
            $bank_number = $bank_infor->number;
            $bank_full_name = $bank_infor->full_name;
            $bank_branch = $bank_infor->branch;
        }else{
            $bank_number = '';
            $bank_branch = '';
            $bank_name = '';
            $bank_full_name = '';
        }
        $templateProcessor->setValue('bank_name',$bank_name );
        $templateProcessor->setValue('bank_full_name',$bank_full_name );
        $templateProcessor->setValue('bank_number',$bank_number );
        $templateProcessor->setValue('bank_branch',$bank_branch );
        $templateProcessor->setValue('date_of_birth',$customer_infor->date_of_birth);
        $templateProcessor->setValue('ethnic',$customer_infor->ethnic);
        $templateProcessor->setValue('nationality',$customer_infor->nationality);
        $templateProcessor->setValue('cmnd',$customer_infor->cmnd);
        $templateProcessor->setValue('date_of_issue',$customer_infor->date_of_issue);
        $templateProcessor->setValue('place_of_issue',$customer_infor->place_of_issue);
        $templateProcessor->setValue('permanent_address',$customer_infor->permanent_address);


        //Khởi tạo đối tượng writer
        $templateProcessor->saveAs( $path.'/'.$contract->contract_hard_code.'.docx');
        return redirect()->to($path.'/'.$contract->contract_hard_code.'.docx');
        //Tạo tập tin Word
    }

    function convert_number_to_words($number) {

        $hyphen      = ' ';
        $conjunction = ' ';
        $separator   = ' ';
        $negative    = 'âm ';
        $decimal     = ' phẩy ';
        $one		 = 'mốt';
        $ten         = 'lẻ';
        $dictionary  = array(
            0                   => 'Không',
            1                   => 'Một',
            2                   => 'Hai',
            3                   => 'Ba',
            4                   => 'Bốn',
            5                   => 'Năm',
            6                   => 'Sáu',
            7                   => 'Bảy',
            8                   => 'Tám',
            9                   => 'Chín',
            10                  => 'Mười',
            11                  => 'Mười một',
            12                  => 'Mười hai',
            13                  => 'Mười ba',
            14                  => 'Mười bốn',
            15                  => 'Mười lăm',
            16                  => 'Mười sáu',
            17                  => 'Mười bảy',
            18                  => 'Mười tám',
            19                  => 'Mười chín',
            20                  => 'Hai mươi',
            30                  => 'Ba mươi',
            40                  => 'Bốn mươi',
            50                  => 'Năm mươi',
            60                  => 'Sáu mươi',
            70                  => 'Bảy mươi',
            80                  => 'Tám mươi',
            90                  => 'Chín mươi',
            100                 => 'trăm',
            1000                => 'ngàn',
            1000000             => 'triệu',
            1000000000          => 'tỷ',
            1000000000000       => 'nghìn tỷ',
            1000000000000000    => 'ngàn triệu triệu',
            1000000000000000000 => 'tỷ tỷ'
        );

        if (!is_numeric($number)) {
            return false;
        }

        if ($number < 0) {
            return $negative . $this->convert_number_to_words(abs($number));
        }

        $string = $fraction = null;

        if (strpos($number, '.') !== false) {
            list($number, $fraction) = explode('.', $number);
        }

        switch (true) {
            case $number < 21:
                $string = $dictionary[$number];
                break;
            case $number < 100:
                $tens   = ((int) ($number / 10)) * 10;
                $units  = $number % 10;
                $string = $dictionary[$tens];
                if ($units) {
                    $string .= strtolower( $hyphen . ($units==1?$one:$dictionary[$units]) );
                }
                break;
            case $number < 1000:
                $hundreds  = $number / 100;
                $remainder = $number % 100;
                $string = $dictionary[$hundreds] . ' ' . $dictionary[100];
                if ($remainder) {
                    $string .= strtolower( $conjunction . ($remainder<10?$ten.$hyphen:null) . $this->convert_number_to_words($remainder) );
                }
                break;
            default:
                $baseUnit = pow(1000, floor(log($number, 1000)));
                $numBaseUnits = (int) ($number / $baseUnit);
                $remainder = $number - ($numBaseUnits*$baseUnit);
                $string = $this->convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
                if ($remainder) {
                    $string .= strtolower( $remainder < 100 ? $conjunction : $separator );
                    $string .= strtolower( $this->convert_number_to_words($remainder) );
                }
                break;
        }

        if (null !== $fraction && is_numeric($fraction)) {
            $string .= $decimal;
            $words = array();
            foreach (str_split((string) $fraction) as $number) {
                $words[] = $dictionary[$number];
            }
            $string .= implode(' ', $words);
        }

        return $string;
    }

     
}