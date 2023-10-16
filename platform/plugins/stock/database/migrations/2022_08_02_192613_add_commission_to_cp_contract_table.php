<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCommissionToCpContractTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $defaultCommision = json_encode([
            "0","0","0","0","0","0"
        ]);

        Schema::table('cp_contract', function (Blueprint $table) use ($defaultCommision) {
            //
            $table->text('commission')->default($defaultCommision)->nullable();
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
            $table->dropColumn('commission');
        });
    }
}
