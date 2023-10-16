@extends('plugins/stock::themes.layouts.master')
@section('content')
    <section class="iframe-contract">
        <iframe src="https://demo.econtract.fpt.com.vn/app/fi/{{$contract_number}}/{{$contract_code}}/act"
                width="100%"
                height="800">

        </iframe>
    </section>
@endsection
