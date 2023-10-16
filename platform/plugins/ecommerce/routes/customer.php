<?php

Route::group(['namespace' => 'Botble\Ecommerce\Http\Controllers\Customers', 'middleware' => ['web', 'core']],
    function () {

        Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {
            Route::group(['prefix' => 'customers', 'as' => 'customers.'], function () {
                Route::resource('', 'CustomerController')->parameters(['' => 'customer']);

                Route::delete('items/destroy', [
                    'as'         => 'deletes',
                    'uses'       => 'CustomerController@deletes',
                    'permission' => 'customers.destroy',
                ]);
            });

            Route::group(['prefix' => 'customers', 'as' => 'customers.'], function () {
                Route::get('edit-ubg-xu/{id}',[
                   'as'=>'edit-ubg-xu',
                   'uses'=>'CustomerController@getEditXu',
                   'permission'=>'customers.index'
                ]);
                Route::post('edit-ubg-xu/{id}',[
                    'as'=>'edit-ubg-xu',
                    'uses'=>'CustomerController@updateXu',
                    'permission'=>'customers.index'
                ]);
                
                //search ajax 
                Route::get('search-customer', [
                    'as'         => 'search-customer',
                    'uses'       => 'CustomerController@searchCustomer',
                ]);

                Route::get('logged-in-as/{id}', [
                    'as'         => 'logged-in-as',
                    'uses'       => 'CustomerController@loggedInAs',
                    'permission' => 'customers.index',
                ]);

                Route::get('get-list-customers-for-select', [
                    'as'         => 'get-list-customers-for-select',
                    'uses'       => 'CustomerController@getListCustomerForSelect',
                    'permission' => 'customers.index',
                ]);

                Route::get('get-list-customers-for-search', [
                    'as'         => 'get-list-customers-for-search',
                    'uses'       => 'CustomerController@getListCustomerForSearch',
                    'permission' => ['customers.index', 'orders.index'],
                ]);

                Route::post('update-email/{id}', [
                    'as'         => 'update-email',
                    'uses'       => 'CustomerController@postUpdateEmail',
                    'permission' => 'customers.edit',
                ]);

                Route::get('get-customer-addresses/{id}', [
                    'as'         => 'get-customer-addresses',
                    'uses'       => 'CustomerController@getCustomerAddresses',
                    'permission' => ['customers.index', 'orders.index'],
                ]);

                Route::get('get-customer-order-numbers/{id}', [
                    'as'         => 'get-customer-order-numbers',
                    'uses'       => 'CustomerController@getCustomerOrderNumbers',
                    'permission' => ['customers.index', 'orders.index'],
                ]);

                Route::post('create-customer-when-creating-order', [
                    'as'         => 'create-customer-when-creating-order',
                    'uses'       => 'CustomerController@postCreateCustomerWhenCreatingOrder',
                    'permission' => ['customers.index', 'orders.index'],
                ]);
            });

//            Route::group(['prefix' => 'collaborator', 'as' => 'collaborator.'], function () {
//                Route::resource('', 'CollaboratorController')->parameters(['' => 'collaborator']);
//                //Collaborator
//                Route::get('', [
//                    'as'         => 'index',
//                    'uses'       => 'CollaboratorController@index',
//                    'permission' => 'customers.index',
//                ]);
//            });
//
//            Route::group(['prefix' => 'collaborator-request', 'as' => 'collaborator-request.'], function () {
//                Route::resource('', 'CollaboratorRequestController')->parameters(['' => 'collaborator']);
//
//                Route::delete('items/destroy', [
//                    'as'         => 'deletes',
//                    'uses'       => 'CollaboratorRequestController@deletes',
//                    'permission' => 'customer.destroy',
//                ]);
//            });
        });
    });

if (defined('THEME_MODULE_SCREEN_NAME')) {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {
        Route::group([
            'namespace'  => 'Botble\Ecommerce\Http\Controllers\Customers',
            'middleware' => ['web', 'core', 'customer.guest'],
            'as'         => 'customer.',
        ], function () {
            Route::get('login', 'LoginController@showLoginForm')->name('login');
            Route::post('login', 'LoginController@login')->name('login.post');

            Route::get('register', 'RegisterController@showRegistrationForm')->name('register');
            Route::post('register', 'RegisterController@register')->name('register.post');

//            Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.request');
            Route::post('password/phone', 'ForgotPasswordController@sendResetLinkPhone')->name('password.request');
            Route::post('password/reset', 'ResetPasswordController@resetNow')->name('password.reset.post');
//            Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.reset');
            Route::get('password/reset', 'ForgotPasswordController@showLinkPhoneRequestForm')->name('password.reset');
            Route::get('password/otp', 'ForgotPasswordController@showOtpRequestForm')->name('password.otp');
            Route::post('password/otp', 'ForgotPasswordController@postOtpRequestForm')->name('password.otp.post');
            Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm')
                ->name('password.reset.update');

            //resend otp
            Route::get('otp/resend/{phone}', 'ForgotPasswordController@resendOtp')->name('otp.resend.get');

            Route::get('verify', 'RegisterController@getVerify')
                ->name('verify');

            Route::get('phone-verify', 'RegisterController@showPhoneVerifyForm')->name('phone-verify');
            Route::post('phone-verify', 'RegisterController@phoneVerify')->name('phone-verify.post');
            Route::get('resend-otp', 'RegisterController@resendOtp')->name('resend-otp');
        });

        Route::group([
            'namespace'  => 'Botble\Ecommerce\Http\Controllers\Customers',
            'middleware' => [
                'web',
                'core',
                EcommerceHelper::isEnableEmailVerification() ? 'customer' : 'customer.guest',
            ],
            'as'         => 'customer.',
        ], function () {
            Route::get('register/confirm/resend', 'RegisterController@resendConfirmation')
                ->name('resend_confirmation');
            Route::get('register/confirm/{user}', 'RegisterController@confirm')
                ->name('confirm');
        });

        Route::group([
            'namespace'  => 'Botble\Ecommerce\Http\Controllers\Customers',
            'middleware' => ['web', 'core', 'customer'],
            'prefix'     => 'customer',
            'as'         => 'customer.',
        ], function () {
            Route::get('logout', 'LoginController@logout')->name('logout');

            Route::get('payment-code', [
                'as' => 'payment-code',
                'uses' => 'PublicController@refreshPaymentCode',
            ]);
            
            Route::get('overview', [
                'as'   => 'overview',
                'uses' => 'PublicController@getOverview',
            ]);

            Route::get('edit-account', [
                'as'   => 'edit-account',
                'uses' => 'PublicController@getEditAccount',
            ]);

            Route::post('edit-account', [
                'as'   => 'edit-account.post',
                'uses' => 'PublicController@postEditAccount',
            ]);

            Route::get('change-password', [
                'as'   => 'change-password',
                'uses' => 'PublicController@getChangePassword',
            ]);

            Route::post('change-password', [
                'as'   => 'post.change-password',
                'uses' => 'PublicController@postChangePassword',
            ]);

            Route::get('orders', [
                'as'   => 'orders',
                'uses' => 'PublicController@getListOrders',
            ]);

            Route::get('orders/view/{id}', [
                'as'   => 'orders.view',
                'uses' => 'PublicController@getViewOrder',
            ]);

            Route::get('order/cancel/{id}', [
                'as'   => 'orders.cancel',
                'uses' => 'PublicController@getCancelOder',
            ]);

            Route::get('address', [
                'as'   => 'address',
                'uses' => 'PublicController@getListAddresses',
            ]);

            Route::get('address/create', [
                'as'   => 'address.create',
                'uses' => 'PublicController@getCreateAddress',
            ]);

            Route::post('address/create', [
                'as'   => 'address.create.post',
                'uses' => 'PublicController@postCreateAddress',
            ]);

            Route::get('address/edit/{id}', [
                'as'   => 'address.edit',
                'uses' => 'PublicController@getEditAddress',
            ]);

            Route::post('address/edit/{id}', [
                'as'   => 'address.edit.post',
                'uses' => 'PublicController@postEditAddress',
            ]);

            Route::get('address/delete/{id}', [
                'as'   => 'address.destroy',
                'uses' => 'PublicController@getDeleteAddress',
            ]);

            Route::get('orders/print/{id}', [
                'as'   => 'print-order',
                'uses' => 'PublicController@getPrintOrder',
            ]);

            Route::post('avatar', [
                'as'   => 'avatar',
                'uses' => 'PublicController@postAvatar',
            ]);
        });
    });
}
