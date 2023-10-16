<?php

namespace Botble\Stock\Http\Requests;

use Botble\Stock\Enums\CPCategoryStatusEnum;
use Botble\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class CPCategoryRequest extends Request
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
            'sort_order'  => 'integer|min:0|max:127',
            'status' => Rule::in(CPCategoryStatusEnum::values()),
        ];
    }
}
