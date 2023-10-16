<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    @if (theme_option('favicon'))
        <link rel="shortcut icon" href="{{ RvMedia::getImageUrl(theme_option('favicon')) }}">
    @endif


<!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ page_title()->getTitle(false) }}</title>

    @yield('header', view('plugins/ecommerce::collaborator.dashboard.layouts.header'))

<!-- Put translation key to translate in VueJS -->
    <script type="text/javascript">
		'use strict';
		window.trans = Object.assign(window.trans || {}, JSON.parse('{!! addslashes(json_encode(trans('plugins/marketplace::marketplace'))) !!}'));

		var BotbleVariables = BotbleVariables || {};
		BotbleVariables.languages = {
			tables: {!! json_encode(trans('core/base::tables'), JSON_HEX_APOS) !!},
			notices_msg: {!! json_encode(trans('core/base::notices'), JSON_HEX_APOS) !!},
			pagination: {!! json_encode(trans('pagination'), JSON_HEX_APOS) !!},
			system: {
				character_remain: '{{ trans('core/base::forms.character_remain') }}'
			}
		};
    </script>
</head>

<body @if (BaseHelper::siteLanguageDirection() == 'rtl') dir="rtl" @endif>

<div class="page-header py-3 shadow-2 bg-white">
    <div class="container">
        <div class="d-flex">
            <a href="https://ezlife.vn/">
                <img src="https://ezlife.vn/storage/general/logo-ubg-mart.png" alt="" class="img-responsive" width="90px">
            </a>
        </div>
    </div>
</div>

<div class="main-contant my-3">
    <div class="container">

        <div class="popup-payment-code">
            <div class="popup-payment-code-wrapper">
                <form action="" method="post" role="form" id="payment_code_confirm">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label for="">Mã thanh toán</label>
                        <input type="text" class="form-control" name="" id="payment_code" placeholder="Nhập mã thanh toán" maxlength="6">
                    </div>
                    <button type="submit" class="btn btn-primary">Xác nhận</button>
                </form>
            </div>
        </div>

        <div class="inner-content bg-white p-3">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="orderbill-wrapper">
                        <div class="orderbill-inner-wrapper">
                            <div class="order-bill-form">
                                <form action="" method="post" role="form" id="order-bill-form">
                                    {{csrf_field()}}
                                    <p>Tài khoản thu ngân: {{auth()->user()->name}}</p>

                                    <div class="form-group" style="position: relative">
                                        <input type="text" class="form-control" name="customer_phone" id="customer_phone" placeholder="Số điện thoại khách hàng">
                                        <button type="button" class="btn btn-secondary" id="xu-check" style="position: absolute; top: 7px; right: 0;">Kiểm tra xu</button>
                                    </div>

                                    <div id="customer_info">
                                        <div class="form-group">
                                        <p>Số điểm khả dụng: <span id="customer_xu"></span> điểm</p>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control" name="bill_code" id="bill_code" placeholder="Mã đơn hàng">
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control" name="bill_amount" id="bill_amount" placeholder="Giá trị đơn">
                                    </div>

                                    <div class="form-group">
                                        <label for="">Khách hàng sử dụng điểm để thanh toán hóa đơn: </label>
                                        <select name="pay_by_ubgxu" class="form-control" id="pay_by_ubgxu">
                                            <option selected value="0">Không sử dụng</option>
                                            <option value="1">Sử dụng điểm để thanh toán</option>
                                        </select>
                                    </div>

                                    <div class="form-group" id="cashback_type_form">
                                        <label for="">Hình thức hoàn điểm: </label>
                                        <select name="cashback_type" class="form-control">
                                            <option selected value="{{\Botble\Ecommerce\Enums\OrderCashbackTypeEnum::SLOW}}">Hoàn điểm từng ngày</option>
                                            <option value="{{\Botble\Ecommerce\Enums\OrderCashbackTypeEnum::FAST}}">Hoàn điểm 1 lần</option>
                                        </select>
                                    </div>

                                    <div class="form-group text-center">
                                        <button type="submit" class="btn btn-secondary" id="order-bill-submit"> Xử lý hóa đơn</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-8">
                    <div class="orderbill-list">
                        <div class="orderbill-title text-center">Các hóa đơn đã xử lý trong ngày {{\Carbon\Carbon::now()->format('d-m-Y')}}</div>
                        <div class="orderbill-list-wrapper">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th width="50">STT</th>
                                        <th>Mã hóa đơn</th>
                                        <th>Giá trị</th>
                                        <th colspan="2" class="text-center">Thanh toán</th>
                                        <th>Khách hàng</th>
                                        <th>Thời gian nhập</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Tiền mặt</th>
                                        <th>điểm</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                @forelse($todayBillCashBack as $billCashback)
                                    <tr>
                                        <td>{{$billCashback->id}}</td>
                                        <td>{{$billCashback->bill_code}}</td>
                                        <td>{{format_price($billCashback->bill_amount)}}</td>
                                        <td>{{format_price($billCashback->pay_by_money)}}</td>
                                        <td>{{number_format($billCashback->pay_by_ubgxu)}} xu</td>
                                        <td>{{$billCashback->getCustomer->name}} - {{$billCashback->getCustomer->phone}}</td>
                                        <td>{{$billCashback->created_at->format('H:i:s - d/m/Y')}}</td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="5">Chưa có dữ liệu</td>
                                    </tr>
                                @endforelse
                                </tbody>
                            </table>
                            <div class="ps-pagination">
                                {!! $todayBillCashBack->withQueryString()->links() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@stack('pre-footer')

@if (session()->has('status') || session()->has('success_msg') || session()->has('error_msg') || (isset($errors) && $errors->count() > 0) || isset($error_msg))
    <script type="text/javascript">
		'use strict';
		window.noticeMessages = [];
        @if (session()->has('success_msg'))
		noticeMessages.push({'type': 'success', 'message': "{!! addslashes(session('success_msg')) !!}"});
        @endif
        @if (session()->has('status'))
		noticeMessages.push({'type': 'success', 'message': "{!! addslashes(session('status')) !!}"});
        @endif
        @if (session()->has('error_msg'))
		noticeMessages.push({'type': 'error', 'message': "{!! addslashes(session('error_msg')) !!}"});
        @endif
        @if (isset($error_msg))
		noticeMessages.push({'type': 'error', 'message': "{!! addslashes($error_msg) !!}"});
        @endif
        @if (isset($errors))
        @foreach ($errors->all() as $error)
		noticeMessages.push({'type': 'error', 'message': "{!! addslashes($error) !!}"});
        @endforeach
        @endif
    </script>
@endif

{!! Assets::renderFooter() !!}
@yield('footer', view('plugins/ecommerce::collaborator.dashboard.layouts.footer'))

@stack('scripts')

<style>
	body {
		margin: 0!important;
		font-family: Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
		font-size: 14px;
		font-weight: 400;
		line-height: 1.6;
		color: #333;
		text-align: left;
		background-color: #f3f4f6;
	}

	.page-header {
		margin: 0;
		padding: 16px 0;
		background: #fff;
	}

	.shadow-2 {
		box-shadow: 0 2px 4px rgba(0,0,0,.15);
	}

	.main-contant {
		margin: 15px 0;
	}

	.inner-content {
		padding: 15px;
		background: #fff;
	}

	.wx-68 {
		width: 68px;
	}

	.mw-282 {
		max-width: 282px;
	}

	@media (min-width: 1200px) {
		.container, .container-lg, .container-md, .container-sm, .container-xl {
			max-width: 1248px;
		}
	}

	/* cyrillic-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}
	/* cyrillic */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	/* greek-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');
		unicode-range: U+1F00-1FFF;
	}
	/* greek */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}
	/* vietnamese */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
	}
	/* latin-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	/* cyrillic-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}
	/* cyrillic */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	/* greek-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+1F00-1FFF;
	}
	/* greek */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}
	/* vietnamese */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
	}
	/* latin-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	/* cyrillic-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}
	/* cyrillic */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	/* greek-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+1F00-1FFF;
	}
	/* greek */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}
	/* vietnamese */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
	}
	/* latin-ext */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

    #customer_info {
        display: none;
    }

    .popup-payment-code {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        justify-content: center;
        align-items: center;
        z-index: 999;
        display: none;
    }

    .popup-payment-code-wrapper {
        background-color: #fff;
        max-width: 600px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 1px 1px rgba(0,0,0,.5);
    }

    #payment_code_confirm {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

</style>

<script type="text/javascript">
	$(document).ready(function () {
		$('#xu-check').on('click', function () {
			$.ajax({
				type: 'GET',
				url: '{{route('public.ajax.checkxu')}}',
				data: {
					customer_phone: $('#customer_phone').val()
				},
				success: res => {
					$('#customer_info').show();
					$('#customer_xu').html(Botble.numberFormat(res.data.ubgxu))
				},
				error: res => {
					console.log(res);
				}
			});
        })

        $('#order-bill-submit').on('click', function (e) {
	        e.preventDefault()
        	if ($('#pay_by_ubgxu').val() === '1') {
                $('.popup-payment-code').css('display', 'flex');
                return false;
            }
        	else {
        		$('#order-bill-form').submit();
            }
        })

        $('#payment_code_confirm').on('submit', function (e) {
        	e.preventDefault()
        	var code = $('#payment_code').val();
	        $.ajax({
		        type: 'POST',
		        url: '{{route('public.ajax.check-payment-code')}}',
		        data: {
			        code: code,
			        customer_phone: $('#customer_phone').val()
		        },
		        success: res => {
		        	if (res === '1') {
				        $('#order-bill-form').submit();
                    } else {
		        		alert('Mã thanh toán không đúng')
                    }

		        },
		        error: res => {
			        console.log(res);
		        }
	        });

        	return false;
        })

        // $('#pay_by_ubgxu').on('change', function () {
        // 	var value = $(this).val();
        // 	if (value === '1') {
        // 		$('#cashback_type_form').addClass('hidden');
        //     } else {
		//         $('#cashback_type_form').removeClass('hidden');
        //     }
        // })
    })
</script>

</body>
</html>
