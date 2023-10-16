<?php

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;

use Illuminate\Support\Collection;

if (!function_exists('get_package')) {
    /**
     * @return array
     */
    function get_package($packageID)
    {
        return app(PackageInterface::class)->getPackageById($packageID);
    }
}


if (!function_exists('get_customer')) {
    /**
     * @return array
     */
    function get_customer($customerID)
    {
        return app(CustomerInterface::class)->getCustomerById($customerID);
    }
}

if (!function_exists('get_contract')) {
    /**
     * @return array
     */
    function get_contract($contractID)
    {
        return app(ContractInterface::class)->getContractById($contractID);
    }
}

if (!function_exists('check_kyc')) {
    /**
     * @return false
     */
    function check_kyc($id)
    {
        $user = app(CustomerInterface::class)->findById($id);
        $bankInfo = $user->collaborator_bank_info;
        return $user->card_front != NULL && $user->card_back != NULL && $bankInfo != NULL;
    }
}

if(!function_exists('getMonthByDay'))
{
    function getMonthByDay($day){
        $month = 0;
        if($day==180){
            $month = 6;
        }
        if($day==365){
            $month = 12;
        }
        if($day==730){
            $month = 24;
        }
        if($day==1095){
            $month = 36;
        }
        if($day==1460){
            $month = 48;
        }
        return $month;
    }
}
