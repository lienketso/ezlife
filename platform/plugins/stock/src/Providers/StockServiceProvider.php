<?php

namespace Botble\Stock\Providers;

use Botble\LanguageAdvanced\Supports\LanguageAdvancedManager;
use Botble\Stock\Http\Middleware\RedirectIfNotEnoughLevel;
use Botble\Stock\Models\Contract;
use Botble\Stock\Models\CPCategory;
use Botble\Stock\Models\CPHistory;
use Botble\Stock\Models\Withdraw;
use Botble\Stock\Models\Holder;
use Botble\Stock\Models\Chart;
use Botble\Stock\Repositories\Caches\ContractCacheDecoration;
use Botble\Stock\Repositories\Caches\HolderCacheDecoration;
use Botble\Stock\Repositories\Caches\CPCategoryCacheDecoration;
use Botble\Stock\Repositories\Caches\CPHistoryCacheDecoration;
use Botble\Stock\Repositories\Caches\WithdrawCacheDecoration;
use Botble\Stock\Repositories\Eloquent\ContractRepository;
use Botble\Stock\Repositories\Eloquent\CPCategoryRepository;
use Botble\Stock\Repositories\Eloquent\HolderRepository;
use Botble\Stock\Repositories\Eloquent\CPHistoryRepository;
use Botble\Stock\Repositories\Eloquent\WithdrawRepository;
use Botble\Stock\Repositories\Eloquent\ChartRepository;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Repositories\Interfaces\HolderInterface;
use Botble\Stock\Repositories\Interfaces\CPCategoryInterface;
use Botble\Stock\Models\Package;
use Botble\Stock\Repositories\Caches\PackageCacheDecoration;
use Botble\Stock\Repositories\Caches\ChartCacheDecoration;
use Botble\Stock\Repositories\Eloquent\PackageRepository;
use Botble\Stock\Repositories\Interfaces\CPHistoryInterface;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Botble\Stock\Repositories\Interfaces\WithdrawInterface;
use Botble\Stock\Repositories\Interfaces\ChartInterface;
use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Event;
use Illuminate\Routing\Events\RouteMatched;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use SlugHelper;
use EmailHandler;

class StockServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    function register()
    {
        $this->app->bind(CPCategoryInterface::class, function(){
            return new CPCategoryCacheDecoration(new CPCategoryRepository(new CPCategory));
        });

        $this->app->bind(HolderInterface::class, function(){
            return new HolderCacheDecoration(new HolderRepository(new Holder));
        });

        $this->app->bind(PackageInterface::class, function(){
            return new PackageCacheDecoration(new PackageRepository(new Package));
        });

        $this->app->bind(ContractInterface::class,function (){
            return new ContractCacheDecoration(new ContractRepository(new Contract));
        });

        $this->app->bind(CPHistoryInterface::class,function(){
            return new CPHistoryCacheDecoration(new CPHistoryRepository(new CPHistory));
        });

        $this->app->bind(WithdrawInterface::class,function(){
            return new WithdrawCacheDecoration(new WithdrawRepository(new Withdraw));
        });

        $this->app->bind(ChartInterface::class,function(){
            return new ChartCacheDecoration(new ChartRepository(new Chart));
        });

        /**
         * @var Router $router
         */
        $router = $this->app['router'];

        $router->aliasMiddleware('not-trial-collaborator', RedirectIfNotEnoughLevel::class);
    }

    function boot(){
        SlugHelper::registerModule(CPCategory::class,'Stock Manager');
        SlugHelper::setPrefix(CPCategory::class,'stock-category',true);

        SlugHelper::registerModule(Package::class, 'Gói đầu tư');
        SlugHelper::setPrefix(Package::class,'stock-package',true);
       
        $this->setNamespace('plugins/stock')
            ->loadHelpers()
            ->loadAndPublishConfigurations(['permissions', 'general','email'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadRoutes(['web', 'api'])
            ->loadMigrations()
            ->publishAssets();
        $this->app->register(EventServiceProvider::class);

        //đăng ký command cron cho cổ phần
        $this->app->register(CommandServiceProvider::class);

        Event::listen(RouteMatched::class,function(){
            dashboard_menu()
                ->registerItem([
                  'id'=> 'cms-plugins-stock',
                  'priority'=> 20,
                  'parent_id'=> null,
                  'name'=> 'Quản lý hợp đồng',
                  'icon'=> 'fa fa-edit',
                  'url'=> '#',
                  'permissions'=>['stock.index']
                ])
                ->registerItem([
                    'id'=> 'cms-plugins-stock-category',
                    'priority'=> 1,
                    'parent_id'=>'cms-plugins-stock',
                    'name'=> 'Danh mục hợp đồng',
                    'icon'=>null,
                    'url'=>route('category.index'),
                    'permissions'=>['category.index']
                ])
                ->registerItem([
                    'id'=> 'cms-plugins-stock-package',
                    'priority'=> 2,
                    'parent_id'=>'cms-plugins-stock',
                    'name'=> 'Các gói đầu tư',
                    'icon'=>null,
                    'url'=>route('package.index'),
                    'permissions'=>['package.index']
                ])
                ->registerItem([
                    'id'=> 'cms-plugins-stock-contract',
                    'priority'=> 3,
                    'parent_id'=>'cms-plugins-stock',
                    'name'=> 'HĐ Cổ Phần',
                    'icon'=>null,
                    'url'=>route('contract.index'),
                    'permissions'=>['contract.index']
                ])
                ->registerItem([
                    'id'=> 'cms-plugins-stock-cphistory',
                    'priority'=> 3,
                    'parent_id'=>'cms-plugins-stock',
                    'name'=> 'Lịch sử trả lãi',
                    'icon'=>null,
                    'url'=>route('cphistory.index'),
                    'permissions'=>['cphistory.index']
                ])
                ->registerItem([
                    'id'=> 'cms-plugins-stock-withdraw',
                    'priority'=> 3,
                    'parent_id'=>'cms-plugins-stock',
                    'name'=> 'Yêu cầu rút tiển',
                    'icon'=>null,
                    'url'=>route('withdraw.index'),
                    'permissions'=>['withdraw.index']
                ])
                ->registerItem([
                    'id'=> 'cms-plugins-stock-holder',
                    'priority'=> 3,
                    'parent_id'=>'cms-plugins-stock',
                    'name'=> 'DS Cổ Đông',
                    'icon'=>null,
                    'url'=>route('holder.index'),
                    'permissions'=>['holder.index']
                ]);

               
               
            EmailHandler::addTemplateSettings(STOCK_MODULE_SCREEN_NAME, config('plugins.stock.email', []));
        });

        $useLanguageV2 = $this->app['config']->get('plugins.stock.general.use_language_v2', false) &&
            defined('LANGUAGE_ADVANCED_MODULE_SCREEN_NAME');
        if(defined('LANGUAGE_MODULE_SCREEN_NAME') && $useLanguageV2){
            LanguageAdvancedManager::registerModule(CPCategory::class,[
                'name',
                'description',
                'thumbnail',
            ]);
            LanguageAdvancedManager::registerModule(Package::class, [
                'name',
            ]);
        }

        // $this->app->booted(function () use($useLanguageV2){
        //     $models = [CPCategory::class];
        //     if(defined('LANGUAGE_MODULE_SCREEN_NAME') && !$useLanguageV2){
        //         \Language::registerModule($models);
        //     }
        //     SeoHelper::registerModule($models);
        //     $configKey = 'packages.revision.general.supported';
        //     config()->set($configKey, array_merge(config($configKey, []), [CPCategory::class]));

        //     if(defined('NOTE_FILTER_MODEL_USING_NOTE')){
        //         Note::registerModule(CPCategory::class);
        //     }

        //     $this->app->register(HookServiceProvider::class);

        // });

    }
}
