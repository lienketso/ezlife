<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commissions', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id')->nullable()->comment('Người mua hàng');
            $table->integer('customer_level')->default(1)->comment(' Cấp người tiêu thụ');
            $table->integer('presenter_id')->nullable()->comment('Người giới thiệu');
            $table->integer('product_id')->nullable()->comment('sản phẩm');
            $table->integer('order_id')->nullable()->comment('id đơn hàng');
            $table->double('amount')->nullable()->comment('Giá sản phẩm trước thuế');
            $table->integer('percentage')->nullable()->comment('Phần trăm hoa hồng');
            $table->integer('commission')->nullable()->comment('Số tiền hoa hồng ( amount - 50% ) * percentage');
            $table->tinyInteger('is_agency')->default(0)->comment(' Là đại lý (1,0), người dùng có phải là đại lý hay không ?');
            $table->string('description')->nullable()->comment('mô tả');
            $table->string('status')->default('disable')->comment('Trạng thái');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('commissions');
    }
}
