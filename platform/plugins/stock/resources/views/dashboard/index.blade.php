@extends('plugins/stock::dashboard.layouts.master')

@section('content')
<div class="row">
	<div class="col-lg-3">
		<div class="card card-body mb-4">
			<article class="icontext">
				<span class="icon icon-sm rounded-circle bg-primary-light">
					<i class="text-primary material-icons md-monetization_on"></i>
				</span>
				<div class="text"><h6 class="mb-1 card-title">HĐ đang đang hiệu lực</h6>
					<span>{{$activeContract}}</span></div>
			</article>
		</div>
	</div>

	<div class="col-lg-3">
		<div class="card card-body mb-4">
			<article class="icontext">
				<span class="icon icon-sm rounded-circle bg-primary-light">
					<i class="text-primary material-icons md-monetization_on"></i>
				</span>
				<div class="text"><h6 class="mb-1 card-title">HĐ đã hết hạn</h6>
					<span>{{$expiredContract}}</span></div>
			</article>
		</div>
	</div>

	<div class="col-lg-3">
		<div class="card card-body mb-4">
			<article class="icontext">
				<span class="icon icon-sm rounded-circle bg-primary-light">
					<i class="text-primary material-icons md-monetization_on"></i>
				</span>
				<div class="text"><h6 class="mb-1 card-title">HĐ chưa hoàn thiện</h6>
					<span>{{$uncompleteContract}}</span></div>
			</article>
		</div>
	</div>

	<div class="col-lg-3">
		<div class="card card-body mb-4">
			<article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-primary-light">
                                <i class="text-primary material-icons md-monetization_on"></i>
                            </span>
				<div class="text"><h6 class="mb-1 card-title">Tổng số vốn đã đầu tư</h6>
					<span>{{format_price($totalInvestMoney)}}</span></div>
			</article>
		</div>
	</div>
</div>

<div class="row">
	<div class="report-chart-content" id="report-chart">
		<div class="card card-sale-report">
			<div class="card-header">
				<h4>Biểu đồ biến động giá cổ phần</h4>
			</div>
			<div class="card-body">
				<canvas id="myChart" style="height: 600px; width: auto"></canvas>
			</div>
		</div>
	</div>
</div>

@endsection

@push('footer')
    <script type="text/javascript">
		var BotbleVariables = BotbleVariables || {};
		BotbleVariables.languages = BotbleVariables.languages || {};
		BotbleVariables.languages.reports = {!! json_encode(trans('plugins/ecommerce::reports.ranges'), JSON_HEX_APOS) !!};

		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			responsive: true,
			maintainAspectRatio: false,
			type: 'bar',
			data: {
				labels: ['Qúy I', 'Quý II', 'Quý III', 'Quý IV'],
				datasets: [{
					label: 'giá trị CP EZLife',
					data: [9000, 9200, 9300, 1000],
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				}]
			},
			options: {
				scales: {
					y: {
						min: 7000,
						max: 10500
					}
				}
			}
		});
    </script>
@endpush
