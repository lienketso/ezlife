<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Botble\Stock\Enums\ContractPaymentStatusEnum;

class AddContractPaidStatusToContractTable extends Migration
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
            $table->string('contract_paid_status')->after('status')->nullable()->default(ContractPaymentStatusEnum::UNPAID);
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
            $table->dropColumn('contract_paid_status');
        });
    }
}
