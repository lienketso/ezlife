@php
    $menus = collect([
        [
            'key'   => 'webview-collaborator.dashboard',
            'icon'  => 'icon material-icons md-home',
            'name'  => 'Tổng quan',
            'order' => 1,
        ],
        [
            'key'   => 'webview-collaborator.tree.index',
            'icon'  => 'icon material-icons md-group',
            'name'  => 'Hệ thống CTV',
            'order' => 2,
        ],
        [
            'key'   => 'webview-collaborator.customers.index',
            'icon'  => 'icon material-icons md-group',
            'name'  => 'Danh sách khách hàng',
            'order' => 3,
        ],
        [
            'key'   => 'webview-collaborator.orders.index',
            'icon'  => 'icon material-icons md-shopping_cart',
            'name'  => 'Đơn hàng Online',
            'order' => 4,
        ],
        [
            'key'   => 'webview-collaborator.bill.index',
            'icon'  => 'icon material-icons md-shop',
            'name'  => 'Đơn hàng tại chỗ',
            'order' => 5,
        ],
        [
            'key'   => 'webview-collaborator.revenues.index',
            'icon'  => 'icon material-icons md-monetization_on',
            'name'  => 'Thu nhập',
            'order' => 6,
        ],
        [
            'key'   => 'webview-collaborator.withdrawals.index',
            'icon'  => 'icon material-icons md-money',
            'name'  => 'Rút tiền',
            'order' => 7,
            'routes' => [
                'webview-collaborator.withdrawals.create',
                'webview-collaborator.withdrawals.edit',
                'webview-collaborator.withdrawals.show'
            ],
        ],
        [
            'key'   => 'webview-collaborator.settings',
            'icon'  => 'icon material-icons md-settings',
            'name'  => 'Cài đặt',
            'order' => 8,
        ],
    ]);

    $currentRouteName = Route::currentRouteName();
@endphp

{{--[--}}
{{--'key'   => 'webview-collaborator.orders.index',--}}
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
