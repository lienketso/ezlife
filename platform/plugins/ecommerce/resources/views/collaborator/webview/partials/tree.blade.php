<div class="form-group">
    <label for="" class="control-label">Nhánh cộng tác viên</label>
    <div class="branch-list upper-branch">
        @foreach($upperBranch as $key => $ub)
            <div class="branch-item">
                <b>UBG App Id:</b> {{$ub->affiliation_id}} | <b>Email:</b> {{$ub->email}} | <b>SĐT</b> {{$ub->phone}}
            </div>
        @endforeach

        <div class="branch-item" style="background: red; color: #fff">
            <b>UBG App Id:</b> {{$user->affiliation_id}} | <b>Email:</b> {{$user->email}} | <b>SĐT</b> {{$user->phone}}
        </div>

        @foreach($lowerBranch as $key => $lb)
            <div class="branch-item">
                <b>UBG App Id:</b> {{$lb->affiliation_id}} | <b>Email:</b> {{$lb->email}} | <b>SĐT</b> {{$lb->phone}}
            </div>
        @endforeach
    </div>
</div>
