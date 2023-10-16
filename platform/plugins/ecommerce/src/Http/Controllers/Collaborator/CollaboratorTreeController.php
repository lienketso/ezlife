<?php
/**
 * CollaboratorTreeController.php
 * Created by: trainheartnet
 * Created at: 02/05/2022
 * Contact me at: longlengoc90@gmail.com
 */

namespace Botble\Ecommerce\Http\Controllers\Collaborator;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Tables\Front\CollaboratorTable;
use Assets;

class CollaboratorTreeController extends BaseController
{

    public function __construct()
    {
        Assets::setConfig(config('plugins.marketplace.assets', []));
    }

    /**
     * @param CollaboratorTable $table
     * @return mixed
     * @throws \Throwable
     */
    public function index(CollaboratorTable $table)
    {
        page_title()->setTitle('Đại lý tuyến dưới');

        return $table->render('plugins/ecommerce::collaborator.dashboard.table.base');
    }
}