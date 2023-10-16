<?php
/**
 * StockWithdrawlRequest.php
 * Created by: trainheartnet
 * Created at: 11/07/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Http\Requests;

use Botble\Stock\Repositories\Interfaces\ContractInterface;
use Botble\Support\Http\Requests\Request;
use Illuminate\Support\Arr;
use Route;

class StockWithdrawlRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = Arr::get(Route::current()->parameters(), 'contract_id');

        $contract = app(ContractInterface::class)->findById($id);

        if ($contract != null) {
            $rules = [
                'amount'      => 'required|numeric|min:500000|max:'.$contract->amount_available,
                'description' => 'nullable|max:400',
            ];
        } else {
            $rules = [
                'amount'      => 'required|numeric|min:500000',
                'description' => 'nullable|max:400',
            ];
        }

        return $rules;
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'amount.max' => 'Số dư khả dụng không đủ',
        ];
    }
}