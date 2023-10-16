<div class="hero-slider-1 dot-style-1 dot-style-1-position-1 {{ $class ?? ''}}">
    @foreach($sliders as $slider)
        @if ($slider->link && !($shortcode->show_newsletter_form == 'yes' && is_plugin_active('newsletter')))
            <a href="{{ url($slider->link) }}">
        @endif

        <div class="single-hero-slider single-animation-wrap {{ $itemClass ?? ''}}" style="background-image: url({{ RvMedia::getImageUrl($slider->image, null, false, RvMedia::getDefaultImage()) }}); @if (!$loop->first) display: none; @endif">
            {!! Theme::partial('shortcodes.sliders.content', compact('slider', 'shortcode')) !!}
        </div>

        @if ($slider->link && !($shortcode->show_newsletter_form == 'yes' && is_plugin_active('newsletter')))
            </a>
        @endif
    @endforeach
</div>
<div class="slider-arrow hero-slider-1-arrow"></div>
