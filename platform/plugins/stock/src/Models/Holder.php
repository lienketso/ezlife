<?php


namespace Botble\Stock\Models;


use Botble\Stock\Enums\HolderStatusEnum;
use Botble\Base\Models\BaseModel;
use Botble\Base\Traits\EnumCastable;

class Holder extends BaseModel
{
    use EnumCastable;

    protected $table = 'cp_codong';
    protected $dates = [
        'created_at',
        'updated_at',
    ];
  

    protected $fillable = ['name','description','contract_code'];
}