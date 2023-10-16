<?php


namespace Botble\Stock\Repositories\Interfaces;


use Botble\Support\Repositories\Interfaces\RepositoryInterface;

interface CPHistoryInterface extends RepositoryInterface
{
   /**
     * @param int $id
     * @return mixed
     */
    public function getCPHistoryById($id);
}