@php
    Theme::layout('full-width');
@endphp

<section class="pt-100 pb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="login_wrap widget-taber-content p-30 background-white border-radius-10">
                    <div class="padding_eight_all bg-white">
                        <div class="heading_s1 mb-20">
                            <h3 class="mb-30">{{ __('Reset Password') }}</h3>
                        </div>

                        <form class="form--auth form--login" method="POST" action="{{ route('customer.password.otp.post') }}">
                            <input type="hidden" name="phone" value="{{request()->get('phone')}}">
                            @csrf
                            <div class="form__content">
                                <div class="form-group">
                                    <label for="txt-email" class="required">{{ __('Nhập mã OTP') }} </label>
                                    <input class="form-control" name="otp" id="txt-phone" type="text" value="{{ old('otp') }}"
                                           placeholder="{{ __('Vui lòng nhập mã OTP đã gọi đến số điện thoại của bạn') }}">
                                    @if ($errors->has('otp'))
                                        <span class="text-danger">{{ $errors->first('otp') }}</span>
                                    @endif
                                    <span style="display: block;padding-top: 10px;text-align: right">
                                        <a href="{{route('customer.otp.resend.get',request()->get('phone'))}}"><i class="fas fa-redo-alt"></i> Gửi lại mã Otp</a>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-fill-out btn-block hover-up">{{ __('Nhận link khôi phục mật khẩu') }}</button>
                            </div>

                            @if (session('status'))
                                <div class="text-success">
                                    {{ session('status') }}
                                </div>
                            @endif
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
