<?php
/**
 * CollaboratorRevenueController.php
 * Created by: trainheartnet
 * Created at: 06/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Collaborator\Webview;


use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Repositories\Interfaces\CollaboratorRevenueRecordInterface;
use Botble\Ecommerce\Tables\Front\CollaboratorRevenueRecordTable;
use Botble\Marketplace\Enums\RevenueTypeEnum;
use Carbon\CarbonPeriod;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use EcommerceHelper;

class CollaboratorRevenueController
{
    /**
     * @var CollaboratorRevenueRecordInterface
     */
    protected $revenueRepository;

    /**
     * CollaboratorRevenueController constructor.
     * @param CollaboratorRevenueRecordInterface $revenueRepository
     */
    public function __construct(CollaboratorRevenueRecordInterface $revenueRepository)
    {
        $this->revenueRepository = $revenueRepository;
    }

    /**
     * @param CollaboratorRevenueRecordTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(CollaboratorRevenueRecordTable $table)
    {
        page_title()->setTitle('Theo dõi thu nhập');

        return $table->render('plugins/ecommerce::collaborator.webview.dashboard.table.base');
    }

    /**
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|JsonResponse
     */
    public function getMonthChart(Request $request, BaseHttpResponse $response)
    {
        [$startDate, $endDate] = EcommerceHelper::getDateRangeInReport($request);

        $customerId = auth('customer')->id();

        $revenues = $this->revenueRepository
            ->getModel()
            ->selectRaw(
                'SUM(CASE WHEN type IS NULL OR type = ? THEN amount WHEN type = ? THEN amount * -1 ELSE 0 END) as amount,
                DATE(created_at) as date', [RevenueTypeEnum::ADD_AMOUNT, RevenueTypeEnum::SUBTRACT_AMOUNT])
            ->where('customer_id', $customerId)
            ->whereDate('created_at', '>=', $startDate)
            ->whereDate('created_at', '<=', $endDate)
            ->groupBy('date')
            ->get();

        $series = [];
        $dates = [];
        $revenuesGrouped = $revenues->groupBy('date');
        $earningSales = collect([]);
        $period = CarbonPeriod::create($startDate, $endDate);

        $colors = ['#fcb800', '#80bc00'];

        foreach ($revenuesGrouped as $key => $revenue) {
            $data = [
                'name' => $key,
                'data' => collect([]),
            ];

            foreach ($period as $date) {
                $value = $revenue
                    ->where('date', $date->format('Y-m-d'))
                    ->sum('amount');
                $data['data'][] = $value;
            }

            $amount = human_price_text($data['data']->sum(), null, $key);
            $earningSales[] = [
                'text'  => __('Doanh số bán hàng: :amount', compact('amount')),
                'color' => Arr::get($colors, $earningSales->count(), Arr::first($colors)),
            ];
            $series[] = $data;
        }

        foreach ($period as $date) {
            $dates[] = $date->format('Y-m-d');
        }

        $colors = $earningSales->pluck('color');

        return $response->setData(compact('dates', 'series', 'earningSales', 'colors'));
    }
}