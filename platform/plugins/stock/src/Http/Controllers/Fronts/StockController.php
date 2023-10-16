<?php

namespace Botble\Stock\Http\Controllers\Fronts;

use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Models\Province;
use Botble\Ecommerce\Repositories\Interfaces\ProvinceInterface;
use Botble\Slug\Repositories\Interfaces\SlugInterface;
use Botble\Stock\Enums\ContractPaymentStatusEnum;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Enums\StockTypeEnum;
use Botble\Stock\Events\SentContractEvent;
use Botble\Stock\Http\Requests\SignContractRequest;
use Botble\Stock\Models\Chart;
use Botble\Stock\Models\Contract;
use Botble\Stock\Models\CPCategory;
use Botble\Stock\Models\CPHistory;
use Botble\Stock\Models\Package;
use Botble\Stock\Repositories\Interfaces\ChartInterface;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Repositories\Interfaces\CPCategoryInterface;
use Botble\Stock\Repositories\Interfaces\CPHistoryInterface;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Botble\Stock\Repositories\Interfaces\WithdrawInterface;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Theme;
use SlugHelper;
use Illuminate\Support\Str;
use GuzzleHttp\Psr7\Request as requestClient;
use Exception;
use EmailHandler;

class StockController
{
    protected $category;
    protected $slugRepository;
    protected $packageRepository;
    protected $contractRepository;
    protected $historyRepository;
    protected $withdrawRepository;
    protected $chartRepository;
    protected $provinceRepository;

    /**
     * StockController constructor.
     * @param CPCategoryInterface $cpCategoryRepository
     * @param SlugInterface $slugRepository
     * @param PackageInterface $packageRepository
     * @param ContractInterface $contractRepository
     * @param CPHistoryInterface $historyRepository
     * @param WithdrawInterface $withdrawRepository
     * @param ChartInterface $chartRepository
     * @param ProvinceInterface $provinceRepository
     */
    public function __construct(
        CPCategoryInterface $cpCategoryRepository,
        SlugInterface $slugRepository,
        PackageInterface $packageRepository,
        ContractInterface $contractRepository,
        CPHistoryInterface $historyRepository,
        WithdrawInterface $withdrawRepository,
        ChartInterface $chartRepository, ProvinceInterface $provinceRepository
    )
    {
        $this->category = $cpCategoryRepository;
        $this->slugRepository = $slugRepository;
        $this->packageRepository = $packageRepository;
        $this->contractRepository = $contractRepository;
        $this->historyRepository = $historyRepository;
        $this->withdrawRepository = $withdrawRepository;
        $this->chartRepository = $chartRepository;
        $this->provinceRepository = $provinceRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function stockCategory(Request $request)
    {
        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Danh mục đầu tư'), route('public.cp-category'));
        $listCategory = $this->category->getModel()
            ->where('status', 'published')
            ->orderBy('sort_order', 'asc')->get();
        return view('plugins/stock::themes.cp-category', compact('listCategory'));
    }

    /**
     * @param $slug
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function getPackageByCategory($slug, Request $request)
    {

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Danh sách gói đầu tư'), route('public.cp-category'));

        $slugInfor = $this->slugRepository->getFirstBy([
            'key' => $slug,
            'reference_type' => CPCategory::class,
            'prefix' => SlugHelper::getPrefix(CPCategory::class)
        ]);

        if (!$slugInfor) {
            abort(404);
        }

        $condition = [
            'cp_category.id' => $slugInfor->reference_id,
            'cp_category.status' => 'published',
        ];

        $category = $this->category->getFirstBy($condition, ['*'], ['slugable']);

        if (!$category) {
            abort(404);
        }

        $packages = $this->packageRepository->getModel()
            ->where('cp_category_id', $category->id)
            ->where('status', 'published')
            ->where('type', StockTypeEnum::OFFICIAL)
            ->orderBy('end_date', 'desc')
            ->get();

        return view('plugins/stock::themes.cp-package', compact('category', 'packages'));
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|\Illuminate\Http\RedirectResponse|mixed
     */
    public function bookPackage(
        Request $request,
        BaseHttpResponse $response
    )
    {
        $id = $request->id;

        $presenter_id = 0;
        if ($request->presenter) {
            $presenter_id = $request->presenter;
        }

        if (!auth('customer')->check()) {
            return $response->setNextUrl(route('customer.login'));
        }

        $package = $this->packageRepository->getFirstBy(['id' => $id]);

        if (!$package) {
            abort(404);
        }

        //Kiểm tra hđ
        $avaiableContract = $this->contractRepository->getFirstBy([
            'package_id' => $package->id,
            'customer_id' => auth('customer')->id(),
            ['status', '!=', ContractStatusEnum::ACTIVE]
        ]);

        if ($avaiableContract != null) {
            $code = $avaiableContract->contract_code;
            return $response->setNextUrl(route('public.book-package', compact('code')))
                ->setError()
                ->setMessage('Bạn đang có một HĐ đầu tư tương tự đang đợi hoàn thiện');
        }

        //send email to customer

        //create contract
        $current = Carbon::now();
        $trialExpires = $current->addDays($package->end_date);
        $packageCost = $package->price_per_stock * $package->qty_of_stock;

        $totalYear = ceil($package->end_date / 365);

        $totalPercentMoney = $package->percent_paid_by_money * $totalYear;
        $totalPercentXu = $package->percent_paid_by_ubgxu * $totalYear;

        $daily_profit = $packageCost * $totalPercentMoney / 100 / $package->end_date; // Lãi hàng ngày VNĐ
        $daily_profit_xu = $packageCost * $totalPercentXu / 100 / $package->end_date; // Lãi hàng ngày xu

        $totalDailyProfit = $daily_profit + $daily_profit_xu;

        $totalProfit = $totalDailyProfit * intval($package->end_date);

        $data = [
            'customer_id' => auth('customer')->id(),
            'package_id' => $package->id,
            'name' => $package->name,
            'expires_date' => $trialExpires,
            'first_buy_price' => $package->price_per_stock * round($package->qty_of_stock),
            'first_buy_percentage' => $package->percentage,
            'percent_paid_by_money'=>$package->percent_paid_by_money,
            'percent_paid_by_ubgxu'=>$package->percent_paid_by_ubgxu,
            'status' => ContractStatusEnum::UNSIGNED,
            'contract_paid_status' => ContractPaymentStatusEnum::UNPAID,
            'daily_profit_amount' => round($daily_profit, 0, PHP_ROUND_HALF_DOWN),
            'daily_profit_amount_xu' => round($daily_profit_xu, 0, PHP_ROUND_HALF_DOWN),
            'total_profit_amount' => $totalProfit,
            'presenter_id' => $presenter_id,
            'payment_type' => $package->payment_type,
            'commission' => $package->commission,
            'type' => $package->type
        ];

        try {
            $create = $this->contractRepository->create($data);
            $code = Carbon::now()->format('dmY') . '-' . Str::slug(auth('customer')->user()->name) . '-' . Str::slug($package->slug) . '-' . $create->id;
            $contractCode = [
                'contract_code' => $code
            ];
            $this->contractRepository->update(['id' => $create->id], $contractCode);
            return $response->setNextUrl(route('public.book-package', compact('code')));
        } catch (\Exception $e) {
            return $response->setNextUrl(route('public.packages', $package->slug))->setError('Có lỗi khi khơi tạo hợp đồng');
        }
    }

    /**
     * @param $code
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function previewBookPackage($code)
    {
        $contract = $this->contractRepository->getFirstBy([
            'contract_code' => $code
        ], ['*'], ['package']);

        if (!$contract) {
            abort(404);
        }
        $package = $this->packageRepository->findById($contract->package_id);
        $category = $this->category->findById($package->cp_category_id);

        $today_contract = $this->contractRepository->getModel()->whereDate('created_at', '=', now()->toDateString())->count();

        $user = Customer::find($contract->customer_id);
        return view('plugins/stock::themes.book-success', compact('contract', 'user', 'category', 'package', 'today_contract'));
    }

    /**
     * @param $code
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function confirmPayment(
        $code,
        BaseHttpResponse $response
    )
    {
        $contract = $this->contractRepository->getFirstBy([
            'contract_code' => $code
        ], ['*'], ['package']);

        if (!$contract) {
            abort(404);
        }

        $this->contractRepository->update([
            'contract_code' => $code
        ], [
            'contract_paid_status' => ContractPaymentStatusEnum::PENDING_PAYMENT
        ]);

        return $response->setNextUrl(route('public.book-package', $code))->setMessage('Trạng thái thanh toán đã được cập nhật');
    }

    public function registerContract(Request $request)
    {
        $id = $request->id;
        $contract = $this->contractRepository->findById($id);
        $user = Customer::find($contract->customer_id);
        return view('plugins/stock::themes.templates.sign-contract', compact('user', 'contract'));
    }

    public function requestSign(SignContractRequest $request, BaseHttpResponse $response)
    {

        if ($request->has(['name', 'phone', 'phone_ref', 'email'])) {
            try {
                //sinh mã hợp đồng mới
                $today_contract = $request->today_contract + 1;

                if ($today_contract < 10) {
                    $today_contract = '00' . $today_contract;
                }
                if ($today_contract < 100 && $today_contract >= 10) {
                    $today_contract = '0' . $today_contract;
                }

                $package_code = $request->package_code;

                $province = $this->provinceRepository->getModel()->where('name', '=', $request->area)->first();
                $contract_hard_code = $province->gso_id . '-' . $request->contract_id . '-CNCP-' . $request->category_code . '-' . date('m') . '-' . date('Y');
                $args = ['replyTo' => [$request->name => $request->email]];
                $code = $request->input('contract_code');

                EmailHandler::setModule(STOCK_MODULE_SCREEN_NAME)
                    ->setVariableValues([
                        'contract_name' => $request->contract_name ?? 'N/A',
                        'contract_price' => $request->contract_price ?? 'N/A',
                        'contract_code' => $request->contract_code ?? 'N/A',
                        'name' => $request->name ?? 'N/A',
                        'email' => $request->email ?? 'N/A',
                        'phone' => $request->phone ?? 'N/A',
                        'address' => $request->address ?? 'N/A',
                    ], 'stock')
                    ->sendUsingTemplate('new-sign-contract', null, $args);
                //update trạng thái hợp đồng sang thành yêu cầu ký
                $this->contractRepository->update([
                    'contract_code' => $code
                ], [
                    'status' => ContractStatusEnum::REQUEST_TO_SIGN,
                    'address' => $request->address,
                    'area' => $request->area,
                    'phone_ref' => $request->phone_ref,
                    'contract_hard_code' => $contract_hard_code
                ]);

                return $response->setNextUrl(route('public.book-package', $code))->setMessage('Yêu cầu ký hợp đồng đã được gửi thành công');
            } catch (Exception $exception) {
                return $response->setError()->setMessage($exception->getMessage());
            }
        }
    }

    public function getFrameFptContract(Request $request)
    {
        $contract_code = $request->contract_code;
        $contract_number = $request->contract_number;
        return view('plugins/stock::themes.templates.frame-contract', compact('contract_code', 'contract_number'));
    }

    public function getListStock(Request $request, BaseHttpResponse $response)
    {
        if (!auth('customer')->check()) {
            return $response->setNextUrl(route('customer.login'));
        }

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Danh sách gói đầu tư'), route('stock.list-stocks'));

        $query = Contract::query();
        if (!is_null($request->contract_code)) {
            $query->where('contract_code', $request->contract_code);;
        }
        if (!is_null($request->active_date)) {
            $query->whereDate('active_date', '=', $request->active_date);
        }


        $packages = $query->orderBy('created_at', 'desc')
            ->where('status', 'active')
            ->where('customer_id', auth('customer')->id())->paginate(20);

        return view('plugins/stock::themes.templates.list-contract', compact('packages'));
    }

    public function dashboard(BaseHttpResponse $response)
    {
        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Dashboard'), route('stock.dashboard'));

        //Tổng giá trị cổ phần ( gốc + lãi )
        $totalGoc = $this->contractRepository->getModel()
            ->where('status', 'active')
            ->where('customer_id', auth('customer')->id())
            ->sum('first_buy_price');
        $totalLai = $this->contractRepository->getModel()
            ->where('status', 'active')
            ->where('customer_id', auth('customer')->id())
            ->sum('total_profit_amount');

        $totalGocLai = $totalGoc + $totalLai;

        return view('plugins/stock::themes.dashboard', compact(
            'totalGocLai', 'totalGoc', 'totalLai'
        ));
    }

    public function paymentHistory(Request $request)
    {
        $query = CPHistory::query();
        if (!is_null($request->contract_code)) {
            $query->where('contract_code', $request->contract_code);
        }
        if (!is_null($request->history_date)) {
            $query->whereDate('history_date', '=', $request->history_date);
        }
        $history = $query->orderBy('created_at', 'desc')
            ->where('customer_id', auth('customer')->id())
            ->where('type', 'withdraw')
            ->paginate(20);

        return view('plugins/stock::themes.templates.payment-history', compact('history'));

    }

    public function requestWithdraw()
    {
        $withdraw = $this->withdrawRepository->getModel()
            ->orderBy('created_at', 'desc')
            ->where('customer_id', auth('customer')->id())
            ->paginate(20);

        return view('plugins/stock::themes.templates.withdraw-request', compact('withdraw'));
    }

    public function getChart(Request $request)
    {

        $month = date('m');
        $year = date('Y');

        $query = Chart::query();
        if (!is_null($request->month)) {
            $month = $request->month;
        }
        if (!is_null($request->year)) {
            $year = $request->year;
        }

        $chart = $query->orderBy('chart_date', 'desc')
            ->whereMonth('chart_date', $month)
            ->whereYear('chart_date', $year)
            ->get();
        return view('plugins/stock::themes.templates.chart', compact('chart'));
    }

}