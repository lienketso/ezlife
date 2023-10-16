<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCashbackTypeFieldToOrderBill extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ec_order_bill', function (Blueprint $table) {
            $table->string('cashback_type')->after('description')->default('slow')->nullable()->comment('Loại hoàn xu, nhanh hay chậm');
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
            $table->dropColumn('cashback_type');
        });
    }
}
