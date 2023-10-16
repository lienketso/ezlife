<?php
/**
 * WalletHistory.php
 * Created by: trainheartnet
 * Created at: 10/06/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Models;

use Botble\Base\Models\BaseModel;
use Botble\Base\Traits\EnumCastable;
use Botble\Ecommerce\Enums\WalletHistoryTypeEnum;
use Yajra\DataTables\Html\Editor\Fields\BelongsTo;

class WalletHistory extends BaseModel
{
    use EnumCastable;
    /**
     * @var string
     */
    protected $table = 'ec_customer_wallet_history';

    /**
     * @var string[]
     */
    protected $fillable = [
        'wallet_id',
        'description',
        'type',
        'amount',
        'order_id'
    ];

    protected $cast = [
        'type' => WalletHistoryTypeEnum::class
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function wallet() : BelongsTo
    {
        return $this->belongsTo(Wallet::class, 'wallet_id', 'id');
    }
}
