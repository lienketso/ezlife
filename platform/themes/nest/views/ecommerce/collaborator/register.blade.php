@extends(Theme::getThemeNamespace() . '::views.ecommerce.customers.master')
@section('content')

    {!! Form::open(['route' => 'collaborator.become-collaborator.post', 'class' => 'ps-form--account-setting', 'method' => 'POST', 'enctype' => 'multipart/form-data']) !!}
    <div class="card-header">
        <h3 class="mb-0">Đăng ký ứng tuyển nhân viên</h3>
    </div>
    <div class="card-body">
        <div class="ps-form__content">
            <input type="hidden" name="is_affiliater" value="1">

            @if (auth('customer')->user()->presenter_id == null || auth('customer')->user()->presenter_id == 0)
            <div class="form-group">
                <label for="affiliation_id">Mã giới thiệu (Tùy chọn)</label>
                <input class="form-control" name="affiliation_id" id="affiliation_id" type="text"
                       value="{{ old('affiliation_id') }}" placeholder="Mã của người giới thiệu">
                @if ($errors->has('affiliation_id'))
                    <span class="text-danger">{{ $errors->first('affiliation_id') }}</span>
                @endif
            </div>
            @endif

            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="form-group">
                        <label for="card_front">Số CMND/CCCD <span style="color: red">*</span></label>
                        <input class="form-control" name="identification_number" id="identification_number" type="text"
                               value="{{ old('identification_number') }}" placeholder="Nhập số CMT hoặc CCCD">
                    </div>

                </div>
                <div class="col-12 col-lg-6">
                    <div class="form-group">
                        <label for="card_front">Ngày cấp <span style="color: red">*</span></label>
                        <input class="form-control" name="identification_date" id="identification_date" type="date"
                               value="{{ old('identification_date') }}" placeholder="">
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card-upload-wrapper">
                        <div class="form-group">
                            <label for="card_front">Ảnh CMND/CCCD mặt trước <span style="color: red">*</span></label>
                            <div class="card-upload-inner">
                                <p class="card-upload-button">Tải ảnh lên</p>
                                <input type="file" name="card_front" accept="image/png, image/gif, image/jpeg" class="card-preview d-none">
                                <img src="{{ Theme::asset()->url('imgs/theme/card-front.png') }}" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card-upload-wrapper">
                        <div class="form-group">
                            <label for="card_back">Ảnh CMND/CCCD mặt sau <span style="color: red">*</span></label>
                            <div class="card-upload-inner">
                                <p class="card-upload-button">Tải ảnh lên</p>
                                <input type="file" name="card_back" accept="image/png, image/gif, image/jpeg" class="card-preview d-none">
                                <img src="{{ Theme::asset()->url('imgs/theme/card-back.png') }}" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group @if ($errors->has('city')) has-error @endif">
                <label for="city">Khu vực đăng ký hoạt động:</label>
                <select name="city" class="form-control square" id="address_city" data-ajax="{{route('public.ajax.get-districts')}}">
                    @foreach(EcommerceHelper::getAvailableProvinces() as $provinceId => $provinceName)
                        <option value="{{ $provinceName }}" data-id="{{$provinceId}}" @if (old('city') == $provinceName) selected @endif>{{ $provinceName }}</option>
                    @endforeach
                </select>
                {!! Form::error('city', $errors) !!}
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
