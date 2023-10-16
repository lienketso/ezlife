<div class="form-group">
    <label class="control-label">{{ __('Tabs') }}</label>
    <div class="mt-2">
        <label class="me-2">
            <input type="checkbox" name="tabs[]" value="top-selling" @if (in_array('top-selling', $tabs)) checked @endif> Sản phẩm bán chạy
        </label>
        <label class="me-2">
            <input type="checkbox" name="tabs[]" value="trending-products" @if (in_array('trending-products', $tabs)) checked @endif> Sản phẩm được quan tâm
        </label>
        <label class="me-2">
            <input type="checkbox" name="tabs[]" value="recent-added" @if (in_array('recent-added', $tabs)) checked @endif> Sản phẩm mới
        </label>
        <label>
            <input type="checkbox" name="tabs[]" value="top-rated" @if (in_array('top-rated', $tabs)) checked @endif> Sản phẩm được đánh giá tốt
        </label>
    </div>
</div>

<div class="form-group">
    <label class="control-label">{{ __('Top selling products within x days') }}</label>
    <input type="number" name="top_selling_in_days" value="{{ Arr::get($attributes, 'top_selling_in_days', 30) }}" class="form-control">
</div>
