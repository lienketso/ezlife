<?php

namespace Botble\Stock\Http\Requests;

use Botble\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class ChartRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'price'  => 'integer|required',
            // 'chart_date'  => 'text|required',
           
        ];
    }
}
