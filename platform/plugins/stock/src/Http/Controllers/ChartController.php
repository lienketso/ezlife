<?php


namespace Botble\Stock\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Stock\Repositories\Interfaces\ChartInterface;
use Botble\Stock\Http\Requests\ChartRequest;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Stock\Tables\ChartTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Stock\Forms\ChartForm;
use Botble\Base\Forms\FormBuilder;


class ChartController extends BaseController
{
    /**
     * @var ChartInterface
     */
    protected $chartRepository;

    /**
     * ChartController constructor.
     * @param ChartInterface $chartRepository
     */
    public function __construct(ChartInterface $chartRepository)
    {
        $this->ChartRepository = $chartRepository;
    }
/**
     * @param ChartTable $table
     * @return \Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(ChartTable $table)
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

        return $formBuilder->create(ChartForm::class)->renderForm();
    }

    /**
     * @param ChartRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(ChartRequest $request, BaseHttpResponse $response)
    {
        $chart = $this->ChartRepository->createOrUpdate($request->input());
     
        event(new CreatedContentEvent(CHART_MODULE_SCREEN_NAME, $request, $chart));

        return $response
            ->setPreviousUrl(route('chart.index'))
            ->setNextUrl(route('chart.edit', $chart->id))
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
        $chart = $this->ChartRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $chart));

        page_title()->setTitle(trans('plugins/Stock::cp-chart.edit') . ' "' . $chart->name . '"');

        return $formBuilder->create(ChartForm::class, ['model' => $chart])->renderForm();
    }

    /**
     * @param $id
     * @param ChartRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, ChartRequest $request, BaseHttpResponse $response)
    {
        $chart = $this->ChartRepository->findOrFail($id);

        $chart->fill($request->input());

        $this->ChartRepository->createOrUpdate($chart);

        event(new UpdatedContentEvent(CHART_MODULE_SCREEN_NAME, $request, $chart));

        return $response
            ->setPreviousUrl(route('chart.index'))
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
            $chart = $this->ChartRepository->findOrFail($id);

            $this->ChartRepository->delete($chart);

            event(new DeletedContentEvent(CHART_MODULE_SCREEN_NAME, $request, $chart));

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
            $chart = $this->ChartRepository->findOrFail($id);
            $this->ChartRepository->delete($chart);
            event(new DeletedContentEvent(CHART_MODULE_SCREEN_NAME, $request, $chart));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}