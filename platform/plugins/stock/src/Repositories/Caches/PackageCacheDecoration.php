<?php
namespace Botble\Stock\Repositories\Caches;

use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;

class PackageCacheDecoration extends CacheAbstractDecorator implements PackageInterface
{

    /**
     * {@inheritDoc}
     */
    public function getPackageById($id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}