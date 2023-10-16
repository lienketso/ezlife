<?php

namespace Botble\Marketplace\Models;

use Botble\Base\Models\BaseModel;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Models\Product;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Commissions extends BaseModel
{
    protected $table = 'commissions';

    protected $fillable = [
        'customer_id',
        'customer_level',
        'presenter_id',
        'product_id',
        'order_id',
        'amount',
        'percentage',
        'commission',
        'is_agency',
        'description',
        'status',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class)->withDefault();
    }

    public function product(): BelongsTo {
        return $this->belongsTo(Product::class)->withDefault();
    }

}