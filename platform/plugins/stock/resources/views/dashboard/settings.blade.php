@extends('plugins/stock::dashboard.layouts.master')
@section('content')
    <div class="card">
        <div class="card-body">
            {!! Form::open(['route' => 'stock-manager.settings.post', 'method' => 'POST', 'enctype' => 'multipart/form-data']) !!}
                <div class="form-content">
                    <ul class="nav nav-tabs mb-0">
                        <li class="nav-item">
                            <a href="#tab_bank_info" class="nav-link active" data-bs-toggle="tab">Tài khoản ngân hàng </a>
                        </li>
                        @include('plugins/stock::dashboard.investor.kyc_tab')
                    </ul>
                    <div class="tab-content card-body border border-top-0">
                        <div class="tab-pane active" id="tab_bank_info">
                            <div class="form-group">
                                <div class="ps-form__content">
                                    <div class="form-group">
                                        <label for="bank_info_name">Tên ngân hàng:</label>
                                        <input id="bank_info_name"
                                               type="text"
                                               class="form-control"
                                               name="bank_info[name]"
                                               placeholder="Tên ngân hàng"
                                               value="{{ Arr::get($collaborator->collaborator_bank_info, 'name') }}">
                                    </div>
                                    {!! Form::error('bank_info[name]', $errors) !!}

                                    <div class="form-group">
                                        <label for="bank_info_number">Số tài khoản:</label>
                                        <input id="bank_info_number"
                                               type="text"
                                               class="form-control"
                                               placeholder="Số tài khoản"
                                               name="bank_info[number]"
                                               value="{{ Arr::get($collaborator->collaborator_bank_info, 'number') }}">
                                    </div>
                                    {!! Form::error('bank_info[number]', $errors) !!}

                                    <div class="form-group">
                                        <label for="bank_info_full_name">Chủ tài khoản:</label>
                                        <input id="bank_info_full_name"
                                               type="text"
                                               class="form-control"
                                               placeholder="{{ __('Full name') }}"
                                               name="bank_info[full_name]"
                                               value="{{ Arr::get($collaborator->collaborator_bank_info, 'full_name') }}">
                                    </div>
                                    {!! Form::error('bank_info[full_name]', $errors) !!}

                                    <div class="form-group">
                                        <label for="bank_info_branch">Chi nhánh:</label>
                                        <input id="bank_info_branch"
                                               type="text"
                                               class="form-control"
                                               placeholder="Chi nhánh"
                                               name="bank_info[branch]"
                                               value="{{ Arr::get($collaborator->collaborator_bank_info, 'branch') }}">
                                    </div>
                                    {!! Form::error('bank_info[branch]', $errors) !!}

                                </div>
                            </div>
                        </div>

                        @include('plugins/stock::dashboard.investor.kyc_content', ['investor' => $collaborator])
                    </div>
    
                    <div class="form-group text-center mt-3">
                        <div class="form-group submit">
                            <div class="form-submit text-center">
                                <button class="btn btn-success btn-lg">Lưu thông tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            {!! Form::close() !!}
        </div>
    </div>
@stop
