<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundConfigTable extends Migration
{
    /**
	 * 系统配置表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_config', function (Blueprint $table) {
            $table->increments('id');
            $table->string('key',191)->comment('配置键');
            $table->text('value')->comment('配置值');
            $table->string('tips')->comment('配置提示');
            $table->integer('rank')->comment('排序，越小越靠前');
			$table->tinyInteger('status')->comment('0无效，1有效');
			$table->string('remarks')->nullable();
	
			$table->unique('key','key');
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
        Schema::dropIfExists('fund_config');
    }
}
