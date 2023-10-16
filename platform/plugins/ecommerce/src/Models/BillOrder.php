<?php
/**
 * BillOrder.php
 * Created by: trainheartnet
 * Created at: 09/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\ACL\Models\User;
use Botble\Base\Models\BaseModel;

class BillOrder extends BaseModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ec_order_bill';

    /**
     * @var array
     */
    protected $fillable = [
        'bill_code',
        'bill_amount',
        'customer_id',
        'cashier_id',
        'description',
        'presenter_id',
        'cashback_type',
        'pay_by_money',
        'pay_by_ubgxu'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function getCustomer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function getCashier()
    {
        return $this->belongsTo(User::class, 'cashier_id', 'id');
    }
}