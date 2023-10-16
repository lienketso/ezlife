<?php

namespace Botble\Stock\Http\Requests;

use Botble\Stock\Enums\WithdrawStatusEnum;
use Botble\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class WithdrawRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status' => Rule::in(WithdrawStatusEnum::values()),
        ];
    }
}
