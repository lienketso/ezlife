<?php
/**
 * UbgxuPayController.php
 * Created by: trainheartnet
 * Created at: 07/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Ubgxu;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Ecommerce\Tables\Front\UbgxuPayTable;
use Assets;

class UbgxuPayController extends BaseController
{
    public function __construct()
    {
        Assets::setConfig(config('plugins.marketplace.assets', []));
    }

    /**
     * @param UbgxuPayTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(UbgxuPayTable $table)
    {
        page_title()->setTitle('Lịch sử hoàn điểm');

        return $table->render('plugins/ecommerce::ubgxu.dashboard.table.base');
    }
}