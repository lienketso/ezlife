<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Botble\Marketplace\Enums\RevenueTypeEnum;

class CreateCollaboratorRevenueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ec_collaborator_revenue_record', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('customer_id');
            $table->bigInteger('order_id');
            $table->float('sub_amount', )->default(0)->nullable();
            $table->float('amount')->default(0)->nullable();
            $table->text('description')->nullable();
            $table->string('type', 40)->nullable()->default(RevenueTypeEnum::ADD_AMOUNT());
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
        Schema::dropIfExists('ec_collaborator_revenue_record');
    }
}
