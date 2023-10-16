@php $shipping = isset($shippingItem['bestexpress']) ? $shippingItem['bestexpress'] : $shippingItem @endphp
@php $shippingt = isset($shippingItem['haibonbay']) ? $shippingItem['haibonbay'] : $shippingItem @endphp

@if ($shipping['name'] == 'BestExpress')
    <li class="list-group-item list-group-item-viettel-post">
        <input
                class="magic-radio shipping_method_options"
                type="radio"
                name="shipping_method[{{ $storeId }}]"
                id="{{ "shipping-method-$storeId-$shippingKey-$shippingOption" }}"
                @if (old('shipping_method.' . $storeId, $shippingKey) == $defaultShippingMethod &&
                old('shipping_option.' . $storeId, $shippingOption) == $defaultShippingOption) checked @endif
                value="{{ $shippingKey }}"
                data-option="{{ $shippingOption }}"
                data-id="{{ $storeId }}"
        />
        <label for="shipping-method-bestexpress" class="shipping-method-viettel-post magic-radio">
            <img src="{{Theme::asset()->url('imgs/theme/bestexpress.png')}}" alt="" class="img-fluid shipping-logo">
        </label>

        <div class="shipping-sub-menu-wrapper row">
            <div class="col-12">
                <div class="shipping-sub-menu-item active">
                    <img src="{{Theme::asset()->url('imgs/theme/shipping-color.png')}}" alt="" class="img-fluid">
                    <div class="shipping-sub-menu-description">
                        <p>Chuyển phát tiêu chuẩn</p>
                        <span>Dự kiến giao 1 - 2 ngày</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
@endif

@if ($shippingt['name'] == 'HaibonbayExpress')
    <li class="list-group-item list-group-item-viettel-post">
        <input
                class="magic-radio shipping_method_options"
                type="radio"
                name="shipping_method[{{ $storeId }}]"
                id="{{ "shipping-method-$storeId-$shippingKey-$shippingOption" }}"
                @if (old('shipping_method.' . $storeId, $shippingKey) == $defaultShippingMethod &&
                old('shipping_option.' . $storeId, $shippingOption) == $defaultShippingOption) checked @endif
                value="{{ $shippingKey }}"
                data-option="{{ $shippingOption }}"
                data-id="{{ $storeId }}"
        />
        <label for="shipping-method-haibonbay" class="shipping-method-haibonbay-post magic-radio">
            247Express
        </label>

        <div class="shipping-sub-menu-wrapper row">
            <div class="col-12">
                <div class="shipping-sub-menu-item active">
                    <img src="{{Theme::asset()->url('imgs/theme/shipping-color.png')}}" alt="" class="img-fluid">
                    <div class="shipping-sub-menu-description">
                        <p>Chuyển phát tiêu chuẩn</p>
                        <span>Dự kiến giao 1 - 2 ngày</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
@else

    <li class="list-group-item">
        <input
                class="magic-radio shipping_method_input shipping_method_options"
                type="radio"
                name="shipping_method[{{ $storeId }}]"
                id="{{ "shipping-method-$storeId-$shippingKey-$shippingOption" }}"
                @if (old('shipping_method.' . $storeId, $shippingKey) == $defaultShippingMethod &&
                    old('shipping_option.' . $storeId, $shippingOption) == $defaultShippingOption) checked @endif
                value="{{ $shippingKey }}"
                data-option="{{ $shippingOption }}"
                data-id="{{ $storeId }}">
        <label for="{{ "shipping-method-$storeId-$shippingKey-$shippingOption" }}">
            {{ $shipping['name'] }} -
            @if ($shipping['price'] > 0)
                {{ format_price($shipping['price']) }}
            @else
                <strong>{{ __('Free shipping') }}</strong>
            @endif
        </label>
    </li>
@endif

