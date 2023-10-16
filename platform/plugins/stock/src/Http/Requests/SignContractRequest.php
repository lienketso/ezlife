<?php


namespace Botble\Stock\Http\Requests;

use Botble\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class SignContractRequest extends Request
{
    public function rules()
    {
        return [
            'name'   => 'required',
            'phone'  => 'numeric|required',
            'phone_ref'  => 'numeric|required',
            'area'  => 'required',
        ];
    }
    public function messages()
    {
        return [
          'name.required'=>'Bạn chưa nhập họ tên',
          'phone.required'=>'Bạn chưa nhập số điện thoại',
          'phone.numeric'=>'số điện thoại không đúng định dạng',
          'phone_ref.required'=>'Bạn chưa nhập số điện thoại',
          'phone_ref.numeric'=>'số điện thoại không đúng định dạng',
          'area.required'=>'Vui lòng chọn khu vực',
        ];
    }
}