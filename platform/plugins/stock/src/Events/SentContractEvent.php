<?php
namespace Botble\Stock\Events;

use Botble\Base\Events\Event;
use Illuminate\Queue\SerializesModels;
use stdClass;
use Eloquent;

class SentContractEvent extends Event
{
    use SerializesModels;
    /**
     * @var Eloquent|false
     */
    public $data;

    /**
     * SentContactEvent constructor.
     * @param Eloquent|false|stdClass $data
     */
    public function __construct($data)
    {
        $this->data = $data;
    }
}