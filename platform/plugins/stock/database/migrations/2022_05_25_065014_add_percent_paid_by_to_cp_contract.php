<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPercentPaidByToCpContract extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cp_contract', function (Blueprint $table) {
            $table->integer('percent_paid_by_money')->default(100);
            $table->integer('percent_paid_by_ubgxu')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cp_contract', function (Blueprint $table) {
            $table->dropColumn('percent_paid_by_money');
            $table->dropColumn('percent_paid_by_ubgxu');
        });
    }
}
