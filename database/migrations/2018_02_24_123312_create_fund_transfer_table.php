<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundTransferTable extends Migration
{
    /**
	 * 转账记录表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_transfer', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('merchant_id')->comment('商户ID');
            $table->decimal('reason',30,0)->unsigned()->comment('转账reason，业务不同reason不同');
            $table->decimal('amount',30,0)->unsigned()->comment('出/进账金额');
            
            $table->integer('out_user_id')->comment('出账用户ID');
            $table->integer('out_user_type_id')->comment('出账身份类型ID');
            $table->integer('out_purse_type_id')->comment('出账钱包类型ID');
            $table->integer('out_purse_id')->comment('出账钱包ID');
            $table->decimal('out_balance',30,0)->comment('出账后钱包余额');
	
			$table->integer('into_user_id')->comment('进账用户ID');
			$table->integer('into_user_type_id')->comment('进账身份类型ID');
			$table->integer('into_purse_type_id')->comment('进账钱包类型ID');
			$table->integer('into_purse_id')->comment('进账钱包ID');
			$table->decimal('into_balance',30,0)->comment('进账后钱包余额');
			
			$table->integer('parent_id')->comment('上级转账ID，用于关联转账业务信息');
			$table->tinyInteger('status')->comment('0无效/删除，1有效，2已冲正');
			$table->string('detail')->nullable()->comment('详情，预留，可根据业务自行存入');
			$table->string('remarks')->nullable();
            $table->timestamps();
	
			$table->index('reason','reason');
			$table->index(['out_user_id','out_user_type_id','out_purse_type_id','out_purse_id'],'out_user');
			$table->index(['into_user_id','into_user_type_id','into_purse_type_id','into_purse_id'],'into_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_transfer');
    }
}
