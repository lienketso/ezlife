@extends('plugins/stock::themes.layouts.master')
@section('content')
    <h1>Thông tin ký hợp đồng</h1>
    <form method="post">
        {{csrf_field()}}
        <input type="hidden" name="number_contract" value="{{$contract->id}}">
        <input type="hidden" name="contract_code" value="{{$contract->contract_code}}">
        <input type="text" name="name" value="{{$user->name}}" placeholder="Họ tên">
        <input type="text" name="phone" value="{{$user->phone}}" placeholder="Số điện thoại">
        <input type="text" name="email" value="{{$user->email}}" placeholder="Email">
        <input type="text" name="address" value="" placeholder="Địa chỉ">
        <button type="submit">Xác nhận thông tin</button>
    </form>
    
    @endsection