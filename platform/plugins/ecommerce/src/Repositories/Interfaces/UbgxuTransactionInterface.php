<?php
/**
 * UbgxuTransactionInterface.php
 * Created by: trainheartnet
 * Created at: 06/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Repositories\Interfaces;

use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface UbgxuTransactionInterface extends RepositoryInterface
{
    /**
     * @param $id
     * @param false $count
     * @param int $limit
     * @return \Eloquent[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model[]|\Illuminate\Database\Query\Builder[]|\Illuminate\Support\Collection|int
     */
    public function getTransactionByCustomerId($id, $count = false, $limit = 5);

    /**
     * @param $id
     * @return mixed
     */
    public function getTotalCashbackPending($id);
}