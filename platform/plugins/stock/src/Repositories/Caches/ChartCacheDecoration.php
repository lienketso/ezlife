<?php


namespace Botble\Stock\Repositories\Caches;


use Botble\Stock\Repositories\Interfaces\ChartInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;

class ChartCacheDecoration extends CacheAbstractDecorator implements ChartInterface
{
    /**
     * {@inheritDoc}
     */
    public function getChartById($id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}