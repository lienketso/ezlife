<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHardContractCodeToContractTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cp_contract', function (Blueprint $table) {
            //
            $table->string('contract_hard_code')->nullable()->after('contract_code');
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
            //
            $table->dropColumn('contract_hard_code');
        });
    }
}
