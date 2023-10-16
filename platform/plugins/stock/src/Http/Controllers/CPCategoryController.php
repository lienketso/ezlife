<?php


namespace Botble\Stock\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Stock\Repositories\Interfaces\CPCategoryInterface;
use Botble\Stock\Http\Requests\CPCategoryRequest;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Stock\Tables\CPCategoryTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Stock\Forms\CPCategoryForm;
use Botble\Base\Forms\FormBuilder;


class CPCategoryController extends BaseController
{
    /**
     * @var CPCategoryInterface
     */
    protected $CPCategoryRepository;

    /**
     * CPCategoryController constructor.
     * @param CPCategoryInterface $CPCategoryRepository
     */
    public function __construct(CPCategoryInterface $CPCategoryRepository)
    {
        $this->CPCategoryRepository = $CPCategoryRepository;
    }
/**
     * @param CPCategoryTable $table
     * @return \Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(CPCategoryTable $table)
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

        return $formBuilder->create(CPCategoryForm::class)->renderForm();
    }

    /**
     * @param CPCategoryRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(CPCategoryRequest $request, BaseHttpResponse $response)
    {
        $CPCategory = $this->CPCategoryRepository->createOrUpdate($request->input());
     
        event(new CreatedContentEvent(CP_CATEGORY_MODULE_SCREEN_NAME, $request, $CPCategory));

        return $response
            ->setPreviousUrl(route('category.index'))
            ->setNextUrl(route('category.edit', $CPCategory->id))
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
        $cpCategory = $this->CPCategoryRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $cpCategory));

        page_title()->setTitle(trans('plugins/Stock::cp-category.edit') . ' "' . $cpCategory->name . '"');

        return $formBuilder->create(CPCategoryForm::class, ['model' => $cpCategory])->renderForm();
    }

    /**
     * @param $id
     * @param FaqCategoryRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, CPCategoryRequest $request, BaseHttpResponse $response)
    {
        $cpCategory = $this->CPCategoryRepository->findOrFail($id);

        $cpCategory->fill($request->input());

        $this->CPCategoryRepository->createOrUpdate($cpCategory);

        event(new UpdatedContentEvent(CP_CATEGORY_MODULE_SCREEN_NAME, $request, $cpCategory));

        return $response
            ->setPreviousUrl(route('category.index'))
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
            $cpCategory = $this->CPCategoryRepository->findOrFail($id);

            $this->CPCategoryRepository->delete($cpCategory);

            event(new DeletedContentEvent(CP_CATEGORY_MODULE_SCREEN_NAME, $request, $cpCategory));

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
            $cpCategory = $this->CPCategoryRepository->findOrFail($id);
            $this->CPCategoryRepository->delete($cpCategory);
            event(new DeletedContentEvent(CP_CATEGORY_MODULE_SCREEN_NAME, $request, $cpCategory));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}