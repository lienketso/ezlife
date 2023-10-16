<div class="alert alert-dark" role="alert">
    <h4 class="alert-heading">Thông tin hợp đồng</h4>
    @php
        $data = json_decode($contractInfo);
        if(!empty($data)):
    @endphp
     <div class="row">
        <div class="col-lg-3">
           <p> <strong>Giá trị đầu tư: </strong> {{$first_buy_price}}</p>
          
        </div>
        <div class="col-lg-3">
            <p> <strong>Lợi nhuận: </strong>{{$first_buy_percentage}}%</p>
         
        </div>
        <div class="col-lg-3">
            <p> <strong>Lợi nhuận xu: </strong>{{$percent_paid_by_ubgxu}}%</p>
        
        </div>  
        <div class="col-lg-3">
            <p> <strong>Lợi nhuận VNĐ: </strong>{{$percent_paid_by_money}}%</p>
          
        </div>        
    </div>
    <div class="row">
        <div class="col-lg-3">
           <p> <strong>Kỳ hạn: </strong>{{$data->ky_han}}</p>
          
        </div>
        <div class="col-lg-3">
            <p> <strong>Số cổ phần: </strong>{{$data->total}}</p>
           
        </div>
        <div class="col-lg-3">
            <p> <strong>Giá 1 cổ phần: </strong>{{$data->price}}</p>
          
        </div>        
    </div>
    @php
        endif;
    @endphp
</div>
