<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundPurseTypeTable extends Migration
{
    /**
	 * 钱包类型表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_purse_type', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',100)->comment('钱包名称');
            $table->string('alias',50)->comment('钱包英文别名，转账用');
			$table->tinyInteger('status')->comment('0无效，1有效');
			$table->string('remarks')->nullable();
			
			$table->unique('name','name');
			$table->unique('alias','alias');
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
        Schema::dropIfExists('fund_purse_type');
    }
}
