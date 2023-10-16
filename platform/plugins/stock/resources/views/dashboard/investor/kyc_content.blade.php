<div class="tab-pane" id="tab_information">
    <div class="row">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="shop-name" class="required">Họ và tên</label>
                    <input class="form-control" name="name" id="shop-name" type="text" value="{{ old('name', $investor->name) }}" placeholder="Họ và tên">
                    @if ($errors->has('name'))
                        <span class="text-danger">{{ $errors->first('name') }}</span>
                    @endif
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="shop-phone" class="required">{{ __('Phone Number') }}</label>
                    <input class="form-control" name="phone" disabled type="text" value="{{ old('phone', $investor->phone) }}" placeholder="Số điện thoại">
                    @if ($errors->has('phone'))
                        <span class="text-danger">{{ $errors->first('phone') }}</span>
                    @endif
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="area" class="required">{{ __('Khu vực') }}</label>
                    <select name="area" class="form-control">
                        @foreach(['' => 'Chọn Tỉnh/Thành phố'] + EcommerceHelper::getAvailableProvinces() as $provinceId => $provinceName)
                        <option value="{{ $provinceName }}" {{ ($investor->area == $provinceName) ? 'selected' : ''}}>{{ $provinceName }}</option>
                        @endforeach
                    </select>
                    @if ($errors->has('area'))
                        <span class="text-danger">{{ $errors->first('area') }}</span>
                    @endif
                </div>
            </div>
        </div>

        <div class="col-sm-6">
            <div class="form-group">
                <label for="logo">CMND/CCCD mặt trước</label>
                {!! Form::customImage('card_front', old('card_front', $investor->card_front)) !!}
                {!! Form::error('card_front', $errors) !!}
            </div>
        </div>

        <div class="col-sm-6">
            <div class="form-group">
                <label for="logo">CMND/CCCD mặt trước</label>
                {!! Form::customImage('card_back', old('card_back', $investor->card_back)) !!}
                {!! Form::error('card_back', $errors) !!}
            </div>
        </div>
    </div>
</div>