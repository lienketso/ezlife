<?php


namespace Botble\Stock\Repositories\Eloquent;


use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Botble\Support\Repositories\Eloquent\RepositoriesAbstract;

class PackageRepository extends RepositoriesAbstract implements PackageInterface
{

    /**
     * {@inheritDoc}
     */
    public function getPackageById($id)
    {
        $data = $this->model->with('slugable')->where([
            'id'     => $id,
        ]);

        return $this->applyBeforeExecuteQuery($data, true)->first();
    }

}