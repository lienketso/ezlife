@php
    $menus = collect([
        [
            'key'   => 'public.cp-category',
            'icon'  => 'icon material-icons md-domain',
            'name'  => 'Cơ hội đầu tư',
            'order' => 0,
        ],
        [
            'key'   => 'stock-manager.dashboard',
            'icon'  => 'icon material-icons md-dashboard',
            'name'  => 'Tổng quan',
            'order' => 1,
        ],
        [
            'key'   => 'stock-manager.contracts',
            'icon'  => 'icon material-icons md-assignment',
            'name'  => 'Quản lý hợp đồng',
            'order' => 2,
            'routes' => [
                'stock-manager.contracts',
                'stock-manager.contracts.detail',
            ],
        ],
        [
            'key'   => 'stock-manager.withdrawals.index',
            'icon'  => 'icon material-icons md-money',
            'name'  => 'Rút tiền',
            'order' => 7,
            'routes' => [
                'stock-manager.withdrawals.create',
                'stock-manager.withdrawals.edit',
                'stock-manager.withdrawals.list-contract',
            ],
        ],
        [
            'key'   => 'stock-manager.commission.index',
            'icon'  => 'icon material-icons md-monetization_on',
            'name'  => 'Hoa hồng cổ phần',
            'order' => 9,
        ],
        [
            'key'   => 'stock-manager.settings',
            'icon'  => 'icon material-icons md-settings',
            'name'  => 'Cài đặt',
            'order' => 10,
        ],
        [
            'key'   => 'customer.overview',
            'icon'  => 'icon material-icons md-person',
            'name'  => 'Về giao diện tài khoản',
            'order' => 11,
        ],
    ]);

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
