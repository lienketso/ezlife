<?php
/**
 * CollaboratorOnlineOrderController.php
 * Created by: trainheartnet
 * Created at: 03/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Collaborator\Webview;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Tables\Front\CollaboratorOnlineOrdersTable;
use Assets;

class CollaboratorOnlineOrderController extends BaseController
{
    /**
     * CollaboratorOnlineOrderController constructor.
     */
    public function __construct()
    {
        Assets::setConfig(config('plugins.marketplace.assets', []));
    }

    /**
     * @param CollaboratorOnlineOrdersTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(CollaboratorOnlineOrdersTable $table)
    {
        page_title()->setTitle('Đơn hàng Online');

        return $table->render('plugins/ecommerce::collaborator.webview.dashboard.table.base');
    }
}