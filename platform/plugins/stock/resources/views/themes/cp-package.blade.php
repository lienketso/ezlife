@extends('plugins/stock::themes.layouts.master')
@section('content')

<main class="main" id="main">
    <div class="hero-banner-stock" style="background-image: url({{RvMedia::getImageUrl($category->thumbnail, 'full')}})">
        <div class="container">
            <div class="hero-banner-stock-title text-center">
                <h1>{{$category->name}}</h1>
            </div>
        </div>
    </div>
    <div class="stock-category-info">
        <div class="container d-flex justify-content-center">
            <div class="stock-category-content">
                {{$category->description}}
            </div>
        </div>
    </div>

    <div class="package-list">
        <div class="container">
            <div class="package-list-wrapper d-flex justify-content-center">
                <div class="row">
                    @foreach($packages as $d)
                    <div class="col-12 col-md-6">
                        <div class="package-item">
                            <div class="row">
                                <div class="col-12">
                                    <div class="package-item-inner">
                                        <h4>{{$d->name}} </h4>
                                        <div class="package-item-description">

                                            <img src="{{RvMedia::getImageUrl($d->thumbnail, 'full')}}" alt="" class="img-fluid">

                                            <div class="package-content-detail">
                                                {{$d->content}}
                                            </div>

                                            <p>Lợi tức / năm: <b>{{$d->percentage}}%</b> </p>
                                            <p>Kỳ hạn: <b>{{getMonthByDay(intval($d->end_date))}} tháng</b></p>
                                            <p>Xuất đầu tư: <b>{{format_price(round($d->price_per_stock * round($d->qty_of_stock)))}}</b></p>
                                        </div>
                                        <div class="help-box">
                                            <div class="help-box-item">
                                                <i class="fa-solid fa-mobile-screen-button"></i>
                                                <div class="help-box-item-content">
                                                    <p>Bạn cần hỗ trợ? Hãy gọi</p>
                                                    <p><b>+84 xxx.xxx.xxx</b></p>
                                                </div>
                                            </div>
                                            <div class="help-box-item">
                                                <i class="fa-solid fa-envelope"></i>
                                                <div class="help-box-item-content">
                                                    <p>Hoặc gửi Email cho chúng tôi <a href="mailto:abc@gmail.com">tại đây</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <form method="post" name="form{{$d->id}}" action="{{route('public.book-package.post')}}">
                                            {{csrf_field()}}
                                            <input type="hidden" name="id" value="{{$d->id}}">
                                            {{--                                        <div class="form-group">--}}
                                            {{--                                            <label for="">Chọn hình thức nhận lãi</label>--}}
                                            {{--                                            <select name="payment_type" class="form-control">--}}
                                            {{--                                                <option value="coin">Nhận lãi bằng Ubg Xu</option>--}}
                                            {{--                                                <option value="vnd">Nhận lãi bằng vnđ</option>--}}
                                            {{--                                            </select>--}}
                                            {{--                                        </div>--}}
                                            <button type="submit">Tham gia <i class="fa-solid fa-arrow-right-long"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</main>


@endsection

