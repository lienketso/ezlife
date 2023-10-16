<?php

namespace Botble\Ecommerce\Services;

use Botble\Ecommerce\Enums\OrderProcessAffiliateEnums;
use Botble\Ecommerce\Models\Product;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Marketplace\Enums\RevenueTypeEnum;
use Botble\Marketplace\Repositories\Interfaces\CommissionsInterface;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class HandleCommissionService
{
    public function resolveOrder(int $orderId){
        $order = app(OrderInterface::class)->findById($orderId);
        if (!$order) {
            return false;
        }
        if ($order->process_affiliate == OrderProcessAffiliateEnums::SUCCESS()) {
            return false;
        }
        //Cộng tiền hàng cho nhà cung cấp
        try {
            $product = $order->products;
            foreach ($product as $p) {
                $inProduct = Product::find($p->product_id);
                $percentProduct = (100 - $inProduct->commission) / 100;
                $increeAmount = $p->price * $percentProduct;
                DB::table('ec_customers')->where('id', $order->store->customer_id)->increment('vendor_wallet', $increeAmount);
            }
        }catch (\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }

        $buyer = app(CustomerInterface::class)->findById($order->user_id);

        DB::beginTransaction();
        try {
            $commissions = DB::table('commissions')
                ->where('order_id', $orderId)->get();

            if(!$commissions){
                return false;
            }
            foreach($commissions as $com){
                DB::table('commissions')->where('id',$com->id)->update(['status'=>'active']);
                // Cập nhật ví tiền mặt
//                DB::table('ec_customer_wallet')->where('customer_id', '=', $com->customer_id)->increment('amount', $com->commission);
                //Cộng vào ví xu
//                DB::table('ec_customers')->where('id', $com->customer_id)->increment('ubgxu', $com->commission);
                //Cộng tiền vào ví tạm tính
                DB::table('ec_customers')->where('id', $com->customer_id)->increment('wallet', $com->commission);
                //Ghi log giao dịch xu
                DB::table('ubgxu_pay_log')->insert([
                    'content' => 'Bạn vừa nhận được '.number_format($com->commission).' điểm thành công đơn hàng số '.get_order_code($order->id),
                    'customer_id' => $com->customer_id,
                    'created_at' => Carbon::now()
                ]);
                //Tạo giao dịch xu
                DB::table('ubgxu_transaction')->insert([
                    'customer_id' => $com->customer_id,
                    'amount' => $com->commission,
                    'description' => 'Bạn vừa nhận được '.number_format($com->commission).' điểm thành công đơn hàng số '.get_order_code($order->id),
                    'transaction_type' => 'cash',
                    'transaction_source' => 'https://ezlife.vn',
                    'total_day_refund' => 0,
                    'rest_cashback_amount' => 0,
                    'compare_code' => get_order_code($order->id),
                    'created_at' => Carbon::now(),
                    'status' => 'completed'
                ]);

                //ghi lịch sử doanh thu vào bảng ec_collaborator_revenue_record
                $data = [
                    'customer_id' => $com->customer_id,
                    'amount' => $com->commission,
                    'order_id' => $orderId,
                    'sub_amount' => 0,
                    'description' => '',
                    'type' => RevenueTypeEnum::ADD_AMOUNT,
                    'buyer' => $buyer->name.' - '.$buyer->phone,
                    'rate_label' => $com->percentage.'%'
                ];

                $rawCollaboratorRevenueRecordData = $this->makeRevenueRecordData($data);
                $rawCollaboratorRevenueRecordData['created_at'] = Carbon::now();
                DB::table('ec_collaborator_revenue_record')
                    ->insert($rawCollaboratorRevenueRecordData);

            }
            //Đánh dấu đơn hàng đã xử lý hoa hồng
            DB::table('ec_orders')->where('id', '=', $orderId)->update(['process_affiliate' => 1]);

        }catch (\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
        DB::commit();

    }


    public function makeRevenueRecordData($data)
    {
        switch ($data['type']) {
            case RevenueTypeEnum::ADD_AMOUNT:
                $data['description'] = __('Số dư tài khoản của bạn được cộng <b>:amount</b> - Tương ứng với <b>:rate_label</b> hoa hồng. Thông qua giao dịch mua sắm của <b>:buyer</b> với đơn hàng <b>:orderCode</b>', [
                    'amount' => format_price($data['amount']),
                    'rate_label' => $data['rate_label'],
                    'buyer' => $data['buyer'],
                    'orderCode' => get_order_code($data['order_id'])
                ]);
                break;
            case RevenueTypeEnum::SUBTRACT_AMOUNT:
                $data['description'] = __('Số dư tài khoản của trừ <b>:amount</b>. Thông qua giao dịch yêu cầu rút tiền đã được chấp thuận.', [
                    'amount' => format_price($data['sub_amount']),
                ]);
                break;
        }

        $addressKeys = ['customer_id', 'order_id', 'sub_amount', 'amount', 'description', 'type'];
        $addressData = Arr::only($data, $addressKeys);

        return $addressData;
    }


}