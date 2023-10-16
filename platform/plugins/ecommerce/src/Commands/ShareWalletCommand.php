<?php

namespace Botble\Ecommerce\Commands;

use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;


class ShareWalletCommand extends Command
{
    public $customer;
    protected $signature = 'cms:wallet:share';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Chia hoa hồng từ ví tạm tính vào các ví điểm và ví tiền mặt';

    public function __construct(CustomerInterface $customerRepository)
    {
        parent::__construct();
        $this->customer = $customerRepository;
    }

    public function handle()
    {
        DB::beginTransaction();
        try {
            $customers = $this->customer->getModel()->where('wallet','>',0)->get();
            foreach ($customers as $c){
                //Cộng tiền vào ví điểm
                $tyle = ($c->wallet*0.5);
                DB::table('ec_customers')->where('id', $c->id)->increment('ubgxu', $tyle);
                //Cộng tiền vào ví tiền mặt
                DB::table('ec_customer_wallet')->where('customer_id', '=', $c->id)->increment('amount', $tyle);
                //Reset ví tạm tính về 0
                DB::table('ec_customers')->where('id', $c->id)->update(['wallet'=>0]);
            }

            $this->info('Cron job chia hoa hồng vào các ví thành công');
        }catch (\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
        DB::commit();
    }

}