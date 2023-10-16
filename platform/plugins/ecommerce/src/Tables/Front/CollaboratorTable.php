<?php
/**
 * CollaboratorTable.php
 * Created by: trainheartnet
 * Created at: 03/05/2022
 * Contact me at: longlengoc90@gmail.com
 */
namespace Botble\Ecommerce\Tables\Front;

use Botble\Ecommerce\Enums\CustomerStatusEnum;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Html;
use BaseHelper;

class CollaboratorTable extends TableAbstract
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
     * CustomerTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param CustomerInterface $customerRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, CustomerInterface $customerRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $customerRepository;
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
                return clean($item->name);
            })
            ->editColumn('email', function ($item) {
                return clean($item->email);
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('wallet', function ($item) {
                return $item->wallet ? format_price($item->wallet->amount) : format_price(0);
            })
            ->editColumn('sales', function ($item) {
                return $item->sales() ? format_price($item->sales()) : format_price(0);
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->editColumn('status', function ($item) {
                return clean($item->status->toHtml());
            });

//        $data = $data
//            ->addColumn('operations', function ($item) {
//                return $this->getOperations(null, null, $item);
//            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()->with(['wallet'])->select([
            'id',
            'name',
            'email',
            'avatar',
            'created_at',
            'status',
            'confirmed_at',
            'phone',
            'is_verified',
            'affiliater_status'
        ])->where('is_verified', 1)
            ->where('affiliater_status', 2)
            ->where('presenter_id', auth('customer')->id());

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        $columns = [
            'id'         => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
                'class' => 'text-start',
            ],
            'avatar'      => [
                'title' => trans('plugins/ecommerce::customer.avatar'),
                'class' => 'text-center',
            ],
            'phone'      => [
                'title' => trans('plugins/ecommerce::customer.phone'),
                'class' => 'text-start',
            ],
            'name'       => [
                'title' => trans('core/base::forms.name'),
                'class' => 'text-start',
            ],
            'wallet' => [
                'title' => 'Số dư khả dụng',
                'class' => 'text-center',
                'orderable' => false
            ],
            'sales' => [
                'title' => 'Doanh số tháng',
                'class' => 'text-center',
                'orderable' => false
            ],
            'created_at' => [
                'title' => 'Ngày tham gia',
                'width' => '100px',
                'class' => 'text-start',
            ],
            'status'     => [
                'title' => trans('core/base::tables.status'),
                'width' => '100px',
            ]
        ];

//        if (EcommerceHelper::isEnableEmailVerification()) {
//            $columns += [
//                'confirmed_at' => [
//                    'title' => trans('plugins/ecommerce::customer.email_verified'),
//                    'width' => '100px',
//                ],
//            ];
//        }

        return $columns;
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        return [];
        //return $this->addCreateButton(route('customers.create'), 'customers.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return [];
        //return $this->addDeleteAction(route('customers.deletes'), 'customers.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
//            'name'       => [
//                'title'    => trans('core/base::tables.name'),
//                'type'     => 'text',
//                'validate' => 'required|max:120',
//            ],
//            'status'     => [
//                'title'    => trans('core/base::tables.status'),
//                'type'     => 'select',
//                'choices'  => CustomerStatusEnum::labels(),
//                'validate' => 'required|in:' . implode(',', CustomerStatusEnum::values()),
//            ],
//            'created_at' => [
//                'title' => trans('core/base::tables.created_at'),
//                'type'  => 'date',
//            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function renderTable($data = [], $mergeData = [])
    {
        if ($this->query()->count() === 0 &&
            $this->request()->input('filter_table_id') !== $this->getOption('id') && !$this->request()->ajax()
        ) {
            return view('plugins/ecommerce::customers.intro');
        }

        return parent::renderTable($data, $mergeData);
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