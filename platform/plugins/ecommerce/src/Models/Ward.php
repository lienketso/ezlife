<?php
/**
 * Ward.php
 * Created by: trainheartnet
 * Created at: 18/05/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;

class Ward extends BaseModel
{
    /**
     * @var string
     */
    protected $table = 'wards';

    /**
     * @var string[]
     */
    protected $fillable = [];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
