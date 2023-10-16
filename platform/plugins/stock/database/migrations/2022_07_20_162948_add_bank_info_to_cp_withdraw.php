<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBankInfoToCpWithdraw extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cp_withdraw', function (Blueprint $table) {
            $table->text('bank_info')->nullable()->comment('Thông tin thanh toán');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cp_withdraw', function (Blueprint $table) {
            $table->dropColumn('bank_info');
        });
    }
}
