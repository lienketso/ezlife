@extends('plugins/stock::themes.layouts.master')
@section('content')
<h1>Yêu cầu rút tiền</h1>
<table>
    <tr>
        <td>Gói hợp đồng</td>
        <td>Giá trị gói</td>
        <td>số tiền rút khả dụng</td>
        <td>Trạng thái</td>
        <td></td>
    </tr>
    @foreach($withdraw as $d)
    <tr>
{{--        <td>{{$d->contracts->name}}</td>--}}
{{--        <td>{{number_format($d->contracts->first_buy_price)}}</td>--}}
        <td>{{number_format($d->amount)}}</td>
        <td>{{$d->status}}</td>
        <td><a href="#">Yêu cầu rút tiền</a></td>
    </tr>
        @endforeach

</table>
@endsection