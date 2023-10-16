<?php
/**
 * BillController.php
 * Created by: trainheartnet
 * Created at: 19/07/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Ecommerce\Repositories\Interfaces\BillOrderInterface;
use Botble\Ecommerce\Tables\BillTable;

class BillController extends BaseController
{
    /**
     * @var BillOrderInterface
     */
    protected $billRepository;

    /**
     * BillController constructor.
     * @param BillOrderInterface $billRepository
     */
    public function __construct(BillOrderInterface $billRepository)
    {
        $this->billRepository = $billRepository;
    }

    /**
     * @param BillTable $dataTable
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(BillTable $dataTable)
    {
        page_title()->setTitle('Danh sách hóa đơn');

        return $dataTable->renderTable();
    }
}