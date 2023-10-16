<?php
/**
 * UbgxuTransactionController.php
 * Created by: trainheartnet
 * Created at: 07/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Ubgxu;

use Botble\Base\Http\Controllers\BaseController;
use Assets;
use Botble\Ecommerce\Tables\Front\UbgxuTransactionTable;

class UbgxuTransactionController extends BaseController
{
    public function __construct()
    {
        Assets::setConfig(config('plugins.marketplace.assets', []));
    }

    /**
     * @param UbgxuTransactionTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(UbgxuTransactionTable $table)
    {
        page_title()->setTitle('Các giao dịch');

        return $table->render('plugins/ecommerce::ubgxu.dashboard.table.base');
    }
}