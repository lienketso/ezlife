<?php
Route::group(['namespace' => 'Botble\Ecommerce\Http\Controllers\Collaborator', 'middleware' => ['web', 'core']],
    function () {
        Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {
            Route::group(['prefix' => 'collaborator', 'as' => 'collaborator.'], function () {
                Route::resource('', 'CollaboratorController')->parameters(['' => 'collaborator']);
                //Collaborator
                Route::get('', [
                    'as'         => 'index',
                    'uses'       => 'CollaboratorController@index',
                    'permission' => 'collaborator.index',
                ]);
            });

            Route::group(['prefix' => 'collaborator-request', 'as' => 'collaborator-request.'], function () {
                Route::resource('', 'CollaboratorRequestController')->parameters(['' => 'collaborator-request']);

                Route::delete('items/destroy', [
                    'as'         => 'deletes',
                    'uses'       => 'CollaboratorRequestController@deletes',
                    'permission' => 'collaborator-request.destroy',
                ]);
            });

            Route::group(['prefix' => 'withdrawals', 'as' => 'withdrawal.'], function () {
                Route::resource('', 'AdminColalboratorWithdrawlController')
                    ->parameters(['' => 'withdrawal'])
                    ->except([
                        'create',
                        'store',
                        'destroy',
                    ]);
            });
        });
    });

if (defined('THEME_MODULE_SCREEN_NAME')) {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {
        Route::group([
            'namespace'  => 'Botble\Ecommerce\Http\Controllers\Collaborator',
            'middleware' => ['web', 'core'],
            'prefix'     => 'collaborator',
            'as'         => 'collaborator.',
        ], function () {
            //Collaborator
            Route::get('become-collaborator', [
                'as'   => 'become-collaborator',
                'uses' => 'CollaboratorController@getBecomeCollaborator',
            ]);

            Route::post('become-collaborator', [
                'as'   => 'become-collaborator.post',
                'uses' => 'CollaboratorController@postBecomeCollaborator',
            ]);

            Route::group(['prefix' => '', 'middleware' => 'collaborator'], function () {

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
                    'uses' => 'CollaboratorController@getDashboard',
                ]);

                Route::group(['prefix' => 'product', 'as' => 'product.'], function () {
                    Route::resource('', 'CollaboratorProductController')
                        ->parameters(['' => 'product'])
                        ->only(['index','create','edit','update','store']);
                });

                Route::group(['prefix' => 'tree', 'as' => 'tree.'], function () {
                    Route::resource('', 'CollaboratorTreeController')->parameters(['' => 'collaborator'])->except(['create', 'store']);
                });

                Route::group(['prefix' => 'customers', 'as' => 'customers.'], function () {
                    Route::resource('', 'CollaboratorCustomerController')->parameters(['' => 'customers'])->except(['create', 'store']);
                });

                Route::group(['prefix' => 'orders', 'as' => 'orders.'], function () {
                    Route::resource('', 'CollaboratorOnlineOrderController')->parameters(['' => 'orders'])->except(['create', 'store']);
                });

                Route::group(['prefix' => 'bill', 'as' => 'bill.'], function () {
                    Route::resource('', 'CollaboratorOfflineOrderController')->parameters(['' => 'bill'])->except(['create', 'store']);
                });

                Route::resource('revenues', 'CollaboratorRevenueController')
                    ->parameters(['' => 'revenue'])
                    ->only(['index']);

                Route::resource('withdrawals', 'CollaboratorWithdrawalController')
                    ->parameters(['' => 'withdrawal'])
                    ->only([
                        'index',
                        'create',
                        'store',
                        'edit',
                        'update',
                    ]);

                Route::group(['prefix' => 'withdrawals'], function () {
                    Route::get('show/{id}', [
                        'as'   => 'withdrawals.show',
                        'uses' => 'CollaboratorWithdrawalController@show',
                    ]);
                });

                Route::get('settings', [
                    'as' => 'settings',
                    'uses' => 'CollaboratorSettingController@getSetting',
                    'middleware' => ['collaborator']
                ]);

                Route::post('settings', [
                    'as' => 'settings.post',
                    'uses' => 'CollaboratorSettingController@saveSettings',
                    'middleware' => ['collaborator']
                ]);
            });
        });
    });
}

// Webview CTV
if (defined('THEME_MODULE_SCREEN_NAME')) {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {
        Route::group([
            'namespace'  => 'Botble\Ecommerce\Http\Controllers\Collaborator\Webview',
            'middleware' => ['web', 'core'],
            'prefix'     => 'webview/collaborator',
            'as'         => 'webview-collaborator.',
        ], function () {
            //Collaborator
            Route::get('become-collaborator', [
                'as'   => 'become-collaborator',
                'uses' => 'CollaboratorController@getBecomeCollaborator',
            ]);

            Route::post('become-collaborator', [
                'as'   => 'become-collaborator.post',
                'uses' => 'CollaboratorController@postBecomeCollaborator',
            ]);

            Route::group(['prefix' => '', 'middleware' => 'webview-collaborator'], function () {

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
                    'uses' => 'CollaboratorController@getDashboard',
                ]);


                Route::group(['prefix' => 'tree', 'as' => 'tree.'], function () {
                    Route::resource('', 'CollaboratorTreeController')->parameters(['' => 'collaborator'])->except(['create', 'store']);
                });

                Route::group(['prefix' => 'customers', 'as' => 'customers.'], function () {
                    Route::resource('', 'CollaboratorCustomerController')->parameters(['' => 'customers'])->except(['create', 'store']);
                });

                Route::group(['prefix' => 'orders', 'as' => 'orders.'], function () {
                    Route::resource('', 'CollaboratorOnlineOrderController')->parameters(['' => 'orders'])->except(['create', 'store']);
                });

                Route::group(['prefix' => 'bill', 'as' => 'bill.'], function () {
                    Route::resource('', 'CollaboratorOfflineOrderController')->parameters(['' => 'bill'])->except(['create', 'store']);
                });

                Route::resource('revenues', 'CollaboratorRevenueController')
                    ->parameters(['' => 'revenue'])
                    ->only(['index']);

                Route::resource('withdrawals', 'CollaboratorWithdrawalController')
                    ->parameters(['' => 'withdrawal'])
                    ->only([
                        'index',
                        'create',
                        'store',
                        'edit',
                        'update',
                    ]);

                Route::group(['prefix' => 'withdrawals'], function () {
                    Route::get('show/{id}', [
                        'as'   => 'withdrawals.show',
                        'uses' => 'CollaboratorWithdrawalController@show',
                    ]);
                });

                Route::get('settings', [
                    'as' => 'settings',
                    'uses' => 'CollaboratorSettingController@getSetting',
                    'middleware' => ['collaborator']
                ]);

                Route::post('settings', [
                    'as' => 'settings.post',
                    'uses' => 'CollaboratorSettingController@saveSettings',
                    'middleware' => ['collaborator']
                ]);
            });
        });
    });
}
