<?php

namespace Botble\Stock\Http\Requests;

use Botble\Stock\Enums\HolderStatusEnum;
use Botble\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class HolderRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'   => 'required',
            'description'  => 'required',
            'contract_code'  => 'required'
        ];
    }
}
