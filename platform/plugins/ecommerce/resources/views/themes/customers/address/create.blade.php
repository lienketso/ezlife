@extends('plugins/ecommerce::themes.customers.master')

@section('content')
     <h2 class="customer-page-title">{{ __('Add a new address') }}</h2>
    <br>
    <div class="profile-content">

        {!! Form::open(['route' => 'customer.address.create']) !!}
            <div class="input-group">
                 <span class="input-group-prepend">{{ __('Full Name') }}:</span>
                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}">
            </div>
            {!! Form::error('name', $errors) !!}

            <div class="input-group">
                <span class="input-group-prepend">{{ __('Email') }}:</span>
                <input id="email" type="text" class="form-control" name="email" value="{{ old('email') }}">
            </div>
            {!! Form::error('email', $errors) !!}

            <div class="input-group">
                 <span class="input-group-prepend">{{ __('Phone') }}:</span>
                <input id="phone" type="text" class="form-control" name="phone" value="{{ old('phone') }}">

            </div>
             {!! Form::error('phone', $errors) !!}

            @if (EcommerceHelper::isUsingInMultipleCountries())
                <div class="form-group mb-3 @if ($errors->has('country')) has-error @endif">
                    <label for="country">{{ __('Country') }}:</label>
                    <select name="country" class="form-control" id="country" data-type="country">
                        @foreach(EcommerceHelper::getAvailableCountries() as $countryCode => $countryName)
                            <option value="{{ $countryCode }}" @if (old('country') == $countryCode) selected @endif>{{ $countryName }}</option>
                        @endforeach
                    </select>
                </div>
                {!! Form::error('country', $errors) !!}
            @else
                <input type="hidden" name="country" value="{{ EcommerceHelper::getFirstCountryId() }}">
            @endif

            <div class="input-group">
                <span class="input-group-prepend required ">{{ __('Address') }} (nhập đầy đủ số nhà, tên đường):</span>
                <input id="address" type="text" class="form-control" name="address" value="{{ old('address') }}">

            </div>
            {!! Form::error('address', $errors) !!}

            @if (EcommerceHelper::isZipCodeEnabled())
                <div class="form-group mb-3">
                    <label>{{ __('Zip code') }}:</label>
                    <input id="zip_code" type="text" class="form-control" name="zip_code" value="{{ old('zip_code') }}">
                    {!! Form::error('zip_code', $errors) !!}
                </div>
            @endif

            <div class="input-group">
                <label for="is_default">
                    <input type="checkbox" name="is_default" value="1" id="is_default">
                    {{ __('Use this address as default.') }}

                </label>
            </div>
             {!! Form::error('is_default', $errors) !!}

            <div class="form-group text-center">
                <button class="btn btn-primary" type="submit">{{ __('Add a new address') }}</button>
            </div>
        {!! Form::close() !!}
    </div>
@endsection
