<?php


namespace Botble\Stock\Providers;

use Botble\Stock\Commands\AddTrialPackageForSaleUser;
use Botble\Stock\Commands\cronPaymentProfit;
use Botble\Stock\Commands\WithdrawMonth;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot(){
        $this->commands([
            cronPaymentProfit::class,
            WithdrawMonth::class,
            AddTrialPackageForSaleUser::class
        ]);
    }
}