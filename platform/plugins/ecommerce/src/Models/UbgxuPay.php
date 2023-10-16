<?php
/**
 * UbgxuPay.php
 * Created by: trainheartnet
 * Created at: 06/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;

class UbgxuPay extends BaseModel
{
    /**
     * @var string
     */
    protected $table = 'ubgxu_pay';

    /**
     * @var string[]
     */
    protected $fillable = [
        'amount',
        'transaction_id',
        'customer_id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function transaction()
    {
        return $this->belongsTo(UbgxuTransaction::class, 'transaction_id', 'id');
    }
}