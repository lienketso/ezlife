<div class="table-actions">
    @if ($item->vendor_can_edit)
        <a href="{{ route('collaborator.withdrawals.edit', $item->id) }}" class="btn btn-icon btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-original-title="{{ trans('core/base::tables.edit') }}">
            <i class="fa fa-edit"></i>
        </a>
    @else
        <a href="{{ route('collaborator.withdrawals.show', $item->id) }}" class="btn btn-icon btn-sm btn-success" data-bs-toggle="tooltip" data-bs-original-title="{{ __('Show') }}">
            <i class="fa fa-eye"></i>
        </a>
    @endif
</div>
