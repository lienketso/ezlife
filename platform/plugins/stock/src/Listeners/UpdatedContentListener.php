<?php

namespace Botble\Stock\Listeners;

use Botble\Base\Events\UpdatedContentEvent;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Stock\Repositories\Interfaces\PackageInterface;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Arr;
use MetaBox;

class UpdatedContentListener
{

    /**
     * Handle the event.
     *
     * @param UpdatedContentEvent $event
     * @return void
     */
    public function handle(UpdatedContentEvent $event)
    {
        try {
            if ($event->request->has('content') && $event->request->has('stock_schema_config')) {
                $config = $event->request->input('stock_schema_config');
                if (!empty($config)) {
                    foreach ($config as $key => $item) {
                        if (!$item[0]['value'] && !$item[1]['value']) {
                            Arr::forget($config, $key);
                        }
                    }
                }

                if (empty($config)) {
                    MetaBox::deleteMetaData($event->data, 'stock_schema_config');
                } else {
                    MetaBox::saveMetaBoxData($event->data, 'stock_schema_config', $config);
                }
            }

            //cập nhật ngày hiệu lực và ngày hết hiệu lực cho hđ
            if ($event->data->status == ContractStatusEnum::ACTIVE && $event->data->expires_date == null) {
                $contract = $event->data;
                $package = app(PackageInterface::class)->findById($contract->package_id);
                $dayOfTerms = $package->end_date;
                $startOfTerm = Carbon::now();
                $endOfTerm = Carbon::now()->addDays($dayOfTerms);
                app(ContractInterface::class)->update([
                    'id' => $contract->id
                ], [
                    'active_date' => $startOfTerm,
                    'expires_date' => $endOfTerm
                ]);
            }

        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }
}
