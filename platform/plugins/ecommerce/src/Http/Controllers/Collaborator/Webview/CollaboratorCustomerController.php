<?php
/**
 * CollaboratorCustomerController.php
 * Created by: trainheartnet
 * Created at: 10/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Collaborator\Webview;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Ecommerce\Tables\Front\CollaboratorCustomerTable;
use Assets;

class CollaboratorCustomerController extends BaseController
{
    /**
     * CollaboratorCustomerController constructor.
     */
    public function __construct()
    {
        Assets::setConfig(config('plugins.marketplace.assets', []));
    }

    /**
     * @param CollaboratorCustomerTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(CollaboratorCustomerTable $table)
    {
        page_title()->setTitle('Danh sách khách hàng trực tiếp');

        return $table->render('plugins/ecommerce::collaborator.webview.dashboard.table.base');
    }
}