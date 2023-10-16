<div class="alert alert-primary" role="alert">
    <h4 class="alert-heading">{{ $title ?? 'Thông tin khách hàng' }}</h4>
    <p>Tên khách hàng: <strong>{{$selectedCustomer->name}}</strong></p>
    <p>Email: <strong>{{$selectedCustomer->email}}</strong></p>
    <p>SĐT: <strong>{{$selectedCustomer->phone}}</strong></p>
    <p><b>Ảnh CMND/CCCD: </b></p>
    <div class="user-card-wrapper">
        <img src="{{'/storage/'.$selectedCustomer->card_front}}" alt="" class="img-responsive">
        <img src="{{'/storage/'.$selectedCustomer->card_back}}" alt="" class="img-responsive">
    </div>

    <style>
        .user-card-wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            margin: 15px 0;
        }

        .user-card-wrapper img {
            max-width: 300px;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
        }

        .bank-item {
            padding: 15px;
            border: 1px solid #ddd;
            margin: 15px 0;
            background-color: #e8e8e8;
        }
    </style>

</div>
