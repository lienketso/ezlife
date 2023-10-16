<?php

namespace Botble\Ecommerce\Tables;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Illuminate\Contracts\Routing\UrlGenerator;
use Botble\Marketplace\Repositories\Interfaces\CommissionsInterface;
use BaseHelper;
class CommissionsTable extends TableAbstract
{
    protected $hasActions = true;

    /**
     * @var bool
     */
    protected $hasFilter = false;

    public function __construct(DataTables $table, UrlGenerator $urlGenerator, CommissionsInterface $commissionsRepository)
    {
        parent::__construct($table, $urlGenerator);
        $this->repository = $commissionsRepository;
    }

    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('customer_id', function ($item) {
                return clean($item->customer->name ?: $item->customer->phone) . ' <em>('.get_level_customer($item->customer_level).')</em>';
            })
            ->editColumn('order_id', function ($item) {
                return '<a target="_blank" href="'.route('orders.edit',$item->order_id).'">#1000'.$item->order_id.'</a>';
            })
            ->editColumn('product_id', function ($item) {
                return $item->product->name;
            })
            ->editColumn('amount', function ($item) {
                return number_format($item->amount);
            })
            ->editColumn('commission', function ($item) {
                return number_format($item->commission);
            })
            ->editColumn('status', function ($item) {
                return ($item->status=='disable') ? '<span style="color:red">Chưa cộng tiền</span>' : '<span style="color:green">Đã cộng tiền</span>';
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->addColumn('operations', function ($item) {
                return $this->getOperations(null, null, $item);
            });

        return $this->toJson($data);
    }

    public function query()
    {
        $query = $this->repository->getModel()->select(['*']);
        return $this->applyScopes($query);
    }

    public function columns()
    {
        return [
            'id'         => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
                'class' => 'text-start',
            ],
            'customer_id'     => [
                'name'  => 'customer_id',
                'title' => 'Khách hàng',
                'class' => 'text-start',
            ],
            'order_id' => [
                'title' => 'Đơn hàng',
                'width' => '100px',
            ],
            'product_id' => [
                'title' => 'Sản phẩm',
                'width' => '',
            ],
            'amount' => [
                'title' => 'Giá (trước thuế)',
                'width' => '',
            ],
            'commission' => [
                'title' => 'Hoa hồng',
                'width' => '',
            ],
            'status' => [
                'title' => 'Trạng thái',
                'width' => '',
            ],
            'created_at' => [
                'title' => 'Ngày tạo',
                'class' => 'text-center',
            ],

        ];
    }

    public function buttons()
    {
//        return $this->addCreateButton(route('discounts.create'), 'discounts.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('discounts.deletes'), 'discounts.destroy', parent::bulkActions());
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
            return view('plugins/ecommerce::commission.intro');
        }

        return parent::renderTable($data, $mergeData);
    }


}