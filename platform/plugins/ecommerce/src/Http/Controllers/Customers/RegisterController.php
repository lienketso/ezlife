<?php

namespace Botble\Ecommerce\Http\Controllers\Customers;

use App\Http\Controllers\Controller;
use Botble\ACL\Traits\RegistersUsers;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Rules\CheckPresenterCode;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
use Response;
use SeoHelper;
use Theme;
use URL;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * @var CustomerInterface
     */
    protected $customerRepository;

    /**
     * Create a new controller instance.
     *
     * @param CustomerInterface $customerRepository
     */
    public function __construct(CustomerInterface $customerRepository)
    {
        $this->middleware('customer.guest');
        $this->customerRepository = $customerRepository;
    }

    /**
     * Show the application registration form.
     *
     * @return Response
     */
    public function showRegistrationForm()
    {
        SeoHelper::setTitle(__('Register'));

        Theme::breadcrumb()->add(__('Home'), route('public.index'))->add(__('Register'), route('customer.register'));

        if (!session()->has('url.intended')) {
            if (!in_array(url()->previous(), [route('customer.login'), route('customer.register')])) {
                session(['url.intended' => url()->previous()]);
            }
        }

        return Theme::scope('ecommerce.customers.register', [], 'plugins/ecommerce::themes.customers.register')
            ->render();
    }

    /**
     * Handle a registration request for the application.
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|mixed
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request, BaseHttpResponse $response)
    {

        $this->validator($request->input())->validate();

        do_action('customer_register_validation', $request);
        $input = $request->input();
        if ($request->input('affiliation_id') != null) {

            $presenterUser = $this->customerRepository->getFirstBy([
                'affiliation_id' => $request->input('affiliation_id')
            ]);

            $input['presenter_id'] = $presenterUser->id;
        }else{
            $input['presenter_id'] = null;
        }
        $customer = $this->create($input);
        $otp = $this->refreshOtp($customer->phone);

        event(new Registered($customer));

        if (\EcommerceHelper::isEnableEmailVerification()) {
            return $this->registered($request, $customer)
                ?: $response->setNextUrl(route('customer.login'))
                    ->setMessage(__('Please confirm your email address.'));
        }



        $this->customerRepository->createOrUpdate($customer);
        $this->guard()->login($customer);
        return $response->setNextUrl($this->redirectPath())->setMessage(__('Registered successfully!'));
        //call voice OTP
//        $this->callVoiceOtp($otp, $customer->phone);
//        return $response->setNextUrl(route('customer.phone-verify', [
//            'token' => base64_encode(
//                json_encode([
//                    'phone' => $request->input('phone'),
//                    'password' => $request->input('password'),
//                ])
//            )
//        ]));
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $rules = [
            'name' => 'required|min:6',
            'phone' => ['required', 'regex:/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/', 'unique:ec_customers'],
            'password' => 'required|min:6|confirmed',
            'affiliation_id' => new CheckPresenterCode()
        ];

        if (is_plugin_active('captcha') && setting('enable_captcha') && get_ecommerce_setting('enable_recaptcha_in_register_page',
                0)) {
            $rules += ['g-recaptcha-response' => 'required|captcha'];
        }

        if (request()->has('agree_terms_and_policy')) {
            $rules['agree_terms_and_policy'] = 'accepted:1';
        }

        $attributes = [
            'phone' => 'Số điện thoại.',
            'phone.required' => 'Số điện thoại không được bỏ trống.',
            'phone.regex' => 'Định dạng số điện thoại không đúng.',
            'phone.unique' => 'Số điện thoại đã được đăng ký.',
            'password' => __('Password'),
            'g-recaptcha-response' => __('Captcha'),
            'agree_terms_and_policy' => __('Term and Policy'),
        ];

        return Validator::make($data, $rules, [
            'g-recaptcha-response.required' => __('Captcha Verification Failed!'),
            'g-recaptcha-response.captcha' => __('Captcha Verification Failed!'),
        ], $attributes);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return Customer
     */
    protected function create(array $data)
    {
        return $this->customerRepository->create([
            'name' => clean($data['name']),
            'phone' => clean($data['phone']),
            'email'=>clean($data['email']),
            'password' => bcrypt($data['password']),
            'presenter_id'=>$data['presenter_id']
        ]);
    }

    /**
     * Send the confirmation code to a user.
     *
     * @param Customer $customer
     */
    protected function sendConfirmationToUser($customer)
    {
        // Notify the user
        $notificationConfig = config('plugins.ecommerce.general.customer.notification');
        if ($notificationConfig) {
            $notification = app($notificationConfig);
            $customer->notify($notification);
        }
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return StatefulGuard
     */
    protected function guard()
    {
        return auth('customer');
    }

    /**
     * Confirm a user with a given confirmation code.
     *
     * @param int $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param CustomerInterface $customerRepository
     * @return BaseHttpResponse
     */
    public function confirm($id, Request $request, BaseHttpResponse $response, CustomerInterface $customerRepository)
    {
        if (!URL::hasValidSignature($request)) {
            abort(404);
        }

        $customer = $customerRepository->findOrFail($id);

        $customer->confirmed_at = now();
        $customer->is_verified = 1;
        $customer->affiliation_id = intval(1000000 + $customer->id);
        $this->customerRepository->createOrUpdate($customer);

        $this->guard()->login($customer);

        return $response
            ->setNextUrl(route('customer.overview'))
            ->setMessage(__('You successfully confirmed your email address.'));
    }

    /**
     * Resend a confirmation code to a user.
     *
     * @param Request $request
     * @param CustomerInterface $customerRepository
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function resendConfirmation(
        Request $request,
        CustomerInterface $customerRepository,
        BaseHttpResponse $response
    ) : BaseHttpResponse
    {
        $customer = $customerRepository->getFirstBy(['email' => $request->input('email')]);

        if (!$customer) {
            return $response
                ->setError()
                ->setMessage(__('Cannot find this customer!'));
        }

        $this->sendConfirmationToUser($customer);

        return $response
            ->setMessage(__('We sent you another confirmation email. You should receive it shortly.'));
    }

    /**
     * @return Factory|View
     */
    public function getVerify() : View
    {
        return view('plugins/ecommerce::themes.customers.verify');
    }

    /**
     * @param Request $request
     * @return \Botble\Theme\Facades\Response|Response
     */
    public function showPhoneVerifyForm(Request $request)
    {
        $getToken = $request->get('token');
        $customer = json_decode(base64_decode($getToken));
        $infor = $this->customerRepository->getFirstBy(['phone' => $customer->phone]);

        SeoHelper::setTitle('Xác minh số điện thoại');

        Theme::breadcrumb()->add(__('Home'), url('/'))->add('Xác minh số điện thoại', route('customer.phone-verify'));

        return Theme::scope('ecommerce.customers.phone-verify', compact('customer', 'infor'), 'plugins/ecommerce::themes.customers.phone-verify')
            ->render();
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|\Illuminate\Http\RedirectResponse
     */
    public function phoneVerify(Request $request, BaseHttpResponse $response)
    {
        $digit_1 = clean($request->input('digit_1'));
        $digit_2 = clean($request->input('digit_2'));
        $digit_3 = clean($request->input('digit_3'));
        $digit_4 = clean($request->input('digit_4'));
        $digit_5 = clean($request->input('digit_5'));
        $digit_6 = clean($request->input('digit_6'));
        $otp = $digit_1.$digit_2.$digit_3.$digit_4.$digit_5.$digit_6;
        $phone = $request->get('phone');

        $customer = $this->customerRepository->getFirstBy([
            'phone' => $phone,
            'phone_code' => $otp
        ]);

        if ($customer != null) {
            $this->customerRepository->update([
                'phone' => $phone
            ], [
                'is_verified' => 1
            ]);

            $this->guard()->login($customer);
            return $response->setNextUrl($this->redirectPath())->setMessage('Xác minh số điện thoại thành công');
        }

        return redirect()->back()->withErrors(['otp' => 'Mã xác nhận không đúng']);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|\Illuminate\Http\RedirectResponse
     */
    public function resendOtp(Request $request, BaseHttpResponse $response)
    {
        $phone_number = base64_decode($request->get('token'));

        $customer = $this->customerRepository->getFirstBy(['phone' => $phone_number]);
        $this->callVoiceOtp($customer->phone_code, $customer->phone);

        return $response
            ->setPreviousUrl(route('customer.phone-verify'))
            ->setMessage('Đã gửi lại mã xác minh OTP thành công');
    }

    /**
     * @param string $phone
     * @return string
     */
    public function refreshOtp(string $phone) : string
    {
        $otp = $this->generateNumericOTP(6);
        $this->customerRepository->update([
            'phone' => $phone
        ], [
            'phone_code' => $otp
        ]);

        return $otp;
    }

    /**
     * @param $otp
     * @param $phone
     */
    public function callVoiceOtp($otp,$phone) : void
    {
        Http::withoutVerifying()
            ->withBasicAuth('ubg', '3hYvwtnNV4NtFvDL')
            ->post('https://otpubg.ezcall.vn/api/voiceotp.php',[
                'otpcode' => $otp,
                'phone' => $phone
            ]);
    }

    /**
     * @param int $n
     * @return string
     */
    public function generateNumericOTP(int $n) : string
    {
        // Take a generator string which consist of
        // all numeric digits
        $generator = "1357902468";

        // Iterate for n-times and pick a single character
        // from generator and append it to $result

        // Login for generating a random character from generator
        //     ---generate a random number
        //     ---take modulus of same with length of generator (say i)
        //     ---append the character at place (i) from generator to result

        $result = "";

        for ($i = 1; $i <= $n; $i++) {
            $result .= substr($generator, (rand() % (strlen($generator))), 1);
        }

        // Return result
        return $result;
    }
}
