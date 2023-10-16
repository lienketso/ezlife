<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCollaboratorWithdrawTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ec_collaborator_withdraw', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id')->unsigned()->nullable();
            $table->decimal('amount', 15)->default(0)->unsigned()->nullable();
            $table->decimal('current_balance', 15)->default(0)->unsigned()->nullable();
            $table->text('description')->nullable();
            $table->text('bank_info')->nullable();
            $table->integer('user_id')->default(0)->unsigned();
            $table->string('status', 60)->default(\Botble\Marketplace\Enums\WithdrawalStatusEnum::PENDING);
            $table->text('images')->nullable();
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
        Schema::dropIfExists('ec_collaborator_withdraw');
    }
}
