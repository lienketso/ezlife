@php
    SeoHelper::setTitle(__('500 - Bạn đang gặp sự cố ?'));
    Theme::fire('beforeRenderTheme', app(\Botble\Theme\Contracts\Theme::class));
@endphp

{!! Theme::partial('header') !!}

<main class="main page-404">
    <div class="page-content pt-30 pb-30">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                    <p class="mb-20">
                        <img src="{{ Theme::asset()->url('imgs/page/page-500.png') }}" alt="{{ theme_option('site_title') }}" class="hover-up">
                    </p>
                    <h2 class="display-2 mb-30">Bạn đang gặp sự cố ?</h2>
                    <p class="font-lg text-grey-700 mb-30">
                        Có vẻ như bạn đang gặp sự cố khi trải nghiệm mua sắm tại EZLife ? Vui lòng liên hệ bộ phận kỹ thuật đê được hỗ trợ sớm. Hotline:
                        <a href="tel:0979823452">0979.823.452</a>
                    </p>
                    @if (is_plugin_active('ecommerce'))
                        <div class="search-form">
                            <form action="{{ route('public.products') }}" method="GET">
                                <input name="q" placeholder="{{ __('Search...') }}" type="text">
                                <button type="submit"><i class="fi-rs-search"></i></button>
                            </form>
                        </div>
                    @endif
                    <a class="btn btn-default submit-auto-width font-xs hover-up mt-30" href="{{ route('public.index') }}"><i class="fi-rs-home mr-5"></i> {{ __('Back To Home Page') }}</a>
                </div>
            </div>
        </div>
    </div>
</main>

{!! Theme::partial('footer') !!}



