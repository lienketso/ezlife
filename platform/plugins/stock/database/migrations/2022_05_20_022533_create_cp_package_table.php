<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCpPackageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cp_package', function (Blueprint $table) {
            $table->id();
            $table->integer('cp_category_id')->default(0);
            $table->string('name');
            $table->tinyInteger('percentage')->default(0)->comment('% lợi nhuận');
            $table->timestamp('end_date')->nullable()->comment('Ngày hết hạn');
            $table->double('price_per_stock')->default(0)->comment('Giá trên 1 cổ phần');
            $table->integer('qty_of_stock')->default(0)->comment('Số lượng cổ phần');
            $table->string('thumbnail')->nullable();
            $table->text('content')->nullable();
            $table->enum('status',['published','disabled'])->default('published');
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
        Schema::dropIfExists('cp_package');
    }
}
