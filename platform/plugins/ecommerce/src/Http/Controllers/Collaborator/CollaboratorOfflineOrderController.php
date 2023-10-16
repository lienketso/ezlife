<?php
/**
 * CollaboratorOfflineOrderController.php
 * Created by: trainheartnet
 * Created at: 10/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Collaborator;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Ecommerce\Tables\Front\CollaboratorOfflineOrdersTable;
use Assets;

class CollaboratorOfflineOrderController extends BaseController
{
    /**
     * CollaboratorOfflineOrderController constructor.
     */
    public function __construct()
    {
        Assets::setConfig(config('plugins.marketplace.assets', []));
    }

    /**
     * @param CollaboratorOfflineOrdersTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(CollaboratorOfflineOrdersTable $table)
    {
        page_title()->setTitle('Đơn hàng mua trực tiếp tại siêu thị');

        return $table->render('plugins/ecommerce::collaborator.dashboard.table.base');
    }
}