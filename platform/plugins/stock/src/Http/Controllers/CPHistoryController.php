<?php


namespace Botble\Stock\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Stock\Repositories\Interfaces\CPHistoryInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Stock\Tables\CPHistoryTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
// use Botble\Stock\Forms\CPHistoryForm;
use Botble\Base\Forms\FormBuilder;


class CPHistoryController extends BaseController
{
    /**
     * @var CPHistoryInterface
     */
    protected $CPHistoryRepository;

    /**
     * CPHistoryController constructor.
     * @param CPHistoryInterface $CPHistoryRepository
     */
    public function __construct(CPHistoryInterface $CPHistoryRepository)
    {
        $this->CPHistoryRepository = $CPHistoryRepository;
    }
    
    /**
     * @param CPHistoryTable $table
     * @return \Illuminate\Http\JsonResponse|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(CPHistoryTable $table)
    {
        return $table->renderTable();
    }

     
}