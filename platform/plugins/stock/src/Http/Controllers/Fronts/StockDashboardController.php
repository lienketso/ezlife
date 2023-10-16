<?php
/**
 * StockDashboardController.php
 * Created by: trainheartnet
 * Created at: 23/06/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Http\Controllers\Fronts;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Marketplace\Enums\RevenueTypeEnum;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Repositories\Interfaces\ChartInterface;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Repositories\Interfaces\CPHistoryInterface;
use Carbon\CarbonPeriod;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use EcommerceHelper;
use Theme;

class StockDashboardController extends BaseController
{
    /**
     * @var ContractInterface
     */
    protected $contractRepository;

    /**
     * @var CPHistoryInterface
     */
    protected $contractHistoryRepository;

    protected $stockChartRepository;

    /**
     * ContractManagerController constructor.
     * @param ContractInterface $contractRepository
     * @param CPHistoryInterface $contractHistoryRepository
     */
    public function __construct(
        ContractInterface $contractRepository,
        CPHistoryInterface $contractHistoryRepository,
        ChartInterface $stockChartRepository
    )
    {
        $this->contractRepository = $contractRepository;
        $this->contractHistoryRepository = $contractHistoryRepository;
        $this->stockChartRepository = $stockChartRepository;
    }

    public function getDashboard(
        Request $request,
        BaseHttpResponse $response
    ) {
        page_title()->setTitle('Tổng quan tài khoản');

        $customerId = auth('customer')->id();

        $uncompleteContract = $this->contractRepository->count([
            'customer_id' => $customerId,
            ['status', '!=', ContractStatusEnum::ACTIVE],
            ['status', '!=', ContractStatusEnum::EXPIRED],
        ]);

        $activeContract = $this->contractRepository->count([
            'customer_id' => $customerId,
            'status' => ContractStatusEnum::ACTIVE
        ]);

        $expiredContract = $this->contractRepository->count([
            'customer_id' => $customerId,
            'status' => ContractStatusEnum::EXPIRED
        ]);

        $totalInvestMoney = $this->contractRepository->getModel()
            ->where('customer_id', $customerId)
            ->where('status', ContractStatusEnum::ACTIVE)
            ->sum('first_buy_price');

        [$startDate, $endDate, $predefinedRange] = EcommerceHelper::getDateRangeInReport($request);

        $data = compact('startDate', 'endDate', 'predefinedRange');

        $compact = compact('data', 'uncompleteContract', 'activeContract', 'expiredContract', 'totalInvestMoney');

        return view('plugins/stock::dashboard.index', $compact);
    }

    /**
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|JsonResponse
     */
    public function getMonthChart(Request $request, BaseHttpResponse $response)
    {
        [$startDate, $endDate] = EcommerceHelper::getDateRangeInReport($request);

        $customerId = auth('customer')->id();

        $revenues = $this->stockChartRepository
            ->getModel()
            ->selectRaw(
                'SUM(CASE WHEN type IS NULL OR type = ? THEN amount WHEN type = ? THEN amount * -1 ELSE 0 END) as amount,
                DATE(created_at) as date')
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

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getContractById(
        Request $request,
        BaseHttpResponse $response
    )
    {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        $contractId = $request->get('contract_id');

        $contract = $this->contractRepository->findById($contractId);

        $data = view('plugins/stock::dashboard.forms.fields.withdraw', compact('contract'))->render();

        return $response->setData($data);
    }
}