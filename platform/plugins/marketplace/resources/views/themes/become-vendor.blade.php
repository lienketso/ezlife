@extends(Theme::getThemeNamespace() . '::views.ecommerce.customers.master')
@section('content')
    {!! Form::open(['route' => 'marketplace.vendor.become-vendor', 'class' => 'ps-form--account-setting', 'method' => 'POST']) !!}
        <div class="card-header">
            <h3 class="mb-0">Đăng ký quản lý tiếp thị</h3>
        </div>
        <div class="card-body">
            <div class="ps-form__content">
                <input type="hidden" name="is_vendor" value="1">
                <div class="form-group">
                    <label for="shop-name" class="required">Tên nhân viên tiếp thị</label>
                    <input class="form-control" name="shop_name" id="shop-name" type="text" value="{{ old('shop_name', auth('customer')->check() ? 'Cửa hàng của '.auth('customer')->user()->name: '') }}" placeholder="{{ __('Shop Name') }}">
                    @if ($errors->has('shop_name'))
                        <span class="text-danger">{{ $errors->first('shop_name') }}</span>
                    @endif
                </div>
                <div class="form-group shop-url-wrapper">
                    <label for="shop-url" class="required float-left">Đường dẫn gian hàng</label>
                    <span class="d-inline-block float-right shop-url-status"></span>
                    <input class="form-control" name="shop_url" id="shop-url" type="text" value="{{ old('shop_url')}}" placeholder="{{ __('Shop URL') }}" data-url="{{ route('public.ajax.check-store-url') }}">
                    @if ($errors->has('shop_url'))
                        <span class="text-danger">{{ $errors->first('shop_url') }}</span>
                    @endif
                    <span class="d-inline-block"><small data-base-url="{{ route('public.store', '') }}">{{ route('public.store', (string)old('shop_url', '')) }}</small></span>
                </div>
                <div class="form-group">
                    <label for="shop-phone" class="required">Số điện thoại liên hệ của gian hàng</label>
                    <input class="form-control" name="shop_phone" id="shop-phone" type="text" value="{{ old('shop_phone', auth('customer')->check() ? auth('customer')->user()->phone: '') }}" placeholder="{{ __('Shop phone') }}">
                    @if ($errors->has('shop_phone'))
                        <span class="text-danger">{{ $errors->first('shop_phone') }}</span>
                    @endif
                </div>

                <div class="form-group text-center">
                    <div class="form-group submit">
                        <button class="submit submit-auto-width">{{ __('Register') }}</button>
                    </div>
                </div>
            </div>
        </div>
    {!! Form::close() !!}
@endsection
