@extends('plugins/stock::themes.layouts.master')
@section('content')

<main class="main" id="main">
    <div class="container">
        <div class="hero-banner owl-carousel owl-theme">
            <div class="item">
                <a class="hero-banner-item" style="background-image: url({{asset('vendor/core/plugins/stock/images/ubgmart.jpg')}})">
                    <div class="hero-banner-content">
                        Ezlife  Mart
                    </div>
                </a>
            </div>

            <div class="item">
                <a class="hero-banner-item" style="background-image: url({{asset('vendor/core/plugins/stock/images/hero-banner.jpg')}})">
                    <div class="hero-banner-content">
                        Ezlife Land
                    </div>
                </a>
            </div>

            <div class="item">
                <a class="hero-banner-item" style="background-image: url({{asset('vendor/core/plugins/stock/images/hero-banner.jpg')}})">
                    <div class="hero-banner-content">
                        Ezlife Health
                    </div>
                </a>
            </div>

            <div class="item">
                <a class="hero-banner-item" style="background-image: url({{asset('vendor/core/plugins/stock/images/vacation.png')}})">
                    <div class="hero-banner-content">
                        Ezlife Tech
                    </div>
                </a>
            </div>
        </div>
    </div>

    @if (auth('customer')->check())
        <div class="section-user-login d-block d-sm-none">
            <div class="container">
                <div class="section-user-button d-flex justify-content-between align-items-center">
                    <div class="item">
                        <a href="{{route('stock-manager.dashboard')}}" class="d-flex justify-content-center align-items-center flex-column">
                            <i class="fas fa-wallet"></i>
                            Tài sản
                        </a>
                    </div>
                    <div class="item">
                        <a href="" class="d-flex justify-content-center align-items-center flex-column">
                            <i class="fas fa-exchange-alt"></i>
                            Sàn P2P
                        </a>
                    </div>
                    <div class="item">
                        <a href="{{route('stock-manager.contracts')}}" class="d-flex justify-content-center align-items-center flex-column">
                            <i class="fas fa-history"></i>
                            Giao dịch
                        </a>
                    </div>
                    <div class="item">
                        <a href="{{route('stock-manager.contracts')}}" class="d-flex justify-content-center align-items-center flex-column">
                            <i class="fas fa-file-invoice-dollar"></i>
                            Hợp đồng
                        </a>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <div class="section-about">
        <div class="container">
            <div class="section-about-inner" style="background-image: url({{asset('vendor/core/plugins/stock/images/map.png')}})">
                <div class="section-about-logo d-flex flex-column align-items-center">
                    <img src="{{ asset('vendor/core/plugins/stock/images/logo-ezlife-2.png') }}" alt="{{ theme_option('site_title') }}" class="img-fluid mx-auto mb-4">
                    <h2 class="section-about-title text-center">Ứng dụng đầu tư tài chính số hàng đầu Việt Nam</h2>
                </div>
                <div class="section-about-content d-flex align-items-center justify-content-center">
                    <div class="section-about-block">
                        <div class="section-about-block-header">
                            <h4 class="text-uppercase">Đầu tư <img src="{{asset('vendor/core/plugins/stock/images/revenue.png')}}" alt="" class="img-fluid"></h4>
                        </div>
                        <div class="section-about-block-content">
                            <ul>
                                <li><i class="fa-solid fa-circle-check"></i> Lợi tức đúng kỳ vọng</li>
                                <li><i class="fa-solid fa-circle-check"></i> Thông tin giao dịch minh bạch</li>
                                <li><i class="fa-solid fa-circle-check"></i> Nhận vốn và lãi ngay sau kỳ hạn</li>
                                <li><i class="fa-solid fa-circle-check"></i> Kỳ hạn đầu tư linh hoạt</li>
                            </ul>

                            <div class="section-about-action">
                                <a href="{{route('public.cp-category')}}#section-stock-category" class="action-button">Đầu tư ngay <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                    </div>
                    <img src="{{asset('vendor/core/plugins/stock/images/about-image.png')}}" alt="" class="img-fluid section-about-image">
                </div>
            </div>
        </div>
    </div>

    <div class="section-why">
        <div class="container">
            <h2 class="section-why-title text-center">Làm sao để thực hiện đầu tư <br/> tại Ezlife ?</h2>
            <div class="section-why-wrapper">
                <div class="section-why-block">
                    <div class="section-why-block-item">
                        <span>1</span>
                        <div class="section-why-block-item-content">
                            <h4>Đăng ký</h4>
                            <p>Đăng ký một tài khoản duy nhất trong hệ thống Ezlife</p>
                        </div>
                    </div>
                    <div class="section-why-block-item">
                        <span>2</span>
                        <div class="section-why-block-item-content">
                            <h4>Bắt đầu đầu tư</h4>
                            <p>Chọn gói đầu tư phù hợp với vốn sẵn có và kỳ hạn mong muốn</p>
                        </div>
                    </div>
                    <div class="section-why-block-item">
                        <span>3</span>
                        <div class="section-why-block-item-content">
                            <h4>Theo dõi các khoản đầu tư</h4>
                            <p>Dễ dàng theo gõi các khoản đầu tư, lưu trữ thông tin, các lần nạp, rút tiền</p>
                        </div>
                    </div>

                    <div class="section-why-block-item">
                        <a href="{{route('public.cp-category')}}#section-stock-category" class="action-button">Đầu tư ngay</a>
                    </div>
                </div>
                <div class="section-why-images">
                    <img src="{{asset('vendor/core/plugins/stock/images/why-heroes.png')}}" alt="" class="img-fluid">
                    <div class="help-box">
                        <div class="help-box-item">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                            <div class="help-box-item-content">
                                <p>Bạn cần hỗ trợ? Hãy gọi</p>
                                <p><b>0945.318.916</b></p>
                            </div>
                        </div>
                        <div class="help-box-item">
                            <i class="fa-solid fa-envelope"></i>
                            <div class="help-box-item-content">
                                <p>Hoặc gửi Email cho chúng tôi <a href="mailto:thanhan1507@gmail.com">tại đây</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section-stock-category" id="section-stock-category">
        <div class="container">
            <h2 class="section-stock-category-title">Các danh mục đầu tư <br/>tại Ezlife</h2>
            <div class="section-stock-list">
                <div class="row">
                    @foreach($listCategory as $d)
                        <div class="col-12 col-md-6">
                            <a class="section-stock-item" href="{{route('public.packages', $d->slug)}}" style="background-image: url({{RvMedia::getImageUrl($d->thumbnail, 'full')}})">
                                <div class="section-stock-item-content">
                                    <h4>{{$d->name}}</h4>
                                    <p>{{$d->description}}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

    <div class="section-stats">
        <div class="container">
            <div class="section-stats-wrapper">
                <div class="row">
                    <div class="col-6 col-md-3">
                        <div class="section-stats-item">
                            <div class="section-stats-image">
                                <img src="{{asset('vendor/core/plugins/stock/images/man.png')}}" alt="" class="img-fluid">
                            </div>
                            <div class="section-stats-description">
                                <h4>1.250</h4>
                                <p>Người đăng ký sử dụng dịch vụ</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="section-stats-item">
                            <div class="section-stats-image">
                                <img src="{{asset('vendor/core/plugins/stock/images/money.png')}}" alt="" class="img-fluid">
                            </div>
                            <div class="section-stats-description">
                                <h4>1,091,127,000,000</h4>
                                <p>Số tiền giao dịch mỗi ngày</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="section-stats-item">
                            <div class="section-stats-image">
                                <img src="{{asset('vendor/core/plugins/stock/images/growth.png')}}" alt="" class="img-fluid">
                            </div>
                            <div class="section-stats-description">
                                <h4>14 - 16%</h4>
                                <p>Lợi tức hàng năm cho các nhà đầu tư</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="section-stats-item">
                            <div class="section-stats-image">
                                <img src="{{asset('vendor/core/plugins/stock/images/percentage.png')}}" alt="" class="img-fluid">
                            </div>
                            <div class="section-stats-description">
                                <h4>1880</h4>
                                <p>Nhà đầu tư lên sàn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section-chart">
        <div class="container">
            <h2 class="section-why-title text-center">Cổ phần Ezlife</h2>
            <div class="row">
                <div class="col-12 col-md-5 section-chart-logo">
                    <img src="{{ RvMedia::getImageUrl(theme_option('logo')) }}" alt="{{ theme_option('site_title') }}" class="img-fluid mx-auto">
                    <h4>Biểu đồ tăng trưởng của cổ phẩn Ezlife, khoản đầu tư an toàn, sinh lời cho các nhà đầu tư</h4>
                </div>
                <div class="col-12 col-md-7">
                    <canvas id="myChart" style="height: 600px; width: auto"></canvas>
                </div>
            </div>
        </div>
    </div>

    <div class="section-advanced">
        <div class="container">
            <div class="section-advanced-wrapper">
                <div class="section-advanced-title d-flex flex-column align-items-center">
                    <img src="{{ asset('vendor/core/plugins/stock/images/logo-ezlife-2.png') }}" alt="{{ theme_option('site_title') }}" class="img-fluid mx-auto mb-4">
                    <h2 class="section-why-title text-center">Tiện ích trong tầm tay</h2>
                </div>
                <div class="section-advanced-list">
                    <div class="section-advanced-item">
                        <div class="section-advanced-images">
                            <img src="{{asset('vendor/core/plugins/stock/images/fast.png')}}" alt="" class="img-fluid">
                        </div>
                        <div class="section-advanced-description">
                            <h4>Nhanh chóng</h4>
                            <p>Thủ tục chỉ trong 5 phút</p>
                        </div>
                    </div>

                    <div class="section-advanced-item">
                        <div class="section-advanced-images">
                            <img src="{{asset('vendor/core/plugins/stock/images/graduation-hat.png')}}" alt="" class="img-fluid">
                        </div>
                        <div class="section-advanced-description">
                            <h4>Thông minh</h4>
                            <p>Tích hợp hợp đồng điện tử và chữ ký số, cung cấp giải giải pháp lý nhanh gọn</p>
                        </div>
                    </div>

                    <div class="section-advanced-item">
                        <div class="section-advanced-images">
                            <img src="{{asset('vendor/core/plugins/stock/images/invest.png')}}" alt="" class="img-fluid">
                        </div>
                        <div class="section-advanced-description">
                            <h4>Đầu tư</h4>
                            <p>Lãi suất hấp dẫn lên đến 16% cho các nhà đầu tư</p>
                        </div>
                    </div>

                    <div class="section-advanced-item">
                        <div class="section-advanced-images">
                            <img src="{{asset('vendor/core/plugins/stock/images/protection.png')}}" alt="" class="img-fluid">
                        </div>
                        <div class="section-advanced-description">
                            <h4>An toàn</h4>
                            <p>Đảm bảo 100% thu hồi vốn và minh bạch giao dịch</p>
                        </div>
                    </div>

                    <div class="section-advanced-item">
                        <div class="section-advanced-images">
                            <img src="{{asset('vendor/core/plugins/stock/images/search.png')}}" alt="" class="img-fluid">
                        </div>
                        <div class="section-advanced-description">
                            <h4>Minh bạch</h4>
                            <p>Khách hàng được tư vấn và trao đổi một cách minh bạch với quy trình làm việc công khai từ đến đến khi hoành thành hợp đồng nhằm tạo sự an tâm và tin tưởng tuyệt đối</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

@endsection

@push('scripts')
    <script>
		const ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			responsive: true,
			maintainAspectRatio: false,
			type: 'bar',
			data: {
				labels: ['Qúy I', 'Quý II', 'Quý III', 'Quý IV'],
				datasets: [{
					label: 'giá trị CP Ezlife',
					data: [9000, 9200, 9300, 10000],
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				}]
			},
			options: {
				scales: {
					y: {
						min: 7000,
						max: 10500
					}
				}
			}
		});
    </script>
@endpush