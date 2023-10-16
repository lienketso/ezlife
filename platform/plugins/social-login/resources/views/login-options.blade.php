@if (SocialService::hasAnyProviderEnable())
    <div class="login-options">
        <br>
        <p style="font-size: 14px">{{ __('Login with social networks') }}</p>
        <ul class="social-icons">
            @foreach (SocialService::getProviderKeys() as $item)
                @if (SocialService::getProviderEnabled($item))

                        <a href="{{ route('auth.social', isset($params) ? array_merge([$item], $params) : $item) }}"
                           class="btn btn-heading btn-{{ $item }} hover-up "><i class="fa fa-{{ $item }}"></i> {{ __('Đăng nhập với ') }} {{ $item }}</a>

                @endif
            @endforeach
        </ul>
    </div>
@endif
