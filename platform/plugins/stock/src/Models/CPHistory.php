<?php


namespace Botble\Stock\Models;


use Botble\Base\Models\BaseModel;
use Botble\Ecommerce\Models\Customer;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CPHistory extends BaseModel
{
    protected $table = 'cp_history';

    /**
     * @var array
     */
    protected $fillable = [
        'customer_id',
        'package_id',
        'amount',
        'amount_xu',
        'history_date',
        'type',
        'contract_code',
        'contract_id',
        'contract_code',
        'created_at',
        'updated_at'
    ];

    public function contract(): BelongsTo{
        return $this->belongsTo(Contract::class,'contract_id');
    }

    public function package(): BelongsTo{
        return $this->belongsTo(Package::class,'package_id');
    }

    public function customer(): BelongsTo{
        return $this->belongsTo(Customer::class,'customer_id');
    }

}