<?php
/**
 * StockWithdrawalController.php
 * Created by: trainheartnet
 * Created at: 30/06/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Http\Controllers\Fronts;

use Botble\Base\Forms\FormBuilder;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Forms\CollaboratorWithrawalForm;
use Botble\Ecommerce\Tables\Front\CollaboratorWithdrawalTable;
use Botble\Marketplace\Enums\WithdrawalStatusEnum;
use Botble\Marketplace\Http\Requests\VendorEditWithdrawalRequest;
use Botble\Marketplace\Repositories\Interfaces\WithdrawalInterface;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Forms\ContractWithdrawForm;
use Botble\Stock\Http\Requests\StockWithdrawlRequest;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Tables\ContractWithdrawTable;
use Illuminate\Support\Facades\DB;
use Throwable;
use Botble\Stock\Repositories\Interfaces\WithdrawInterface;

class StockWithdrawalController extends BaseController
{
    /**
     * @var WithdrawalInterface
     */
    protected $withdrawalRepository;

    /**
     * @var
     */
    protected $contractRepository;

    /**
     * StockWithdrawalController constructor.
     * @param WithdrawInterface $withdrawalRepository
     */
    public function __construct(
        WithdrawInterface $withdrawalRepository,
        ContractInterface $contractRepository
    )
    {
        $this->withdrawalRepository = $withdrawalRepository;
        $this->contractRepository = $contractRepository;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function listContract()
    {
        page_title()->setTitle('Các hợp đồng khả dụng');

        $customerId = auth('customer')->id();

        $activeContract = $this->contractRepository->getModel()
            ->with('package')
            ->where('customer_id', $customerId)
            ->where('status', ContractStatusEnum::ACTIVE)
            ->where('amount_available', '>', 0)
            ->where('payment_type', 'vnd')
            ->get();

        return view('plugins/stock::dashboard.contracts.list.avaiable_withdraw', compact(
            'activeContract'
        ));
    }

    /**
     * @param CollaboratorWithdrawalTable $table
     * @return mixed
     * @throws Throwable
     */
    public function index(ContractWithdrawTable $table)
    {
        page_title()->setTitle('Yêu cầu rút tiền');

        return $table->render('plugins/stock::dashboard.table.base');
    }

    /**
     * @param $contractId
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(
        $contractId,
        FormBuilder $formBuilder
    )
    {
        $contract = $this->contractRepository->findById($contractId);

        if (!$contract) {
            abort(404);
        }

        page_title()->setTitle('Tạo yêu cầu');

        return $formBuilder->create(ContractWithdrawForm::class, [], ['contractId' => $contract])->renderForm();
    }

    /**
     * @param StockWithdrawlRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Throwable
     */
    public function store(
        $contractId,
        StockWithdrawlRequest $request,
        BaseHttpResponse $response
    )
    {
        $contract = $this->contractRepository->findById($contractId, ['package']);
        
        if (!$contract) {
            abort(404);
        }

        $investor = auth('customer')->user();

        DB::beginTransaction();

        try {
            $this->withdrawalRepository->create([
                'customer_id'     => $investor->id,
                'amount'          => $request->input('amount'),
                'bank_info'       => $investor->collaborator_bank_info,
                'package_id'      => $contract->package->id,
                'contract_id'     => $contract->id
            ]);

            $contract->amount_available -= $request->input('amount');
            $contract->save();

            DB::commit();
        } catch (Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return $response
            ->setPreviousUrl(route('stock-manager.withdrawals.index'))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    /**
     * @param int $id
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function edit(
        $id,
        FormBuilder $formBuilder
    )
    {
        $withdrawal = $this->withdrawalRepository->getFirstBy([
            'id'          => $id,
            'customer_id' => auth('customer')->id(),
            'status'      => WithdrawalStatusEnum::PENDING,
        ]);

        if (!$withdrawal) {
            abort(404);
        }

        $contractId = $withdrawal->contract_id;
        $contract = $this->contractRepository->findById($contractId);

        page_title()->setTitle(__('Yêu cầu rút tiền #' . $id));


        return $formBuilder->create(ContractWithdrawForm::class, ['model' => $withdrawal], ['contractId' => $contract])->renderForm();
    }

    /**
     * @param int $id
     * @param VendorEditWithdrawalRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, VendorEditWithdrawalRequest $request, BaseHttpResponse $response)
    {
        $withdrawal = $this->withdrawalRepository->getFirstBy([
            'id'          => $id,
            'customer_id' => auth('customer')->id(),
            'status'      => WithdrawalStatusEnum::PENDING,
        ]);

        if (!$withdrawal) {
            abort(404);
        }

        $status = WithdrawalStatusEnum::PENDING;
        if ($request->input('cancel')) {
            $status = WithdrawalStatusEnum::CANCELED;
            $response->setNextUrl(route('stock-manager.withdrawals.show', $withdrawal->id));
        }

        $withdrawal->fill([
            'status'      => $status,
            'description' => $request->input('description'),
        ]);

        $this->withdrawalRepository->createOrUpdate($withdrawal);

        return $response
            ->setPreviousUrl(route('stock-manager.withdrawals.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }

    /**
     * @param int $id
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function show($id, FormBuilder $formBuilder)
    {
        $withdrawal = $this->withdrawalRepository
            ->getFirstBy([
                ['id', '=', $id],
                ['customer_id', '=', auth('customer')->id()],
            ]);

        if (!$withdrawal) {
            abort(404);
        }

        $contractId = $withdrawal->contract_id;
        $contract = $this->contractRepository->findById($contractId);

        page_title()->setTitle(__('Yêu cầu rút tiền #' . $id));

        return $formBuilder->create(ContractWithdrawForm::class, [], ['contractId' => $contract])->renderForm();
    }
}