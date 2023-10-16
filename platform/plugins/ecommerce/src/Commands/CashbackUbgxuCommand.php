<?php
/**
 * CashbackUbgxuCommand.php
 * Created by: trainheartnet
 * Created at: 07/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Commands;

use Botble\Ecommerce\Models\UbgxuTransaction;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuPayInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuPayLogInterface;
use Illuminate\Console\Command;
use Carbon\Carbon;

class CashbackUbgxuCommand extends Command
{
    /**
     * @var string
     */
    protected $signature = 'ubgxu:hoanxu {--date=}';

    /**
     * @var string
     */
    protected $description = 'Xử lý hoàn xu';

    /**
     * @var UbgxuPayLogInterface
     */
    protected $ubgxuPayLogRepository;

    /**
     * @var
     */
    protected $ubgxuPayRepository;

    /**
     * @var
     */
    protected $customerRepository;

    public function __construct(
        UbgxuPayLogInterface $ubgxuPayLogRepository,
        UbgxuPayInterface $ubgxuPayRepository,
        CustomerInterface $customerRepository
    )
    {
        parent::__construct();
        $this->ubgxuPayLogRepository = $ubgxuPayLogRepository;
        $this->ubgxuPayRepository = $ubgxuPayRepository;
        $this->customerRepository = $customerRepository;
    }

    public function handle()
    {
        @ini_set('max_execution_time', -1);
        @ini_set('memory_limit', -1);

        $dateCashback = $this->option('date');
        $carbonDate = $dateCashback != null ? Carbon::createFromFormat('d/m/Y',  $dateCashback) : Carbon::now();

        //Lấy các giao dịch chưa hoàn xu xong
        UbgxuTransaction::where('transaction_type', 'cash')
            ->where('status', 'on_cash_back')
            ->chunk(50, function($transactions) use ($carbonDate) {
                foreach ($transactions as $transaction) {
                    // Kiểm tra tài chủ tài khoản có tồn tại ko ?
                    $customer = $this->customerRepository->findById($transaction->customer_id);

                    if ($customer != null) {
                        // với mỗi giao dịch, kiểm tra giao dịch đó đã hoàn xu xong hay chưa
                        if ($transaction->paid_day_refund < $transaction->total_day_refund && $transaction->status != 'completed') {
                            $percent = intval($transaction->percent_cashback) / 100;
                            $cashbackAmount = $transaction->amount * $percent;
                            $cashbackPerday = $cashbackAmount / $transaction->total_day_refund;

                            //Tạo hoàn xu
                            $this->ubgxuPayRepository->getModel()
                                ->create([
                                    'amount' => $cashbackPerday,
                                    'transaction_id' => $transaction->id,
                                    'customer_id' => $transaction->customer_id,
                                    'created_at' => $carbonDate
                                ]);

                            //Cập nhật số xu hoàn vào giao dịch
                            $paidDayRefund = $transaction->paid_day_refund + 1;
                            $transaction->paid_day_refund = $paidDayRefund;
                            $transaction->rest_cashback_amount = $cashbackAmount - $cashbackPerday * $paidDayRefund;
                            $transaction->created_at = $carbonDate;
                            $transaction->save();

                            //Ghi log giao dịch hoàn xu
                            $this->ubgxuPayLogRepository->getModel()
                                ->create([
                                    'content' => 'Bạn nhận được '.number_format($cashbackPerday).' xu. Thông qua chính sách hoàn xu từ giao dịch '.$transaction->compare_code.' . Số xu còn đợi hoàn của đơn hàng này là: '.number_format($cashbackAmount - $cashbackPerday * $paidDayRefund). ' xu',
                                    'customer_id' => $transaction->customer_id,
                                    'created_at' => $carbonDate
                                ]);

                            //Trả xu ngày vào ví người dùng
                            $this->customerRepository->getModel()
                                ->find($transaction->customer_id)
                                ->increment('ubgxu', $cashbackPerday);
                        } else {
                            // nếu đã hoàn tiền thành công thì cập nhật status để lần sau đỡ truy vấn
                            $transaction->status = 'completed';
                            $transaction->save();
                        }
                    }
                }
            });
    }
}