<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePercentInTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ubgxu_transaction', function (Blueprint $table) {
            $table->integer('percent_cashback')->nullable()->default(0)->after('rest_cashback_amount');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ubgxu_transaction', function (Blueprint $table) {
            $table->dropColumn('percent_cashback');
        });
    }
}
