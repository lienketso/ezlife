@php
    $menuArray = [
        [
            'key'   => 'ubgxu.dashboard',
            'icon'  => 'icon material-icons md-home',
            'name'  => 'Tổng quan',
            'order' => 1,
        ],
        [
            'key'   => 'ubgxu.transactions.index',
            'icon'  => 'icon material-icons md-card_giftcard',
            'name'  => 'Giao dịch',
            'order' => 2,
        ],
        [
            'key'   => 'ubgxu.pay.index',
            'icon'  => 'icon material-icons md-calendar_view_day',
            'name'  => 'Lịch sử hoàn điểm',
            'order' => 3,
        ],
        [
            'key'   => 'customer.overview',
            'icon'  => 'icon material-icons md-person',
            'name'  => 'Về giao diện tài khoản',
            'order' => 7,
        ],
    ];

    if (auth('customer')->user()->transferable == 1) {
        $menuArray[] = [
            'key'   => 'ubgxu.transfer.create',
            'icon'  => 'icon material-icons md-card_giftcard',
            'name'  => 'Tặng điểm',
            'order' => 4,
        ];
    }

    $menus = collect($menuArray);

    $currentRouteName = Route::currentRouteName();

@endphp

{{--[--}}
{{--'key'   => 'collaborator.orders.index',--}}
{{--'icon'  => 'icon material-icons md-add_business',--}}
{{--'name'  => 'Đơn hàng Offline',--}}
{{--'order' => 4,--}}
{{--],--}}

<nav>
    <ul class="menu-aside">
        @foreach ($menus->sortBy('order') as $item)
            <li class="menu-item @if ($currentRouteName == $item['key'] || in_array($currentRouteName, Arr::get($item, 'routes', []))) active @endif">
                <a class="menu-link" href="{{ route($item['key']) }}">
                    <i class="{{ $item['icon'] }}"></i>
                    <span class="text">{{ $item['name'] }}</span>
                </a>
            </li>
        @endforeach
    </ul>
    <br />
    <br />
</nav>
