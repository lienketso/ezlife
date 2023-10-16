<?php
/**
 * OrderBillController.php
 * Created by: trainheartnet
 * Created at: 09/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Theme\Nest\Http\Controllers;

use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Enums\OrderCashbackTypeEnum;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Repositories\Interfaces\BillOrderInterface;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\UbgxuPayLogInterface;
use Botble\Ecommerce\Services\HandleAffiliateService;
use Botble\Marketplace\Enums\RevenueTypeEnum;
use Botble\Theme\Http\Controllers\PublicController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Theme\Nest\Rules\CheckUserByPhone;
use DB;
use Exception;

class OrderBillController extends PublicController
{
    /**
     * @var BillOrderInterface
     */
    protected $billCashbackRepository;

    /**
     * @var CustomerInterface
     */
    protected $customerRepository;

    /**
     * OrderBillController constructor.
     * @param BillOrderInterface $billCashbackRepository
     * @param CustomerInterface $customerRepository
     */
    public function __construct(
        BillOrderInterface $billCashbackRepository,
        CustomerInterface $customerRepository
    )
    {
        $this->billCashbackRepository = $billCashbackRepository;
        $this->customerRepository = $customerRepository;
    }

    /**
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function getOrderBill(
        BaseHttpResponse $response
    )
    {
        if (!auth('web')->check()) {
            return $response->setNextUrl(route('public.index'))->setMessage('Bạn không có quyền truy cập trang này');
        }

        if (auth('web')->user()->shop_manager_aff_id == null) {
            return $response->setNextUrl(route('public.index'))->setMessage('Bạn không có quyền truy cập trang này');
        }

        $cashier = auth('web')->id();
        $todayBillCashBack = $this->billCashbackRepository->getModel()
            ->with('getCustomer')
            ->where('cashier_id', $cashier)
            ->whereDate('created_at', Carbon::today())
            ->paginate(20);

        return view('plugins/ecommerce::orders.orderbill', compact('todayBillCashBack'));
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Throwable
     */
    public function postOrderBill(
        Request $request,
        BaseHttpResponse $response,
        HandleAffiliateService $affiliateService
    )
    {
        $this->validator($request->input())->validate();

        $customer = $this->customerRepository->getFirstBy([
            'phone' => $request->input('customer_phone')
        ]);

        $avaiableUbgxu = $customer->ubgxu;
        $allowPaidWithUbgxu = $request->get('pay_by_ubgxu');
        $cashbackType = $request->get('cashback_type');

        if ($avaiableUbgxu == 0 && $allowPaidWithUbgxu == '1') {
            return redirect()->back()->withErrors('Số xu không đủ để thực hiện giao dịch');
        }

        $payWithMoney = doubleval($request->get('bill_amount'));

        $payWithXu = 0;

        if ($allowPaidWithUbgxu == '1') {
            if ($avaiableUbgxu < doubleval($request->get('bill_amount'))) {
                $payWithXu = $avaiableUbgxu;
                $payWithMoney = doubleval($request->get('bill_amount')) - $avaiableUbgxu;
            } elseif ($avaiableUbgxu >= doubleval($request->get('bill_amount'))) {
                $payWithMoney = 0;
                $payWithXu = doubleval($request->get('bill_amount'));
            }
        } else {
            $payWithMoney = doubleval($request->get('bill_amount'));
            $payWithXu = 0;
        }

        $data = [
            'bill_code' => $request->get('bill_code'),
            'bill_amount' => doubleval($request->get('bill_amount')),
            'customer_id' => $customer->id,
            'cashier_id' => auth()->id(),
            'description' => '',
            'created_at' => Carbon::now(),
            'cashback_type' => $request->get('cashback_type'),
            'presenter_id' => $customer->presenter_id,
            'pay_by_money' => $payWithMoney,
            'pay_by_ubgxu' => $payWithXu
        ];

        DB::beginTransaction();

        try {
            //Ghi nhận xử lý đơn tại quầy
            DB::table('ec_order_bill')->insert($data);

            //Check hoa hồng và xử lý
            if ($customer->presenter_id != null) {
                $presenter = $this->customerRepository->findById($customer->presenter_id);

                if ($presenter != null) {
                    $tree = $affiliateService->getCollaboratorTree($presenter->id);

                    foreach ($tree as $t) {
                        // Ghi lịch sử
                        $amount = doubleval($request->get('bill_amount')) * $t['rate'];
                        DB::table('ec_collaborator_revenue_record')
                            ->insert([
                                'customer_id' => $t['id'],
                                'amount' => $amount,
                                'order_id' => $request->get('bill_code'),
                                'sub_amount' => 0,
                                'description' =>  __('Số dư tài khoản của bạn tăng lên <b>:amount</b> - Tương ứng với <b>:rate_label</b> hoa hồng. Thông qua giao dịch mua sắm trực tiếp tại siêu thị <b>:buyer</b> với hóa đơn <b>:orderCode</b>', [
                                    'amount' => format_price($amount),
                                    'rate_label' => $t['rate_label'],
                                    'buyer' => $customer->name.' - '.$customer->phone,
                                    'orderCode' => $request->get('bill_code')
                                ]),
                                'type' => RevenueTypeEnum::ADD_AMOUNT,
                                'created_at' => Carbon::now()
                            ]);

                        // Cập nhật ví
                        DB::table('ec_customer_wallet')->where('customer_id', '=', $t['id'])->increment('amount', $amount);
                    }
                }
            }

            $shopname = '';

            switch (auth('web')->user()->shop_manager_aff_id) {
                case 34613:
                    $shopname = 'Siêu thị UBGmart Bến Tre';
                    break;
                case 31886:
                    $shopname = 'Siêu thị UBGmart Hà Nội';
                    break;
                case 31211:
                    $shopname = 'Siêu thị UBGmart Hồ Chí Minh';
                    break;
                case 35191:
                    $shopname = 'UBG Coffee 602 PVD';
                    break;
                case 35192:
                    $shopname = 'Siêu thị UBGmart Phan Thiết';
                    break;
            }

            //Xử lý giao dịch xu
            if ($allowPaidWithUbgxu == '0') { // Trường hợp khách hàng không sử dụng xu để thanh toán
                // Tạo giao dịch hoàn xu bằng tiền mặt
                $percent = intval(get_ecommerce_setting('ubgxu_percent_per_order')) / 100;
                $totalDayRefund = intval(get_ecommerce_setting('ubgxu_total_day_refund'));
                $cashbackAmount = doubleval($request->get('bill_amount')) * $percent;

                if ($cashbackType == OrderCashbackTypeEnum::FAST) {
                    // Xử lý hoàn nhanh
                    $fastPercent = intval(get_ecommerce_setting('ubgxu_refund_one_percent')) / 100;
                    $fastCashbackAmount = doubleval($request->get('bill_amount')) * $fastPercent;

                    //Ghi giao dịch mua sắm
                    DB::table('ubgxu_transaction')->insert([
                        'customer_id' => $customer->id,
                        'amount' => doubleval($request->get('bill_amount')),
                        'transaction_type' => 'cash',
                        'description' => 'Giao dịch mua sắm trực tiếp tại siêu thị với hóa đơn '.$request->get('bill_code'),
                        'transaction_source' => $shopname,
                        'rest_cashback_amount' => $fastCashbackAmount,
                        'total_day_refund' => 0,
                        'percent_cashback' => intval(get_ecommerce_setting('ubgxu_refund_one_percent')),
                        'compare_code' => $request->get('bill_code'),
                        'status' => 'completed',
                        'created_at' => Carbon::now()
                    ]);

                    //Tăng số xu trong ví
                    Customer::find($customer->id)->increment('ubgxu', $fastCashbackAmount);

                    //Ghi log giao dịch
                    app(UbgxuPayLogInterface::class)->getModel()
                        ->create([
                            'content' => 'Bạn nhận được '.number_format($fastCashbackAmount).' xu. Thông qua chính sách hoàn xu 1 lần từ giao dịch '.$request->get('bill_code'),
                            'customer_id' => $customer->id,
                            'created_at' => Carbon::now()
                        ]);
                } else {
                    DB::table('ubgxu_transaction')->insert([
                        'customer_id' => $customer->id,
                        'amount' => doubleval($request->get('bill_amount')),
                        'transaction_type' => 'cash',
                        'description' => 'Giao dịch mua sắm trực tiếp tại siêu thị với hóa đơn '.$request->get('bill_code'),
                        'transaction_source' => $shopname,
                        'rest_cashback_amount' => $cashbackAmount,
                        'total_day_refund' => $totalDayRefund,
                        'percent_cashback' => intval(get_ecommerce_setting('ubgxu_percent_per_order')),
                        'compare_code' => $request->get('bill_code'),
                        'status' => 'on_cash_back',
                        'created_at' => Carbon::now()
                    ]);
                }
            } else { // Trường hợp khách hàng có sử dụng xu để thanh toán

                $decreaseAmount = doubleval($request->get('bill_amount'));
                if ($avaiableUbgxu < doubleval($request->get('bill_amount'))) {
                    $decreaseAmount = $avaiableUbgxu;
                } elseif ($avaiableUbgxu >= doubleval($request->get('bill_amount'))) {
                    $decreaseAmount = doubleval($request->get('bill_amount'));
                }

                //Trừ xu trong tài khoản
                DB::table('ec_customers')->where('id', $customer->id)->decrement('ubgxu', $decreaseAmount);

                //Ghi log giao dịch xu
                DB::table('ubgxu_pay_log')->insert([
                    'content' => 'Giao dịch mua sắm trực tiếp tại '.$shopname.' với hóa đơn '.$request->get('bill_code'),
                    'customer_id' => $customer->id,
                    'created_at' => Carbon::now()
                ]);

                //Ghi giao dịch mua sắm
                DB::table('ubgxu_transaction')->insert([
                    'customer_id' => $customer->id,
                    'amount' => $decreaseAmount,
                    'transaction_type' => 'decrease',
                    'description' => 'Giao dịch mua sắm trực tiếp tại '.$shopname.' với hóa đơn '.$request->get('bill_code'),
                    'transaction_source' => $shopname,
                    'rest_cashback_amount' => 0,
                    'total_day_refund' => 0,
                    'compare_code' => $request->get('bill_code'),
                    'status' => 'completed',
                    'created_at' => Carbon::now()
                ]);

                // Case : Số xu dùng để thanh toán chỉ đủ 1 phần đơn hàng, vẫn được hoàn phần trả tiền mặt còn lại
                if ($avaiableUbgxu < doubleval($request->get('bill_amount'))) {
                    if ($cashbackType == OrderCashbackTypeEnum::FAST) {
                        // Xử lý hoàn nhanh
                        $afterPayAmount = doubleval($request->get('bill_amount')) - $avaiableUbgxu;
                        $fastPercent = intval(get_ecommerce_setting('ubgxu_refund_one_percent')) / 100;
                        $fastCashbackAmount = $afterPayAmount * $fastPercent;

                        //Ghi giao dịch mua sắm
                        DB::table('ubgxu_transaction')->insert([
                            'customer_id' => $customer->id,
                            'amount' => $afterPayAmount,
                            'transaction_type' => 'cash',
                            'description' => 'Giao dịch mua sắm trực tiếp tại '.$shopname.' với hóa đơn '.$request->get('bill_code'),
                            'transaction_source' => $shopname,
                            'rest_cashback_amount' => $fastCashbackAmount,
                            'total_day_refund' => 0,
                            'percent_cashback' => $fastPercent,
                            'compare_code' => $request->get('bill_code'),
                            'status' => 'completed',
                            'created_at' => Carbon::now()
                        ]);

                        //Tăng số xu trong ví
                        Customer::find($customer->id)->increment('ubgxu', $fastCashbackAmount);

                        //Ghi log giao dịch
                        app(UbgxuPayLogInterface::class)->getModel()
                            ->create([
                                'content' => 'Bạn nhận được '.number_format($fastCashbackAmount).' xu. Thông qua chính sách hoàn xu 1 lần từ giao dịch '.$request->get('bill_code'),
                                'customer_id' => $customer->id,
                                'created_at' => Carbon::now()
                            ]);
                    } else {
                        $percent = intval(get_ecommerce_setting('ubgxu_percent_per_order')) / 100;
                        $totalDayRefund = intval(get_ecommerce_setting('ubgxu_total_day_refund'));
                        $afterPayAmount = doubleval($request->get('bill_amount')) - $avaiableUbgxu;
                        $cashbackAmount = $afterPayAmount * $percent;

                        DB::table('ubgxu_transaction')->insert([
                            'customer_id' => $customer->id,
                            'amount' => $afterPayAmount,
                            'transaction_type' => 'cash',
                            'description' => 'Giao dịch mua sắm trực tiếp tại '.$shopname.' với hóa đơn '.$request->get('bill_code'),
                            'transaction_source' => $shopname,
                            'rest_cashback_amount' => $cashbackAmount,
                            'total_day_refund' => $totalDayRefund,
                            'percent_cashback' => $percent,
                            'compare_code' => $request->get('bill_code'),
                            'status' => 'on_cash_back',
                            'created_at' => Carbon::now()
                        ]);
                    }
                }
            }


        } catch (Exception $e) {
            DB::rollBack();
            return $response->setNextUrl(route('public.orderbill'))
                ->setError('Lỗi khi xử lý đơn hàng: '.$request->get('bill_code'));
        }

        DB::commit();

        return $response->setNextUrl(route('public.orderbill'))
            ->setMessage('Xử lý đơn hàng: '.$request->get('bill_code'). ' thành công');
    }

    /**
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator|\Illuminate\Validation\Validator
     */
    protected function validator(array $data)
    {
        $rules = [
            'bill_code' => 'required|min:6|unique:ec_order_bill',
            'customer_phone' => ['required', 'regex:/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/', new CheckUserByPhone()],
            'bill_amount' => 'required|numeric',
        ];

        $attributes = [
            'customer_phone.required' => 'Số điện thoại không được bỏ trống.',
            'customer_phone.regex' => 'Định dạng số điện thoại không đúng.',
            'bill_code.required' => 'Số hóa đơn không được bỏ trống.',
            'bill_amount.required' => 'Giá trị hóa đơn không được bỏ trống.',
            'bill_amount.numeric' => 'Giá trị đơn hàng phải là số.',
        ];

        return Validator::make($data, $rules, $attributes);
    }
}