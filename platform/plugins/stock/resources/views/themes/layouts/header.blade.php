<header class="header" id="header">
    <div class="container">
        <div class="main-bar d-flex justify-content-center align-items-center">
            @if (theme_option('logo'))
                <div class="logo logo-width-1">
                    <a href="{{ route('public.index') }}">
                        <img src="{{ asset('vendor/core/plugins/stock/images/logo-ezlife-2.png') }}" alt="{{ theme_option('site_title') }}">
                    </a>
                </div>
            @endif
            <div class="mobile-menu-button d-block d-sm-none">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
    <div class="main-navigation">
        <ul>
            <li><a href="{{route('public.cp-category')}}">Trang chủ</a></li>
            <li><a href="{{route('public.cp-category')}}#section-stock-category">Gói đầu tư</a></li>
            <li><a href="">Hỗ trợ</a></li>
            <li><a href="#">Mua sắm</a></li>
            <li><a href="{{route('stock-manager.dashboard')}}">Quản lý hợp đồng</a></li>
        </ul>
    </div>
</header>