<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundPayConfigTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_pay_config', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',100)->comment('支付渠道名');
            $table->text('pay_config')->comment('支付秘钥配置，json保存');
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
        Schema::dropIfExists('fund_pay_config');
    }
}
