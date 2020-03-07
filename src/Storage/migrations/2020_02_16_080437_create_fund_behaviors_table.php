<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundBehaviorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_behaviors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('funcname')->comment('SDK 方法名');
            $table->json('params')->comment('SDK 方法参数');
            $table->decimal('execute_time', 12, 8)->comment('执行时间，php microtime 时间');
            $table->text('response')->comment('返回的结果');
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
        Schema::dropIfExists('fund_behaviors');
    }
}
