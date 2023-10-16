<div class="form-group mb-3">    
    <input class="form-control" name="presenter_name" placeholder="Nhập SĐT người giới thiệu" type="text" value="{{isset($data) ? $data->phone.' - '.$data->name : '' }}" id="presenter-name">
    <input class="form-control" name="presenter_id" type="hidden" value="{{isset($data) ? $data->affiliation_id : ''}}" id="presenter-id">
    <div class="presenter-box">
        <div id="customer-result">
        
        </div>
    </div>
   
</div>
<style>
    .presenter-box{
        position: relative;
    }
    #customer-result{
        background: #fff;
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999999999;
        max-height: 300px;
        overflow-y: auto;
        padding: 10px;
        border: 1px solid #ebedf2;
        box-shadow: 0 0 15px 1px rgb(69 65 78 / 20%);
    }
    #customer-result a{
        display: block;
        padding: 5px 0;
    }
    #customer-result a:hover{
        background: #ddd;
    }
</style>
<script>
    $(document).ready(function(){
        $('#presenter-name').on('keyup',function(){
            $value = $(this).val();
            $.ajax({
                type: 'get',
                url: '{{ route('customers.search-customer') }}',
                data: {
                    'search': $value
                },
                success:function(data){
                    if(data.length > 0){
                        $('#customer-result').show();
                        $('#customer-result').html(data);
                    }
                   
                }
            });
        })
        $.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });

        $('body').on('click', '.presenter-phone', function() {
            var presenterPhone = $(this).html();
                presenterId = $(this).attr('presenter_id');
            $('#presenter-name').val(presenterPhone);    
            $('#presenter-id').val(presenterId);
            $('#customer-result').hide();
        })
    });
</script>