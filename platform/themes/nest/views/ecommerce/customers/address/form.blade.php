<div class="card">
    <div class="card-header">
        <h5>{{ $title }}</h5>
    </div>
    <div class="card-body">
        {!! Form::open(['route' => $route]) !!}
            <div class="form-group">
                <label for="name" class="required">{{ __('Full Name') }}:</label>
                <input id="name"
                    type="text"
                    class="form-control square"
                    name="name"
                    value="{{ old('name', $address->id ? $address->name : auth('customer')->user()->name) }}"
                    placeholder="{{ __('Enter your full name') }}"
                    required>
                {!! Form::error('name', $errors) !!}
            </div>

            <div class="form-group">
                <label for="email">{{ __('Email') }}:</label>
                <input id="email"
                    type="email"
                    class="form-control square"
                    name="email"
                    value="{{ old('email', $address->id ? $address->email : auth('customer')->user()->email) }}"
                    placeholder="your-email@domain.com">
                {!! Form::error('email', $errors) !!}
            </div>

            <div class="form-group">
                <label for="phone" class="required">{{ __('Phone') }}:</label>
                <input id="phone"
                    type="text"
                    class="form-control square"
                    name="phone"
                    value="{{ old('phone', $address->id ? $address->phone : auth('customer')->user()->phone) }}"
                    placeholder="0123456789"
                    required>
                {!! Form::error('phone', $errors) !!}
            </div>

            @if (EcommerceHelper::isUsingInMultipleCountries())
                <div class="form-group @if ($errors->has('country')) has-error @endif">
                    <label for="country" class="required">{{ __('Country') }}:</label>
                    <select name="country" required class="form-control square" id="country" data-type="country">
                        @foreach(['' => __('Select country...')] + EcommerceHelper::getAvailableCountries() as $countryCode => $countryName)
                            <option value="{{ $countryCode }}" @if (old('country', $address->country) == $countryCode) selected @endif>{{ $countryName }}</option>
                        @endforeach
                    </select>
                    {!! Form::error('country', $errors) !!}
                </div>
            @else
                <input type="hidden" name="country" value="{{ EcommerceHelper::getFirstCountryId() }}">
            @endif

            <div class="form-group @if ($errors->has('city')) has-error @endif">
                <label for="city" class="required">{{ __('City') }}:</label>
                <select name="city" class="form-control square" id="address_city" data-ajax="{{route('public.ajax.get-districts')}}">
                    @foreach(['' => 'Chọn Tỉnh/Thành phố'] + EcommerceHelper::getAvailableProvinces() as $provinceId => $provinceName)
                        <option value="{{ $provinceName }}" data-id="{{$provinceId}}" @if (old('city', $address->city) == $provinceName) selected @endif>{{ $provinceName }}</option>
                    @endforeach
                </select>
                {!! Form::error('city', $errors) !!}
            </div>

            <div class="form-group @if ($errors->has('state')) has-error @endif">
                <label for="state" class="required">{{ __('State') }}:</label>
                <select name="state" class="form-control square" id="address_state" data-ajax="{{route('public.ajax.get-wards')}}">
                    @foreach(['' => 'Chọn Quận/Huyện'] + EcommerceHelper::getAvailableDistrict(old('city')) as $districtId => $districtName)
                        <option value="{{ $districtName }}" data-id="{{$districtId}}" @if (old('state') == $districtName) selected @endif>{{ $districtName }}</option>
                    @endforeach
                </select>
                {!! Form::error('state', $errors) !!}
            </div>

            <div class="form-group @if ($errors->has('state')) has-error @endif">
                <label for="ward" class="required">Phường/Xã:</label>
                <select name="ward" class="form-control square" id="address_ward">
                    @foreach(['' => 'Chọn Phường/Xã'] + EcommerceHelper::getAvaiableWard(old('ward')) as $wardId => $wardName)
                        <option value="{{ $wardName }}" data-id="{{$wardId}}" @if (old('ward') == $wardName) selected @endif>{{ $wardName }}</option>
                    @endforeach
                </select>
                {!! Form::error('ward', $errors) !!}
            </div>

            <div class="form-group">
                <label for="address" class="required">{{ __('Address') }}: (nhập đầy đủ số nhà, tên đường, tên xã, tên huyện, tên tỉnh):</label>
                <input id="address"
                    type="text"
                    class="form-control square"
                    name="address"
                    value="{{ old('address', $address->address) }}"
                    required
                    placeholder="Định dạng : Số 1, Thăng Long Victory, Xã An Khánh, Huyện Hoài Đức, Hà Nội">
                {!! Form::error('address', $errors) !!}
            </div>

            @if (EcommerceHelper::isZipCodeEnabled())
                <div class="form-group">
                    <label for="zip_code" class="required">{{ __('Zip code') }}:</label>
                    <input id="zip_code"
                        type="text"
                        class="form-control"
                        name="zip_code"
                        value="{{ old('zip_code', $address->zip_code) }}"
                        required
                        placeholder="{{ __('Enter your zip code') }}">
                    {!! Form::error('zip_code', $errors) !!}
                </div>
            @endif

            <div class="form-group">
                <div class="custome-checkbox">
                    <input class="form-check-input"
                        @if (old('is_default', $address->is_default)) checked @endif
                        type="checkbox"
                        name="is_default"
                        value="1"
                        id="is_default">
                    <label for="is_default" class="form-check-label">
                        <span>{{ __('Use this address as default.') }}</span>
                    </label>
                </div>
                {!! Form::error('is_default', $errors) !!}
            </div>

            <div class="col-md-12">
                <button type="submit" class="btn btn-fill-out submit">{{ $button }}</button>
            </div>
        {!! Form::close() !!}
    </div>
</div>
