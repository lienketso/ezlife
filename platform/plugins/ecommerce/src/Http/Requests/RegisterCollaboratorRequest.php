<?php
/**
 * RegisterCollaboratorRequest.php
 * Created by: trainheartnet
 * Created at: 28/04/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Requests;

use Botble\Ecommerce\Rules\CheckPresenterCode;
use Botble\Support\Http\Requests\Request;

class RegisterCollaboratorRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     * @return array
     */
    public function rules() : array
    {
        return [
//            'card_front' => ['required', 'mimes:jpg,bmp,png,jpeg', 'max:8000'],
//            'card_back' => ['required', 'mimes:jpg,bmp,png,jpeg', 'max:8000'],
            'identification_number'=>['required'],
            'card_front' => ['required', 'max:8000'],
            'card_back' => ['required', 'max:8000'],
            'affiliation_id' => new CheckPresenterCode()
        ];
    }

    /**
     * @return string[]
     */
    public function messages() : array
    {
        return [
            'card_front.required' => 'Ảnh CMND/CCCD mặt trước không được bỏ trống',
            'card_front.mimes' => 'Ảnh CMND/CCCD mặt trước không đúng định dạng',
            'card_front.max' => 'Dung lượng tối đa cho ảnh CMND/CCCD mặt trước là 8MB',
            'card_back.required' => 'Ảnh CMND/CCCD mặt sau không được bỏ trống',
            'card_back.mimes' => 'Ảnh CMND/CCCD mặt sau không đúng định dạng',
            'card_back.max' => 'Dung lượng tối đa cho ảnh CMND/CCCD mặt sau là 8MB',
            'identification_number.required' => 'Vui lòng nhập số CMND hoặc CCCD',
        ];
    }
}