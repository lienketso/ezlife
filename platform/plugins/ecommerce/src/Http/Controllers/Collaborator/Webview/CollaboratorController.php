<?php
/**
 * CollaboratorController.php
 * Created by: trainheartnet
 * Created at: 27/04/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Collaborator\Webview;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Events\RegisterCollaboratorEvent;
use Botble\Ecommerce\Http\Requests\RegisterCollaboratorRequest;
use Botble\Ecommerce\Repositories\Interfaces\CollaboratorRevenueRecordInterface;
use Botble\Ecommerce\Repositories\Interfaces\CollaboratorWithdrawalInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Ecommerce\Tables\CollaboratorTable;
use Botble\Marketplace\Enums\RevenueTypeEnum;
use Botble\Marketplace\Enums\WithdrawalStatusEnum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SeoHelper;
use Theme;
use Assets;
use EcommerceHelper;

class CollaboratorController extends BaseController
{
    /**
     * @var CollaboratorRevenueRecordInterface
     */
    protected $revenueRepository;

    /**
     * @var
     */
    protected $withdrawalRepository;

    /**
     * @var
     */
    protected $orderRepository;

    /**
     * CollaboratorController constructor.
     */
    public function __construct(
        CollaboratorRevenueRecordInterface $revenueRepository,
        CollaboratorWithdrawalInterface $withdrawalRepository,
        OrderInterface $orderRepository
    )
    {
        $this->revenueRepository = $revenueRepository;
        $this->withdrawalRepository = $withdrawalRepository;
        $this->orderRepository = $orderRepository;

        Theme::asset()
            ->add('customer-style', 'vendor/core/plugins/ecommerce/css/customer.css');

        Theme::asset()
            ->container('footer')
            ->add('ecommerce-utilities-js', 'vendor/core/plugins/ecommerce/js/utilities.js', ['jquery'])
            ->add('cropper-js', 'vendor/core/plugins/ecommerce/libraries/cropper.js', ['jquery'])
            ->add('avatar-js', 'vendor/core/plugins/ecommerce/js/avatar.js', ['jquery']);
    }

    /**
     * @param CollaboratorTable $dataTable
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(CollaboratorTable $dataTable)
    {
        page_title()->setTitle('Danh sách đại lý');

        return $dataTable->renderTable();
    }

    /**
     * @return \Botble\Theme\Facades\Response|\Illuminate\Http\RedirectResponse|\Response
     */
    public function getBecomeCollaborator()
    {
        $customer = auth('customer')->user();

        if ($customer != null) {
            if ($customer->is_affiliater == 1) {
                if ($customer->affiliater_status->getValue() == 1) {
                    SeoHelper::setTitle('Đăng ký đại lý');

                    Theme::breadcrumb()
                        ->add(__('Home'), route('public.index'))
                        ->add(__('Đợi duyệt cộng tác viên'));

                    return Theme::scope('ecommerce.collaborator.approving', [], 'ecommerce.collaborator.approving')
                        ->render();
                }

                return redirect()->route('marketplace.vendor.dashboard');
            }
        }
        
        SeoHelper::setTitle('Đăng ký cộng tác viên');

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add('Đăng ký cộng tác viên', route('collaborator.become-collaborator'));

        return Theme::scope('ecommerce.collaborator.register', [], 'ecommerce.collaborator.register')
            ->render();
    }

    /**
     * @param RegisterCollaboratorRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function postBecomeCollaborator(RegisterCollaboratorRequest $request, BaseHttpResponse $response)
    {
        $customer = auth('customer')->user();
        if ($customer->is_affiliater == 1) {
            abort(404);
        }

        event(new RegisterCollaboratorEvent($customer));

        return $response
            ->setNextUrl(route('collaborator.become-collaborator'))
            ->setMessage('Đăng ký cộng tác viên thành công');
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function getDashboard(
        Request $request,
        BaseHttpResponse $response
    )
    {
        page_title()->setTitle('Tổng quan tài khoản');

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

        $collaborator = auth('customer')->user();

        $totalCollaboratorChilds = $collaborator->children()->where('is_affiliater', 1)->where('affiliater_status', 2)->count();
        $totalCustomer = $collaborator->children()->whereNull('is_affiliater')->count();
        $balance = $collaborator->collaborator_balance;

        $groupRevenue = $this->revenueRepository
            ->getModel()
            ->join('ec_customers', 'ec_collaborator_revenue_record.customer_id', '=', 'ec_customers.id')
            ->selectRaw(
                'SUM(CASE WHEN type IS NULL OR type = ? THEN sub_amount WHEN type = ? THEN sub_amount * -1 ELSE 0 END) as sub_amount,
                SUM(CASE WHEN type IS NULL OR type = ? THEN amount WHEN type = ? THEN amount * -1 ELSE 0 END) as amount
                ', [RevenueTypeEnum::ADD_AMOUNT, RevenueTypeEnum::SUBTRACT_AMOUNT, RevenueTypeEnum::ADD_AMOUNT, RevenueTypeEnum::SUBTRACT_AMOUNT])
            ->where('ec_customers.id', $collaborator->presenter_id)
            ->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('ec_collaborator_revenue_record.created_at', '>=', $startDate)
                    ->whereDate('ec_collaborator_revenue_record.created_at', '<=', $endDate);
            })
            ->groupBy('customer_id')
            ->first();

        $revenue = $this->revenueRepository
            ->getModel()
            ->selectRaw(
                'SUM(CASE WHEN type IS NULL OR type = ? THEN sub_amount WHEN type = ? THEN sub_amount * -1 ELSE 0 END) as sub_amount,
                SUM(CASE WHEN type IS NULL OR type = ? THEN amount WHEN type = ? THEN amount * -1 ELSE 0 END) as amount
                ', [RevenueTypeEnum::ADD_AMOUNT, RevenueTypeEnum::SUBTRACT_AMOUNT, RevenueTypeEnum::ADD_AMOUNT, RevenueTypeEnum::SUBTRACT_AMOUNT])
            ->where('customer_id', $collaborator->id)
            ->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('created_at', '>=', $startDate)
                    ->whereDate('created_at', '<=', $endDate);
            })
            ->groupBy('customer_id')
            ->first();

        $withdrawal = $this->withdrawalRepository
            ->getModel()
            ->select([
                DB::raw('SUM(ec_collaborator_withdraw.amount) as amount')
            ])
            ->where('ec_collaborator_withdraw.customer_id', $collaborator->id)
            ->whereIn('ec_collaborator_withdraw.status', [
                WithdrawalStatusEnum::COMPLETED,
                WithdrawalStatusEnum::PENDING,
                WithdrawalStatusEnum::PROCESSING,
            ])
            ->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('ec_collaborator_withdraw.created_at', '>=', $startDate)
                    ->whereDate('ec_collaborator_withdraw.created_at', '<=', $endDate);
            })
            ->groupBy('ec_collaborator_withdraw.customer_id')
            ->first();

        $revenues = collect([
            'amount'     => $revenue ? $revenue->amount : 0,
            'sub_amount' => $revenue ? $revenue->sub_amount : 0,
            'withdrawal' => $withdrawal ? $withdrawal->amount : 0,
        ]);

        $data['revenue'] = $revenues;

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
            ])
            ->with(['user', 'payment'])
            ->where([
                'is_finished' => 1,
                'affliate_user_id' => auth('customer')->id()
            ])
            ->whereDate('created_at', '>=', $startDate)
            ->whereDate('created_at', '<=', $endDate)
            ->orderBy('created_at', 'desc');

        $data['orders'] = $getOrders->limit(10)->get();

        $totalOrders = $getOrders->count();

        $compact = compact('data', 'totalCollaboratorChilds', 'balance', 'totalOrders', 'groupRevenue', 'totalCustomer');

        return view('plugins/ecommerce::collaborator.webview.dashboard.index', $compact);
    }
}