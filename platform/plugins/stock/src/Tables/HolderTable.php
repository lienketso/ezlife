<?php

namespace Botble\Stock\Tables;

use BaseHelper;
use Botble\Stock\Enums\HolderStatusEnum;
use Botble\Stock\Repositories\Interfaces\HolderInterface;
use Botble\Table\Abstracts\TableAbstract;
use Html;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

class HolderTable extends TableAbstract
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
     * HolderTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param HolderInterface $HolderRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, HolderInterface $HolderRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $HolderRepository;

        if (!Auth::user()->hasAnyPermission(['holder.edit', 'holder.destroy'])) {
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
                if (!Auth::user()->hasPermission('holder.edit')) {
                    return $item->name;
                }
                return Html::link(route('holder.edit', $item->id), $item->name);
            })
            ->editColumn('contract_code', function ($item) {
                return $item->contract_code;
            })
            ->editColumn('description', function ($item) {
                return $item->description;
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);            })
            
            ->addColumn('operations', function ($item) {
                return $this->getOperations('holder.edit', 'holder.destroy', $item);
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
            'contract_code',
            'description',
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
            'name' => [
                'title' => trans('core/base::tables.name'),
                'class' => 'text-start',
            ],
            'contract_code' => [
                'title' => 'Mã hợp đồng',
                'class' => 'text-start',
            ],
            'description' => [
                'title' => 'Mô tả',
                'class' => 'text-start',
            ],
            'created_at' => [
                'title' => trans('core/base::tables.created_at'),
                'width' => '100px',
            ],
           
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        return $this->addCreateButton(route('holder.create'), 'holder.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('holder.deletes'), 'holder.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    // public function getBulkChanges(): array
    // {
    //     return [
    //         'name' => [
    //             'title'    => trans('core/base::tables.name'),
    //             'type'     => 'text',
    //             'validate' => 'required|max:120',
    //         ],
    //         'status' => [
    //             'title'    => trans('core/base::tables.status'),
    //             'type'     => 'customSelect',
    //             'choices'  => HolderStatusEnum::labels(),
    //             'validate' => 'required|in:' . implode(',', HolderStatusEnum::values()),
    //         ],
    //         'created_at' => [
    //             'title' => trans('core/base::tables.created_at'),
    //             'type'  => 'date',
    //         ],
    //     ];
    // }
}
