<?php

namespace Botble\Ecommerce\Providers;

use Botble\Ecommerce\Commands\CashbackUbgxuCommand;
use Botble\Ecommerce\Commands\ResetPointCommand;
use Botble\Ecommerce\Commands\SendAbandonedCartsEmailCommand;
use Botble\Ecommerce\Commands\ShareWalletCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->commands([
            SendAbandonedCartsEmailCommand::class,
            ResetPointCommand::class,
            ShareWalletCommand::class
//            CashbackUbgxuCommand::class
        ]);
    }
}
