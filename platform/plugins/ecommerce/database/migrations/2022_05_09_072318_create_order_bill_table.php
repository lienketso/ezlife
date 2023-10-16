<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderBillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ec_order_bill', function (Blueprint $table) {
            $table->id();
            $table->string('bill_code')->nullable();
            $table->double('bill_amount')->default(0)->nullable();
            $table->bigInteger('customer_id')->nullable();
            $table->bigInteger('cashier_id')->nullable();
            $table->text('description')->nullable();
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
        Schema::dropIfExists('order_bill');
    }
}
