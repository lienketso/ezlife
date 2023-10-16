<?php

return [
    [
        'name' => 'Quản lý hợp đông',
        'flag' => 'plugins.stock',
    ],
    // [
    //     'name'        => 'Loại hợp đồng',
    //     'flag'        => 'stock.index',
    //     'parent_flag' => 'plugins.stock',
    // ],
    // [
    //     'name'        => 'Thêm mới hợp đồng',
    //     'flag'        => 'stock.create',
    //     'parent_flag' => 'stock.index',
    // ],
    // [
    //     'name'        => 'Sửa hợp đồng',
    //     'flag'        => 'stock.edit',
    //     'parent_flag' => 'stock.index',
    // ],
    // [
    //     'name'        => 'Xoá hợp đồng',
    //     'flag'        => 'stock.destroy',
    //     'parent_flag' => 'stock.index',
    // ],

    [
        'name'        => 'Loại hợp đồng',
        'flag'        => 'category.index',
        'parent_flag' => 'plugins.stock',
    ],
    [
        'name'        => 'Thêm mới',
        'flag'        => 'category.create',
        'parent_flag' => 'category.index',
    ],
    [
        'name'        => 'Sửa',
        'flag'        => 'category.edit',
        'parent_flag' => 'category.index',
    ],
    [
        'name'        => 'Xoá',
        'flag'        => 'category.destroy',
        'parent_flag' => 'category.index',
    ],
    //Gói đầu tư
    [
        'name'        => 'Các gói đầu tư',
        'flag'        => 'package.index',
        'parent_flag' => 'plugins.stock',
    ],
    [
        'name'        => 'Thêm mới',
        'flag'        => 'package.create',
        'parent_flag' => 'package.index',
    ],
    [
        'name'        => 'Sửa',
        'flag'        => 'package.edit',
        'parent_flag' => 'package.index',
    ],
    [
        'name'        => 'Xoá',
        'flag'        => 'package.destroy',
        'parent_flag' => 'package.index',
    ],

     //DS Cổ đông
     [
        'name'        => 'Danh sách Cổ Đông',
        'flag'        => 'holder.index',
        'parent_flag' => 'plugins.stock',
    ],
    [
        'name'        => 'Thêm mới',
        'flag'        => 'holder.create',
        'parent_flag' => 'holder.index',
    ],
    [
        'name'        => 'Sửa',
        'flag'        => 'holder.edit',
        'parent_flag' => 'holder.index',
    ],
    [
        'name'        => 'Xoá',
        'flag'        => 'holder.destroy',
        'parent_flag' => 'holder.index',
    ],

    //Lịch sử mua cổ phần
    [
        'name'        => 'Lịch sử mua cổ phần',
        'flag'        => 'contract.index',
        'parent_flag' => 'plugins.stock',
    ],
    [
        'name'        => 'Cập nhật',
        'flag'        => 'contract.edit',
        'parent_flag' => 'contract.index',
    ],
    [
        'name'        => 'Xoá',
        'flag'        => 'contract.destroy',
        'parent_flag' => 'contract.index',
    ],

    //Lịch sử Trả lãi
    [
        'name'        => 'Lịch sử trả lãi',
        'flag'        => 'cphistory.index',
        'parent_flag' => 'plugins.stock',
    ],
    [
        'name'        => 'Cập nhật',
        'flag'        => 'cphistory.edit',
        'parent_flag' => 'cphistory.index',
    ],
    [
        'name'        => 'Xoá',
        'flag'        => 'cphistory.destroy',
        'parent_flag' => 'cphistory.index',
    ],

    //Lịch sử rút tiền
    [
        'name'        => 'Yêu cầu rút tiền',
        'flag'        => 'withdraw.index',
        'parent_flag' => 'plugins.stock',
    ],
    [
        'name'        => 'Cập nhật',
        'flag'        => 'withdraw.edit',
        'parent_flag' => 'withdraw.index',
    ],
    [
        'name'        => 'Xoá',
        'flag'        => 'withdraw.destroy',
        'parent_flag' => 'withdraw.index',
    ],

];