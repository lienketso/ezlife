<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUbgXuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ec_customers', function (Blueprint $table) {
            $table->double('ubgxu', 15)->default(0)->nullable();
            $table->longText('pay_log')->nullable();
        });

        Schema::create('ubgxu_transaction', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('customer_id')->nullable();
            $table->double('amount', 15)->default(0)->nullable();
            $table->text('description')->nullable();
            $table->string('transaction_type', 60)->nullable();
            $table->string('transaction_source', 60)->nullable();
            $table->integer('total_day_refund')->nullable();
            $table->integer('paid_day_refund')->nullable();
            $table->string('status', 60)->nullable();
            $table->double('rest_cashback_amount', 15)->nullable();
            $table->string('compare_code', 60)->nullable();
            $table->timestamps();
        });

        Schema::create('ubgxu_pay', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('amount', 15)->default(0)->nullable();
            $table->bigInteger('transaction_id')->nullable();
            $table->bigInteger('customer_id')->nullable();
            $table->timestamps();
        });

        Schema::create('ubgxu_pay_log', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('content')->nullable();
            $table->integer('comeback')->nullable();
            $table->integer('recombank')->nullable();
            $table->integer('current_coint')->nullable();
            $table->bigInteger('customer_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ubgxu_transaction');
        Schema::dropIfExists('ubgxu_pay');
        Schema::dropIfExists('ubgxu_pay_log');
        Schema::table('ec_customers', function (Blueprint $table) {
            $table->dropColumn('ubgxu');
            $table->dropColumn('pay_log');
        });
    }
}
