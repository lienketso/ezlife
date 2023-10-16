<?php
/**
 * Province.php
 * Created by: trainheartnet
 * Created at: 18/05/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;

class Province extends BaseModel
{
    /**
     * @var string
     */
    protected $table = 'provinces';

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

    public function getDistricts()
    {
        return $this->hasMany(Districts::class, 'province_id', 'id');
    }
}
