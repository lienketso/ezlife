<?php

if (!function_exists('render_cart_form')) {
    /**
     * @return string
     * @throws Throwable
     */
    function render_cart_form()
    {
        return view('plugins/ecommerce::orders.partials.cart')->render();
    }
}

if (!function_exists('get_order_code')) {
    /**
     * @param int $orderId
     * @return string
     */
    function get_order_code($orderId)
    {
        $prefix = get_ecommerce_setting('store_order_prefix') ? get_ecommerce_setting('store_order_prefix') . '-' : '';
        $suffix = get_ecommerce_setting('store_order_suffix') ? '-' . get_ecommerce_setting('store_order_suffix') : '';

        return '#' . $prefix . ((int)config('plugins.ecommerce.order.default_order_start_number') + $orderId) . $suffix;
    }
}

if (!function_exists('get_order_id_from_order_code')) {
    /**
     * @param string $code
     * @return string
     */
    function get_order_id_from_order_code($code)
    {
        $prefix = '#' . (get_ecommerce_setting('store_order_prefix') ? (get_ecommerce_setting('store_order_prefix') . '-') : '');
        $suffix = get_ecommerce_setting('store_order_suffix') ? '-' . get_ecommerce_setting('store_order_suffix') : '';

        $orderId = substr($code, strlen($prefix));

        if ($suffix) {
            $orderId = substr($orderId, 0, strrpos($orderId, $suffix));
        }

        $orderId = (int)$orderId - (int)config('plugins.ecommerce.order.default_order_start_number');

        return $orderId;
    }
}

if (!function_exists('get_level_customer')) {
    function get_level_customer($level){
        switch ($level){
            case(1):
                $label = 'Account cấp 1';
                break;
            case(2):
                $label = 'Account cấp 2';
                break;
            case(3):
                $label = 'Account cấp 3';
                break;
            case(4):
                $label = 'Account đại lý';
                break;
            default:
                $label = 'Account cấp 1';
        }
        return $label;

    }
}