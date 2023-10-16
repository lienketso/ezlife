<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddContractCodeToCpHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cp_history', function (Blueprint $table) {
            $table->string('contract_code')->nullable()->comment('mã hợp đồng');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cp_history', function (Blueprint $table) {
            $table->dropColumn('contract_code');
        });
    }
}
