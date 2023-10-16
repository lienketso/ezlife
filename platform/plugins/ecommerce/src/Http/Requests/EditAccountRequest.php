<?php

namespace Botble\Ecommerce\Http\Requests;

use Botble\Ecommerce\Rules\CheckPresenterCode;
use Botble\Support\Http\Requests\Request;

class EditAccountRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'  => 'required|max:255',
            'email' => ['unique:ec_customers,email,'.auth('customer')->id().',id', 'email'],
            'dob'   => 'max:20|sometimes',
            'affiliation_id' => new CheckPresenterCode()
        ];
    }
}
