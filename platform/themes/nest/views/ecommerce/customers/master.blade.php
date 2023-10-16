@php
    Theme::layout('full-width');

    $menus = [
        [
            'key'   => 'customer.overview',
            'label' => __('Overview'),
            'icon'  => 'fi-rs-settings-sliders'
        ],
        [
            'key'   => 'customer.edit-account',
            'label' => __('Profile'),
            'icon'  => 'fi-rs-edit-alt'
        ],
        [
            'key'    => 'customer.orders',
            'label'  => __('Orders'),
            'icon'   => 'fi-rs-shopping-bag',
            'routes' => ['customer.orders.view']
        ],
        [
            'key'    => 'customer.address',
            'label'  => __('Address books'),
            'icon'   => 'fi-rs-marker',
            'routes' => [
                'customer.address.create',
                'customer.address.edit'
            ]
        ],
        [
            'key'   => 'customer.change-password',
            'label' => __('Change password'),
            'icon'  => 'fi-rs-key'
        ],
        [
            'key'   => 'customer.payment-code',
            'label' => 'Mã thanh toán',
            'icon'  => 'fi-rs-lock'
        ],
        [
            'key'   => 'ubgxu.dashboard',
            'label' => 'Quản lý điểm',
            'icon'  => 'fi-rs-money'
        ],

    ];

    if (is_plugin_active('stock') && EcommerceHelper::isAffiliater()) {
        $menus[] = [
            'key'   => 'stock-manager.dashboard',
            'label' => 'Quản lý cổ phần',
            'icon'  => 'fi-rs-money'
        ];
    }

@endphp
<div class="page-content pt-30 pb-30">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 m-auto">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-4">
                                <div class="profile-sidebar crop-avatar">
                                    <form id="avatar-upload-form" enctype="multipart/form-data" action="javascript:void(0)" onsubmit="return false">
                                        <div class="avatar-upload-container">
                                            <div class="form-group mb-0">
                                                <div id="account-avatar">
                                                    <div class="profile-image">
                                                        <div class="avatar-view mt-card-avatar">
                                                            <img class="br2 align-middle" src="{{ auth('customer')->user()->avatar_url }}" alt="{{ auth('customer')->user()->name }}">
                                                            <div class="mt-overlay br2">
                                                                <span><i class="fi-rs-edit fs-6"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="print-msg" class="text-danger hidden"></div>
                                        </div>
                                    </form>
                                    <div class="modal fade" id="avatar-modal" tabindex="-1" aria-labelledby="avatar-modal-label"
                                        aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <form class="avatar-form" method="post" action="{{ route('customer.avatar') }}" enctype="multipart/form-data">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title" id="avatar-modal-label"><i class="til_img"></i><strong>{{ __('Profile Image') }}</strong></h4>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="avatar-body">
                                                            <!-- Upload image and data -->
                                                            <div class="avatar-upload">
                                                                <input class="avatar-src" name="avatar_src" type="hidden">
                                                                <input class="avatar-data" name="avatar_data" type="hidden">
                                                                {!! csrf_field() !!}
                                                                <label for="avatarInput">{{ __('New image') }}</label>
                                                                <input class="avatar-input avatar-input bg-transparent ms-0" id="avatarInput" name="avatar_file" type="file">
                                                            </div>

                                                            <div class="loading" tabindex="-1" role="img" aria-label="{{ __('Loading') }}"></div>

                                                            <!-- Crop and preview -->
                                                            <div class="row">
                                                                <div class="col-md-9">
                                                                    <div class="avatar-wrapper"></div>
                                                                    <div class="error-message text-danger" style="display: none"></div>
                                                                </div>
                                                                <div class="col-md-3 avatar-preview-wrapper">
                                                                    <div class="avatar-preview preview-lg"></div>
                                                                    <div class="avatar-preview preview-md"></div>
                                                                    <div class="avatar-preview preview-sm"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button class="btn btn-small btn-secondary" type="button" data-bs-dismiss="modal" aria-label="Close">{{ __('Close') }}</button>
                                                        <button class="btn btn-small btn-primary avatar-save" type="submit">{{ __('Save') }}</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div><!-- /.modal -->
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="profile-usertitle-name pt-2">
                                    <strong>Xin chào, {{ auth('customer')->user()->name }}!</strong>
                                    <p><small><i class="fa-solid fa-square-phone"></i> {{ auth('customer')->user()->phone }}</small></p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="dashboard-menu">
                            <ul class="nav flex-column">
                                @foreach ($menus as $item)
                                    @if (Arr::get($item, 'key') == 'public.wishlist' && !EcommerceHelper::isWishlistEnabled())
                                        @continue
                                    @endif

                                    <li class="nav-item">
                                        <a class="nav-link
                                            @if (Route::currentRouteName() == Arr::get($item, 'key')
                                                || in_array(Route::currentRouteName(), Arr::get($item, 'routes', []))) active @endif"
                                            href="{{ route(Arr::get($item, 'key')) }}"
                                            aria-controls="dashboard"
                                            aria-selected="false">
                                            @if (Arr::get($item, 'icon'))
                                                <i class="{{ Arr::get($item, 'icon') }} mr-10" aria-hidden="true"></i>
                                            @endif
                                            {{ Arr::get($item, 'label') }}
                                        </a>
                                    </li>
                                @endforeach

                                @if (auth('customer')->user()->is_affiliater)
                                    <li class="nav-item">
                                        <a class="nav-link @if (Route::currentRouteName() == 'collaborator.dashboard') active @endif" href="{{ route('collaborator.dashboard') }}" href="{{ route('collaborator.become-collaborator') }}">
                                            <i class="fi-rs-users mr-10"></i> Trang nhân viên
                                        </a>
                                    </li>
                                @else
                                    <li class="nav-item">
                                        <a class="nav-link @if (Route::currentRouteName() == 'collaborator.become-collaborator') active @endif" href="{{ route('collaborator.become-collaborator') }}">
                                            <i class="fi-rs-users mr-10"></i> Đăng ký ứng tuyển nhân viên
                                        </a>
                                    </li>
                                @endif

                                @if (is_plugin_active('marketplace'))
                                    @if (auth('customer')->user()->is_vendor)
                                        <li class="nav-item">
                                            <a class="nav-link" href="{{ route('marketplace.vendor.dashboard') }}">
                                                <i class="fi-rs-shopping-cart mr-10"></i> {{ __('Vendor dashboard') }}
                                            </a>
                                        </li>
                                    @else
                                            @if (auth('customer')->user()->is_affiliater)
                                        <li class="nav-item @if (Route::currentRouteName() == 'marketplace.vendor.become-vendor') active @endif">
                                            <a class="nav-link" href="{{ route('marketplace.vendor.become-vendor') }}">
                                                <i class="fi-rs-shopping-cart mr-10"></i> {{ __('Become a vendor') }}
                                            </a>
                                        </li>
                                            @endif
                                    @endif
                                @endif
                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="{{ route('customer.logout') }}"
                                       aria-controls="dashboard"
                                       aria-selected="false">
                                        <i class="fi-rs-sign-out mr-10" aria-hidden="true"></i>
                                        {{ __('Logout') }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="tab-content account dashboard-content">
                            <div class="tab-pane fade active show" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <div class="card">
                                    @yield('content')
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
