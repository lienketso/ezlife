<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Botble\Stock\Enums\ContractStatusEnum;

class ChangeStatusContact extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('cp_package', function (Blueprint $table) {
            $table->string('status')->default(ContractStatusEnum::UNSIGNED)->comment('Trạng thái hợp đồng')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
