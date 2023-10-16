<?php

// Custom routes
// You can delete this route group if you don't need to add your custom routes.
Route::group(['namespace' => 'Theme\Nest\Http\Controllers', 'middleware' => ['web', 'core']], function () {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {

        Route::get('ajax/cart', 'NestController@ajaxCart')
            ->name('public.ajax.cart');

        Route::get('ajax/products', 'NestController@ajaxGetProducts')
            ->name('public.ajax.products');

        Route::get('ajax/product-categories/products', 'NestController@ajaxGetProductsByCategoryId')
            ->name('public.ajax.product-category-products');

        Route::get('ajax/featured-products', 'NestController@getFeaturedProducts')
            ->name('public.ajax.featured-products');

        Route::get('ajax/posts', 'NestController@ajaxGetPosts')->name('public.ajax.posts');

        Route::get('ajax/featured-product-categories', 'NestController@getFeaturedProductCategories')
            ->name('public.ajax.featured-product-categories');

        Route::get('ajax/featured-brands', 'NestController@ajaxGetFeaturedBrands')
            ->name('public.ajax.featured-brands');

        Route::get('ajax/related-products/{id}/{storeid}', 'NestController@ajaxGetRelatedProducts')
            ->name('public.ajax.related-products');

        Route::get('ajax/product-reviews/{id}', 'NestController@ajaxGetProductReviews')
            ->name('public.ajax.product-reviews');

        Route::get('ajax/get-flash-sales', 'NestController@ajaxGetFlashSales')
            ->name('public.ajax.get-flash-sales');

        Route::get('ajax/quick-view/{id}', 'NestController@getQuickView')
            ->name('public.ajax.quick-view');

        Route::get('ajax/product-categories', 'NestController@ajaxGetProductCategories')
            ->name('public.ajax.product-categories');

        Route::get('ajax/top-products-group', 'NestController@ajaxTopProductsGroup')
            ->name('public.ajax.top-products-group');
        
        Route::get('ajax/popular-products', 'NestController@ajaxPopularProducts')
            ->name('public.ajax.popular-products');

        Route::get('ajax/get-districts', 'NestController@ajaxGetDistricts')
            ->name('public.ajax.get-districts');

        Route::get('ajax/get-wards', 'NestController@ajaxGetWards')
            ->name('public.ajax.get-wards');

        Route::get('ajax/check-xu', 'NestController@checkXu')
            ->name('public.ajax.checkxu');

        Route::post('ajax/check-payment-code', 'NestController@checkPaymentCode')
            ->name('public.ajax.check-payment-code');
    });
});

Theme::routes();

Route::group(['namespace' => 'Theme\Nest\Http\Controllers', 'middleware' => ['web', 'core']], function () {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {

        Route::get('/', 'NestController@getIndex')
            ->name('public.index');

        Route::get('sitemap.xml', 'NestController@getSiteMap')
            ->name('public.sitemap');

        Route::get('{slug?}' . config('core.base.general.public_single_ending_url'), 'NestController@getView')
            ->name('public.single');

        Route::get('affiliate/register', 'NestController@affiliateRegister')
            ->name('public.affiliate_register');

        Route::get('orderbill/add', [
            'as'   => 'public.orderbill',
            'uses' => 'OrderBillController@getOrderBill'
        ]);

        Route::post('orderbill/add', [
            'as'   => 'public.orderbill.post',
            'uses' => 'OrderBillController@postOrderBill'
        ]);

        Route::get('/vnpay/ipn_check', [
            'as'   => 'checkipn',
            'uses' => 'NestController@checkIpn',
        ]);

        //ubg event
        Route::group(['prefix' => 'event', 'as' => 'event.'], function () {
            Route::get('checkin', [
                'as' => 'checkin',
                'uses' => 'EventController@checkin',
            ]);
        });

        //ubg pos
        Route::group(['prefix' => 'pos', 'as' => 'pos.'], function () {
            Route::get('index', [
                'as' => 'index',
                'uses' => 'PosController@index',
            ]);
        });
    });
});
