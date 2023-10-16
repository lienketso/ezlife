@php
    Theme::layout('full-width');
@endphp

<div class="page-content pt-30 pb-30">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div class="row">
                    <div class="col-lg-6 col-md-8">
                        <div class="login_wrap widget-taber-content background-white">
                            <div class="padding_eight_all bg-white">
                                <div class="padding_eight_all bg-white">
                                    <h3 class="mb-20">Xác minh số điện thoại</h3>
                                    <p>Nhập mã OTP đã được gửi đến số điện thoại của bạn</p>
                                </div>

                                <form method="POST" action="{{ route('customer.phone-verify.post') }}">
                                    @csrf
                                    <input type="hidden" name="phone" value="{{$customer->phone}}">
                                    <div class="form__content">
                                        <div class="form-group digit-group">
                                            <input type="text" id="digit-1" name="digit_1" data-next="digit-2" required />
                                            <input type="text" id="digit-2" name="digit_2" data-next="digit-3" data-previous="digit-1" required />
                                            <input type="text" id="digit-3" name="digit_3" data-next="digit-4" data-previous="digit-2" required/>
                                            <input type="text" id="digit-4" name="digit_4" data-next="digit-5" data-previous="digit-3" required/>
                                            <input type="text" id="digit-5" name="digit_5" data-next="digit-6" data-previous="digit-4" required/>
                                            <input type="text" id="digit-6" name="digit_6" data-previous="digit-5" />
                                        </div>
                                        @if ($errors->has('otp'))
                                            <span class="text-danger">{{ $errors->first('otp') }}</span>
                                        @endif

                                        @if (is_plugin_active('captcha') && setting('enable_captcha') && get_ecommerce_setting('enable_recaptcha_in_register_page', 0))
                                            <div class="form-group">
                                                {!! Captcha::display() !!}
                                            </div>
                                        @endif

                                        <div class="form-group">
                                            <button type="submit"
                                                    class="btn btn-fill-out btn-block hover-up">Xác nhận</button>
                                        </div>

                                        <br>
                                        <p>Bạn không nhận được cuộc gọi OTP? Bấm <a href="{{ route('customer.resend-otp', ['token' => base64_encode($customer->phone)]) }}" class="d-inline-block">vào đây</a> để gửi lại
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 pr-30">
                        {!! apply_filters(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, null, \Botble\Ecommerce\Models\Customer::class) !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
