<?php
/**
 * CommissionTable.php
 * Created by: trainheartnet
 * Created at: 03/08/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Tables;

use Botble\Ecommerce\Enums\StockStatusEnum;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

class CommissionTable extends TableAbstract
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
     * CommissionTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param ContractInterface $contractRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, ContractInterface $contractRepository)
    {
        $this->repository = $contractRepository;
        parent::__construct($table, $urlGenerator);
    }

    /**
     * {@inheritDoc}
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('contract_hard_code', function ($item) {
                return $item->contract_hard_code;
            })
            ->editColumn('name', function ($item) {
                return $item->name;
            })
            ->editColumn('customer_id', function ($item) {
                return (isset($item->customer)) ? $item->customer->name : '--';
            })
            ->editColumn('created_at', function ($item) {
                return $item->created_at;
            })
            ->editColumn('commission', function ($item) {
                $commissionsRule = json_decode($item->commission);
                $collaboratorLevel = intval(auth('customer')->user()->collaborator_level->getValue());
                $currentCommissionRule = $commissionsRule[$collaboratorLevel];
                $contractValue = $item->first_buy_price;
                $commission = $contractValue * $currentCommissionRule / 100;
                return format_price($commission);
            })
            ->editColumn('status', function ($item) {
                return $item->status->toHtml();
            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()
            ->with([
                'package',
                'customer'
            ])
            ->select([
                'id',
                'customer_id',
                'contract_code',
                'contract_hard_code',
                'package_id',
                'contract_paid_status',
                'first_buy_price',
                'first_buy_percentage',
                'active_date',
                'area',
                'expires_date',
                'created_at',
                'status',
                'commission',
                'name'
            ])
            ->where('status', ContractStatusEnum::ACTIVE)
            ->where('presenter_id', auth('customer')->user()->affiliation_id);

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        $columns = [
            'id' => [
                'title' => 'ID',
                'class' => 'text-start',
            ],
            'contract_hard_code' => [
                'title' => 'Mã hợp đồng',
                'class' => 'text-start',
            ],
            'customer_id' => [
                'title' => 'Chủ đầu tư',
                'class' => 'text-start',
                'orderable' => false
            ],
            'name' => [
                'title' => 'Gói đầu tư',
                'class' => 'text-start',
            ],
            'commission' => [
                'title' => 'Hoa hồng tạm tính',
                'class' => 'text-start',
                'orderable' => false
            ],
            'status' => [
                'title' => trans('core/base::tables.status'),
                'class' => 'text-start',
            ],
            'created_at' => [
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