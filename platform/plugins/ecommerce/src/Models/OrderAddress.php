<?php

namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;
use Botble\Base\Supports\Avatar;
use Botble\Ecommerce\Traits\LocationTrait;
use Exception;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use RvMedia;

class OrderAddress extends BaseModel
{

    /**
     * @var string
     */
    protected $table = 'ec_order_addresses';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'country',
        'state',
        'city',
        'ward',
        'address',
        'zip_code',
        'order_id',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;

    use LocationTrait;

    /**
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        try {
            return (new Avatar)->create($this->name)->toBase64();
        } catch (Exception $exception) {
            return RvMedia::getDefaultImage();
        }
    }

    /**
     * @return BelongsTo
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class)->withDefault();
    }
}
