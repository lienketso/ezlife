{{ header }}

<h2>Bạn có đơn đặt hàng mới từ {{ site_title }}!</h2>

<p>Khách hàng: {{ customer_name }} vừa đặt hàng</p>

{{ product_list }}

<h3>Thông tin khách hàng</h3>

<p>{{ customer_name }} - {{ customer_phone }}, {{ customer_address }}</p>

<h3>Vận chuyển</h3>
<p>{{ shipping_method }}</p>

<h3>Thanh toán</h3>
<p>{{ payment_method }}</p>

{{ footer }}
