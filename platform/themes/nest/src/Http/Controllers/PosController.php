<?php
/**
 * PosController.php
 * Created by: trainheartnet
 * Created at: 08/07/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Theme\Nest\Http\Controllers;

use Botble\Base\Http\Controllers\BaseController;

class PosController extends BaseController
{
    public function index()
    {
        return view('plugins/ecommerce::pos.index');
    }
}