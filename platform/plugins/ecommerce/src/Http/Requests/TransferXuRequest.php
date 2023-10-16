<?php
/**
 * CreateTransferXuRequest.php
 * Created by: trainheartnet
 * Created at: 07/09/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Requests;

use Botble\Support\Http\Requests\Request;
use EcommerceHelper;

class TransferXuRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user = auth('customer')->user();
        return [
            'phone' => EcommerceHelper::getPhoneValidationRule(),
            'amount' => 'required|min:1|max:'.$user->ubgxu_transfer,
            'description' => 'nullable|max:400',
        ];
    }

    public function messages()
    {
        $user = auth('customer')->user();
        return [
            'amount.min' => 'Số xu tối thiểu có thể chuyển là 1',
            'amount.max' => 'Số xu tối đa có thể chuyển là '.$user->ubgxu_transfer,
        ];
    }
}