<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCashbackPaymentToOrderBill extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ec_order_bill', function (Blueprint $table) {
            $table->double('pay_by_money')->default(0)->nullable()->comment('Số tiền mặt chi trả cho hóa đơn này');
            $table->double('pay_by_ubgxu')->default(0)->nullable()->comment('Số xu chi trả cho hóa đơn này');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ec_order_bill', function (Blueprint $table) {
            $table->dropColumn('pay_by_money');
            $table->dropColumn('pay_by_ubgxu');
        });
    }
}
