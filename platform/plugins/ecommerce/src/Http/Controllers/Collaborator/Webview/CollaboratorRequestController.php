<?php
/**
 * CollaboratorRequestController.php
 * Created by: trainheartnet
 * Created at: 01/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Collaborator\Webview;

use Botble\Base\Forms\FormBuilder;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Forms\CollaboratorRequestForm;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductCategoryInterface;
use Botble\Ecommerce\Tables\CollaboratorRequestTable;
use Illuminate\Http\Request;
use Assets;
use EmailHandler;
use Exception;

class CollaboratorRequestController extends BaseController
{
    /**
     * @var CustomerInterface
     */
    protected $customerRepository;

    /**
     * CollaboratorController constructor.
     * @param CustomerInterface $customerRepository
     */
    public function __construct(
        CustomerInterface $customerRepository
    )
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * @param CollaboratorRequestTable $dataTable
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(CollaboratorRequestTable $dataTable)
    {
        page_title()->setTitle('Yêu cầu đăng ký cộng tác viên');

        return $dataTable->renderTable();
    }

    /**
     * @param $id
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function edit($id, FormBuilder $formBuilder)
    {
        Assets::addScriptsDirectly('vendor/core/plugins/ecommerce/js/customer.js');

        $customer = $this->customerRepository->findOrFail($id);
        page_title()->setTitle(trans('plugins/ecommerce::customer.edit', ['name' => $customer->name]));

        return $formBuilder->create(CollaboratorRequestForm::class, ['model' => $customer])->renderForm();
    }

    /**
     * @param $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param ProductCategoryInterface $productCategoryRepository
     * @return BaseHttpResponse
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     * @throws \Throwable
     */
    public function update(
        $id,
        Request $request,
        BaseHttpResponse $response,
    )
    {
        $status = $request->get('affiliater_status');
        $reason = $request->get('reason');

        $customer = $this->customerRepository->createOrUpdate([
            'affiliater_status' => $status
        ], ['id' => $id]);


        if ($status == 2) {
            //$customer->productCategories()->sync($productCategory);
            $customer = $this->customerRepository->createOrUpdate([
                'is_affiliater' => 1
            ], ['id' => $id]);
            EmailHandler::setModule(ECOMMERCE_MODULE_SCREEN_NAME)
                ->setVariableValues([
                    'customer_name'  => $customer->name,
                ])
                ->sendUsingTemplate('welcome-collaborator', $customer->email);
        } elseif ($status == 3) {
            EmailHandler::setModule(ECOMMERCE_MODULE_SCREEN_NAME)
                ->setVariableValues([
                    'customer_name'  => $customer->name,
                    'reason' => $reason
                ])
                ->sendUsingTemplate('reject-collaborator', $customer->email);
        }

        return $response
            ->setPreviousUrl(route('collaborator-request.index'))
            ->setMessage('Xử lý yêu cầu đăng ký cộng tác viên thành công');
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
            $customer = $this->customerRepository->findOrFail($id);
            $customer->update([
                'affiliater_status' => null
            ]);
//            event(new DeletedContentEvent(CUSTOMER_MODULE_SCREEN_NAME, $request, $customer));

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
            $customer->update([
                'affiliater_status' => null
            ]);
//            $this->customerRepository->delete($customer);
//            event(new DeletedContentEvent(CUSTOMER_MODULE_SCREEN_NAME, $request, $customer));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}