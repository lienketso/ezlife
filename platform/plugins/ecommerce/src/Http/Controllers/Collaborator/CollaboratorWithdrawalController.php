<?php
/**
 * CollaboratorWithdrawalController.php
 * Created by: trainheartnet
 * Created at: 04/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Collaborator;

use Botble\Base\Forms\FormBuilder;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Forms\CollaboratorWithrawalForm;
use Botble\Ecommerce\Http\Requests\CollaboratorWithdrawalRequest;
use Botble\Ecommerce\Repositories\Interfaces\CollaboratorWithdrawalInterface;
use Botble\Ecommerce\Tables\Front\CollaboratorWithdrawalTable;
use Botble\Marketplace\Enums\WithdrawalStatusEnum;
use Botble\Marketplace\Http\Requests\VendorEditWithdrawalRequest;
use Botble\Marketplace\Repositories\Interfaces\WithdrawalInterface;
use Illuminate\Support\Facades\DB;
use Throwable;

class CollaboratorWithdrawalController extends BaseController
{
    /**
     * @var WithdrawalInterface
     */
    protected $withdrawalRepository;

    /**
     * CollaboratorWithdrawalController constructor.
     * @param CollaboratorWithdrawalInterface $withdrawalRepository
     */
    public function __construct(CollaboratorWithdrawalInterface $withdrawalRepository)
    {
        $this->withdrawalRepository = $withdrawalRepository;
    }

    /**
     * @param CollaboratorWithdrawalTable $table
     * @return mixed
     * @throws Throwable
     */
    public function index(CollaboratorWithdrawalTable $table)
    {
        page_title()->setTitle('Yêu cầu rút tiền');

        return $table->render('plugins/ecommerce::collaborator.dashboard.table.base');
    }

    /**
     * @param FormBuilder $formBuilder
     * @return BaseHttpResponse|string
     */
    public function create(FormBuilder $formBuilder, BaseHttpResponse $response)
    {
        $user = auth('customer')->user();

        if ($user->collaborator_balance < 100000 || !$user->collaborator_bank_info) {
            return $response
                ->setError()
                ->setNextUrl(route('collaborator.withdrawals.index'))
                ->setMessage('Số dư tài khoản không đủ mức rút tối thiểu, hoặc bạn chưa có thông tin ngân hàng. Vui lòng kiểm tra lại');
        }

        page_title()->setTitle('Tạo yêu cầu');

        return $formBuilder->create(CollaboratorWithrawalForm::class)->renderForm();
    }

    /**
     * @param CollaboratorWithdrawalRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Throwable
     */
    public function store(CollaboratorWithdrawalRequest $request, BaseHttpResponse $response)
    {
        $collaborator = auth('customer')->user();
        $collaboratorInfo = $collaborator->walletInfo;

        DB::beginTransaction();
        try {
            $this->withdrawalRepository->create([
                'amount'          => $request->input('amount'),
                'customer_id'     => $collaborator->getKey(),
                'bank_info'       => $collaborator->collaborator_bank_info,
                'description'     => $request->input('description'),
                'current_balance' => $collaborator->collaborator_balance,
            ]);

            $collaboratorInfo->amount -= $request->input('amount');
            $collaboratorInfo->save();

            DB::commit();
        } catch (Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return $response
            ->setPreviousUrl(route('collaborator.withdrawals.index'))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    /**
     * @param int $id
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function edit($id, FormBuilder $formBuilder)
    {
        $withdrawal = $this->withdrawalRepository->getFirstBy([
            'id'          => $id,
            'customer_id' => auth('customer')->id(),
            'status'      => WithdrawalStatusEnum::PENDING,
        ]);

        if (!$withdrawal) {
            abort(404);
        }

        page_title()->setTitle(__('Thay đổi yêu cầu rút tiền #' . $id));

        return $formBuilder->create(CollaboratorWithrawalForm::class, ['model' => $withdrawal])->renderForm();
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
            $response->setNextUrl(route('collaborator.withdrawals.show', $withdrawal->id));
        }

        $withdrawal->fill([
            'status'      => $status,
            'description' => $request->input('description'),
        ]);

        $this->withdrawalRepository->createOrUpdate($withdrawal);

        return $response
            ->setPreviousUrl(route('collaborator.withdrawals.index'))
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
                ['status', '!=', WithdrawalStatusEnum::PENDING],
            ]);

        if (!$withdrawal) {
            abort(404);
        }

        page_title()->setTitle(__('Yêu cầu rút tiền #' . $id));

        return $formBuilder->create(CollaboratorWithrawalForm::class, ['model' => $withdrawal])->renderForm();
    }
}