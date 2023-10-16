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

                        <form class="form--auth form--login" method="POST" action="{{ route('customer.password.request') }}">
                            @csrf
                            <div class="form__content">
                                <div class="form-group">
                                    <label for="txt-phone" class="required">{{ __('Số điện thoại') }}</label>
                                    <input class="form-control" name="phone" id="txt-phone" type="text" value="{{ old('phone') }}"
                                           placeholder="{{ __('Vui lòng nhập số điện thoại') }}">
                                    @if ($errors->has('phone'))
                                        <span class="text-danger">{{ $errors->first('phone') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-fill-out btn-block hover-up">{{ __('Nhận mã OTP khôi phục mật khẩu') }}</button>
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
