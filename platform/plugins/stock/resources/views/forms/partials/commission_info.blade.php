<div class="alert alert-dark" role="alert">
    <h4 class="alert-heading">{{ $title ?? 'Thông tin tỷ lệ hoa hồng' }}</h4>
    @php
        $data = json_decode($commission);
        if(!empty($data)):
    @endphp
    <div class="row">
        <div class="col-lg-6">
            <h3>Hoa hồng Vnd</h3>
            @if(isset($data->vnd))
                @foreach($data->vnd as $key => $d)
                    <p><b>{{\Botble\Ecommerce\Enums\CollaboratorLevelEnums::compareValue($key)}}</b>: {{$d}}%</p>
                @endforeach
            @endif
        </div>
        <div class="col-lg-6">
            <h3>Hoa hồng Ubgxu</h3>
            @if(isset($data->ubgxu))
                @foreach($data->ubgxu as $key => $c)
                    <p><b>{{\Botble\Ecommerce\Enums\CollaboratorLevelEnums::compareValue($key)}}</b>: {{$c}}%</p>
                @endforeach
            @endif    
        </div>
    </div>
    @php
        endif;
    @endphp
</div>
