<?php


namespace Botble\Stock\Repositories\Caches;

use Botble\Stock\Repositories\Interfaces\HolderInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;

class HolderCacheDecoration extends CacheAbstractDecorator implements HolderInterface
{
    /**
     * {@inheritDoc}
     */
    public function getCPHistoryById($id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}