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

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('vendor/core/plugins/stock/css/stock-manager.css') }}?v=1.0.0">
    <link rel="stylesheet" href="{{ asset('vendor/core/plugins/stock/vendor/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css') }}?v=2.3.4">
    <link rel="stylesheet" href="{{ asset('vendor/core/plugins/stock/vendor/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css') }}?v=2.3.4">
    <link rel="stylesheet" href="{{ asset('vendor/core/core/base/libraries/toastr/toastr.min.css') }}?v=1.0.0">

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

    <style>
		:root {
            --color-primary: #5A97FA;
		}
    </style>
</head>

<body>
    @include('plugins/stock::themes.layouts.header')

    @yield('content')

    @include('plugins/stock::themes.layouts.footer')

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

    {!! Html::script('vendor/core/core/base/libraries/toastr/toastr.min.js') !!}

    <script src="{{ asset('vendor/core/plugins/stock/js/stock-manager.js') }}?v=1.0.0"></script>
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

    <script src="{{ asset('vendor/core/plugins/stock/vendor/OwlCarousel2-2.3.4/dist/owl.carousel.min.js') }}?v=2.3.4"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js"></script>
    <script src="{{ asset('vendor/core/plugins/stock/js/stock-manager.js') }}?v=1.0.0"></script>

    @stack('scripts')

    @stack('footer')
</body>
</html>