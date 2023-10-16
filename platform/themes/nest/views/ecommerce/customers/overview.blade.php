@extends(Theme::getThemeNamespace() . '::views.ecommerce.customers.master')
@section('content')
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0">{{ __('Xin chào :name!', ['name' => auth('customer')->user()->name]) }} </h5>
        </div>
        <div class="card-body">
            <p>
                {!! clean(__('Từ trang tổng quan. bạn có thể dễ dàng kiếm tra &amp; xem <a href=":order">các đơn hàng</a>', [
                    'order' => route('customer.orders'),
                ])) !!},

                {!! clean(__('quản lý <a href=":address">địa chỉ nhận hàng</a> and <a href=":profile">và cập nhật mật khẩu và thông tin tài khoản.</a>', [
                    'profile' => route('customer.edit-account'),
                    'address' => route('customer.address'),
                ])) !!}
            </p>

            <div class="overview-info">

                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="overview-card">
                            <div class="card card-body mb-4">
                                <article class="icontext">
                                <span class="icon icon-sm rounded-circle bg-primary-light">
                                    <i class="text-primary fi-rs-money"></i>
                                </span>
                                    <div class="text">
                                        <h6 class="mb-1 card-title">Ví hoa hồng (<em>Ví tạm tính</em>)</h6>
                                        <span>{{number_format(auth('customer')->user()->wallet)}} </span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="overview-card">
                            <div class="card card-body mb-4">
                                <article class="icontext">
                                <span class="icon icon-sm rounded-circle bg-primary-light">
                                    <i class="text-primary fi-rs-money"></i>
                                </span>
                                    <div class="text">
                                        <h6 class="mb-1 card-title">Ví điểm</h6>
                                        <span>{{number_format(auth('customer')->user()->ubgxu)}} điểm</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

{{--                    @if (EcommerceHelper::isAffiliater())--}}
                    <div class="col-12 col-md-6">
                        <div class="overview-card">
                            <div class="card card-body mb-4">
                                <article class="icontext">
                                <span class="icon icon-sm rounded-circle bg-primary-light">
                                    <i class="text-primary fi-rs-money"></i>
                                </span>
                                    <div class="text">
                                        <h6 class="mb-1 card-title">Ví tiền mặt</h6>
                                        <span>{{format_price(auth('customer')->user()->collaborator_balance)}}</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
{{--                    @endif--}}
                    @if (EcommerceHelper::isAffiliater())
                    <div class="col-12 col-md-6">
                        <div class="overview-card">
                            <div class="card card-body mb-4">
                                <article class="icontext">
                                <span class="icon icon-sm rounded-circle bg-primary-light">
                                    <i class="text-primary fi-rs-money"></i>
                                </span>
                                    <div class="text">
                                        <h6 class="mb-1 card-title">Ví Cổ phần</h6>
                                        <span>0₫</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                @endif

                <table class="table table-hover table-bordered">
                    <tbody>
{{--                        @if (EcommerceHelper::isAffiliater())--}}
                        <tr>
                            <td>Mã giới thiệu <br/>(Dùng cho việc mở rộng hệ thống bán hàng của bạn)</td>
                            <td><b>{{auth('customer')->user()->affiliation_id}}</b></td>
                        </tr>
                        <tr>
                            <td>Link đăng ký nhanh<br/>(Copy và gửi link, hoặc scan mã QR giới thiệu của bạn)</td>
                            <td>
                                <input type="text" value="{{EcommerceHelper::generateAffiliateLink()}}" id="register-link" class="hidden">
                                <b>
                                    <a id="copylink-affiliate" href="javascript:;">Link đăng ký</a><br/>
                                    <small>{{EcommerceHelper::generateAffiliateLink()}}</small>
                                </b><br/>
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={{EcommerceHelper::generateAffiliateLink()}}" alt="" class="img-fluid" style="margin: 10px 0; display: block">
                            </td>
                        </tr>
{{--                        @endif--}}
                        <tr>
                            <td>Họ và tên</td>
                            <td>{{auth('customer')->user()->name}} <i class="fi-rs-check" style="color: green"></i></td>
                        </tr>
                        <tr>
                            <td>Số điện thoại</td>
                            <td>{{auth('customer')->user()->phone}} <i class="fi-rs-check" style="color: green"></i></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                @if (auth('customer')->user()->email != null)
                                    {{auth('customer')->user()->email}} <i class="fi-rs-check" style="color: green"></i>
                                @else
                                    <i class="fi-rs-cross" style="color: red"></i>
                                @endif
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection