<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundConfigsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_configs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('key')->unique()->comment('配置建，使用 config(\'{$key}\') 读取');
            $table->text('value')->nullable();
            $table->text('type')->comment('数据类型，用户前端显示不同控件');
            $table->string('tips')->comment('作用域提示信息');
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
        Schema::dropIfExists('fund_configs');
    }
}
