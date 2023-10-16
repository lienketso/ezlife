<?php
/**
 * Districts.php
 * Created by: trainheartnet
 * Created at: 18/05/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;

class Districts extends BaseModel
{
    /**
     * @var string
     */
    protected $table = 'districts';

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

    public function getWards()
    {
        return $this->hasMany(Ward::class, 'district_id', 'id');
    }
}
