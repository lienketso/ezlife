<?php

namespace Botble\Stock\Tables;

use BaseHelper;
use Botble\Ecommerce\Supports\EcommerceHelper;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Enums\StockTypeEnum;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Botble\Table\Abstracts\TableAbstract;
use Html;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;

class ContractTable extends TableAbstract
{

    /**
     * @var bool
     */
    protected $hasActions = true;
    /**
     * @var customerInterface
     */
    protected $customerInterface;

    /**
     * @var packageInterface
     */
    protected $packageInterface;

    /**
     * @var bool
     */
    protected $hasFilter = true;

    /**
     * ContractTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param ContractInterface $ContractRepository
     */
    public function __construct(
        DataTables $table,
        UrlGenerator $urlGenerator,
        ContractInterface $ContractRepository,
        CustomerInterface $customerRepository,
        PackageInterface $packageRepository
    )
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $ContractRepository;
        $this->customerRepository = $customerRepository;
        $this->packageRepository = $packageRepository;

        if (!Auth::user()->hasAnyPermission(['contract.edit', 'contract.destroy'])) {
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
            ->editColumn('contract_hard_code', function ($item) {
                if (!Auth::user()->hasPermission('contract.edit')) {
                    return $item->contract_hard_code;
                }
                return Html::link(route('contract.edit', $item->id), $item->contract_hard_code);
            })
            ->editColumn('contract_code', function ($item) {
                if (!Auth::user()->hasPermission('contract.edit')) {
                    return $item->contract_code;
                }
                return Html::link(route('contract.edit', $item->id), $item->contract_code);
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('customer_id', function ($item) {
                return (isset($item->customer)) ? $item->customer->name : '--';
            })
            ->editColumn('package_id', function ($item) {
                return (isset($item->package)) ? $item->package->name : '--';
            })
            ->editColumn('first_buy_price', function ($item) {
                return format_price($item->first_buy_price);
            })
            ->editColumn('first_buy_percentage', function ($item) {
                return $item->first_buy_percentage;
            })
            ->editColumn('contract_paid_status', function ($item) {
                return $item->contract_paid_status->toHtml();
            })
            // ->editColumn('active_date', function ($item) {
            //     return $item->active_date;
            // })
            ->editColumn('expires_date', function ($item) {
                return $item->expires_date;
            })
            ->editColumn('created_at', function ($item) {
                return $item->created_at;
            })
            ->editColumn('status', function ($item) {
                return $item->status->toHtml();
            })
            ->editColumn('type', function ($item) {
                return $item->type->toHtml();
            })
            ->addColumn('operations', function ($item) {
                return $this->getOperations('contract.edit', 'contract.destroy', $item,
                    Auth::user()->hasPermission('contract.edit') ? '<a class="btn btn-icon btn-sm btn-warning" href="'.route('contract.export-stock', $item->id).'"><i class="fas fa-print"></i></a>' : '');
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
            'contract_hard_code' => [
                'title' => 'Mã HĐ',
                'class' => 'text-start',
                'width' => '50px'
            ],
            'contract_code' => [
                'title' => 'Mã tham chiếu',
                'class' => 'text-start',
                'width' => '50px'
            ],
            'customer_id' => [
                'title' => 'Tên nhà đầu tư',
                'class' => 'text-start',
            ],
            'package_id' => [
                'title' => 'Tên gói',
                'class' => 'text-start',
            ],
            'first_buy_price' => [
                'title' => 'Giá trị hợp đồng(VND)',
                'class' => 'text-start',
            ],
            'first_buy_percentage' => [
                'title' => 'Lợi nhuận(%)',
                'class' => 'text-start',
            ],
            'area' => [
                'title' => 'Khu vực',
                'class' => 'text-start',
            ],
            'contract_paid_status' => [
                'title' => 'Trạng thái thanh toán',
                'class' => 'text-start',
            ],
            'status' => [
                'title' => 'Trạng thái',
                'class' => 'text-start',
            ],
            'type' => [
                'title' => 'Loại HĐ',
                'class' => 'text-start',
            ],
            // 'active_date' => [
            //     'title' => 'Ngày bắt đầu',
            //     'class' => 'text-start',
            // ],
            'expires_date' => [
                'title' => 'Ngày kết thúc',
                'class' => 'text-start',
            ],
            'created_at' => [
                'title' => 'Ngày khởi tạo',
                'class' => 'text-start',
            ],

        ];
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        // return $this->addCreateButton(route('Contract.create'), 'Contract.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('contract.deletes'), 'contract.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'customer_id' => [
                'title' => 'Tên nhà đầu tư',
                'type' => 'select-search',
                'validate' => 'required',
                'callback' => 'getCustomers',
            ],
            'package_id' => [
                'title' => 'Tên gói',
                'type' => 'select-search',
                'validate' => 'required',
                'callback' => 'getPackages',
            ],
            'contract_hard_code' => [
                'title' => 'Mã Hợp đồng',
                'type' => 'text',
            ],
            'contract_code' => [
                'title' => 'Mã tham chiếu',
                'type' => 'text',
            ],
            'area' => [
                'title' => 'Khu vực',
                'type' => 'select-search',
                'validate' => 'required',
                'callback' => 'getArea',
            ],
            'first_buy_price' => [
                'title' => 'Giá trị hợp đồng(VND)',
                'type' => 'text',
            ],
            'created_at' => [
                'title' => 'Ngày giao dịch',
                'type' => 'date',
            ],
            'type' => [
                'title' => 'Loại HĐ',
                'type' => 'customSelect',
                'choices' => StockTypeEnum::labels(),
                'validate' => 'required|in:' . implode(',', StockTypeEnum::values()),
            ],
        ];
    }

    /**
     * @return array
     */
    public function getCustomers(): array
    {
        return $this->customerRepository->pluck('name', 'id');
    }


    public function getArea()
    {
        return DB::table('provinces')->pluck('name', 'name');
    }
    /**
     * @return array
     */
    public function getPackages(): array
    {
        return $this->packageRepository->pluck('name', 'id');
    }
}
