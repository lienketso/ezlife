@extends('core/base::layouts.master')
@section('content')
    <div class="flexbox-grid">
        <div class="flexbox-content">
            <div class="body">
                <div class="box-wrap-emptyTmpl text-center col-12">
                    <h1 class="mt20 mb20 ws-nm font-size-emptyDisplayTmpl">Quản lý danh sách các đơn đăng ký cộng tác viên</h1>
                    <p class="text-info-displayTmpl">Phê duyệt các đơn đăng ký làm cộng tác viên</p>
                    <div class="empty-displayTmpl-pdtop">
                        <div class="empty-displayTmpl-image">
                            <img src="{{ asset('vendor/core/plugins/ecommerce/images/empty-customer.png') }}" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
