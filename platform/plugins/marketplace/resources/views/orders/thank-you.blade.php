@extends('plugins/ecommerce::orders.master')
@section('title')
    {{ __('Order successfully at :site_title', ['site_title' => theme_option('site_title')]) }}
@stop
@section('content')

    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-6 col-12 left">

                @include('plugins/ecommerce::orders.partials.logo')

                <div class="thank-you">
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <div class="d-inline-block">
                        <h3 class="thank-you-sentence">
                            {{ __('Your order is successfully placed') }}
                        </h3>
                        <p>{{ __('Thank you for purchasing our products!') }}</p>
                    </div>
                </div>


                <div id="ubgxu-checkout" class="ubgxu-checkout">
                    <img src="{{Theme::asset()->url('imgs/ubgxu-bg.png')}}" alt="" class="img-fluid">
                    <div class="ubgxu-checkout-content">
                        <div class="ubgxu-checkout-avaiable">
                            <p>Bạn sẽ nhận được điểm cộng vào ví cho mỗi giao dịch trả phí</p>
                        </div>
                    </div>
                </div>

                @include('plugins/ecommerce::orders.thank-you.customer-info', ['order' => Arr::first($orders)])

                <a href="{{ route('public.index') }}" class="btn payment-checkout-btn"> {{ __('Continue shopping') }} </a>
            </div>
            <!---------------------- start right column ------------------>
            <div class="col-lg-5 col-md-6 right">

                @foreach ($orders as $order)
                    @include('plugins/ecommerce::orders.thank-you.order-info', ['isShowTotalInfo' => true])
                @endforeach

                @if (count($orders) > 1)

                    <!-- total info -->
                    <div class="bg-light p-3">
                        <div class="row total-price">
                            <div class="col-6">
                                <p>{{ __('Sub amount') }}:</p>
                            </div>
                            <div class="col-6">
                                <p class="text-end"> {{ format_price($orders->sum('sub_total')) }} </p>
                            </div>
                        </div>

                        <div class="row total-price">
                            <div class="col-6">
                                <p>{{ __('Shipping fee') }}:</p>
                            </div>
                            <div class="col-6">
                                <p class="text-end">{{ format_price($orders->sum('shipping_amount')) }} </p>
                            </div>
                        </div>

                        @if ($orders->sum('discount_amount'))
                            <div class="row total-price">
                                <div class="col-6">
                                    <p>{{ __('Discount') }}:</p>
                                </div>
                                <div class="col-6">
                                    <p class="text-end">{{ format_price($orders->sum('discount_amount')) }} </p>
                                </div>
                            </div>
                        @endif

                        @if (EcommerceHelper::isTaxEnabled())
                            <div class="row total-price">
                                <div class="col-6">
                                    <p>{{ __('Tax') }}:</p>
                                </div>
                                <div class="col-6">
                                    <p class="text-end">{{ format_price($orders->sum('tax_amount')) }}</p>
                                </div>
                            </div>
                        @endif

                        <div class="row total-price">
                            <div class="col-6">
                                <p>{{ __('Total amount') }}:</p>
                            </div>
                            <div class="col-6">
                                <p class="total-text raw-total-text text-end"> {{ format_price($orders->sum('amount')) }} </p>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@stop
