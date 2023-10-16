@extends('plugins/stock::themes.layouts.master')
@section('content')

<h1>Danh sách các gói đầu tư</h1>

<form method="get" class="" action="">
    <input type="text" name="contract_code" placeholder="Nhập mã hợp đồng">
    <input type="date" name="active_date" placeholder="Ngày hiệu lực">
    <button type="submit">Tìm kiếm</button>
</form>


    <table>
        <tr>
            <td>Mã HĐ</td>
            <td>Tên gói</td>
            <td>Giá trị HĐ</td>
            <td>Lãi xuất</td>
            <td>Trạng thái</td>
            <td>Ngày hiệu lực</td>
            <td>Ngày hết hiệu lực</td>
        </tr>
        @foreach($packages as $d)
        <tr>
            <td>{{$d->contract_code}}</td>
            <td>{{$d->name}}</td>
            <td>{{number_format($d->first_buy_price)}} đ</td>
            <td>{{$d->first_buy_percentage}} %</td>
            <td>{{$d->status}} </td>
            <td>{{$d->active_date}}</td>
            <td>{{$d->expires_date}}</td>
        </tr>
        @endforeach
    </table>

@endsection