<?php
/**
 * CollaboratorWithdrawTable.php
 * Created by: trainheartnet
 * Created at: 04/05/2022
 * Contact me at: longlengoc90@gmail.com
 */

namespace Botble\Ecommerce\Tables;

use Botble\Ecommerce\Repositories\Interfaces\CollaboratorWithdrawalInterface;
use Botble\Marketplace\Enums\WithdrawalStatusEnum;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Yajra\DataTables\DataTables;
use Html;
use BaseHelper;

class CollaboratorWithdrawalTable extends TableAbstract
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
     * CollaboratorWithdrawalTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param CollaboratorWithdrawalInterface $withdrawalRepository
     */
    public function __construct(
        DataTables $table,
        UrlGenerator $urlGenerator,
        CollaboratorWithdrawalInterface $withdrawalRepository
    ) {
        parent::__construct($table, $urlGenerator);

        $this->repository = $withdrawalRepository;

        if (!Auth::user()->hasAnyPermission(['withdrawal.edit', 'withdrawal.destroy'])) {
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
            ->editColumn('customer_id', function ($item) {
                if (!Auth::user()->hasPermission('customers.edit')) {
                    return clean($item->customer->name);
                }

                if (!$item->customer->id) {
                    return '&mdash;';
                }

                return Html::link(route('customers.edit', $item->customer->id), clean($item->customer->name));
            })
            ->editColumn('amount', function ($item) {
                return format_price($item->amount);
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->editColumn('status', function ($item) {
                return clean($item->status->toHtml());
            })
            ->addColumn('operations', function ($item) {
                return $this->getOperations('withdrawal.edit', null, $item);
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
                'customer_id',
                'amount',
                'created_at',
                'status',
            ])
            ->with(['customer']);

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id'          => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
            ],
            'customer_id' => [
                'title' => trans('plugins/marketplace::withdrawal.vendor'),
                'class' => 'text-start',
            ],
            'amount'      => [
                'title' => trans('plugins/marketplace::withdrawal.amount'),
                'class' => 'text-start',
            ],
            'created_at'  => [
                'title' => trans('core/base::tables.created_at'),
                'width' => '100px',
            ],
            'status'      => [
                'title' => trans('core/base::tables.status'),
                'width' => '100px',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'status' => [
                'title'    => trans('core/base::tables.status'),
                'type'     => 'select',
                'choices'  => WithdrawalStatusEnum::labels(),
                'validate' => 'required|' . Rule::in(WithdrawalStatusEnum::values()),
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
    public function getDefaultButtons(): array
    {
        return [
            'export',
            'reload',
        ];
    }
}