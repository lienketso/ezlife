<?php


namespace Botble\Payment\Services\Gateways;
use Botble\Payment\Enums\PaymentMethodEnum;
use Botble\Payment\Enums\PaymentStatusEnum;
use Botble\Payment\Services\Traits\PaymentTrait;
use Botble\Support\Services\ProduceServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VnpayService implements ProduceServiceInterface
{
    use PaymentTrait;
    /**
     * @inheritDoc
     */
    public function execute(Request $request, $data = [])
    {
        $chargeId = Str::upper(Str::random(10));

        $orderIds = (array)$request->input('order_id', []);

        do_action(PAYMENT_ACTION_PAYMENT_PROCESSED, [
            'amount'          => $request->input('amount'),
            'currency'        => $request->input('currency'),
            'charge_id'       => $chargeId,
            'order_id'        => $orderIds,
            'customer_id'     => $request->input('customer_id'),
            'customer_type'   => $request->input('customer_type'),
            'payment_channel' => PaymentMethodEnum::VNPAY,
            'status'          => PaymentStatusEnum::PENDING,
        ]);

        return $chargeId;

//        // TODO: Implement execute() method.
//        $chargeId = Str::upper(Str::random(10));
//
//        $orderIds = (array)$request->input('order_id', []);
//
//        if (empty($data)) {
//            $this->storeLocalPayment([
//                'amount'          => floatval($request->get('vnp_Amount')),
//                'currency'        => $request->input('currency'),
//                'charge_id'       => $chargeId,
//                'order_id'        => $request->input('order_id'),
//                'customer_id'     => $request->input('customer_id'),
//                'customer_type'   => $request->input('customer_type'),
//                'payment_channel' => PaymentMethodEnum::VNPAY,
//                'status'          => PaymentStatusEnum::PENDING,
//            ]);
//        } else {
//            $this->storeLocalPayment([
//                'amount'          => $data['amount'],
//                'charge_id'       => $data['charge_id'],
//                'currency'        => 'vnd',
//                'order_id'        => $data['order_id'],
//                'customer_id'     => $data['customer_id'],
//                'customer_type'   => 'Botble\Ecommerce\Models\Customer',
//                'payment_channel' => PaymentMethodEnum::VNPAY,
//                'status'          => PaymentStatusEnum::PENDING,
//            ]);
//        }
//
//        return $chargeId;
    }
}