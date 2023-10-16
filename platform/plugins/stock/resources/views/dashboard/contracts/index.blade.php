@extends('plugins/stock::dashboard.layouts.master')

@section('content')
<div class="form-content">

	<ul class="nav nav-tabs mb-0">
		<li class="nav-item">
			<a href="#active_contract" class="nav-link active" data-bs-toggle="tab">HĐ đang hiệu lực</a>
		</li>
		<li class="nav-item">
			<a href="#expired_contract" class="nav-link" data-bs-toggle="tab">HĐ hết hiệu lực</a>
		</li>
		<li class="nav-item">
			<a href="#uncomplete_contract" class="nav-link" data-bs-toggle="tab">HĐ chưa hoàn thiện</a>
		</li>
	</ul>

	<div class="tab-content card-body border border-top-0">
		<div class="tab-pane active" id="active_contract">
			<div class="form-group">
				<div class="ps-form__content">
					@include('plugins/stock::dashboard.contracts.list.active_contract')
				</div>
			</div>
		</div>

		<div class="tab-pane" id="expired_contract">
			<div class="form-group">
				<div class="ps-form__content">
					@include('plugins/stock::dashboard.contracts.list.expired_contract')
				</div>
			</div>
		</div>

		<div class="tab-pane" id="uncomplete_contract">
			<div class="form-group">
				<div class="ps-form__content">
					@include('plugins/stock::dashboard.contracts.list.uncomplete_contract')
				</div>
			</div>
		</div>
	</div>
</div>
@endsection

@push('footer')
    <script>
		var BotbleVariables = BotbleVariables || {};
		BotbleVariables.languages = BotbleVariables.languages || {};
		BotbleVariables.languages.reports = {!! json_encode(trans('plugins/ecommerce::reports.ranges'), JSON_HEX_APOS) !!}
    </script>
@endpush
