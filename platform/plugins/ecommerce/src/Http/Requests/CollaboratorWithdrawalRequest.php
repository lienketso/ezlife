<?php
/**
 * CollaboratorWithdrawalRequest.php
 * Created by: trainheartnet
 * Created at: 04/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Requests;

use Botble\Support\Http\Requests\Request;
use Illuminate\Support\Arr;

class CollaboratorWithdrawalRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'amount'      => 'required|numeric|min:1|max:' . (auth('customer')->user()->collaborator_balance),
            'description' => 'nullable|max:400',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'amount.max' => 'Số dư khả dụng không đủ',
        ];
    }
}