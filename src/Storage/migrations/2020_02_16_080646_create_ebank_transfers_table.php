<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEbankTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ebank_transfers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('reason_id')->unsigned()->comment('转账reason，业务不同reason不同');
            $table->decimal('amount', 34, 4)->comment('转账金额，正数为充值余额，负数为扣减余额，精确到4位小数');
            $table->bigInteger('wallet_id')->comment('钱包ID');
            $table->decimal('balance', 34, 4)->comment('转账后钱包余额，精确到4位小数');

            $table->bigInteger('identity_id')->comment('身份ID');
            $table->string('identity_type')->comment('身份模型');
            $table->json('upstream')->comment('上游业务关联，json 自由保存');
            $table->tinyInteger('status')->comment('1有效，2已冲正');
            $table->string('remarks')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->index('reason_id', 'reason_id');
            $table->index('wallet_id', 'wallet_id');
            $table->index(['identity_id', 'identity_type'], 'identity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ebank_transfers');
    }
}
