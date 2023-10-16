<?php
/**
 * TelegramController.php
 * Created by: trainheartnet
 * Created at: 17/08/2022
 * Contact me at: longlengoc90@gmail.com
 */

namespace Botble\Ecommerce\Http\Controllers\Fronts;

use Botble\Base\Http\Controllers\BaseController;
use Telegram\Bot\Laravel\Facades\Telegram;

class TelegramController extends BaseController
{
    public function updatedActivity()
    {
        $activity = Telegram::getUpdates();
        dd($activity);
    }
}