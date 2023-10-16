<h1>Biểu đồ tăng trưởng</h1>
<form>
    <select name="month">
        <option value="">Tháng</option>
        @for($i=1;$i<=12;$i++)
            <option value="{{$i}}">Tháng {{$i}}</option>
        @endfor
    </select>
    <button type="submit">Filter</button>
</form>
@foreach($chart as $d)
    <p>{{$d->price}} - {{$d->chart_date}}</p>
@endforeach
