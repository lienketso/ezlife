<div class="form-group mb-3">
    <input type="hidden" disabled value="{{route('stock-manager.getContractById')}}" id="ajax_get_contract_by_id">
    <label for="amount" class="control-label required" aria-required="true">Chọn HĐ khả dụng</label>
    @if ($contracts->count() == 0)
        <input class="form-control" placeholder="Không có HĐ nào khả dụng để rút tiền" disabled>
    @else
        <select name="contract_id" id="select_contract_to_withdraw" class="form-control">
            <option value="">-- Chọn hợp đồng --</option>
            @foreach($contracts as $contract)
                <option value="{{$contract->id}}">{{$contract->contract_code}}</option>
            @endforeach
        </select>
    @endif
</div>

<div id="amount-wrapper">

</div>
