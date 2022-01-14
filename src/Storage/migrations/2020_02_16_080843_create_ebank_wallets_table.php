<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEbankWalletsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ebank_wallets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('identity_id')->comment('身份ID，多态关联');
            $table->string('identity_type')->comment('身份类型模型');
            $table->bigInteger('wallet_type_id')->comment('钱包类型');

            $table->decimal('balance', 34, 4)->comment('用户钱包可用余额，精确到4位小数，全部余额需加上 freeze 字段');
            $table->decimal('freeze', 34, 4)->comment('被冻结余额，精确到4位小数');
            $table->tinyInteger('status')->comment('0关闭，1活动');
            $table->timestamps();

            $table->unique(['identity_id', 'identity_type', 'wallet_type_id'], 'unique_wallet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ebank_wallets');
    }
}
