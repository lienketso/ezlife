<?php
/**
 * CollaboratorEditWithdrawalRequest.php
 * Created by: trainheartnet
 * Created at: 04/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Requests;

use Botble\Support\Http\Requests\Request;

class CollaboratorEditWithdrawalRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description' => 'nullable|max:400',
        ];
    }
}