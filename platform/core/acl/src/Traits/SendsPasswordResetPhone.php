<?php

namespace Botble\ACL\Traits;

use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Models\Customer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

trait SendsPasswordResetPhone
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function showLinkRequestForm()
    {
        return view('auth.passwords.phone');
    }

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
     * @param Request $request
     * @return JsonResponse|\Illuminate\Http\RedirectResponse
     * @throws ValidationException
     */
    public function sendResetLinkPhone(Request $request)
    {
        $this->validatePhone($request);
        $customer = Customer::getModel()->where('phone',$request->phone)->first();
        if(!empty($customer)){
            $otp = $this->generateNumericOTP(6);
            $customer->update(['phone_code'=>$otp]);
            $this->callVoiceOtp($otp,$request->phone);
            return redirect()->route('customer.password.otp',['phone'=>base64_encode($request->phone)]);
        }else{
            $response = $this->broker()->sendResetLink(
                $this->credentials($request)
            );
            return $response == Password::RESET_LINK_SENT
                ? $this->sendResetLinkResponse($request, $response)
                : $this->sendResetLinkFailedResponse($request, $response);
        }
        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postOtpRequestForm(Request $request){
        $otp = $request->otp;
        $phone = base64_decode($request->phone);
        $validator = Validator::make($request->all(),[
            'otp' => 'required'
        ]);
        if($validator->fails()){
            return back()->withErrors(['otp'=>'Bạn chưa nhập mã OTP']);
        }

        $customer = Customer::getModel()
            ->where('phone',$phone)
            ->where('phone_code',$otp)->first();
        if(!empty($customer)){
            //return đến trang đổi mật khẩu
            $token = \Str::random(60);
            $token = hash('sha256', $token);
            return redirect()->route('customer.password.reset.update',$token);
        }else{
            return back()->withErrors(['otp'=>'Mã OTP không chính xác !']);
        }
    }

    /**
     * @param Request $request
     */
    protected function validatePhone(Request $request)
    {
        $request->validate(['phone' => 'required|numeric']);
    }

    /**
     * @param Request $request
     */
    protected function validateOtp(Request $request)
    {
        $request->validate(['otp'=>'required|numeric']);
    }

    /**
     * @param Request $request
     * @return array
     */
    protected function credentialsOtp(Request $request)
    {
        return $request->only('phone','phone_code');
    }

    /**
     * @param Request $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        return $request->only('phone');
    }

    /**
     * @param Request $request
     * @param $response
     * @return JsonResponse|\Illuminate\Http\RedirectResponse
     */
    protected function sendResetLinkResponse(Request $request, $response)
    {
        return $request->wantsJson()
            ? new JsonResponse(['message' => trans($response)], 200)
            : back()->with('status', trans($response));
    }

    /**
     * @param Request $request
     * @param $response
     * @return \Illuminate\Http\RedirectResponse
     * @throws ValidationException
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        if ($request->wantsJson()) {
            throw ValidationException::withMessages([
                'phone' => [trans($response)],
            ]);
        }

        return back()
            ->withInput($request->only('phone'))
            ->withErrors(['phone' => trans($response)]);
    }

    public function broker()
    {
        return Password::broker();
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function resendOtp (Request $request, BaseHttpResponse $response)
    {
        $phone_decode = $request->phone;
        $phone = base64_decode($phone_decode);
        $customer = Customer::getModel()->where('phone',$phone)->first();
        $this->callVoiceOtp($customer->phone_code, $customer->phone);
        return $response->setPreviousUrl(route('customer.password.otp',['phone'=>$phone_decode]))
            ->setMessage('Đã gửi lại mã xác minh OTP thành công');
    }

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