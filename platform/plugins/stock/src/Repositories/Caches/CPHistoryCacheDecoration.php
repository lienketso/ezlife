<?php


namespace Botble\Stock\Repositories\Caches;


use Botble\Stock\Repositories\Interfaces\CPHistoryInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;

class CPHistoryCacheDecoration extends CacheAbstractDecorator implements CPHistoryInterface
{
    /**
     * {@inheritDoc}
     */
    public function getCPHistoryById($id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}