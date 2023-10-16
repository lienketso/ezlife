<?php

namespace Botble\Payment\Services\Abstracts;
use Botble\Payment\Services\Traits\PaymentErrorTrait;

class VnpayService
{
    use PaymentErrorTrait;

    protected $vnp_Url;

    protected $vnp_Returnurl;

    protected $vnp_TmnCode;

    public $secretKey;

    public function __construct()
    {
        $this->vnp_Url = 'https://pay.vnpay.vn/vpcpay.html';
        $this->vnp_TmnCode = 'UBGMART1';
        $this->secretKey = 'NFVMAZKMDWNWPPAVODKXXZHQCHMBQIQQ';
    }

    /**
     * @param $orderData
     * @return string
     */
    public function requestPayment($orderData)
    {
        if($_SERVER['REMOTE_ADDR'] != null){
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        else{
            $ip = '103.226.248.106';
        }

        $trueOrderId = explode('-', $orderData['order_id']);

        $vnp_Url = $this->vnp_Url;
        $vnp_HashSecret = $this->secretKey;
        $vnp_TmnCode = $this->vnp_TmnCode;
        $vnp_Amount = floatval($orderData['amount']) * 100;
        $vnp_IpAddr = $ip;
        $vnp_Locale = 'vn';
        $vnp_OrderInfo = 'Thanh toan don hang '.get_order_code($trueOrderId[0]);
        $vnp_TxnRef = $orderData['order_id'];
        $vnp_Returnurl = route('public.checkout.vnpay-return', [
            'token' => $orderData['token'],
            'vnp_OrderShippingValue' => $orderData['order_shipping_value'],
            'shipping_method_value' => $orderData['shipping_method_value'],
            'shipping_method_data' => $orderData['shipping_method_data'],
        ]);

        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,
        );

        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $vnp_Url . "?" . $query;

        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret);//
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }

        return $vnp_Url;
    }
}