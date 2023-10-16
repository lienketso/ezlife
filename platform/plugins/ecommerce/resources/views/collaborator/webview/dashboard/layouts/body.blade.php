<div class="screen-overlay"></div>
<aside class="navbar-aside" id="offcanvas_aside">
    <div class="aside-top">
        <a href="{{ route('marketplace.vendor.dashboard') }}" class="brand-wrap">
            @if ($logo = theme_option('logo_vendor_dashboard', theme_option('logo')))
                <img src="{{ RvMedia::getImageUrl($logo) }}" class="logo" alt="{{ theme_option('site_title') }}">
            @endif
        </a>
        <div>
            <button class="btn btn-icon btn-aside-minimize"><i class="text-muted material-icons md-menu_open"></i></button>
        </div>
    </div>
    @include('plugins/ecommerce::collaborator.webview.dashboard.layouts.menu')
</aside>

<main class="main-wrap">
    <header class="main-header navbar">
        <div class="col-search">
        </div>
        <div class="col-nav">
            <button class="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas_aside">
                <i class="material-icons md-apps"></i>
            </button>
        </div>
    </header>
    <section class="content-main">
        <div class="content-header">
            <div class="header-left">
                <h2 class="content-title card-title">{{ page_title()->getTitle(false) }}</h2>
            </div>

            @yield('header-right')
        </div>

        <div id="main">
            @yield('content')
        </div>
    </section>

    <footer class="font-xs px-4">
        <div class="row pb-15 pt-15">
            <div class="col-sm-6">
                {{ theme_option('copyright') }}
            </div>
        </div>
    </footer>
</main>
