<?php
/**
 * UbgxuTransactionRepository.php
 * Created by: trainheartnet
 * Created at: 06/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Repositories\Eloquent;

use Botble\Ecommerce\Repositories\Interfaces\UbgxuTransactionInterface;
use Botble\Support\Repositories\Eloquent\RepositoriesAbstract;

class UbgxuTransactionRepository extends RepositoriesAbstract implements UbgxuTransactionInterface
{
    /**
     * @param $id
     * @param false $count
     * @param int $limit
     * @return \Eloquent[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model[]|\Illuminate\Database\Query\Builder[]|\Illuminate\Support\Collection|int
     */
    public function getTransactionByCustomerId($id, $count = false, $limit = 5)
    {
        if ($count) {
            return $this->count(['customer_id' => $id]);
        }

        return $this->getModel()->where('customer_id', $id)
            ->orderBy('created_at', 'desc')
            ->limit($limit)
            ->get();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getTotalCashbackPending($id)
    {
        return $this->getModel()->where('customer_id', $id)
            ->where('transaction_type', 'cash')
            ->where('status', 0)
            ->sum('rest_cashback_amount');
    }
}