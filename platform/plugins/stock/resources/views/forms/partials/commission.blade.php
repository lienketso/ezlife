@php
    $data = json_decode($commission, true);
    $data = $data == null ? [] : $data;
    $totalLevel = \Botble\Ecommerce\Enums\CollaboratorLevelEnums::labels();
@endphp
<div class="alert alert-warning" role="alert">
    <h4 class="alert-heading">{{$title}}</h4>
    <div class="row">
        @if(!empty($data))
        <div class="col-lg-6">
            <div class="row">
                @foreach($data['vnd'] as $k=>$d)
                <div class="col-lg-12">
                    <div class="form-group mb-3">
                        <label for="date_of_birth" class="control-label required">Tỷ lệ % vnd cho cấp độ: {{\Botble\Ecommerce\Enums\CollaboratorLevelEnums::compareValue($k)}}</label>
                        <input class="form-control" required placeholder="Tỷ lệ %"
                               name="commission[vnd][]" type="number" min="1" max="100"
                               value="{{$d}}">
                    </div>
                </div>
                @endforeach
            </div>
        </div>

        <div class="col-lg-6">
            <div class="row">
                @foreach($data['ubgxu'] as $k=>$e)
                    <div class="col-lg-12">
                        <div class="form-group mb-3">
                            <label for="date_of_birth" class="control-label required">Tỷ lệ % ubgxu cho cấp độ: {{\Botble\Ecommerce\Enums\CollaboratorLevelEnums::compareValue($k)}}</label>
                            <input class="form-control" required placeholder="Tỷ lệ %"
                                   name="commission[ubgxu][]" type="number" min="1" max="100"
                                   value="{{$e}}">
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        @else

            <div class="col-lg-6">
                <div class="row">
                    @foreach($totalLevel as $k=>$d)
                        <div class="col-lg-12">
                            <div class="form-group mb-3">
                                <label for="date_of_birth" class="control-label required">Tỷ lệ % vnd cho cấp độ: {{\Botble\Ecommerce\Enums\CollaboratorLevelEnums::compareValue($k)}}</label>
                                <input class="form-control" required placeholder="Tỷ lệ %"
                                       name="commission[vnd][]" type="number" min="1" max="100"
                                       value="0">
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <div class="col-lg-6">
                <div class="row">
                    @foreach($totalLevel as $k=>$e)
                        <div class="col-lg-12">
                            <div class="form-group mb-3">
                                <label for="date_of_birth" class="control-label required">Tỷ lệ % ubgxu cho cấp độ: {{\Botble\Ecommerce\Enums\CollaboratorLevelEnums::compareValue($k)}}</label>
                                <input class="form-control" required placeholder="Tỷ lệ %"
                                       name="commission[ubgxu][]" type="number" min="1" max="100"
                                       value="0">
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

        @endif



    </div>
</div>
