@php
    $with = ['slugable'];
    $condition = ['status' => \Botble\Base\Enums\BaseStatusEnum::PUBLISHED];
    $stores = app(\Botble\Marketplace\Repositories\Interfaces\StoreInterface::class)->advancedGet([
        'condition' => $condition,
        'order_by'  => ['created_at' => 'desc'],
        'with'      => $with,
    ]);
@endphp
<div class="ps-popup">
    <div class= "ps-popup__content">
        {{-- <a href="javascript:;" class="ps-popup__close affiliate-popup-reject"><i class="fa fa-times"></i></a> --}}
        <div class="location-popup-wrapper">
            <h4>Chọn địa điểm mua sắm gần bạn nhất</h4>
            <div class="location-popup-list">
               
                @foreach($stores as $store)
                    
                    <a href="{{$store->url}}" class="location-popup-item btn text-center">                            
                        <i class="fa fa-map-marker"></i> {{$store->name}}
                    </a>
                    <div class="clear"></div>
                @endforeach
            </div>
            <div class="affiliate-popup-confirm">
                <a href="javascript:;" class="affiliate-popup-reject btn hover-up">Bỏ qua</a>
            </div>
        </div>
    </div>
</div>
