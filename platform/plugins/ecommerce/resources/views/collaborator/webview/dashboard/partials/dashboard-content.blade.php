<div class="row">
    <div class="col-lg-3">
        <div class="card card-body mb-4">
            <article class="icontext">
                    <span class="icon icon-sm rounded-circle bg-primary-light">
                        <i class="text-primary material-icons md-qrcode"></i>
                    </span>
                <div class="text">
                    <h6 class="mb-1 card-title">Mã giới thiệu</h6>
                    <span>{{auth('customer')->user()->affiliation_id}}</span>
                </div>
            </article>
        </div>
    </div>

    <div class="col-lg-3">
        <div class="card card-body mb-4">
            <article class="icontext">
                <span class="icon icon-sm rounded-circle bg-primary-light">
                    <i class="text-primary material-icons md-monetization_on"></i>
                </span>
                <div class="text">
                    <h6 class="mb-1 card-title">Số dư khả dụng</h6>
                    <span>{{ format_price($balance) }}</span>
                </div>
            </article>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="card card-body mb-4">
            <article class="icontext">
                <span class="icon icon-sm rounded-circle bg-success-light">
                    <i class="text-success material-icons md-group"></i>
                </span>
                <div class="text">
                    <h6 class="mb-1 card-title">Đại lý tuyến dưới</h6>
                    <span>{{ $totalCollaboratorChilds }}</span>
                </div>
            </article>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="card card-body mb-4">
            <article class="icontext">
                <span class="icon icon-sm rounded-circle bg-warning-light">
                    <i class="text-warning material-icons md-qr_code"></i>
                </span>
                <div class="text">
                    <h6 class="mb-1 card-title">Doanh số tuyến dưới</h6>
                    <span>{{ isset($groupRevenue->sum) ? format_price($groupRevenue->sum) : format_price(0) }}</span>
                </div>
            </article>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="card card-body mb-4">
            <article class="icontext">
                <span class="icon icon-sm rounded-circle bg-success-light">
                    <i class="text-success material-icons md-group"></i>
                </span>
                <div class="text">
                    <h6 class="mb-1 card-title">Khách hàng đang chăm sóc</h6>
                    <span>{{ $totalCustomer }}</span>
                </div>
            </article>
        </div>
    </div>
</div>


<div class="ps-section__left">
    <div class="row">
        @if (!$totalOrders)
            <div class="col-12">
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                      </symbol>
                </svg>
                <div class="alert alert-info" role="alert">
                    <h4 class="alert-heading">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                        Bạn chưa có đơn hàng nào phát sinh! Hãy mở rộng hệ thống đại lý để gia tăng doanh số nhé!
                    </h4>
                    <hr>
                    <p>Link mời đại lý vào nhóm: {{EcommerceHelper::generateAffiliateLink()}}</p>
                </div>
            </div>
        @else
            <div class="col-md-8">
                <div class="card card-sale-report">
                    <div class="card-header">
                        <h4>Doanh số cá nhân</h4>
                        <a href="{{ route('collaborator.revenues.index') }}">
                            <small>{{ __('Doanh số :label', ['label' => $data['predefinedRange']]) }} <i class="fas fa-angle-double-right"></i></small>
                        </a>
                    </div>
                    <div class="card-body">
                        <sales-reports-chart url="{{ route('collaborator.chart.month', [
                            'date_from' => $data['startDate']->format('Y-m-d'),
                            'date_to'   => $data['endDate']->format('Y-m-d')
                        ]) }}" ></sales-reports-chart>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-earning">
                    <div class="card-header">
                        <h4>Thu nhập cá nhân</h4>
                        <div class="text-primary">
                            <small>{{ __('Thu nhập trong :label', ['label' => $data['predefinedRange']]) }}</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-chart">
                            <revenue-chart :data="{{ json_encode([
                                ['label' => 'Doanh số', 'value' => $data['revenue']['amount'], 'color' => '#80bc00'],
                                ['label' => 'Rút tiền', 'value' => $data['revenue']['withdrawal'], 'color' => '#fc6b00']]) }}"></revenue-chart>
                            <div class="card-information">
                                <i class="material-icons md-account_balance_wallet"></i>
                                <strong>{{ format_price($data['revenue']['amount'] - $data['revenue']['withdrawal']) }}</strong>
                                <small>Số dư</small>
                            </div>
                        </div>
                        <div class="card-status">
                            <p class="green">
                                <strong>{{ format_price($data['revenue']['amount']) }}</strong>
                                <span>Doanh số</span>
                            </p>
                            <p class="red">
                                <strong>{{ format_price($data['revenue']['withdrawal']) }}</strong>
                                <span data-bs-toggle="tooltip" data-bs-original-title="Bao gồm cả các yêu cầu đang xử lý, đã thành công">Rút tiền</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        @endif
    </div>

    @if ($totalOrders)
        <div class="card mt-4 mb-4">
            <header class="card-header">
                <h4 class="card-title">Đơn hàng gần đây</h4>
            </header>
            <div class="card-body">
                <div class="table-responsive">
                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th class="align-middle" scope="col">Mã đơn hàng</th>
                                    <th class="align-middle" scope="col">{{ __('Date') }}</th>
                                    <th class="align-middle" scope="col">{{ __('Customer') }}</th>
                                    <th class="align-middle" scope="col">Trạng thái đơn hàng</th>
                                    <th class="align-middle" scope="col">Trả hoa hồng</th>
                                    <th class="align-middle" scope="col">Giá trị đơn hàng</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($data['orders'] as $order)
                                    <tr>
                                        <td>{{ get_order_code($order->id) }}</td>
                                        <td><strong>{{ $order->created_at->format('M d, Y') }}</strong></td>
                                        <td><strong>{{ $order->user->name ?: $order->address->name }} - {{$order->user->phone}}</strong></td>
                                        <td>{!! $order->status->toHtml() !!}</td>
                                        <td>{!! $order->process_affiliate->toHtml() !!}</td>
                                        <td><strong>{{ format_price($order->amount) }}</strong></td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="6" class="text-center">{{ __('No orders!') }}</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <a class="card-morelink" href="{{ route('collaborator.orders.index') }}">
                    Xem tất cả đơn hàng<i class="icon icon-chevron-right"></i>
                </a>
            </div>
        </div>
    @endif

{{--    @if ($totalProducts)--}}
{{--        <div class="card mt-4 mb-4">--}}
{{--            <header class="card-header">--}}
{{--                <h4 class="card-title">{{ __('Top Selling Products') }}</h4>--}}
{{--            </header>--}}
{{--            <div class="card-body">--}}
{{--                <div class="table-responsive">--}}
{{--                    <div class="table-responsive">--}}
{{--                        <table class="table align-middle table-nowrap mb-0">--}}
{{--                            <thead class="table-light">--}}
{{--                                <tr>--}}
{{--                                    <th class="align-middle" scope="col">{{ __('ID') }}</th>--}}
{{--                                    <th class="align-middle" scope="col">{{ __('Name') }}</th>--}}
{{--                                    <th class="align-middle" scope="col">{{ __('Amount') }}</th>--}}
{{--                                    <th class="align-middle" scope="col">{{ __('Status') }}</th>--}}
{{--                                    <th class="align-middle" scope="col">{{ __('Created at') }}</th>--}}
{{--                                </tr>--}}
{{--                            </thead>--}}
{{--                            <tbody>--}}
{{--                                @forelse ($data['products'] as $product)--}}
{{--                                    <tr>--}}
{{--                                        <td>{{ $product->id }}</td>--}}
{{--                                        <td><a href="{{ route('marketplace.vendor.products.edit', $product->original_product->id) }}"><strong>{{ $product->original_product->name }}</strong></a></td>--}}
{{--                                        <td><strong>{!! $product->price_in_table !!}</strong></td>--}}
{{--                                        <td>{!! $product->status->toHtml() !!}</td>--}}
{{--                                        <td><strong>{{ $product->created_at->format('M d, Y') }}</strong></td>--}}
{{--                                    </tr>--}}
{{--                                @empty--}}
{{--                                    <tr>--}}
{{--                                        <td colspan="6" class="text-center">{{ __('No products!') }}</td>--}}
{{--                                    </tr>--}}
{{--                                @endforelse--}}
{{--                            </tbody>--}}
{{--                        </table>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="card-footer">--}}
{{--                <a class="card-morelink" href="{{ route('marketplace.vendor.products.index') }}">--}}
{{--                    {{ __('View Full Products') }}<i class="icon icon-chevron-right"></i>--}}
{{--                </a>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    @endif--}}
</div>
