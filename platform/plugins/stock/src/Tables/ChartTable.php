<?php

namespace Botble\Stock\Tables;

use BaseHelper;
// use Botble\Stock\Enums\ChartStatusEnum;
use Botble\Stock\Repositories\Interfaces\ChartInterface;
use Botble\Table\Abstracts\TableAbstract;
use Html;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

class ChartTable extends TableAbstract
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
     * ChartTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param ChartInterface $ChartRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, ChartInterface $ChartRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $ChartRepository;

        if (!Auth::user()->hasAnyPermission(['chart.edit', 'chart.destroy'])) {
            $this->hasOperations = false;
            $this->hasActions = false;
        }
    }

    /**
     * {@inheritDoc}
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('id', function ($item) {
                if (!Auth::user()->hasPermission('chart.edit')) {
                    return $item->id;
                }
                return Html::link(route('chart.edit', $item->id), $item->id);
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('price', function ($item) {      
                return $item->price;
             })
             ->editColumn('chart_date', function ($item) {
                return $item->chart_date;
             })
            
            ->editColumn('created_at', function ($item) {
                return $item->created_at;
            })
            // ->editColumn('status', function ($item) {
            //     return $item->status->toHtml();
            // })
            ->addColumn('operations', function ($item) {
                return $this->getOperations('chart.edit', 'chart.destroy', $item);
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
            'price',
            'chart_date',
            'created_at',
        ]);

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id' => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
            ],
            'price' => [
                'title' => 'Giá(VNĐ)',
                'class' => 'text-start',
            ],
            'chart_date' => [
                'title' => 'Ngày',
                'class' => 'text-start',
            ],
           
            'created_at' => [
                'title' => 'Ngày tạo',
                'class' => 'text-start',
            ]           
           
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        return $this->addCreateButton(route('chart.create'), 'chart.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('chart.deletes'), 'chart.destroy', parent::bulkActions());
    }

    // /**
    //  * {@inheritDoc}
    //  */
    // public function getBulkChanges(): array
    // {
    //     return [
    //         'customer_id' => [
    //             'title' => 'Tên nhà đầu tư',
    //             'type'     => 'select-ajax',
    //             'validate' => 'required',
    //             'callback' => 'getCustomers',
    //         ],
    //         'Chart_code' => [
    //             'title' => 'Mã Hợp đồng',
    //             'type'     => 'text',
    //         ],
    //         'amount' => [
    //             'title' => 'Số tiền lãi(VND)',
    //             'type'     => 'text',
    //         ],
    //         'created_at' => [
    //             'title' => 'Ngày trả lãi',
    //             'type'  => 'date',
    //         ],
    //     ];
    // }

}
