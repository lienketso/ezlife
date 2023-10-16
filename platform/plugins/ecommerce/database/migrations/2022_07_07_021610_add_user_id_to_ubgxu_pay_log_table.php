<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToUbgxuPayLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ubgxu_pay_log', function (Blueprint $table) {
            $table->integer('user_id')->default(0)->comment('Vận hàng viên');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ubgxu_pay_log', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
    }
}
