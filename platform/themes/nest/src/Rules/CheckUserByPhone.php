<?php
/**
 * CheckUserByPhone.php
 * Created by: trainheartnet
 * Created at: 09/05/2022
 * Contact me at: longlengoc90@gmail.com
 */
namespace Theme\Nest\Rules;

use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Illuminate\Contracts\Validation\Rule;

class CheckUserByPhone implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if ($value != '') {
            $customer = app(CustomerInterface::class)->getFirstBy([
                'phone' => $value
            ]);

            return $customer != null;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Số điện thoại không có trong hệ thống';
    }
}