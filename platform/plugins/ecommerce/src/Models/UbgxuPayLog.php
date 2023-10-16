<?php
/**
 * UbgxuPayLog.php
 * Created by: trainheartnet
 * Created at: 06/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;

class UbgxuPayLog extends BaseModel
{
    /**
     * @var string
     */
    protected $table = 'ubgxu_pay_log';

    /**
     * @var string[]
     */
    protected $fillable = [
        'content',
        'comeback',
        'recomeback',
        'current_coin',
        'customer_id',
        'user_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}