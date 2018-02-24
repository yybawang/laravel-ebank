<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundTransferReasonTable extends Migration
{
    /**
	 * 转账行为 reason 配置表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_transfer_reason', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('merchant_id')->comment('所属商户ID');
            $table->string('name')->comment('转账业务说明');
            $table->integer('out_user_type_id')->comment('出账用户类型ID');
            $table->integer('out_purse_type_id')->comment('出账钱包类型ID');
            $table->integer('into_user_type_id')->comment('进账用户类型ID');
            $table->integer('into_purse_type_id')->comment('进账钱包类型ID');
            $table->integer('reason')->comment('转账reason行为代码，业务不同reason不同');
			$table->tinyInteger('status')->comment('0无效，1有效');
			$table->string('remarks')->nullable();
	
			$table->unique('name','name');
			$table->unique('reason','reason');
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
        Schema::dropIfExists('fund_transfer_reason');
    }
}
