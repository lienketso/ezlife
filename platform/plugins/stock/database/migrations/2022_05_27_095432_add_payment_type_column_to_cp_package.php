<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPaymentTypeColumnToCpPackage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cp_package', function (Blueprint $table) {
            $table->integer('percent_paid_by_ubgxu')->unsigned(); 
            $table->integer('percent_paid_by_money')->unsigned();
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
        });
    }
}

