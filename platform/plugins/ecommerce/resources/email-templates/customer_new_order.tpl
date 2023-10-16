{{ header }}

<h2>Đặt hàng thành công!</h2>

<p>Xin chào {{ customer_name }},</p>
<p>Cảm ơn bạn đã mua sắm, chúng tôi sẽ liên hệ với bạn qua sđt <strong>{{ customer_phone }}</strong> để xác nhận đơn hàng!</p>

{{ product_list }}

<h3>Thông tin đặt hàng</h3>

<p>{{ customer_name }} - {{ customer_phone }}, {{ customer_address }}</p>

<h3>Vận chuyển</h3>
<p>{{ shipping_method }}</p>

<h3>Thanh toán</h3>
<p>{{ payment_method }}</p>

<br />

<p>Mọi vấn đề thắc mắc vui lòng liên hệ qua email <a href="mailto:{{ site_admin_email }}">{{ site_admin_email }}</a></p>

{{ footer }}
