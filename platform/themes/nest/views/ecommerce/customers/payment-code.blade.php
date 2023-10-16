@extends(Theme::getThemeNamespace() . '::views.ecommerce.customers.master')
@section('content')
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0">{{ __('Xin chào :name!', ['name' => auth('customer')->user()->name]) }} </h5>
        </div>
        <div class="card-body">
            <div>Mã thanh toán của bạn là: <h1>{{$paymentCode}}</h1></div>
            <div class="col-md-12 mt-3">
                <button type="button" class="btn btn-fill-out submit" onclick="window.location.reload()">Lấy mã thanh toán mới</button>
            </div>
        </div>
    </div>
@endsection