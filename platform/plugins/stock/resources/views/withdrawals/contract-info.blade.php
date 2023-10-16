<div class="alert alert-warning" role="alert">
    <h4 class="alert-heading">Thông tin hợp đồng yêu cầu rút tiền</h4>
    <p>Số HĐ: <strong>{{$selectedContract->contract_code}}</strong></p>
    <p>Số ngày đã nhận lãi: <strong>{{$selectedContract->total_day_paid}} ngày</strong></p>
    <p>Số dư còn lại <strong>{{format_price($selectedContract->amount_available)}}</strong></p>
</div>
