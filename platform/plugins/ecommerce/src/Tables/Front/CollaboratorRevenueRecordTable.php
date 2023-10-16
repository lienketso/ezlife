<?php
/**
 * CollaboratorRevenueRecordTable.php
 * Created by: trainheartnet
 * Created at: 06/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Tables\Front;

use Botble\Ecommerce\Repositories\Interfaces\CollaboratorRevenueRecordInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Yajra\DataTables\DataTables;
use Html;
use BaseHelper;

class CollaboratorRevenueRecordTable extends TableAbstract
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
    protected $hasOperations = false;

    /**
     * @var bool
     */
    protected $hasCheckbox = false;

    /**
     * CollaboratorRevenueRecordTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param CollaboratorRevenueRecordInterface $revenueRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, CollaboratorRevenueRecordInterface $revenueRepository)
    {
        $this->repository = $revenueRepository;
        parent::__construct($table, $urlGenerator);
    }

    /**
     * {@inheritDoc}
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('current_balance', function ($item) {
                return format_price($item->current_balance);
            })
            ->editColumn('amount', function ($item) {
                return format_price($item->amount);
            })
            ->editColumn('description', function ($item) {
                return $item->description;
            })
            ->editColumn('order_id', function ($item) {
                if (!$item->order->id) {
                    return '&mdash;';
                }

                return get_order_code($item->order->id);
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
            ->select([
                'id',
                'sub_amount',
                'amount',
                'order_id',
                'created_at',
                'type',
                'description',
            ])
            ->with(['order'])
            ->where('customer_id', auth('customer')->id());

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id'              => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
                'class' => 'text-start',
            ],
            'order_id'        => [
                'title' => 'Mã đơn hàng',
                'class' => 'text-center',
            ],
            'description'        => [
                'title' => 'Diễn giải',
                'width' => '200px',
                'class' => 'text-start',
            ],
            'amount'          => [
                'title' => trans('plugins/ecommerce::order.amount'),
                'class' => 'text-center',
            ],
            'created_at'      => [
                'title' => 'Ngày ghi nhận',
                'class' => 'text-center',
            ],
        ];
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