<?php
/**
 * ContractCommissionController.php
 * Created by: trainheartnet
 * Created at: 03/08/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Http\Controllers\Fronts;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Tables\CommissionTable;

class ContractCommissionController extends BaseController
{
    /**
     * @var ContractInterface
     */
    protected $contractRepository;

    /**
     * ContractCommissionController constructor.
     * @param ContractInterface $contractRepository
     */
    public function __construct(ContractInterface $contractRepository)
    {
        $this->contractRepository = $contractRepository;
    }

    /**
     * @param CommissionTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(CommissionTable $table)
    {
        page_title()->setTitle('Theo dõi hoa hồng cổ phần');

        return $table->render('plugins/stock::dashboard.table.base');
    }
}