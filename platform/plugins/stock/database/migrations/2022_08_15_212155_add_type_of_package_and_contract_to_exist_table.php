<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeOfPackageAndContractToExistTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cp_package', function (Blueprint $table) {
            //
            $table->string('type')->nullable()->default('official');
        });

        Schema::table('cp_contract', function (Blueprint $table) {
            //
            $table->string('type')->nullable()->default('official');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cp_package', function (Blueprint $table) {
            //
            $table->dropColumn('type');
        });

        Schema::table('cp_contract', function (Blueprint $table) {
            //
            $table->dropColumn('type');
        });
    }
}
