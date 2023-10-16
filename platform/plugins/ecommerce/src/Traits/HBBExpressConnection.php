<?php

namespace Botble\Ecommerce\Traits;

use Botble\Ecommerce\Models\StoreLocator;
use Illuminate\Support\Facades\Http;

class HBBExpressConnection
{
    private static $ClienID = '30642';
    private static $Token = '638e9b5a3d2f8fb7080e29911fad906a228397f6f8a70b10317102cf51470630';

    public function getToken(){
        $rawData = [
            'UserName'=>'XPG-KH23-0163',
            'Password'=>'123456'
        ];
        $res = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->post('http://stg.247post.vn:51099/api/Client/ClientLogin', $rawData)
            ->throw(function ($response, $e) {
                return ['Token' => ''];
            });
        if($res->successful()){
            $resData =  $res->json();
        }

        return $resData['Token'];
    }
    public static function calculateShippingPrice($data){
        try {

            $rawData = [
                'ClientHubID' => $data['ClientHubID'],
                'ServiceTypeID' => $data['ServiceTypeID'],
                "ToProvinceName"  => $data['ToProvinceName'],
                "ToDistrictName"  => $data['ToDistrictName'],
                "ToWardName" => $data['ToWardName'],
                "Length" => $data['Length'],
                "Height" => $data['Height'],
                "RealWeight" => $data['Weight'],
            ];
            $res = Http::withHeaders([
                'Content-Type' => 'application/json',
                'ClientID'=>setting('247_client_id',self::$ClienID),
                'Token'=>setting('247_token',self::$Token)
            ])->post('http://stg.247post.vn:51099/Api/Customer/GetPriceForCustomerAPI', $rawData)
                ->throw(function ($response, $e) {
                    return ['TotalServiceCost' => 0];
                });

            if ($res->successful()) {
                $resData =  $res->json();
                return $res['IsError'] == false ? [
                    'TotalServiceCost' => $resData['TotalServiceCost']] : ['TotalServiceCost' => 0];
            } else {
                return ['TotalServiceCost' => 0];
            }
        }catch (\Exception $e){
            return ['TotalServiceCost' => 0];
        }
    }
    public static function getDefaultStoreLocation()
    {
        $storeLocatorSelected = session('store_location');
        $storeLocator = new StoreLocator();
        if ($storeLocatorSelected == null) {
            if (auth('customer')->check()) {
                $customer = auth('customer')->user();
                if ($customer->store_locator_id != null) {
                    $default = $storeLocator->find($customer->store_locator_id);
                } else {
                    $default = $storeLocator->where('is_primary', 1)
                        ->where('is_shipping_location', 1)
                        ->first();
                }
            } else {
                $default = $storeLocator->where('is_primary', 1)
                    ->where('is_shipping_location', 1)
                    ->first();
            }
        } else {
            $default = $storeLocator->find($storeLocatorSelected);
        }

        return $default;
    }

}