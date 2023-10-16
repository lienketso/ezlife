<?php


namespace Botble\Stock\Repositories\Caches;


use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;

class ContractCacheDecoration extends CacheAbstractDecorator implements ContractInterface
{
    /**
     * {@inheritDoc}
     */
    public function getContractById($id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}