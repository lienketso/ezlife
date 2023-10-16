<?php

namespace Botble\Ecommerce\Commands;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Illuminate\Console\Command;

class ResetPointCommand extends Command
{
    public $customer;
    protected $signature = 'cms:customers:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset point of customer on month';

    public function __construct(CustomerInterface $customerRepository)
    {
        parent::__construct();
        $this->customer = $customerRepository;
    }

    public function handle()
    {
        try {
            $listCustomer = $this->customer->getModel()->where('ubgxu','>',0)->update(['ubgxu'=>0]);
            $this->info('Cron reset ubgxu successful');
        }catch (\Exception $e){
            return $e->getMessage();
        }

    }

}