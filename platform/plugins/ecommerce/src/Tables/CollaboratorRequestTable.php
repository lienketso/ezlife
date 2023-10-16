<?php
/**
 * CollaboratorRequestTable.php
 * Created by: trainheartnet
 * Created at: 01/05/2022
 * Contact me at: longlengoc90@gmail.com
 */
namespace Botble\Ecommerce\Tables;

use Botble\Ecommerce\Enums\CustomerStatusEnum;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Html;
use BaseHelper;

class CollaboratorRequestTable extends TableAbstract
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
     * CustomerTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param CustomerInterface $customerRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, CustomerInterface $customerRepository)
    {
        $this->repository = $customerRepository;
        $this->setOption('id', 'table-customers');
        parent::__construct($table, $urlGenerator);

        if (!Auth::user()->hasAnyPermission(['collaborator-request.edit', 'collaborator-request.destroy'])) {
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
            ->editColumn('avatar', function ($item) {
                if ($this->request()->input('action') == 'excel' ||
                    $this->request()->input('action') == 'csv') {
                    return $item->avatar_url;
                }

                return Html::tag('img', '', ['src' => $item->avatar_url, 'alt' => clean($item->name), 'width' => 50]);
            })
            ->editColumn('name', function ($item) {
                if (!Auth::user()->hasPermission('collaborator-request.edit')) {
                    return $item->name;
                }

                return Html::link(route('collaborator-request.edit', $item->id), $item->name);
            })
            ->editColumn('phone', function ($item) {
                return $item->phone;
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->editColumn('affiliation_id', function ($item) {
                return $item->affiliation_id;
            })
            ->editColumn('affiliater_status', function ($item) {
                return $item->affiliater_status->toHtml();
            })
            ->editColumn('is_verified', function ($item) {
                return $item->is_verified ? Html::tag('span', trans('core/base::base.yes'), ['class' => 'text-success']) : trans('core/base::base.no');
            });

        return apply_filters(BASE_FILTER_GET_LIST_DATA, $data, $this->repository->getModel())
            ->addColumn('operations', function ($item) {
                return $this->getOperations('collaborator-request.edit', 'collaborator-request.destroy', $item);
            })
            ->escapeColumns([])
            ->make(true);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $model = $this->repository->getModel();
        $select = [
            'id',
            'name',
            'email',
            'avatar',
            'created_at',
            'status',
            'confirmed_at',
            'phone',
            'is_verified',
            'is_affiliater',
            'affiliater_status',
            'area'
        ];

        $query = $model->select($select)->where('affiliater_status', '!=', 2);

        return $this->applyScopes(apply_filters(BASE_FILTER_TABLE_QUERY, $query, $model, $select));
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id'         => [
                'name'  => 'ec_customers.id',
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
                'class' => 'text-left',
            ],
            'avatar'      => [
                'title' => trans('plugins/ecommerce::customer.avatar'),
                'class' => 'text-center',
            ],
            'phone'      => [
                'name'  => 'ec_customers.phone',
                'title' => 'Số điện thoại',
                'class' => 'text-left',
            ],
            'name'       => [
                'name'  => 'ec_customers.name',
                'title' => trans('core/base::forms.name'),
                'class' => 'text-left',
            ],
            'created_at' => [
                'name'  => 'ec_customers.created_at',
                'title' => trans('core/base::tables.created_at'),
                'width' => '100px',
                'class' => 'text-left',
            ],
            'is_verified' => [
                'name'  => 'ec_customers.is_verified',
                'title' => 'Xác minh điện thoại',
                'class' => 'text-center',
                'width' => '100px',
            ],
            'affiliater_status' => [
                'name'  => 'ec_customers.affiliater_status',
                'title' => 'Trạng thái yêu cầu',
                'class' => 'text-center',
                'width' => '100px',
            ],
            'area' => [
                'name'  => 'ec_customers.area',
                'title' => 'Khu vực HĐ',
                'class' => 'text-center',
                'width' => '100px',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
//    public function buttons()
//    {
//        $buttons = $this->addCreateButton(route('customer.create'), 'customer.create');
//
//        return apply_filters(BASE_FILTER_TABLE_BUTTONS, $buttons, Customer::class);
//    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('collaborator-request.deletes'), 'collaborator-request.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'name'       => [
                'title'    => trans('core/base::tables.name'),
                'type'     => 'text',
                'validate' => 'required|max:120',
            ],
            'created_at' => [
                'title' => trans('core/base::tables.created_at'),
                'type'  => 'date',
            ],
            'area' => [
                'title' => 'Khu vực hoạt động',
                'type' => 'text',
            ]
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function renderTable($data = [], $mergeData = [])
    {
        if ($this->query()->count() === 0 &&
            $this->request()->input('filter_table_id') !== $this->getOption('id')
        ) {
            return view('plugins/ecommerce::collaborator.intro');
        }

        return parent::renderTable($data, $mergeData);
    }

    /**
     * {@inheritDoc}
     */
    public function getDefaultButtons(): array
    {
        return [
            'reload',
        ];
    }
}