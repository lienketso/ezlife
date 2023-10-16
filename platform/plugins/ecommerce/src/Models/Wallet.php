<?php
/**
 * Wallet.php
 * Created by: trainheartnet
 * Created at: 10/06/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\ACL\Enums\UserStatusEnum;
use Botble\Base\Models\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Wallet extends BaseModel
{
    /**
     * @var string
     */
    protected $table = 'ec_customer_wallet';

    /**
     * @var string[]
     */
    protected $fillable = [
        'customer_id',
        'amount',
        'amount_temp',
        'created_at',
        'updated_at',
        'bank_info'
    ];

    protected $cast = [
        'type' => UserStatusEnum::class,
        'bank_info'     => 'array',
    ];

    /**
     * @return BelongsTo
     */
    public function customer() : BelongsTo
    {
        return $this->belongsTo(Customer::class, 'id', 'customer_id');
    }

    /**
     * @return HasMany
     */
    public function histories() : HasMany
    {
        return $this->hasMany(WalletHistory::class, 'wallet_id', 'id');
    }
}
