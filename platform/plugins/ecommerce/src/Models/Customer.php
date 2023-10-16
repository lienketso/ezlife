<?php

namespace Botble\Ecommerce\Models;

use Botble\Base\Supports\Avatar;
use Botble\Base\Traits\EnumCastable;
use Botble\Ecommerce\Enums\CollaboratorLevelEnums;
use Botble\Ecommerce\Enums\CollaboratorRequestEnum;
use Botble\Ecommerce\Enums\CustomerStatusEnum;
use Botble\Ecommerce\Notifications\ResetPasswordNotification;
use Botble\Marketplace\Models\Revenue;
use Botble\Marketplace\Models\VendorInfo;
use Botble\Marketplace\Models\Withdrawal;
use Eloquent;
use Exception;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use RvMedia;
use MacroableModels;
use Illuminate\Support\Str;
use Carbon\Carbon;

/**
 * @mixin Eloquent
 */
class Customer extends Authenticatable
{
    use Notifiable, EnumCastable;

    /**
     * @var string
     */
    protected $table = 'ec_customers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'phone',
        'dob',
        'status',
        'ref_id',
        'presenter_id',
        'phone_code',
        'affiliation_id',
        'affiliater_status',
        'card_front',
        'card_back',
        'area',
        'area_district',
        'voice_count',
        'presenter_id',
        'ubgxu',
        'pay_log',
        'stock_money',
        'colalborator_level',
        'ubgxu_transfer',
        'transferable',
        'identification_number',
        'identification_date',
        'wallet',
        'vendor_wallet'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'status' => CustomerStatusEnum::class,
        'affiliater_status' => CollaboratorRequestEnum::class,
        'collaborator_level' => CollaboratorLevelEnums::class
    ];

    /**
     * Send the password reset notification.
     *
     * @param string $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    /**
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        if ($this->avatar) {
            return RvMedia::getImageUrl($this->avatar, 'thumb');
        }

        try {
            return (new Avatar)->create($this->name)->toBase64();
        } catch (Exception $exception) {
            return RvMedia::getDefaultImage();
        }
    }

    /**
     * @return HasMany
     */
    public function orders()
    {
        return $this->hasMany(Order::class, 'user_id', 'id');
    }

    /**
     * @return HasMany
     */
    public function addresses()
    {
        return $this->hasMany(Address::class, 'customer_id', 'id');
    }

    /**
     * @return BelongsToMany
     */
    public function discounts()
    {
        return $this->belongsToMany(Discount::class, 'ec_discount_customers', 'customer_id', 'id');
    }

    /**
     * @return BelongsToMany
     */
    public function wishlist(): HasMany
    {
        return $this->hasMany(Wishlist::class, 'customer_id');
    }

    protected static function boot()
    {
        parent::boot();

        self::deleting(function (Customer $customer) {
            $customer->discounts()->detach();
            Review::where('customer_id', $customer->id)->delete();
            Wishlist::where('customer_id', $customer->id)->delete();
            Address::where('customer_id', $customer->id)->delete();
            Order::where('user_id', $customer->id)->update(['user_id' => 0]);

            if (is_plugin_active('marketplace')) {
                Revenue::where('customer_id', $customer->id)->delete();
                Withdrawal::where('customer_id', $customer->id)->delete();
                VendorInfo::where('customer_id', $customer->id)->delete();
            }
        });
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function __get($key)
    {
        if (class_exists('MacroableModels')) {
            $method = 'get' . Str::studly($key) . 'Attribute';
            if (MacroableModels::modelHasMacro(get_class($this), $method)) {
                return call_user_func([$this, $method]);
            }
        }

        return parent::__get($key);
    }

    /**
     * @return HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'customer_id');
    }

    /**
     * @return BelongsToMany
     */
    public function promotions()
    {
        return $this
            ->belongsToMany(Discount::class, 'ec_discount_customers', 'customer_id')
            ->where('type', 'promotion')
            ->where('start_date', '<=', now())
            ->where('target', 'customer')
            ->where(function ($query) {
                return $query
                    ->whereNull('end_date')
                    ->orWhere('end_date', '>=', now());
            })
            ->where('product_quantity', 1);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function wallet()
    {
        return $this->hasOne(Wallet::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function walletHistory()
    {
        return $this->wallet()->histories();
    }

    /**
     * @return \Illuminate\Database\Eloquent\HigherOrderBuilderProxy|mixed
     */
    public function getBalance()
    {
        return $this->wallet()->first();
    }

    /**
     * @return HasMany
     */
    public function getParent() : HasMany
    {
        return $this->hasMany(Customer::class, 'id', 'presenter_id');
    }

    /**
     * @return HasMany
     */
    public function children()
    {
        return $this->hasMany(Customer::class,'presenter_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function walletInfo()
    {
        return $this->hasOne(Wallet::class, 'customer_id')->withDefault();
    }

    /**
     * @return int|mixed
     */
    public function sales()
    {
        return $this->hasMany(Order::class, 'affliate_user_id', 'id')
            ->whereMonth('created_at', Carbon::now()->month)
            ->sum('amount');
    }

    /**
     * @return int|mixed
     */
    public function getOnlineShoppingAmountInMonth()
    {
        return $this->hasMany(Order::class, 'user_id', 'id')
            ->whereMonth('created_at', Carbon::now()->month)
            ->sum('amount');
    }

    /**
     * @return int|mixed
     */
    public function getOfflineShoppingAmountInMonth()
    {
        return $this->hasMany(BillOrder::class, 'customer_id', 'id')
            ->whereMonth('created_at', Carbon::now()->month)
            ->sum('bill_amount');
    }
}
