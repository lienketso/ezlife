<?php
/**
 * BillTable.php
 * Created by: trainheartnet
 * Created at: 19/07/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Tables;

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Ecommerce\Repositories\Interfaces\BillOrderInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Html;
use BaseHelper;

class BillTable extends TableAbstract
{
    /**
     * @var bool
     */
    protected $hasActions = true;

    /**
     * @var bool
     */
    protected $hasFilter = true;

    /**
     * @var bool
     */
    protected $hasOperations = false;

    /**
     * BillTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param BillOrderInterface $billRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, BillOrderInterface $billRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $billRepository;
    }

    /**
     * {@inheritDoc}
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('bill_amount', function ($item) {
                return format_price($item->bill_amount);
            })
            ->editColumn('pay_by_money', function ($item) {
                return format_price($item->pay_by_money);
            })
            ->editColumn('pay_by_ubgxu', function ($item) {
                return number_format($item->pay_by_ubgxu).' xu';
            })
            ->editColumn('customer_id', function ($item) {
                return $item->getCustomer->name.' - '.$item->getCustomer->phone;
            })
            ->editColumn('cashier_id', function ($item) {
                return $item->getCashier->username;
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()
            ->with(['getCustomer', 'getCashier'])
            ->select('*');

        return $this->applyScopes($query);
    }

    /**
     * 'bill_code',
    'bill_amount',
    'customer_id',
    'cashier_id',
    'description',
    'presenter_id',
    'cashback_type',
    'pay_by_money',
    'pay_by_ubgxu'
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id'          => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
                'class' => 'text-start',
            ],
            'bill_code'        => [
                'title' => 'Mã đối soát',
                'class' => 'text-start',
            ],
            'bill_amount'        => [
                'title' => 'Giá trị',
                'class' => 'text-start',
            ],
            'pay_by_money' => [
                'title' => 'Tiền mặt',
                'class' => 'text-start',
            ],
            'pay_by_ubgxu'  => [
                'title' => 'Xu',
                'class' => 'text-start',
            ],
            'customer_id'      => [
                'title' => 'Khách hàng',
                'class' => 'text-start',
            ],
            'cashier_id'      => [
                'title' => 'Thu ngân',
                'class' => 'text-start',
            ],
            'created_at' => [
                'title' => 'Ngày tạo',
                'class' => 'text-start',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'bill_code'       => [
                'title'    => 'Mã đơn',
                'type'     => 'text',
            ],
            'bill_amount' => [
                'title' => 'Giá trị đơn',
                'type' => 'number'
            ],
            'customer_id' => [
                'title' => 'Tên KH',
                'type'     => 'text',
                'validate' => 'required',
                'callback' => 'getCustomers',
            ],
            'cashier_id' => [
                'title' => 'Thu ngân',
                'type'     => 'text',
                'validate' => 'required',
                'callback' => 'getCashier',
            ],
            'created_at' => [
                'title' => trans('core/base::tables.created_at'),
                'type'  => 'date',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function renderTable($data = [], $mergeData = [])
    {
        if ($this->query()->count() === 0 &&
            !$this->request()->wantsJson() &&
            $this->request()->input('filter_table_id') !== $this->getOption('id') && !$this->request()->ajax()
        ) {
            return view('plugins/ecommerce::orders.bill.intro');
        }

        return parent::renderTable($data, $mergeData);
    }

    /**
     * {@inheritDoc}
     */
    public function getDefaultButtons(): array
    {
        return [
            'export',
            'reload',
        ];
    }
}