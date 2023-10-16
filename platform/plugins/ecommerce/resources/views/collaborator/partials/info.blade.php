<p>Yêu cầu kích hoạt tài khoản đại lý</p>
<p>Họ và tên: <b>{{$user->name}}</b></p>
<p>Số điện thoại: <b>{{$user->phone}}</b></p>
<p>Email: <b>{{$user->email}}</b></p>
<p>Khu vực hoạt động: <b>{{$user->area != null ? $user->area : 'Không xác định'}}</b></p>
<p>
    Được giới thiệu bởi: <b>{{$user->getParent()->first() != null ? $user->getParent()->first()->email : 'Chưa có'}} - (SĐT: {{$user->getParent()->first() != null ? $user->getParent()->first()->phone : 'Chưa có'}})</b>
</p>
<p><b>Số CMND / CCCD :</b> {{($user->identification_number!=null) ? $user->identification_number : 'Chưa cập nhật'}}</p>
<p><b>Ngày cấp :</b> {{($user->identification_date) ? $user->identification_date : 'Chưa cập nhật'}}</p>
<p><b>Ảnh CMND/CCCD: </b></p>
<div class="user-card-wrapper">
    <img src="{{'/storage/'.$user->card_front}}" alt="" class="img-responsive">
    <img src="{{'/storage/'.$user->card_back}}" alt="" class="img-responsive">
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
