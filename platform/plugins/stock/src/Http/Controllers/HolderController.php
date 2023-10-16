<?php


namespace Botble\Stock\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Stock\Repositories\Interfaces\HolderInterface;
use Botble\Stock\Http\Requests\HolderRequest;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Stock\Tables\HolderTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Stock\Forms\HolderForm;
use Botble\Base\Forms\FormBuilder;


class HolderController extends BaseController
{
    /**
     * @var HolderInterface
     */
    protected $HolderRepository;

    /**
     * HolderController constructor.
     * @param HolderInterface $HolderRepository
     */
    public function __construct(HolderInterface $HolderRepository)
    {
        $this->holderRepository = $HolderRepository;
    }
/**
     * @param HolderTable $table
     * @return \Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(HolderTable $table)
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

        return $formBuilder->create(HolderForm::class)->renderForm();
    }

    /**
     * @param HolderRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(HolderRequest $request, BaseHttpResponse $response)
    {
        $holder = $this->holderRepository->createOrUpdate($request->input());
     
        event(new CreatedContentEvent(HOLDER_MODULE_SCREEN_NAME, $request, $holder));

        return $response
            ->setPreviousUrl(route('holder.index'))
            ->setNextUrl(route('holder.edit', $holder->id))
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
        $holder = $this->holderRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $holder));

        page_title()->setTitle(trans('plugins/Stock::holder.edit') . ' "' . $holder->name . '"');

        return $formBuilder->create(HolderForm::class, ['model' => $holder])->renderForm();
    }

    /**
     * @param $id
     * @param HolderRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, HolderRequest $request, BaseHttpResponse $response)
    {
        $holder = $this->holderRepository->findOrFail($id);

        $holder->fill($request->input());

        $this->holderRepository->createOrUpdate($holder);

        event(new UpdatedContentEvent(CP_HOLDER_MODULE_SCREEN_NAME, $request, $holder));

        return $response
            ->setPreviousUrl(route('holder.index'))
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
            $holder = $this->holderRepository->findOrFail($id);

            $this->holderRepository->delete($holder);

            event(new DeletedContentEvent(CP_HOLDER_MODULE_SCREEN_NAME, $request, $holder));

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
            $holder = $this->holderRepository->findOrFail($id);
            $this->holderRepository->delete($holder);
            event(new DeletedContentEvent(HOLDER_MODULE_SCREEN_NAME, $request, $holder));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}