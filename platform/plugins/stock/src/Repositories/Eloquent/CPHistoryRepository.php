<?php


namespace Botble\Stock\Repositories\Eloquent;


use Botble\Stock\Repositories\Interfaces\CPHistoryInterface;
use Botble\Support\Repositories\Eloquent\RepositoriesAbstract;

class CPHistoryRepository extends RepositoriesAbstract implements CPHistoryInterface
{
/**
     * {@inheritDoc}
     */
    public function getCPHistoryById($id)
    {
        $data = $this->model->where([
            'id'     => $id,
        ]);

        return $this->applyBeforeExecuteQuery($data, true)->first();
    }
}