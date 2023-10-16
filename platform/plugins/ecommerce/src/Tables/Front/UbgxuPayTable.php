<?php
/**
 * UbgxuPayTable.php
 * Created by: trainheartnet
 * Created at: 07/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Tables\Front;


use Botble\Ecommerce\Repositories\Interfaces\UbgxuPayInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuTransactionInterface;
use Botble\Table\Abstracts\TableAbstract;
use Illuminate\Contracts\Routing\UrlGenerator;
use Yajra\DataTables\DataTables;
use BaseHelper;

class UbgxuPayTable extends TableAbstract
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
     * UbgxuTransactionTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param UbgxuTransactionInterface $orderRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, UbgxuPayInterface $orderRepository)
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
            ->editColumn('id', function ($item) {
                return $item->id;
            })
            ->editColumn('ubgxu_transaction.compare_code', function ($item) {
                return $item->transaction->compare_code;
            })
            ->editColumn('amount', function ($item) {
                return number_format($item->amount). ' điểm';
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
            ->with(['transaction'])
            ->select('*')
            ->where('ubgxu_pay.customer_id', auth('customer')->id());

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        $columns = [
            'id'      => [
                'title' => 'ID',
                'class' => 'text-start',
                'width' => '100px'
            ],
            'ubgxu_transaction.compare_code'  => [
                'title' => 'Mã đối soát',
                'class' => 'text-center',
                'width' => '200px',
                'orderable' => false
            ],
            'amount'  => [
                'title' => 'Giá trị',
                'class' => 'text-center',
            ],
            'created_at'      => [
                'title' => 'Ngày hoàn',
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
{

}