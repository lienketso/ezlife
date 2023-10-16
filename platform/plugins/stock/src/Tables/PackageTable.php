<?php

namespace Botble\Stock\Tables;

use BaseHelper;
use Botble\Ecommerce\Enums\CollaboratorLevelEnums;
use Botble\Stock\Enums\PackageStatusEnum;
use Botble\Stock\Enums\StockTypeEnum;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Botble\Table\Abstracts\TableAbstract;
use Html;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

class PackageTable extends TableAbstract
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
     * PackageTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param PackageInterface $PackageRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, PackageInterface $PackageRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $PackageRepository;

        if (!Auth::user()->hasAnyPermission(['package.edit', 'package.destroy'])) {
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
            ->editColumn('name', function ($item) {
                if (!Auth::user()->hasPermission('package.edit')) {
                    return $item->name;
                }
                return Html::link(route('package.edit', $item->id), $item->name);
            })
            ->editColumn('package_code', function ($item) {
                return $item->package_code;
            })
            ->editColumn('payment_type', function ($item) {
                return $item->payment_type->toHtml();
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('price', function ($item) {
                return format_price($item->price_per_stock * $item->qty_of_stock);
            })
            ->editColumn('end_date', function ($item) {
                return $item->end_date;
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->editColumn('percent_paid_by_money', function ($item) {
                return $item->percent_paid_by_money.'%';
            })
            ->editColumn('percent_paid_by_ubgxu', function ($item) {
                return $item->percent_paid_by_ubgxu.'%';
            })
            ->editColumn('status', function ($item) {
                return $item->status->toHtml();
            })
            ->editColumn('type', function ($item) {
                return $item->type->toHtml();
            })
//            ->editColumn('commission', function ($item) {
//                $text = '';
//                $commission = json_decode($item->commission);
//
//                foreach ($commission->vnd as $k => $c) {
//                    $text.= '<p>'.CollaboratorLevelEnums::compareValue($k).': '.$c.'%</p>';
//                }
//                return $text;
//            })
            ->addColumn('operations', function ($item) {
                return $this->getOperations('package.edit', 'package.destroy', $item);
            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()->select([
            'id',
            'name',
            'end_date',
            'created_at',
            'status',
            'package_code',
            'payment_type',
            'percent_paid_by_ubgxu',
            'percent_paid_by_money',
            'price_per_stock',
            'qty_of_stock',
            'commission',
            'type'
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
            'name' => [
                'title' => trans('core/base::tables.name'),
                'class' => 'text-start',
            ],
            'package_code' => [
                'title' => 'Mã gói',
                'class' => 'text-start',
            ],
            'price' => [
                'title' => 'Suất đầu tư',
                'class' => 'text-start',
            ],
            'payment_type' => [
                'title' => 'Hình thức trả lợi tức',
                'class' => 'text-start',
            ],
            'percent_paid_by_money' => [
                'title' => 'Lợi tức VND / năm',
                'class' => 'text-start',
            ],
            'percent_paid_by_ubgxu' => [
                'title' => 'Lợi tức xu / năm',
                'class' => 'text-start',
            ],
            'type' => [
                'title' => 'Hình thức gói',
                'width' => '100px',
            ],
            'end_date' => [
                'title' => 'Kỳ hạn',
                'width' => '100px',
            ],
//            'commission' => [
//                'title' => 'Tỷ lệ hoa hồng',
//                'width' => '100px',
//                'class' => 'text-start',
//            ],
            'created_at' => [
                'title' => trans('core/base::tables.created_at'),
                'width' => '100px',
            ],
            'status' => [
                'title' => trans('core/base::tables.status'),
                'width' => '100px',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        return $this->addCreateButton(route('package.create'), 'package.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('package.deletes'), 'package.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'name' => [
                'title' => trans('core/base::tables.name'),
                'type' => 'text',
                'validate' => 'required|max:120',
            ],
            'status' => [
                'title' => trans('core/base::tables.status'),
                'type' => 'customSelect',
                'choices' => PackageStatusEnum::labels(),
                'validate' => 'required|in:' . implode(',', PackageStatusEnum::values()),
            ],
            'type' => [
                'title' => 'Loại HĐ',
                'type' => 'customSelect',
                'choices' => StockTypeEnum::labels(),
                'validate' => 'required|in:' . implode(',', StockTypeEnum::values()),
            ],
            'created_at' => [
                'title' => trans('core/base::tables.created_at'),
                'type' => 'date',
            ],
        ];
    }
}
