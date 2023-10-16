<?php
/**
 * UbgxuTransactionCacheDecorator.php
 * Created by: trainheartnet
 * Created at: 06/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Repositories\Caches;

use Botble\Ecommerce\Repositories\Interfaces\UbgxuTransactionInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;

class UbgxuTransactionCacheDecorator extends CacheAbstractDecorator implements UbgxuTransactionInterface
{
    /**
     * @param $id
     * @param false $count
     * @param int $limit
     * @return mixed
     */
    public function getTransactionByCustomerId($id, $count = false, $limit = 5)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getTotalCashbackPending($id)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}