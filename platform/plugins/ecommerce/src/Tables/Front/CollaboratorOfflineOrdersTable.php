<?php
/**
 * CollaboratorOfflineOrdersTable.php
 * Created by: trainheartnet
 * Created at: 10/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Tables\Front;

use Botble\Ecommerce\Repositories\Interfaces\BillOrderInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Yajra\DataTables\DataTables;
use Html;
use BaseHelper;

class CollaboratorOfflineOrdersTable extends TableAbstract
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
     * OrderTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param BillOrderInterface $orderRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, BillOrderInterface $orderRepository)
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
            ->editColumn('avatar', function ($item) {
                if ($this->request()->input('action') == 'excel' ||
                    $this->request()->input('action') == 'csv') {
                    return $item->getCustomer->avatar_url;
                }

                return Html::tag('img', '', ['src' => $item->getCustomer->avatar_url, 'alt' => clean($item->getCustomer->name), 'width' => 50]);
            })
            ->editColumn('id', function ($item) {
                return $item->bill_code;
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('amount', function ($item) {
                return format_price($item->bill_amount);
            })
            ->editColumn('user_id', function ($item) {
                return clean($item->getCustomer->name ?: $item->getCustomer->name);
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
            ->select('*')
            ->where('presenter_id', auth('customer')->id());

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        $columns = [
            'id'      => [
                'title' => 'Mã đơn',
                'width' => '20px',
                'class' => 'text-start',
            ],
            'avatar'      => [
                'title' => trans('plugins/ecommerce::customer.avatar'),
                'class' => 'text-center',
            ],
            'user_id' => [
                'title' => trans('plugins/ecommerce::order.customer_label'),
                'class' => 'text-start',
            ],
            'amount'  => [
                'title' => 'Giá trị đơn',
                'class' => 'text-center',
            ],
        ];

        $columns += [
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