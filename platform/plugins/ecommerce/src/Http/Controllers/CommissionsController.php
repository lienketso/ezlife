<?php

namespace Botble\Ecommerce\Http\Controllers;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Ecommerce\Tables\CommissionsTable;

class CommissionsController extends BaseController
{
    public function index(CommissionsTable $dataTable)
    {
        page_title()->setTitle('Thông tin hoa hồng');
        return $dataTable->renderTable();
    }
}