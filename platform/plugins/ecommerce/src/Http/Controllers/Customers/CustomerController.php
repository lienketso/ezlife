<?php

namespace Botble\Ecommerce\Http\Controllers\Customers;

use Assets;
use Botble\AuditLog\Models\AuditHistory;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Forms\FormBuilder;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Enums\UbgxuTransactionEnum;
use Botble\Ecommerce\Forms\CustomerForm;
use Botble\Ecommerce\Forms\EditXuForm;
use Botble\Ecommerce\Http\Requests\AddCustomerWhenCreateOrderRequest;
use Botble\Ecommerce\Http\Requests\CustomerCreateRequest;
use Botble\Ecommerce\Http\Requests\CustomerEditRequest;
use Botble\Ecommerce\Http\Requests\CustomerUpdateEmailRequest;
use Botble\Ecommerce\Http\Requests\EditXuRequest;
use Botble\Ecommerce\Http\Resources\CustomerAddressResource;
use Botble\Ecommerce\Repositories\Interfaces\AddressInterface;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuPayLogInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuTransactionInterface;
use Botble\Ecommerce\Tables\CustomerTable;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Throwable;

class CustomerController extends BaseController
{

    /**
     * @var CustomerInterface
     */
    protected $customerRepository;

    /**
     * @var AddressInterface
     */
    protected $addressRepository;
    protected $ubgxuPaylogRepository;
    protected $ubgxuTransactionRepository;

    /**
     * @param CustomerInterface $customerRepository
     * @param AddressInterface $addressRepository
     */
    public function __construct(
        CustomerInterface $customerRepository,
        AddressInterface $addressRepository,
        UbgxuPayLogInterface $ubgxuPaylogRepository,
        UbgxuTransactionInterface $ubgxuTransactionRepository
    )
    {
        $this->customerRepository = $customerRepository;
        $this->addressRepository = $addressRepository;
        $this->ubgxuPaylogRepository = $ubgxuPaylogRepository;
        $this->ubgxuTransactionRepository = $ubgxuTransactionRepository;
    }

    /**
     * @param CustomerTable $dataTable
     * @return Factory|View
     * @throws Throwable
     */
    public function index(CustomerTable $dataTable)
    {
        page_title()->setTitle(trans('plugins/ecommerce::customer.name'));

        return $dataTable->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/ecommerce::customer.create'));

        Assets::addScriptsDirectly('vendor/core/plugins/ecommerce/js/customer.js');

        return $formBuilder->create(CustomerForm::class)->remove('is_change_password')->renderForm();
    }

    /**
     * @param CustomerCreateRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(CustomerCreateRequest $request, BaseHttpResponse $response)
    {
        $customer = $this->customerRepository->getModel();
        $customer->fill($request->input());
        $customer->confirmed_at = now();
        $customer->password = bcrypt($request->input('password'));
        $customer->dob = Carbon::parse($request->input('dob'))->toDateString();
        $customer = $this->customerRepository->createOrUpdate($customer);

        event(new CreatedContentEvent(CUSTOMER_MODULE_SCREEN_NAME, $request, $customer));

        return $response
            ->setPreviousUrl(route('customers.index'))
            ->setNextUrl(route('customers.edit', $customer->id))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    /**
     * @param int $id
     * @return string
     */
    public function edit($id, FormBuilder $formBuilder)
    {
        Assets::addScriptsDirectly('vendor/core/plugins/ecommerce/js/customer.js');

        $customer = $this->customerRepository->findOrFail($id);

        page_title()->setTitle(trans('plugins/ecommerce::customer.edit', ['name' => $customer->name]));

        $customer->password = null;

        return $formBuilder->create(CustomerForm::class, ['model' => $customer])->renderForm();
    }

    /**
     * @param int $id
     * @param CustomerEditRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, CustomerEditRequest $request, BaseHttpResponse $response)
    {
        $customer = $this->customerRepository->findOrFail($id);

        $customer->fill($request->except('password'));

        if ($request->input('is_change_password') == 1) {
            $customer->password = bcrypt($request->input('password'));
        }

        $customer->dob = Carbon::parse($request->input('dob'))->toDateString();

        $customer = $this->customerRepository->createOrUpdate($customer);

        event(new UpdatedContentEvent(CUSTOMER_MODULE_SCREEN_NAME, $request, $customer));

        return $response
            ->setPreviousUrl(route('customers.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }

    /**
     * @param Request $request
     * @param int $id
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function destroy(Request $request, $id, BaseHttpResponse $response)
    {
        try {
            $customer = $this->customerRepository->findOrFail($id);
            $this->customerRepository->delete($customer);
            event(new DeletedContentEvent(CUSTOMER_MODULE_SCREEN_NAME, $request, $customer));

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
            $customer = $this->customerRepository->findOrFail($id);
            $this->customerRepository->delete($customer);
            event(new DeletedContentEvent(CUSTOMER_MODULE_SCREEN_NAME, $request, $customer));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }

    /**
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getListCustomerForSelect(BaseHttpResponse $response)
    {
        $customers = $this->customerRepository
            ->allBy([], [], ['id', 'name'])
            ->toArray();

        return $response->setData($customers);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getListCustomerForSearch(Request $request, BaseHttpResponse $response)
    {
        $customers = $this->customerRepository
            ->getModel()
            ->where('name', 'LIKE', '%' . $request->input('keyword') . '%')
            ->simplePaginate(5);

        foreach ($customers as &$customer) {
            $customer->avatar_url = (string)$customer->avatar_url;
        }

        return $response->setData($customers);
    }

    /**
     * @param int $id
     * @param CustomerUpdateEmailRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function postUpdateEmail($id, CustomerUpdateEmailRequest $request, BaseHttpResponse $response)
    {
        $this->customerRepository->createOrUpdate(['email' => $request->input('email')], ['id' => $id]);

        return $response->setMessage(trans('core/base::notices.update_success_message'));
    }

    /**
     * @param int $id
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getCustomerAddresses($id, BaseHttpResponse $response)
    {
        $addresses = $this->addressRepository->allBy(['customer_id' => $id]);

        return $response->setData(CustomerAddressResource::collection($addresses));
    }

    /**
     * @param int $id
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getCustomerOrderNumbers($id, BaseHttpResponse $response)
    {
        $customer = $this->customerRepository->findById($id);
        if (!$customer) {
            return $response->setData(0);
        }

        return $response->setData($customer->orders()->count());
    }

    /**
     * @param AddCustomerWhenCreateOrderRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function postCreateCustomerWhenCreatingOrder(
        AddCustomerWhenCreateOrderRequest $request,
        BaseHttpResponse $response
    )
    {
        $request->merge(['password' => bcrypt(time())]);
        $customer = $this->customerRepository->createOrUpdate($request->input());
        $customer->avatar = (string)$customer->avatar_url;

        event(new CreatedContentEvent(CUSTOMER_MODULE_SCREEN_NAME, $request, $customer));

        $request->merge([
            'customer_id' => $customer->id,
            'is_default' => true,
        ]);

        $address = $this->addressRepository->createOrUpdate($request->input());

        $address->country = $address->country_name;
        $address->state = $address->state_name;
        $address->city = $address->city_name;

        $address->country_name = $address->country;
        $address->state_name = $address->state;
        $address->city_name = $address->city;

        return $response
            ->setData(compact('address', 'customer'))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    /**
     * @param $id
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function loggedInAs(
        $id,
        BaseHttpResponse $response
    )
    {
        $customer = $this->customerRepository->findById($id);

        auth('customer')->loginUsingId($id);

        return $response
            ->setNextUrl(route('customer.overview'))
            ->setMessage('Đăng nhập dưới tư cách đại lý: ' . $customer->name);
    }

    /**
     * @param $id
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function getEditXu(
        $id,
        FormBuilder $formBuilder
    )
    {
        $customer = $this->customerRepository->findById($id);
        page_title()->setTitle('Thay đổi xu cho khách hàng ' . $customer->name);
        return $formBuilder->create(EditXuForm::class, ['model' => $customer])->renderForm();
    }

    /**
     * @param $id
     * @param EditXuRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function updateXu(
        $id,
        EditXuRequest $request,
        BaseHttpResponse $response
    )
    {
        $customer = $this->customerRepository->findOrFail($id);
        $amount = $request->input('ubgxu_update');
        $transactionType = $request->input('transaction_type');

        if ($transactionType == UbgxuTransactionEnum::INCREASE) {
            $customer->ubgxu += $amount;
        } elseif ($transactionType == UbgxuTransactionEnum::DECREASE) {
            if ($customer->ubgxu < $amount) {
                $customer->ubgxu = 0;
            } else {
                $customer->ubgxu -= $amount;
            }
        } elseif ($transactionType == UbgxuTransactionEnum::DEPOSIT) {
            $customer->ubgxu_transfer += $amount;
        } else {
            $customer->ubgxu_transfer -= $amount;
        }

        $customer = $this->customerRepository->createOrUpdate($customer);

        //event(new CreatedContentEvent(UPDATE_XU, $request, $customer));

        // Ghi nhận giao dịch thay đổi số xu
        $transactions = [
            'customer_id' => $id,
            'amount' => $amount,
            'description' => $request->input('why'),
            'transaction_type' => $transactionType,
            'transaction_source' => 'Hệ thống',
            'status' => 'completed',
            'user_id' => auth()->id()
        ];

        $this->ubgxuTransactionRepository->create($transactions);

        //Ghi log giao dịch
        if ($transactionType == UbgxuTransactionEnum::DECREASE) {
            $contentLog = 'Bạn bị trừ '.number_format($amount).' xu. '.$request->input('why');
        } elseif ($transactionType == UbgxuTransactionEnum::INCREASE) {
            $contentLog = 'Bạn nhận được '.number_format($amount).' xu. '.$request->input('why');
        } elseif ($transactionType == UbgxuTransactionEnum::DEPOSIT) {
            $contentLog = 'Bạn nhận được '.number_format($amount).' xu giao dịch. '.$request->input('why');
        } else {
            $contentLog = 'Bạn bị trừ '.number_format($amount).' xu giao dịch. '.$request->input('why');
        }

        app(UbgxuPayLogInterface::class)->getModel()
            ->create([
                'content' => $contentLog,
                'customer_id' => $id,
                'created_at' => Carbon::now()
            ]);

        //Ghi audit log hệ thống

        if ($transactionType == UbgxuTransactionEnum::INCREASE) {
            $auditAction = 'tăng ' .$amount. ' xu tiêu dùng cho';
        } elseif ($transactionType == UbgxuTransactionEnum::DEPOSIT) {
            $auditAction = 'tăng ' .$amount. ' xu giao dịch cho';
        } elseif ($transactionType == UbgxuTransactionEnum::DECREASE) {
            $auditAction = 'giảm ' .$amount. ' xu tiêu dùng cho';
        } else {
            $auditAction = 'giảm ' .$amount. ' xu giao dịch cho';
        }

        $audit = [
            'module' => 'khách hàng',
            'user_id' => auth()->id(),
            'action' => $auditAction,
            'type' => 'danger',
            'request' => json_encode($request->all()),
            'reference_name' => $customer->name
        ];

        AuditHistory::create($audit);

        return $response
            ->setNextUrl(route('customers.index'))
            ->setMessage(trans('Thay đổi xu thành công !'));
    }


    public function searchCustomer(Request $request)
    {
        if ($request->ajax()) {
            $output = '';
            $customers = DB::table('ec_customers')->where('phone', 'LIKE', '%' . $request->search . '%')->get();
            if ($customers) {
                foreach ($customers as $key => $customer) {
                    $output .= '<a class="presenter-phone"  presenter_id='.$customer->affiliation_id.'>'. $customer->phone .' - '.$customer->name.'</a>';
                }
            }
            
            return Response($output);
        }
    }

}
