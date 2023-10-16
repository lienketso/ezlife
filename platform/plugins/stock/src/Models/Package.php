<?php


namespace Botble\Stock\Models;


use Botble\Stock\Enums\PackageStatusEnum;
use Botble\Base\Models\BaseModel;
use Botble\Base\Traits\EnumCastable;
use Botble\Stock\Enums\StockPaymentTypeEnum;
use Botble\Stock\Enums\StockTypeEnum;

class Package extends BaseModel
{
    use EnumCastable;

    protected $table = 'cp_package';

    protected $dates = [
        'created_at',
        'updated_at',
    ];
    /**
     * @var array
     */
    protected $casts = [
        'status' => PackageStatusEnum::class,
        'payment_type' => StockPaymentTypeEnum::class,
        'type' => StockTypeEnum::class
    ];

    protected $fillable = [
        'name',
        'percentage',
        'end_date',
        'price_per_stock',
        'qty_of_stock',
        'content',
        'thumbnail',
        'cp_category_id',
        'status',
        'percent_paid_by_ubgxu',
        'percent_paid_by_money', 
        'package_code',
        'payment_type',
        'commission',
        'type'
    ];

    public function setCommissionAttribute($value){
        $this->attributes['commission'] = json_encode($value);
    }
}