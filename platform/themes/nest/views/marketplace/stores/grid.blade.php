<div class="archive-header-2 text-center pt-30 pb-30">
    <h1 class="display-2 mb-50 store-name">{{ SeoHelper::getTitle() }}</h1>
    @php     
        if($categories):
    @endphp
    <div data-items-xxl="8" data-items-xl="6" data-items-lg="4" data-items-md="3" data-items-sm="2" class="carousel-8-columns-cover position-relative">
        <div class="carousel-slider-wrapper carousel-8-columns" id="carousel-8-columns">
            @php
                foreach($categories as $category):
            @endphp
            <div class="card-1">
                <figure class="img-hover-scale overflow-hidden">
                    <a href="{{ URL::current() }}?categories[]={{ $category->id }}" tabindex="-1"><img src="{{ RvMedia::getImageUrl($category->image, 'full', false, RvMedia::getDefaultImage()) }}" alt="MÌ, CHÁO, PHỞ, BÚN" /></a>
                </figure>
                <h6><a href="{{ URL::current() }}?categories[]={{ $category->id }}" title="MÌ, CHÁO, PHỞ, BÚN" tabindex="-1">{{ $category->name }}</a></h6>
            </div> 
            @php
                endforeach;
            @endphp  

        </div>    
    </div>   
    @php
        endif;
    @endphp 
    
    <div class="row">
        <div class="col-lg-5 mx-auto">
            <div class="sidebar-widget-2 widget_search mb-20">
                <div class="search-form">
                    <input name="q" value="{{ request()->input('q') }}" type="text" placeholder="Tìm kiếm trong cửa hàng...">
                    <button type="submit"><i class="fi-rs-search"></i></button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row flex-row-reverse">
    <div class="col-lg-4-5 products-listing position-relative">
        @include(Theme::getThemeNamespace('views.marketplace.stores.items'), compact('products'))
    </div>
    <div class="col-lg-1-5 primary-sidebar sticky-sidebar">
        <div class="sidebar-widget widget-store-info mb-30 bg-3 border-0">
            <div class="vendor-logo mb-30">
                <img src="{{ RvMedia::getImageUrl($store->logo, 'medium', false, RvMedia::getDefaultImage()) }}" alt="{{ $store->name }}" />
            </div>
            <div class="vendor-info">
                <div class="product-category">
                    <span class="text-muted">{{ __('Since :year', ['year' => $store->created_at->format('Y')]) }}</span>
                </div>
                <h4 class="mb-5"><a href="{{ $store->url }}" class="text-heading">{{ $store->name }}</a></h4>
                <div class="mb-15">
                    @include(Theme::getThemeNamespace('views.marketplace.stores.partials.rating'))
                </div>
                <div class="vendor-des mb-30">
                    <p class="font-sm text-heading">{{ $store->description }}</p>
                </div>

                @include(Theme::getThemeNamespace('views.marketplace.stores.partials.socials'))

                <div class="vendor-info">
                    @include(Theme::getThemeNamespace('views.marketplace.stores.partials.info'))
                </div>
            </div>
        </div>
        @include(Theme::getThemeNamespace('views.marketplace.stores.partials.sidebar'))
    </div>
</div>
