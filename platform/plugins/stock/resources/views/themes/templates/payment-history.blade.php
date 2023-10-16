@extends('plugins/stock::themes.layouts.master')
@section('content')

<h1>Màn hình lịch sử trả lãi</h1>
<form>
    <input type="text" name="contract_code" placeholder="Tìm theo mã hợp đồng">
    <input type="date" name="history_date" placeholder="Tìm theo ngày">
    <button type="submit">Tìm kiếm</button>
</form>
<table>
    <tr>
        <td>Tên hợp đồng</td>
        <td>Giá trị hợp đồng</td>
        <td>% lợi nhuận</td>
        <td>Ngày trả lãi</td>
        <td>Tiền lãi</td>
    </tr>
    @foreach($history as $d)
    <tr>
        <td>{{$d->contract->name}}</td>
        <td>{{number_format($d->contract->first_buy_price)}} đ</td>
        <td>{{$d->contract->first_buy_percentage}} %</td>
        <td>{{$d->history_date}}</td>
        <td>{{number_format($d->amount)}} đ</td>
    </tr>
        @endforeach
</table>

@endsection