<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundMerchantGroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_merchant_group', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',100)->comment('商户分组名，一个项目多个渠道(商户)可编制为一个组');
            $table->text('pay_config')->comment('支付秘钥配置，多渠道数组，json保存');
            $table->tinyInteger('status')->comment('0无效，1有效');
            $table->string('remarks')->nullable();
            $table->timestamps();
            
            $table->unique(['name'],'name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_merchant_group');
    }
}
