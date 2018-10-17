<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundBehaviorTable extends Migration
{
    /**
	 * 接口请求记录表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_behavior', function (Blueprint $table) {
            $table->increments('id');
            $table->string('appid')->comment('商户 appid');
            $table->string('url')->comment('操作地址 fullUrl()');
            $table->double('execute_time')->comment('执行时间，php microtime时间');
            $table->text('response')->comment('返回的结果集');
            $table->tinyInteger('status')->comment('返回状态，1成功，0异常');
            $table->text('$_GET');
            $table->text('$_POST');
            $table->text('$_REQUEST');
            $table->text('$_SERVER');
            $table->text('$_SESSION');
            $table->text('$_COOKIE');
			$table->string('remarks')->nullable();
            $table->timestamps();
            
            $table->index(['appid','url'],'appid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_behavior');
    }
}
