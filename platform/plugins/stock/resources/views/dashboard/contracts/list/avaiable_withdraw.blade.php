@extends('plugins/stock::dashboard.layouts.master')

@section('content')
    <div class="form-content">
        <div class="form-group">
            <div class="ps-form__content">
                <div class="list-contract-wrapper">
                    <div class="row">
                        @forelse($activeContract as $contract)
                            <div class="col-12 col-md-4">
                                <div class="contract-item-wrapper">
                                    <div class="package-info">
                                        <div class="package-images">
                                            <img src="{{RvMedia::getImageUrl($contract->package->thumbnail, 'full')}}" alt="" class="img-fluid">
                                        </div>
                                        <div class="package-info-title">
                                            Thông tin gói đầu tư
                                        </div>
                                        <p class="package-name">Tên gói: <b>{{$contract->name}}</b></p>
                                        <p class="package-percentage">Lợi tức: <b>{{$contract->first_buy_percentage}}%</b></p>
                                        <p class="package-first-buy-price">Chi phí đầu tư: <b>{{format_price($contract->first_buy_price)}}</b> </p>
                                    </div>
                                    <div class="contract-info">
                                        <div class="contract-info-title">
                                            Thông tin lãi suất
                                        </div>
                                        <p class="contract-code">Lãi cam kết toàn kỳ: <b>{{format_price($contract->total_profit_amount)}}</b></p>
                                        <p class="contract-code">Số ngày đã trả lãi: <b>{{$contract->total_day_paid}}</b></p>
                                        <p class="contract-code">Số dư khả dụng: <b>{{format_price($contract->amount_available)}}</b></p>
                                    </div>
                                    <div class="contract-detail">
                                        <a href="{{route('stock-manager.withdrawals.create', $contract->id)}}">Rút lãi từ HĐ này</a>
                                    </div>
                                </div>
                            </div>
                        @empty
                            @include('plugins/stock::dashboard.contracts.empty')
                        @endforelse
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
