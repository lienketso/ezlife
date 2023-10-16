<?php


namespace Botble\Ecommerce\Http\Requests;


use Botble\Support\Http\Requests\Request;

class EditXuRequest extends Request
{
    public function rules()
    {
        return [
            'ubgxu_update'  => 'required|numeric',
            'why' => 'required',
        ];
    }
}