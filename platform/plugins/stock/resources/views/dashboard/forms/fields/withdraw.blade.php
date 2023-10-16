<div class="form-group mb-3">
    <p>Số dư khả dụng có thể rút là: <b>{{format_price($contract->amount_available)}}</b></p>
</div>

<div class="form-group mb-3">
    <label for="amount" class="control-label required" aria-required="true">Số tiền muốn rút</label>
    <input class="form-control" placeholder="Nhập số tiền bạn muốn rút" name="amount" type="number" id="amount" max="{{$contract->amount_available }}">
</div>