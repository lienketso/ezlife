<div class="row">
    <div class="col-lg-3">
        <div class="card card-body mb-4">
            <article class="icontext">
                <span class="icon icon-sm rounded-circle bg-primary-light">
                    <i class="text-primary material-icons md-monetization_on"></i>
                </span>
                <div class="text">
                    <h6 class="mb-1 card-title">Số điểm khả dụng</h6>
                    <span>{{ number_format($balance) }} điểm</span>
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
                    <h6 class="mb-1 card-title">Số điểm đợi hoàn</h6>
                    <span>{{ number_format($totalCashBackPending) }} điểm</span>
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
                    <h6 class="mb-1 card-title">Tổng số giao dịch</h6>
                    <span>{{ number_format($totalTransaction) }}</span>
                </div>
            </article>
        </div>
    </div>
    @if (auth('customer')->user()->transferable)
    <div class="col-lg-3">
        <div class="card card-body mb-4">
            <article class="icontext">
                <span class="icon icon-sm rounded-circle bg-primary-light">
                    <i class="text-primary material-icons md-monetization_on"></i>
                </span>
                <div class="text">
                    <h6 class="mb-1 card-title">Số điểm giao dịch</h6>
                    <span>{{ number_format(auth('customer')->user()->ubgxu_transfer) }} xu</span>
                </div>
            </article>
        </div>
    </div>
    @endif
</div>


<div class="ps-section__left">
    <div class="row">
        @if ($balance == 0)
            <div class="col-12">
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                      </symbol>
                </svg>
                <div class="alert alert-info" role="alert">
                    <h4 class="alert-heading">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                        Bạn chưa chưa có điểm ! Hãy mua sắm để nhận được điểm nhé
                    </h4>
                    <hr>
                </div>
            </div>
        @endif
    </div>

    @if ($totalOrders)
        <div class="card mt-4 mb-4">
            <header class="card-header">
                <h4 class="card-title">Đơn hàng sử dụng xu gần đây</h4>
            </header>
            <div class="card-body">
                <div class="table-responsive">
                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th class="align-middle" scope="col">Mã đơn hàng</th>
                                    <th class="align-middle" scope="col">Trạng thái đơn hàng</th>
                                    <th class="align-middle" scope="col">Giá trị đơn hàng</th>
                                    <th class="align-middle" scope="col">Số xu thanh toán</th>
                                    <th class="align-middle" scope="col">{{ __('Date') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($data['orders'] as $order)
                                    <tr>
                                        <td>{{ get_order_code($order->id) }}</td>
                                        <td>{!! $order->status->toHtml() !!}</td>
                                        <td><strong>{{ format_price($order->amount) }}</strong></td>
                                        <td><strong>{{ number_format($order->paid_by_ubgxu) }} xu</strong></td>
                                        <td><strong>{{ $order->created_at->format('d-m-Y') }}</strong></td>
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
                <a class="card-morelink" href="{{ route('ubgxu.transactions.index') }}">
                    Xem tất cả giao dịch<i class="icon icon-chevron-right"></i>
                </a>
            </div>
        </div>
    @endif
</div>
