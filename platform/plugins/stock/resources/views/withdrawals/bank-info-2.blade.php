@php
    $data = json_decode($customer_info, true);
@endphp
<div class="alert alert-warning" role="alert">
    <h4 class="alert-heading">Thông tin làm hợp đồng</h4>
    <div class="row">
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">Ngày sinh</label>
                <input class="form-control" required placeholder="Ngày sinh" data-counter="120"
                       name="customer_info[date_of_birth]" type="text"
                       value="{{isset( $data['date_of_birth']) ? $data['date_of_birth'] : ''}}">
            </div>
        </div>

        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">Dân tộc</label>
                <input class="form-control" required placeholder="Dân tộc" data-counter="120"
                       name="customer_info[ethnic]" type="text"
                       value="{{isset($data['ethnic']) ? $data['ethnic'] : ''}}">
            </div>
        </div>

        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">Quốc tịch</label>
                <input class="form-control" required placeholder="Quốc tịch" data-counter="120"
                       name="customer_info[nationality]" type="text"
                       value="{{isset($data['ethnic']) ? $data['nationality'] : ''}}">
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">CMND/CCCD</label>
                <input class="form-control" required placeholder="Nhập số CMND/CCCD" data-counter="12"
                       name="customer_info[cmnd]" type="number" value="{{isset($data['cmnd']) ? $data['cmnd'] : ''}}">
            </div>
        </div>

        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">Ngày cấp</label>
                <input class="form-control" required placeholder="Ngày cấp" data-counter="11"
                       name="customer_info[date_of_issue]" type="text"
                       value="{{isset($data['date_of_issue']) ? $data['date_of_issue'] : ''}}">
            </div>
        </div>

        <div class="col-sm-4">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">Nơi cấp</label>
                <input class="form-control" required placeholder="Nơi cấp" data-counter="120"
                       name="customer_info[place_of_issue]" type="text"
                       value="{{isset($data['place_of_issue']) ? $data['place_of_issue'] : ''}}">
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">Địa chỉ thường trú</label>
                <input class="form-control" required placeholder="Địa chỉ thường chú"
                       name="customer_info[permanent_address]" type="text"
                       value="{{isset($data['permanent_address']) ? $data['permanent_address'] : ''}}">
            </div>
        </div>

        <div class="col-sm-6">
            <div class="form-group mb-3">
                <label for="date_of_birth" class="control-label required">Địa chỉ hiện tại</label>
                <input class="form-control" required placeholder="Địa chỉ hiện tại"
                       name="customer_info[current_address]" type="text"
                       value="{{isset($data['current_address']) ? $data['current_address'] : ''}}">
            </div>
        </div>
    </div>
</div>
