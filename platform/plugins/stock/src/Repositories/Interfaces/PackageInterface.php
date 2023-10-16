<?php


namespace Botble\Stock\Repositories\Interfaces;


use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface PackageInterface extends RepositoryInterface
{
   /**
     * @param int $id
     * @return mixed
     */
    public function getPackageById($id);
}