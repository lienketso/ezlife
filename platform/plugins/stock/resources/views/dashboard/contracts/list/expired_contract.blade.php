<div class="list-contract-wrapper">
    <div class="row">
        @forelse($expiredContract as $contract)
            <div class="col-12 col-md-4">
                <div class="contract-item-wrapper">
                    <div class="package-info">
                        <div class="package-images">
                            <img src="{{RvMedia::getImageUrl($contract->package->thumbnail, 'full')}}" alt="" class="img-fluid">
                        </div>
                        <p class="package-name">Tên gói: <b>{{$contract->name}}</b></p>
                        <p class="package-percentage">Lợi tức: <b>{{$contract->first_buy_percentage}}%</b></p>
                        <p class="package-first-buy-price">Chi phí đầu tư: <b>{{format_price($contract->first_buy_price)}}</b> </p>
                    </div>
                    <div class="contract-info">
                        <div class="contract-info-title">
                            Thông tin hợp đồng đầu tư
                        </div>
                        <p class="contract-code">Mã hợp đồng: <b>{{$contract->contract_hard_code}}</b></p>
                    </div>
                </div>
            </div>
        @empty
            @include('plugins/stock::dashboard.contracts.empty')
        @endforelse
    </div>
</div>