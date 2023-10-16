<?php
/**
 * HandleAffiliateService.php
 * Created by: trainheartnet
 * Created at: 05/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Services;


use Botble\Ecommerce\Enums\OrderProcessAffiliateEnums;
use Botble\Ecommerce\Enums\OrderStatusEnum;
use Botble\Ecommerce\Enums\ShippingStatusEnum;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Marketplace\Enums\RevenueTypeEnum;
use DB;
use Exception;
use Illuminate\Support\Arr;
use Carbon\Carbon;

class HandleAffiliateService
{
    /**
     * @throws \Throwable
     */
    public function resolveAllOrder()
    {
        @ini_set('max_execution_time', -1);
        @ini_set('memory_limit', -1);

        // Lấy tất cả các đơn đã ship thành công trong 1 ngày trước
        $orders = app(OrderInterface::class)->getModel()
            ->whereHas('shipment', function ($q) {
                $q->where('status', 'delivered')
                    ->where('created_at', '<=', Carbon::now()->subDays(1)->toDateTimeString());
            })
//            ->whereNotNull('affliate_user_id')
            ->where('is_finished', 1)
            ->where('process_affiliate', '!=', 1)
            ->where('status', OrderStatusEnum::COMPLETED)
            ->get();

        foreach ($orders as $order) {
            $this->resolveOrder($order->id);
        }
    }

    public function resolveBill()
    {

    }

    /**
     * @param string $orderId
     * @return bool
     * @throws \Throwable
     */
    public function resolveOrder(int $orderId) : bool
    {
        $order = app(OrderInterface::class)->findById($orderId);
        if (!$order) {
            return false;
        }

        if ($order->process_affiliate == OrderProcessAffiliateEnums::SUCCESS()) {
            return false;
        }

        $affiliateUserId = $order->affliate_user_id;

        if (!$affiliateUserId) {
            return false;
        }

        $tree = $this->getCollaboratorTree($affiliateUserId);

        if (empty($tree)) {
            return false;
        }

        $orderAmount = $order->amount;
        $buyer = app(CustomerInterface::class)->findById($order->user_id);

        DB::beginTransaction();
        foreach ($tree as $t) {
            try {
                $amount = $orderAmount * $t['rate'];
                //
                $data = [
                    'customer_id' => $t['id'],
                    'amount' => $amount,
                    'order_id' => $orderId,
                    'sub_amount' => 0,
                    'description' => '',
                    'type' => RevenueTypeEnum::ADD_AMOUNT,
                    'buyer' => $buyer->name.' - '.$buyer->phone,
                    'rate_label' => $t['rate_label']
                ];

                $rawCollaboratorRevenueRecordData = $this->makeRevenueRecordData($data);

                //Đánh dấu đơn hàng đã xử lý hoa hồng
                DB::table('ec_orders')->where('id', '=', $orderId)->update(['process_affiliate' => 1]);

                // Ghi lịch sử
                $rawCollaboratorRevenueRecordData['created_at'] = Carbon::now();
                DB::table('ec_collaborator_revenue_record')
                    ->insert($rawCollaboratorRevenueRecordData);

                // Cập nhật ví
                DB::table('ec_customer_wallet')->where('customer_id', '=', $t['id'])->increment('amount', $amount);

            } catch (Exception $e) {
                DB::rollBack();
                return false;
            }
        }
        DB::commit();

        return true;
    }

    /**
     * get collaborator tree and rate
     * @param $affiliateUserId
     * @return array|false
     */
    public function getCollaboratorTree($affiliateUserId)
    {
        $tree = [];
        $firstCollaborator = app(CustomerInterface::class)->findById($affiliateUserId);

        if (!$firstCollaborator) {
            return false;
        }

        array_push($tree, [
            'id' => $affiliateUserId,
            'rate' => 0.06,
            'rate_label' => '6%'
        ]);

        $secondCollaborator = app(CustomerInterface::class)->findById($firstCollaborator->presenter_id);

        if ($secondCollaborator) {
            array_push($tree, [
                'id' => $secondCollaborator->id,
                'rate' => 0.02,
                'rate_label' => '2%'
            ]);
        }

        return $tree;
    }

    /**
     * @param $data
     * @return array
     */
    public function makeRevenueRecordData($data)
    {
        switch ($data['type']) {
            case RevenueTypeEnum::ADD_AMOUNT:
                $data['description'] = __('Số dư tài khoản của bạn tăng lên <b>:amount</b> - Tương ứng với <b>:rate_label</b> hoa hồng. Thông qua giao dịch mua sắm của <b>:buyer</b> với đơn hàng <b>:orderCode</b>', [
                    'amount' => format_price($data['amount']),
                    'rate_label' => $data['rate_label'],
                    'buyer' => $data['buyer'],
                    'orderCode' => get_order_code($data['order_id'])
                ]);
                break;
            case RevenueTypeEnum::SUBTRACT_AMOUNT:
                $data['description'] = __('Số dư tài khoản của giảm <b>:amount</b>. Thông qua giao dịch yêu cầu rút tiền đã được chấp thuận.', [
                    'amount' => format_price($data['sub_amount']),
                ]);
                break;
        }

        $addressKeys = ['customer_id', 'order_id', 'sub_amount', 'amount', 'description', 'type'];
        $addressData = Arr::only($data, $addressKeys);

        return $addressData;
     }
}