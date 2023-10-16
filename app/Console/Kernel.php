<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
//        $schedule->command('profit')
//            ->daily()
//            ->sendOutputTo(public_path().'/storage/cronjob/log.txt')
//            ->withoutOverlapping();
//
//        $schedule->command('withdraw')
//            ->monthlyOn(5,'00:00')
//            ->sendOutputTo(public_path().'/storage/cronjob/log-withdraw.txt')
//            ->withoutOverlapping();
        $schedule->command('cms:customers:reset')
            ->monthlyOn(5,'00:00')
            ->sendOutputTo(public_path().'/storage/cronjob/log.txt')->withoutOverlapping();
        $schedule->command('cms:wallet:share')
            ->monthlyOn(1,'00:00')
            ->sendOutputTo(public_path().'/storage/cronjob/log.txt')->withoutOverlapping();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
