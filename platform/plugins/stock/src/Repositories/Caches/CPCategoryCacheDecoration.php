<?php


namespace Botble\Stock\Repositories\Caches;

use Botble\Stock\Repositories\Interfaces\CPCategoryInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;

class CPcategoryCacheDecoration extends CacheAbstractDecorator implements CPCategoryInterface
{
    /**
     * {@inheritDoc}
     */
    public function getCPHistoryById($id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}