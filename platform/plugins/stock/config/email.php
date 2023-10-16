<?php

return [
    'name'        => 'Quản lý cổ phần',
    'description' => 'Email quản lý cổ phần',
    'templates'   => [
        'new-site-contract' => [
            'title'       => 'Template email contract',
            'description' => 'Template email contract',
            'subject'     => 'Message sent via your contract from {{ site_title }}',
            'can_off'     => true,
        ],
    ],
    'variables'   => [
        'contract_name'    => 'Contract name',
        'contract_code' => 'Contract code',
        'contract_price'   => 'Contract price',
        'name'   => 'Full name',
        'phone'   => 'Phone',
        'address' => 'Address',
        'email' => 'Email',
    ],
];
