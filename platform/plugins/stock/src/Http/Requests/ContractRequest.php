<?php

namespace Botble\Stock\Http\Requests;

use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class ContractRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'customer_info'   => 'required',
            // 'customer_info[ethnic]'   => 'required',
            // 'customer_info[nationality]'   => 'required',
            // 'customer_info[cmnd]'   => 'required',
            // 'customer_info[date_of_issue]'   => 'required',
            // 'customer_info[place_of_issue]'   => 'required',
            // 'customer_info[permanent_address]'   => 'required',
            // 'customer_info[current_address]'   => 'required',
            
            
            // 'contract_hard_code'   => 'required',
            // 'percentage'  => 'integer|min:0|max:100|required',
            // 'price_per_stock'  => 'integer|required',
            // 'qty_of_stock'  => 'integer|required',
            // 'cp_category_id'  => 'integer|required',
            // 'status' => Rule::in(PackageStatusEnum::values()),
        ];
    }

   
}
