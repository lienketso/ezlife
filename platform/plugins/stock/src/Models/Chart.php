<?php


namespace Botble\Stock\Models;
use Botble\Base\Models\BaseModel;

class Chart extends BaseModel
{
    protected $table = 'cp_chart';
    protected $dates = [
        'created_at',
        'updated_at',
    ];
    protected $fillable = [
        'price',
        'chart_date',
    ];

}