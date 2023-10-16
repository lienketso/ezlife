<?php
/**
 * CollaboratorRevenueRecord.php
 * Created by: trainheartnet
 * Created at: 05/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;
use Botble\Base\Traits\EnumCastable;
use Botble\Marketplace\Enums\RevenueTypeEnum;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Html;

class CollaboratorRevenueRecord extends BaseModel
{
    use EnumCastable;
    /**
     * @var string
     */
    protected $table = 'ec_collaborator_revenue_record';

    /**
     * @var array
     */
    protected $fillable = [
        'customer_id',
        'order_id',
        'sub_amount',
        'amount',
        'description',
        'type',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'type' => RevenueTypeEnum::class,
    ];

    /**
     * @return BelongsTo
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class)->withDefault();
    }

    /**
     * @return BelongsTo
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class)->withDefault();
    }

    /**
     * @return string
     */
    public function getDescriptionTooltipAttribute(): string
    {
        if (!$this->description) {
            return '';
        }

        return Html::tag('span', '<i class="fa fa-info-circle text-info"></i>', [
            'class'                  => 'ms-1',
            'data-bs-toggle'         => 'tooltip',
            'data-bs-original-title' => $this->description,
            'title'                  => $this->description,
        ]);
    }
}