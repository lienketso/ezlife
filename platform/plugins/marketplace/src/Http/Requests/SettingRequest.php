<?php

namespace Botble\Marketplace\Http\Requests;

use BaseHelper;
use Botble\Support\Http\Requests\Request;

class SettingRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'bank_info.name'        => 'required|max:120',
            'bank_info.number'      => 'required|max:60',
            'bank_info.full_name'   => 'required|max:120',
            'bank_info.branch'      => 'max:500',
            // 'area'                  => 'required',
        ];
    }
}
