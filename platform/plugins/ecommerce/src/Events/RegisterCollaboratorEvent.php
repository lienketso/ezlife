<?php
/**
 * RegisterCollaboratorEvent.php
 * Created by: trainheartnet
 * Created at: 28/04/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Events;

use Botble\Base\Events\Event;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Models\Order;
use Illuminate\Queue\SerializesModels;

class RegisterCollaboratorEvent extends Event
{
    use SerializesModels;

    /**
     * @var Customer
     */
    public $customer;

    /**
     * RegisterCollaboratorEvent constructor.
     * @param Customer $customer
     */
    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }
}