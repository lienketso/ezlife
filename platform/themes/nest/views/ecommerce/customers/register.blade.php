@php
    Theme::layout('full-width');
@endphp

@if (Request::get('aff_id') != null)
<div class="ps-popup">
    <div class= "ps-popup__content">
        <a href="" class="ps-popup__close"></a>
        <img src="{{Theme::asset()->url('imgs/theme/collaborator.png')}}" alt="" class="img-fluid">
        <div class="affiliate-popup-wrapper">
            <p>Bạn nhận được lời mời trải nghiệm EZLife thông qua mã giới thiệu:</p>
            <div class="affiliate-popup-code">
                {{base64_decode(Request::get('aff_id'))}}
            </div>
            <div class="affiliate-popup-confirm">
                <a href="javascript:;" class="affiliate-popup-accept btn btn-fill-out btn-block hover-up">Xác nhận</a>
                <a href="javascript:;" class="affiliate-popup-reject btn btn-fill-out btn-block hover-up">Từ chối</a>
            </div>
        </div>
    </div>
</div>
@endif

<div class="page-content pt-30 pb-30">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div class="row">
                    <div class="col-lg-6 col-md-8">
                        <div class="login_wrap widget-taber-content background-white">
                            <div class="padding_eight_all bg-white">
                                <div class="padding_eight_all bg-white">
                                    <h3 class="mb-20">{{ __('Register') }}</h3>
                                    <p>{{ __('Please fill in the information below') }}</p>
                                </div>

                                <form method="POST" action="{{ route('customer.register.post') }}">
                                    @csrf
                                    <div class="form__content">
                                        <div class="form-group">
                                            <input class="form-control" name="name" id="txt-name" type="text"
                                                   value="{{ old('name') }}" placeholder="Họ và tên">
                                            @if ($errors->has('name'))
                                                <span class="text-danger">{{ $errors->first('name') }}</span>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" name="phone" id="txt-phone" type="text"
                                                   value="{{ old('phone') }}" placeholder="Số điện thoại">
                                            @if ($errors->has('phone'))
                                                <span class="text-danger">{{ $errors->first('phone') }}</span>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" name="email" id="txt-email" type="text"
                                                   value="{{ old('email') }}" placeholder="Địa chỉ email">
                                            @if ($errors->has('email'))
                                                <span class="text-danger">{{ $errors->first('email') }}</span>
                                            @endif
                                        </div>
                                        <div class="form-group form-password-input">
                                            <input class="form-control" type="password" name="password"
                                                   id="txt-password" placeholder="{{ __('Your password') }} (Tối thiểu 6 ký tự)">
                                            <span class="toggle-show-password">
                                                <i class="fi-rs-eye active-icon"></i>
                                            </span>
                                            @if ($errors->has('password'))
                                                <span class="text-danger">{{ $errors->first('password') }}</span>
                                            @endif
                                        </div>

                                        <div class="form-group form-password-input">
                                            <input class="form-control" type="password" name="password_confirmation"
                                                   id="txt-password-confirmation"
                                                   placeholder="{{ __('Password confirmation') }}">
                                            <span class="toggle-show-password">
                                                <i class="fi-rs-eye active-icon"></i>
                                            </span>
                                            @if ($errors->has('password_confirmation'))
                                                <span class="text-danger">{{ $errors->first('password_confirmation') }}</span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="affiliation_id">Mã giới thiệu:</label>
                                            <input class="form-control" name="affiliation_id" id="affiliation_id" type="text"
                                                   value="{{ old('affiliation_id', base64_decode(Request::get('aff_id'))) }}" placeholder="Mã giới thiệu (Tùy chọn)">
                                            @if ($errors->has('affiliation_id'))
                                                <span class="text-danger">{{ $errors->first('affiliation_id') }}</span>
                                            @endif
                                        </div>

                                        @if (is_plugin_active('marketplace'))
                                            <div class="show-if-vendor" @if (old('is_vendor') == 0) style="display: none" @endif>
                                                <div class="form-group">
                                                    <input class="form-control" name="shop_name" id="shop-name" type="text" value="{{ old('shop_name') }}" placeholder="{{ __('Shop Name') }}">
                                                    @if ($errors->has('shop_name'))
                                                        <span class="text-danger">{{ $errors->first('shop_name') }}</span>
                                                    @endif
                                                </div>
                                                <div class="form-group shop-url-wrapper">
                                                    <span class="d-inline-block float-right shop-url-status"></span>
                                                    <input class="form-control" name="shop_url" id="shop-url" type="text" value="{{ old('shop_url') }}" placeholder="{{ __('Shop URL') }}" data-url="{{ route('public.ajax.check-store-url') }}">
                                                    @if ($errors->has('shop_url'))
                                                        <span class="text-danger">{{ $errors->first('shop_url') }}</span>
                                                    @endif
                                                    <span class="d-inline-block"><small data-base-url="{{ route('public.store', '') }}">{{ route('public.store', (string)old('shop_url')) }}</small></span>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" name="shop_phone" id="shop-phone" type="text" value="{{ old('shop_phone') }}" placeholder="{{ __('Shop phone') }}">
                                                    @if ($errors->has('shop_phone'))
                                                        <span class="text-danger">{{ $errors->first('shop_phone') }}</span>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="form-group user-role">
                                                <p class="tags-radio d-inline-block me-3">
                                                    <label>
                                                        <input type="radio" name="is_vendor" value="0" @if (old('is_vendor') == 0) checked="checked" @endif>
                                                        <span class="d-inline-block">
                                                            {{ __('I am a customer') }}
                                                        </span>
                                                    </label>
                                                </p>
{{--                                                <p class="tags-radio d-inline-block">--}}
{{--                                                    <label>--}}
{{--                                                        <input type="radio" name="is_vendor" value="1" @if (old('is_vendor') == 1) checked="checked" @endif>--}}
{{--                                                        <span class="d-inline-block">--}}
{{--                                                            {{ __('I am a vendor') }}--}}
{{--                                                        </span>--}}
{{--                                                    </label>--}}
{{--                                                </p>--}}
                                            </div>
                                        @endif
                                        <div class="form-group">
                                            <p>Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài khoản của bạn và cho các mục đích khác được mô tả trong chính sách bảo mật của chúng tôi.</p>
                                        </div>

                                        @if (is_plugin_active('captcha') && setting('enable_captcha') && get_ecommerce_setting('enable_recaptcha_in_register_page', 0))
                                            <div class="form-group">
                                                {!! Captcha::display() !!}
                                            </div>
                                        @endif

                                        <div class="login_footer form-group">
                                            <div class="chek-form">
                                                <div class="custome-checkbox">
                                                    <input type="hidden" name="agree_terms_and_policy" value="0">
                                                    <input class="form-check-input" type="checkbox"
                                                           name="agree_terms_and_policy" id="agree-terms-and-policy"
                                                           value="1"
                                                           @if (old('agree_terms_and_policy') == 1) checked @endif>
                                                    <label class="form-check-label"
                                                           for="agree-terms-and-policy"><span>{{ __('I agree to terms & Policy.') }}</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <button type="submit"
                                                    class="btn btn-fill-out btn-block hover-up">{{ __('Register') }}</button>
                                        </div>

                                        <br>
                                        <p>{{ __('Have an account already?') }} <a href="{{ route('customer.login') }}"
                                                                                   class="d-inline-block">{{ __('Login') }}</a>
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
