<?php

namespace Botble\Stock;

use Botble\Stock\Models\Category;
use Botble\Stock\Models\Tag;
use Botble\Dashboard\Repositories\Interfaces\DashboardWidgetInterface;
use Botble\Menu\Repositories\Interfaces\MenuNodeInterface;
use Illuminate\Support\Facades\Schema;
use Botble\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('cp_category');
        Schema::dropIfExists('cp_contract');
        Schema::dropIfExists('cp_history');
        Schema::dropIfExists('cp_package');
        Schema::dropIfExists('cp_withdraw');

        app(DashboardWidgetInterface::class)->deleteBy(['name' => 'widget_stock_recent']);

        app(MenuNodeInterface::class)->deleteBy(['reference_type' => Category::class]);
        app(MenuNodeInterface::class)->deleteBy(['reference_type' => Tag::class]);
    }
}
