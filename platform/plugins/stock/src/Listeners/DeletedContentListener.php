<?php

namespace Botble\Stock\Listeners;

use Botble\Base\Events\DeletedContentEvent;
use Exception;
use MetaBox;

class DeletedContentListener
{

    /**
     * Handle the event.
     *
     * @param DeletedContentEvent $event
     * @return void
     */
    public function handle(DeletedContentEvent $event)
    {
        try {
            MetaBox::deleteMetaData($event->data, 'stock_schema_config');
        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }
}
