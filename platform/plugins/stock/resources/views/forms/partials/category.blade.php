<div class="form-group mb-3">
    <label class="control-label">Chọn loại hợp đồng</label>
    <div class="ui-select-wrapper form-group">
        
        <select class="form-control ui-select ui-select" id="cp_category_id" name="cp_category_id">
            <option value="">-- Chọn Loại hợp đồng ---</option>
            @foreach($category as $value)
                <option value="{{$value->id}}" {{$package->cp_category_id == $value->id ? 'selected' : ''}}>{{$value->name}}</option>
            @endforeach
        </select>
    </div>
</div>