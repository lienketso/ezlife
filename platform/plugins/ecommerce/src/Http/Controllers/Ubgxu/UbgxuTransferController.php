<?php
/**
 * UbgxuTransfer.php
 * Created by: trainheartnet
 * Created at: 22/08/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Controllers\Ubgxu;

use Botble\Base\Forms\FormBuilder;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Forms\TransferXuForm;
use Botble\Ecommerce\Http\Requests\TransferXuRequest;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Illuminate\Support\Facades\DB;
use Throwable;
use Carbon\Carbon;

class UbgxuTransferController extends BaseController
{

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle('Tặng điểm');

        return $formBuilder->create(TransferXuForm::class)->renderForm();
    }

    public function store(
        TransferXuRequest $request,
        BaseHttpResponse $response
    )
    {
        $from = auth('customer')->user();
        $to = app(CustomerInterface::class)->getFirstBy(['phone' => $request->input('phone')]);

        if ($to == null) {
            return $response
                ->setError()
                ->setPreviousUrl(route('ubgxu.transfer.create'))
                ->setMessage('Số điện thoại không tồn tại');
        }

        if ($from->ubgxu_transfer < doubleval($request->input('amount'))) {
            return $response
                ->setError()
                ->setPreviousUrl(route('ubgxu.transfer.create'))
                ->setMessage('Số dư khả dụng không đủ');
        }

        DB::beginTransaction();
        try {
            //Trừ xu tài khoản gửi
            Customer::find($from->id)->decrement('ubgxu_transfer', $request->input('amount'));

            //Cộng xu tài khoản nhận
            Customer::find($to->id)->increment('ubgxu', $request->input('amount'));

            $transactionCode = 'TXT-XU-'.\Str::random(10);

            //Ghi log giao dịch xu cho người nhận
            DB::table('ubgxu_transaction')->insert([
                'customer_id' => $to->id,
                'amount' => $request->input('amount'),
                'description' => 'Bạn nhận được '.number_format($request->input('amount')).' điểm gửi đến từ '.$from->name.' '.$from->phone.' | Ghi chú: '.$request->input('description'),
                'transaction_type' => 'transfer_up',
                'transaction_source' => $from->phone,
                'total_day_refund' => 0,
                'rest_cashback_amount' => 0,
                'created_at' => Carbon::now(),
                'compare_code' => $transactionCode,
                'status' => 'completed'
            ]);

            //Ghi log giao dịch xu cho người gửi
            DB::table('ubgxu_transaction')->insert([
                'customer_id' => $from->id,
                'amount' => $request->input('amount'),
                'description' => 'Bạn chuyển '.number_format($request->input('amount')).' điểm đến '.$to->name.' '.$to->phone.' | Ghi chú: '.$request->input('description'),
                'transaction_type' => 'transfer_down',
                'transaction_source' => $to->phone,
                'total_day_refund' => 0,
                'rest_cashback_amount' => 0,
                'created_at' => Carbon::now(),
                'compare_code' => $transactionCode,
                'status' => 'completed'
            ]);

            DB::commit();

            return $response
                ->setPreviousUrl(route('ubgxu.transfer.create'))
                ->setMessage('Giao dịch thành công');

        } catch (Throwable $th) {
            DB::rollBack();

            return $response
                ->setError()
                ->setPreviousUrl(route('ubgxu.transfer.create'))
                ->setMessage('Giao dịch thất bại');
        }
    }
}