<?php
/**
 * ubgxu.php
 * Created by: trainheartnet
 * Created at: 07/05/2022
 * Contact me at: longlengoc90@gmail.com
 */
if (defined('THEME_MODULE_SCREEN_NAME')) {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {
        Route::group([
            'namespace'  => 'Botble\Ecommerce\Http\Controllers\Ubgxu',
            'middleware' => ['web', 'core', 'customer'],
            'prefix'     => 'ubgxu',
            'as'         => 'ubgxu.',
        ], function () {

            Route::group(['prefix' => 'ajax'], function () {

                Route::group(['prefix' => 'chart', 'as' => 'chart.'], function () {
                    Route::get('month', [
                        'as'   => 'month',
                        'uses' => 'CollaboratorRevenueController@getMonthChart',
                    ]);
                });
            });

            Route::get('dashboard', [
                'as' => 'dashboard',
                'uses' => 'UbgxuController@getDashboard',
            ]);

            Route::group(['prefix' => 'transactions', 'as' => 'transactions.'], function () {
                Route::resource('', 'UbgxuTransactionController')->parameters(['' => 'transactions'])->except(['create', 'store']);
            });

            Route::group(['prefix' => 'pay', 'as' => 'pay.'], function () {
                Route::resource('', 'UbgxuPayController')->parameters(['' => 'pay'])->except(['create', 'store']);
            });

            Route::group(['prefix' => 'transfer', 'as' => 'transfer.'], function () {
                Route::resource('', 'UbgxuTransferController')->parameters(['' => 'transfer'])->except(['destroy', 'update', 'edit']);
            });
        });
    });
}
