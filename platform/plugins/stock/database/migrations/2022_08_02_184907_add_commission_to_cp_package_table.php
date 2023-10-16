<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCommissionToCpPackageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $defaultCommision = json_encode([
            "1","3","0","0","0","0"
        ]);

        Schema::table('cp_package', function (Blueprint $table) use ($defaultCommision) {
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
        Schema::table('cp_package', function (Blueprint $table) {
            //
            $table->dropColumn('commission');
        });
    }
}
