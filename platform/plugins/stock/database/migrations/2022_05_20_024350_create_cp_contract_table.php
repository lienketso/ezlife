<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCpContractTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cp_contract', function (Blueprint $table) {
            $table->id();
            $table->integer('package_id')->default(0);
            $table->integer('customer_id')->default(0);
            $table->string('name')->nullable()->comment('Tên hợp đồng');
            $table->text('content')->nullable()->comment('Mô tả hợp đồng');
            $table->string('file_contract')->nullable()->comment('File hợp đồng');
            $table->timestamp('active_date')->nullable()->comment('Ngày hiệu lực hợp đồng');
            $table->timestamp('expires_date')->nullable()->comment('Ngày hết hiệu lực hợp đồng');
            $table->double('first_buy_price')->default(0)->comment('Giá trị lúc mua');
            $table->tinyInteger('first_buy_percentage')->default(0)->comment('% lợi nhuận lúc mua');
            $table->enum('status',['unsigned','signed','active','expired'])->default('unsigned')->comment('Trạng thái hợp đồng');
            $table->double('daily_profit_amount')->default(0)->comment('Số tiền lợi nhuận mỗi ngày');
            $table->integer('total_day_paid')->default(0)->comment('Số ngày đã trả lãi');
            $table->double('amount_withdrawn')->default(0)->comment('Số tiền đã rút ra trong gói này');
            $table->double('amount_available')->default(0)->comment('Số tiền khả dụng trong gói này');
            $table->double('minimum_withdraw')->default(0)->comment('Số tiền rút tối thiểu (30x lãi ngày)');
            $table->enum('payment_type',['coin','vnd'])->default('coin')->comment('Hình thức trả lãi');
            $table->integer('confirm_id')->default(0)->comment('Người duyệt hợp đồng');
            $table->integer('presenter_id')->default(0)->comment('Người giới thiệu');
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
        Schema::dropIfExists('cp_contract');
    }
}
