<?php
/**
 * UbgxuTransactionTable.php
 * Created by: trainheartnet
 * Created at: 07/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Tables\Front;

use Botble\Ecommerce\Repositories\Interfaces\UbgxuTransactionInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Yajra\DataTables\DataTables;
use Html;
use EcommerceHelper;
use BaseHelper;

class UbgxuTransactionTable extends TableAbstract
{
    /**
     * @var bool
     */
    protected $hasActions = false;

    /**
     * @var bool
     */
    protected $hasFilter = false;

    /**
     * @var bool
     */
    protected $hasCheckbox = false;

    /**
     * @var bool
     */
    protected $hasOperations = false;

    /**
     * UbgxuTransactionTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param UbgxuTransactionInterface $orderRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, UbgxuTransactionInterface $orderRepository)
    {
        $this->repository = $orderRepository;
        parent::__construct($table, $urlGenerator);
    }

    /**
     * {@inheritDoc}
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('id', function ($item) {
                return $item->compare_code == null ? 'Hệ thống' : $item->compare_code;
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('status', function ($item) {
                switch ($item->status) {
                    case 'on_cash_back':
                        return 'Được hoàn';
                    case 'completed':
                        return 'Đã hoàn thành công';
                    default:
                        return 'Không hoàn';
                }
            })
            ->editColumn('amount', function ($item) {
                switch ($item->transaction_type) {
                    case 'cash':
                        return format_price($item->amount);
                    default:
                        return number_format($item->amount). ' điểm';
                }
            })
            ->editColumn('ubgxu', function ($item) {
                if ($item->transaction_type == 'cash') {
                    if ($item->total_day_refund == 0) {
                        $percent = intval(get_ecommerce_setting('ubgxu_refund_one_percent')) / 100;
                        return number_format($item->amount * $percent). ' điểm';
                    } else {
                        $percent = intval(get_ecommerce_setting('ubgxu_percent_per_order')) / 100;
                        return number_format($item->amount * $percent). ' điểm';
                    }
                } else {
                    return '--';
                }
            })
            ->editColumn('percent', function ($item) {
                if ($item->transaction_type == 'cash') {
                    if ($item->total_day_refund == 0) {
                        return '100%';
                    } else {
                        return $item->paid_day_refund / $item->total_day_refund * 100 . '%';
                    }
                } else {
                    return '--';
                }
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->editColumn('description', function ($item) {
                return $item->description;
            })
            ->editColumn('transaction_type', function ($item) {
                return $item->transaction_type->toHtml();
            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()
            ->select('*')
            ->where('customer_id', auth('customer')->id());

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        $columns = [
            'id'      => [
                'title' => 'Mã đối soát',
                'class' => 'text-start',
            ],
            'amount'  => [
                'title' => 'Giá trị',
                'class' => 'text-center',
            ],
            'ubgxu'  => [
                'title' => 'Số điểm hoàn',
                'class' => 'text-center',
                'orderable' => false
            ],
            'percent'  => [
                'title' => 'Tiến độ hoàn',
                'class' => 'text-center',
                'orderable' => false
            ],
            'description'  => [
                'title' => 'Diễn giải',
                'class' => 'text-start',
            ],
            'transaction_type'          => [
                'title' => 'Loại giao dịch',
                'class' => 'text-center',
            ],
            'status'          => [
                'title' => trans('core/base::tables.status'),
                'class' => 'text-center',
            ],
            'created_at'      => [
                'title' => trans('core/base::tables.created_at'),
                'width' => '100px',
                'class' => 'text-start',
            ],
        ];

        return $columns;
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