<?php
/**
 * CheckPresenterCode.php
 * Created by: trainheartnet
 * Created at: 27/04/2022
 * Contact me at: longlengoc90@gmail.com
 */

namespace Botble\Ecommerce\Rules;

use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Illuminate\Contracts\Validation\Rule;

class CheckPresenterCode implements Rule
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
            $presenterUser = app(CustomerInterface::class)->getFirstBy([
                'affiliation_id' => $value
            ]);

            if (auth('customer')->check()) {
                return $presenterUser != null && $presenterUser->id != auth('customer')->id();
            }

            return $presenterUser != null;
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
        return 'Mã giới thiệu không đúng';
    }
}