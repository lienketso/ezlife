<?php


namespace Botble\Stock\Repositories\Eloquent;

use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Support\Repositories\Eloquent\RepositoriesAbstract;

class ContractRepository extends RepositoriesAbstract implements ContractInterface
{
/**
     * {@inheritDoc}
     */
    public function getContractById($id)
    {
        $data = $this->model->where([
            'id'     => $id,
        ]);

        return $this->applyBeforeExecuteQuery($data, true)->first();
    }

    public function setTermOfContract()
    {

    }

}