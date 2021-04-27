<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_transfers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('reason')->unsigned()->comment('转账reason，业务不同reason不同');
            $table->decimal('amount', 34, 4)->comment('转账金额');

            $table->bigInteger('out_user_id')->comment('出账用户ID');
            $table->bigInteger('out_identity_type_id')->comment('出账身份类型ID');
            $table->bigInteger('out_purse_type_id')->comment('出账钱包类型ID');
            $table->bigInteger('out_purse_id')->comment('出账钱包ID');
            $table->decimal('out_balance', 34, 4)->comment('出账后钱包余额');

            $table->bigInteger('into_user_id')->comment('进账用户ID');
            $table->bigInteger('into_identity_type_id')->comment('进账身份类型ID');
            $table->bigInteger('into_purse_type_id')->comment('进账钱包类型ID');
            $table->bigInteger('into_purse_id')->comment('进账钱包ID');
            $table->decimal('into_balance', 34, 4)->comment('进账后钱包余额');

            $table->tinyInteger('status')->comment('1有效，2已冲正');
            $table->json('detail')->nullable()->comment('业务详情，预留，可根据业务使用SDK传递参数存入，自行查询即可');
            $table->string('remarks')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->index('reason','reason');
            $table->index(['out_user_id','out_identity_type_id','out_purse_type_id','out_purse_id'], 'out_user');
            $table->index(['into_user_id','into_identity_type_id','into_purse_type_id','into_purse_id'], 'into_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_transfers');
    }
}
