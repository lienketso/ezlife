@extends('plugins/stock::themes.layouts.master')
@section('content')

    <h1>Màn hình thống kê tài sản</h1>
    <p>Tổng giá trị cổ phần (Gốc + Lãi) : {{number_format($totalGocLai)}} đ</p>
    <p>Tổng giá trị gốc : {{number_format($totalGoc)}} đ</p>
    <p>Tổng giá trị lãi : {{number_format($totalLai)}} đ</p>

@endsection