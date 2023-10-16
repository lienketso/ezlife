<?php
/**
 * AddTrialPackageForSaleUser.php
 * Created by: trainheartnet
 * Created at: 16/08/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Commands;

use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuTransactionInterface;
use Botble\Stock\Enums\ContractPaymentStatusEnum;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Models\CPHistory;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class AddTrialPackageForSaleUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cophan:trial-package {phone} {packagecode}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add trial package for user';

    protected $customerRepository;
    protected $packageRepository;
    protected $contractRepository;
    protected $ubgxuTransactionRepository;

    /**
     * AddTrialPackageForSaleUser constructor.
     * @param CustomerInterface $customerRepository
     * @param PackageInterface $packageRepository
     * @param ContractInterface $contractRepository
     * @param UbgxuTransactionInterface $ubgxuTransactionRepository
     */
    public function __construct(
        CustomerInterface $customerRepository,
        PackageInterface $packageRepository,
        ContractInterface $contractRepository,
        UbgxuTransactionInterface $ubgxuTransactionRepository
    )
    {
        parent::__construct();

        $this->customerRepository = $customerRepository;
        $this->packageRepository = $packageRepository;
        $this->contractRepository = $contractRepository;
        $this->ubgxuTransactionRepository = $ubgxuTransactionRepository;
    }

    /**
     * @return bool
     */
    public function handle()
    {
        $phone = $this->argument('phone');
        $packagecode = $this->argument('packagecode');

        //Find customer by phone
        $customer = $this->customerRepository->getFirstBy([
            'phone' => $phone
        ]);

        if (!$customer) {
            $this->error('Not found customer with phone '.$phone);
            return false;
        }

        //Find package
        $package = $this->packageRepository->getFirstBy([
            'package_code' => $packagecode
        ]);

        if (!$package) {
            $this->error('Not found package with code '.$packagecode);
            return false;
        }

        //Register new contract for this user
        $current = Carbon::now()->subMonths(2);

        $trialExpires = Carbon::now()->addDays($package->end_date);

        $packageCost = 5000000;

        $totalYear = ceil($package->end_date / 365);

        $totalPercentMoney = $package->percent_paid_by_money * $totalYear;
        $totalPercentXu = $package->percent_paid_by_ubgxu * $totalYear;

        $daily_profit = $packageCost * $totalPercentMoney / 100 / $package->end_date; // Lãi hàng ngày VNĐ
        $daily_profit_xu = $packageCost * $totalPercentXu / 100 / $package->end_date; // Lãi hàng ngày xu

        $totalDailyProfit = $daily_profit + $daily_profit_xu;

        $totalProfit = $totalDailyProfit * intval($package->end_date);

        //sinh mã hợp đồng mới
        $today_contract = $this->contractRepository->getModel()->whereDate('created_at', '=', $current->toDateString())->count();

        if ($today_contract < 10) {
            $today_contract = '00' . $today_contract;
        }
        if ($today_contract < 100 && $today_contract >= 10) {
            $today_contract = '0' . $today_contract;
        }
        $contract_hard_code = '01' . '-' . $packagecode . '-' . $today_contract . '-' . 'UBGGroup' . '-' . '6' . '-' . '2022';

        $data = [
            'customer_id' => $customer->id,
            'package_id' => $package->id,
            'name' => $package->name,
            'expires_date' => $trialExpires,
            'first_buy_price' => $packageCost,
            'first_buy_percentage' => $package->percentage,
            'percent_paid_by_money'=>$package->percent_paid_by_money,
            'percent_paid_by_ubgxu'=>$package->percent_paid_by_ubgxu,
            'status' => ContractStatusEnum::ACTIVE,
            'contract_paid_status' => ContractPaymentStatusEnum::PAID,
            'daily_profit_amount' => round($daily_profit, 0, PHP_ROUND_HALF_DOWN),
            'daily_profit_amount_xu' => round($daily_profit_xu, 0, PHP_ROUND_HALF_DOWN),
            'total_profit_amount' => $totalProfit,
            'presenter_id' => 0,
            'payment_type' => $package->payment_type,
            'commission' => $package->commission,
            'type' => $package->type,
            'area' => 'Thành phố Hà Nội',
            'address' => '189 Hoàng Cầu, Trung Liệt, Đống Đa, Hà Nội',
            'customer_info' => json_encode([
                'date_of_birth' => '',
                'ethnic' => 'Kinh',
                'nationality' => 'Việt nam',
                'cmnd' => '',
                'date_of_issue' => '',
                'place_of_issue' => '',
                'permanent_address' => '',
                'current_address' => ''
            ]),
            'contract_hard_code' => $contract_hard_code,
            'created_at' => $current,
            'active_date' => $current,
            'total_day_paid' => Carbon::now()->diffInDays($current)
        ];

        try {
            $newContract = $this->contractRepository->create($data);
            $code = Carbon::now()->format('dmY') . '-' . Str::slug($customer->name) . '-' . Str::slug($package->slug) . '-' . $newContract->id;
            $contractCode = [
                'contract_code' => $code
            ];
            $this->contractRepository->update(['id' => $newContract->id], $contractCode);
        } catch (\Exception $e) {
//            $this->error('Error while create contract for user with phone '.$phone);
            $this->error($e);
            return false;
        }

        //Fake run profit

        $rangeOfDays = Carbon::now()->diffInDays($current);

        for ($i = 1; $i <= $rangeOfDays; $i++) {
            $amount = 0;
            $amount_xu = 0;
            if($newContract->payment_type=='coin'){
                $amount_xu = $newContract->daily_profit_amount_xu;
            }else if($newContract->payment_type=='vn'){
                $amount = $newContract->daily_profit_amount;
            }else if($newContract->payment_type=='all'){
                $amount = $newContract->daily_profit_amount;
                $amount_xu = $newContract->daily_profit_amount_xu;
            }
            //lưu lịch sử
            $dataHis = [
                'customer_id' => $newContract->customer_id,
                'contract_id' => $newContract->id,
                'amount' => $amount,
                'amount_xu' => $amount_xu,
                'type' => 'profit',
                'contract_code'=>$newContract->contract_code,
                'history_date' => Carbon::now()->subDays($rangeOfDays - $i),
                'created_at' => Carbon::now()->subDays($rangeOfDays - $i)->format('Y-m-d H:i:s')
            ];

            CPHistory::create($dataHis);

            //Cộng xu cho user và lưu lịch sử
            $customer = $this->customerRepository->getFirstBy(['id'=>$newContract->customer_id]);
            if($newContract->payment_type=='coin' || $newContract->payment_type=='all') {
//                $dataCustomer = [
//                    'ubgxu' => $customer->ubgxu + $newContract->daily_profit_amount_xu
//                ];
                //update xu customer
                //$this->customerRepository->update(['id' => $customer->id], $dataCustomer);
                //Log xu
                $contentXu = 'Bạn vừa được cộng thêm ' . number_format($newContract->daily_profit_amount_xu) . ' xu từ hợp đồng cổ phần : ' . $newContract->contract_hard_code;

                $dataLogXu = [
                    'customer_id' => $customer->id,
                    'amount' => $newContract->daily_profit_amount_xu,
                    'description' => $contentXu,
                    'transaction_type' => 'increase',
                    'transaction_source' => 'stock',
                    'compare_code' => $newContract->contract_hard_code,
                    'status' => 'completed',
                    'created_at' => Carbon::now()->subDays($rangeOfDays - $i)
                ];
                $this->ubgxuTransactionRepository->create($dataLogXu);
            }

            //cập nhật số tiền rút khả dụng
            $this->contractRepository->update([
                'id'=>$newContract->id
            ],[
                'amount_available'=>$newContract->amount_available+$newContract->daily_profit_amount
            ]);
        }

        $this->info('Success');

        return true;
    }
}