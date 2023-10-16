<?php
/**
 * OrderCompleteListener.php
 * Created by: trainheartnet
 * Created at: 05/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Listeners;

use Botble\Ecommerce\Enums\OrderProcessAffiliateEnums;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Ecommerce\Services\HandleAffiliateService;
use Botble\Ecommerce\Services\HandleCommissionService;
use DB;
use Carbon\Carbon;
use Exception;

class OrderCompleteListener
{
    /**
     * @param $event
     * @throws \Throwable
     */
    public function handle($event)
    {
        // Hoàn trả hoa hồng
//        $commissionService = new HandleAffiliateService();
//        $commissionService->resolveOrder($event->order->id);
            $commissionService = new HandleCommissionService();
            $commissionService->resolveOrder($event->order->id);

    }
}