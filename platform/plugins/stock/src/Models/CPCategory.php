<?php


namespace Botble\Stock\Models;


use Botble\Stock\Enums\CPCategoryStatusEnum;
use Botble\Base\Models\BaseModel;
use Botble\Base\Traits\EnumCastable;

class CPCategory extends BaseModel
{
    use EnumCastable;

    protected $table = 'cp_category';
    protected $dates = [
        'created_at',
        'updated_at',
    ];
    /**
     * @var array
     */
    protected $casts = [
        'status' => CPCategoryStatusEnum::class,
    ];

    protected $fillable = ['name','description','thumbnail','sort_order','parent','status','category_code'];
}