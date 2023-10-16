@extends('plugins/stock::dashboard.layouts.master')

@section('content')
    <div class="contract-wrapper">
        <div class="contract-info">
            <div class="row">
                <div class="col-12">
                    <div role="alert" class="alert alert-info">
                        <h4 class="alert-heading">
                            Hợp đồng số: {{$contract->contract_hard_code}}
                        </h4>
                        <hr>
                        <p class="mb-0">Giá trị HĐ đầu tư: {{format_price($contract->first_buy_price)}}</p>
                        <p class="mb-0">Lãi suất cam kết: {{$contract->first_buy_percentage}}%</p>
                        <p class="mb-0">Ngày bắt đầu hiệu lực: {{ Carbon\Carbon::parse($contract->active_date)->format('d-m-Y') }}</p>
                        <p class="mb-0">Ngày hết hiệu lực: {{ Carbon\Carbon::parse($contract->expires_date)->format('d-m-Y') }}</p>
                        <p class="mb-0">File hợp đồng: <a href="{{RvMedia::url($contract->file_contract)}}" target="_blank">Tải về</a></p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-success-light">
                                <i class="text-success material-icons md-monetization_on"></i>
                            </span>
                            <div class="text"><h6 class="mb-1 card-title">Tổng lợi tức cả kỳ</h6>
                                <span>{{format_price($contract->total_profit_amount)}}</span>
                            </div>
                        </article>
                    </div>
                </div>

                @if ($contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::ALL || $contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::VND)
                    <div class="col-lg-3">
                        <div class="card card-body mb-4">
                            <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-primary-light">
                                <i class="text-warning material-icons md-monetization_on"></i>
                            </span>
                                <div class="text"><h6 class="mb-1 card-title">Tổng lợi tức truyền thống đã nhận ({{$contract->total_day_paid}}) ngày</h6>
                                    <span>{{format_price($contract->daily_profit_amount * $contract->total_day_paid)}}</span>
                                </div>
                            </article>
                        </div>
                    </div>
                @endif

                @if ($contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::ALL || $contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::COIN)
                    <div class="col-lg-3">
                        <div class="card card-body mb-4">
                            <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-primary-light">
                                <i class="text-warning material-icons md-monetization_on"></i>
                            </span>
                                <div class="text"><h6 class="mb-1 card-title">Tổng lợi tức xu đã nhận ({{$contract->total_day_paid}}) ngày <a target="_blank" href="{{route('ubgxu.transactions.index')}}">Xem</a></h6>
                                    <span>{{format_price($contract->daily_profit_amount_xu * $contract->total_day_paid)}}xu</span>
                                </div>
                            </article>
                        </div>
                    </div>
                @endif

                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-success-light">
                                <i class="text-success material-icons md-group"></i>
                            </span>
                            <div class="text"><h6 class="mb-1 card-title">Số ngày đã nhận lợi tức</h6>
                                <span>{{$contract->total_day_paid}}</span></div>
                        </article>
                    </div>
                </div>

                @if ($contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::ALL || $contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::VND)
                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-primary-light">
                                <i class="text-warning material-icons md-monetization_on"></i>
                            </span>
                            <div class="text"><h6 class="mb-1 card-title">Lợi tức truyền thống hàng ngày</h6>
                                <span>{{format_price($contract->daily_profit_amount)}}</span>
                            </div>
                        </article>
                    </div>
                </div>
                @endif

                @if ($contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::ALL || $contract->payment_type == \Botble\Stock\Enums\StockPaymentTypeEnum::COIN)
                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-primary-light">
                                <i class="text-warning material-icons md-monetization_on"></i>
                            </span>
                            <div class="text"><h6 class="mb-1 card-title">Lợi tức xu hàng ngày</h6>
                                <span>{{number_format($contract->daily_profit_amount_xu)}}xu</span>
                            </div>
                        </article>
                    </div>
                </div>
                @endif

                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-primary-light">
                                <i class="text-primary material-icons md-monetization_on"></i>
                            </span>
                            <div class="text"><h6 class="mb-1 card-title">Lợi tức khả dụng <a href="{{route('stock-manager.withdrawals.create', $contract->id)}}">Rút</a></h6>
                                <span>{{format_price($contract->amount_available)}}</span></div>
                        </article>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card mt-4 mb-4">
                        <header class="card-header">
                            <h4 class="card-title">Lịch sử nhận lợi tức của HĐ</h4>
                        </header>
                        <div class="card-body">
                            <div class="table-responsive">
                                <div class="table-responsive">
                                    <table class="table align-middle table-nowrap mb-0">
                                        <thead class="table-light">
                                        <tr>
                                            <th class="align-middle" scope="col">{{ __('Date') }}</th>
                                            <th class="align-middle" scope="col" width="200">Lợi tức thường</th>
                                            <th class="align-middle" scope="col" width="200">Lợi tức xu</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @forelse ($contactHistory as $history)
                                            <tr>
                                                <td>{{ \Carbon\Carbon::create($history->history_date)->format('d/m/Y') }}</td>
                                                <td><strong>{{ format_price($history->amount) }}</strong></td>
                                                <td><strong>{{ $history->amount_xu }} xu</strong></td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="3" class="text-center">Chưa có thông tin</td>
                                            </tr>
                                        @endforelse
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('footer')
    <script>
		var BotbleVariables = BotbleVariables || {};
		BotbleVariables.languages = BotbleVariables.languages || {};
		BotbleVariables.languages.reports = {!! json_encode(trans('plugins/ecommerce::reports.ranges'), JSON_HEX_APOS) !!}
    </script>
@endpush
