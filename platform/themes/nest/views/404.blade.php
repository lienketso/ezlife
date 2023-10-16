@php
    SeoHelper::setTitle(__('404 - Not found'));
    Theme::fire('beforeRenderTheme', app(\Botble\Theme\Contracts\Theme::class));
@endphp

{!! Theme::partial('header') !!}

<main class="main page-404">
    <div class="page-content pt-30 pb-30">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                    <p class="mb-20">
                        <img src="{{ Theme::asset()->url('imgs/page/page-404.png') }}" alt="{{ theme_option('site_title') }}" class="hover-up">
                    </p>
                    <h2 class="display-2 mb-30">KHÔNG TÌM THẤY</h2>
                    <p class="font-lg text-grey-700 mb-30">
                        {!! clean(__('Liên kết bạn truy cập không tồn tại hoặc đã bị xóa.<br> Hãy quay lại <a href=":link"> <span> Trang chủ</span></a> hoặc <a href=":mail"><span>liên hệ</span></a> với đội ngũ kỹ thuật về vấn đề này', ['link' => route('public.index'), 'mail' => 'mailto:' . theme_option('email')])) !!}
                    </p>
                    @if (is_plugin_active('ecommerce'))
                        <div class="search-form">
                            <form action="{{ route('public.products') }}" method="GET">
                                <input name="q" placeholder="Tìm kiếm" type="text">
                                <button type="submit"><i class="fi-rs-search"></i></button>
                            </form>
                        </div>
                    @endif
                    <a class="btn btn-default submit-auto-width font-xs hover-up mt-30" href="{{ route('public.index') }}"><i class="fi-rs-home mr-5"></i> Quay lại trang chủ</a>
                </div>
            </div>
        </div>
    </div>
</main>

{!! Theme::partial('footer') !!}


