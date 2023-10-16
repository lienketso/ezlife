<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">{{ $title ?? 'Bạn nhận tiền thông qua thông tin dưới đây' }}</h4>
    @if (Arr::get($bankInfo, 'name'))
        <p>Ngân hàng: <strong>{{ Arr::get($bankInfo, 'name') }}</strong></p>
    @endif
    @if (Arr::get($bankInfo, 'number'))
        <p>Số tài khoản: <strong>{{ Arr::get($bankInfo, 'number') }}</strong></p>
    @endif
    @if (Arr::get($bankInfo, 'full_name'))
        <p>Chủ tài khoản: <strong>{{ Arr::get($bankInfo, 'full_name') }}</strong></p>
    @endif
    @if (Arr::get($bankInfo, 'branch'))
        <p>Chi nhánh: <strong>{{ Arr::get($bankInfo, 'branch') }}</strong></p>
    @endif
    @isset($link)
        <hr>
        <p class="mb-0">{!! clean(__('Cập nhật lại thông tin <a href=":link">tại đây</a>', ['link' => $link])) !!}</p>
    @endisset
</div>
