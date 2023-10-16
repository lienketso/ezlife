<?php
/**
 * UbgxuController.php
 * Created by: trainheartnet
 * Created at: 07/05/2022
 * Contact me at: longlengoc90@gmail.com
 */

namespace Botble\Ecommerce\Http\Controllers\Ubgxu;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Enums\OrderStatusEnum;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuTransactionInterface;
use Illuminate\Http\Request;
use Theme;
use Assets;
use EcommerceHelper;

class UbgxuController extends BaseController
{

    /**
     * @var
     */
    protected $orderRepository;

    /**
     * @var
     */
    protected $ubgxuTransactionRepository;

    /**
     * CollaboratorController constructor.
     */
    public function __construct(
        OrderInterface $orderRepository,
        UbgxuTransactionInterface $ubgxuTransactionRepository
    )
    {
        $this->orderRepository = $orderRepository;
        $this->ubgxuTransactionRepository = $ubgxuTransactionRepository;

        Theme::asset()
            ->add('customer-style', 'vendor/core/plugins/ecommerce/css/customer.css');

        Theme::asset()
            ->container('footer')
            ->add('ecommerce-utilities-js', 'vendor/core/plugins/ecommerce/js/utilities.js', ['jquery'])
            ->add('cropper-js', 'vendor/core/plugins/ecommerce/libraries/cropper.js', ['jquery'])
            ->add('avatar-js', 'vendor/core/plugins/ecommerce/js/avatar.js', ['jquery']);
    }

    public function getDashboard(
        Request $request,
        BaseHttpResponse $response
    )
    {
        page_title()->setTitle('Thông tin ví điểm');

        Assets::addScriptsDirectly([
            'vendor/core/plugins/ecommerce/libraries/daterangepicker/daterangepicker.js',
            'vendor/core/plugins/ecommerce/libraries/apexcharts-bundle/dist/apexcharts.min.js',
            'vendor/core/plugins/ecommerce/js/report.js',
        ])
            ->addStylesDirectly([
                'vendor/core/plugins/ecommerce/libraries/daterangepicker/daterangepicker.css',
                'vendor/core/plugins/ecommerce/libraries/apexcharts-bundle/dist/apexcharts.css',
                'vendor/core/plugins/ecommerce/css/report.css',
            ])
            ->addScripts(['moment']);

        [$startDate, $endDate, $predefinedRange] = EcommerceHelper::getDateRangeInReport($request);

        $data = compact('startDate', 'endDate', 'predefinedRange');

        $customer = auth('customer')->user();

        $balance = $customer != null ? $customer->ubgxu : 0;

        $totalCashBackPending = $this->ubgxuTransactionRepository->getTotalCashbackPending($customer->id);
        $totalTransaction = $this->ubgxuTransactionRepository->getTransactionByCustomerId($customer->id, true);

        $getOrders = $this->orderRepository
            ->getModel()
            ->select([
                'id',
                'status',
                'user_id',
                'created_at',
                'amount',
                'tax_amount',
                'shipping_amount',
                'process_affiliate',
                'payment_id',
                'paid_by_ubgxu'
            ])
            ->with(['user', 'payment'])
            ->where([
                'is_finished' => 1,
                'status' => OrderStatusEnum::COMPLETED,
                ['paid_by_ubgxu', '>', 0],
                'user_id' => $customer->id
            ])
            ->whereDate('created_at', '>=', $startDate)
            ->whereDate('created_at', '<=', $endDate)
            ->orderBy('created_at', 'desc');

        $data['orders'] = $getOrders->limit(10)->get();

        $totalOrders = $getOrders->count();

        $compact = compact('data', 'totalCashBackPending', 'balance', 'totalOrders', 'totalTransaction');

        return view('plugins/ecommerce::ubgxu.dashboard.index', $compact);
    }
}