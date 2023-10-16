<?php


namespace Botble\Stock\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Stock\Repositories\Interfaces\WithdrawInterface;
use Botble\Stock\Http\Requests\WithdrawRequest;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Stock\Enums\WithdrawStatusEnum;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Stock\Tables\WithdrawTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Stock\Forms\WithdrawForm;
use Botble\Base\Forms\FormBuilder;



class WithdrawController extends BaseController
{
    /**
     * @var WithdrawInterface
     */
    protected $withdrawRepository;
     /**
     * @var contractRepository
     */
    protected $contractRepository;
     /**
     * @var CustomerInterface
     */
    protected $customerInterface;


    /**
     * WithdrawController constructor.
     * @param WithdrawInterface $withdrawRepository
     */
    public function __construct(
        WithdrawInterface $withdrawRepository,
        ContractInterface $contractRepository,
        CustomerInterface $customerRepository
    )
    {
        $this->withdrawRepository = $withdrawRepository;
        $this->contractRepository = $contractRepository;
        $this->customerRepository = $customerRepository;
    }
    
    /**
     * @param WithdrawTable $table
     * @return \Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(WithdrawTable $table)
    {
        return $table->renderTable();
    }

     /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle('Tạo mới hợp đồng');

        return $formBuilder->create(WithdrawForm::class)->renderForm();
    }

    /**
     * @param WithdrawRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(WithdrawRequest $request, BaseHttpResponse $response)
    {
        $withdraw = $this->withdrawRepository->createOrUpdate($request->input());
        event(new CreatedContentEvent(Withdraw_MODULE_SCREEN_NAME, $request, $withdraw));
        return $response
            ->setPreviousUrl(route('Withdraw.index'))
            ->setNextUrl(route('withdraw.edit', $Withdraw->id))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    /**
     * @param $id
     * @param Request $request
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function edit($id, FormBuilder $formBuilder, Request $request)
    {
        $withdraw = $this->withdrawRepository->findOrFail($id);
        $customerId = $withdraw->customer_id;
        $contractId = $withdraw->contract_id;
        
        $contract = $this->contractRepository->findById($contractId);
        $customer = $this->customerRepository->findById($customerId);

        event(new BeforeEditContentEvent($request, $withdraw));

        page_title()->setTitle("Chỉnh sửa " . $withdraw->name . '"');

        return $formBuilder->create(WithdrawForm::class, ['model' => $withdraw], ['contractId' => $contract, 'customer' => $customer])->renderForm();
    }

    /**
     * @param $id
     * @param FaqWithdrawRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, WithdrawRequest $request, BaseHttpResponse $response)
    {
        $withdraw = $this->withdrawRepository->findOrFail($id);
        if($withdraw->status == WithdrawStatusEnum::REJECT || $withdraw->status == WithdrawStatusEnum::ACCEPT)
        {
            return $response
            ->setPreviousUrl(route('withdraw.index'))
            ->setMessage('Yêu cầu rút tiền đã được xử lý!');
        }      

        $contract = $this->contractRepository->findById($withdraw->contract_id);  
        $dataContract = [];
        // từ chối rút tiền
        if($request->get('status') == WithdrawStatusEnum::REJECT)
        {                                
            $amountAvailable = $withdraw->amount + $contract->amount_available;            
            $dataContract = ['amount_available' => $amountAvailable];
        }

         // Chấp nhận rút tiền
         if($request->get('status') == WithdrawStatusEnum::ACCEPT)
         {                 
            $amountWithdrawn = $withdraw->amount + $contract->amount_withdrawn;            
            $dataContract = ['amount_withdrawn' => $amountWithdrawn];
         }
        
        $this->contractRepository->update(['id' => $withdraw->contract_id], $dataContract);

        $withdraw->fill($request->input());

        $this->withdrawRepository->createOrUpdate($withdraw);

        event(new UpdatedContentEvent(WITHDRAW_MODULE_SCREEN_NAME, $request, $withdraw));
        return $response
            ->setPreviousUrl(route('withdraw.index'))
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
            $withdraw = $this->withdrawRepository->findOrFail($id);

            $this->withdrawRepository->delete($withdraw);

            event(new DeletedContentEvent(Withdraw_MODULE_SCREEN_NAME, $request, $withdraw));
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
            $withdraw = $this->withdrawRepository->findOrFail($id);
            $this->withdrawRepository->delete($withdraw);
            event(new DeletedContentEvent(Withdraw_MODULE_SCREEN_NAME, $request, $withdraw));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}