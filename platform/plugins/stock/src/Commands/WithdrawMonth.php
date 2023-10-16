<?php

namespace Botble\Stock\Commands;

use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Repositories\Interfaces\WithdrawInterface;
use Illuminate\Console\Command;

class WithdrawMonth extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:withdraw';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create with draw in month';

    /**
     * Create a new command instance.
     *
     * @return void
     */

    protected $withdrawRepository;
    protected $contractRepository;

    public function __construct(WithdrawInterface $withdrawRepository, ContractInterface $contractRepository)
    {
        parent::__construct();
        $this->withdrawRepository = $withdrawRepository;
        $this->contractRepository = $contractRepository;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try{
            $contract = $this->contractRepository
                ->getModel()
                ->where('status','active')
                ->whereDate('expires_date','>=',now()->toDateString())->get();
            if($contract){
                foreach($contract as $d){
                    $data = [
                      'customer_id'=>$d->customer_id,
                      'package_id'=>$d->package_id,
                      'contract_id'=>$d->id,
                      'amount'=>($d->daily_profit_amount*30),
                      'status'=>'pending',
                      'created_at'=>now()
                    ];
                    $this->withdrawRepository->create($data);
                }
            }
            $this->info('Cron job thành công tạo yêu cầu rút tiền');
            return 'cron withdraw successful';
        }catch (\Exception $e){
            return $e->getMessage();
        }
    }
}
