<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerWalletTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ec_customer_wallet', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('customer_id')->nullable();
            $table->float('amount')->default(0)->nullable();
            $table->float('amount_temp')->default(0)->nullable();
            $table->string('status', 60)->default(\Botble\ACL\Enums\UserStatusEnum::ACTIVATED)->nullable();
            $table->timestamps();
        });

        Schema::create('ec_customer_wallet_history', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('wallet_id')->nullable();
            $table->string('type', 60)->nullable();
            $table->text('description')->nullable();
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
        Schema::dropIfExists('ec_customer_wallet');
        Schema::dropIfExists('ec_customer_wallet_history');
    }
}
