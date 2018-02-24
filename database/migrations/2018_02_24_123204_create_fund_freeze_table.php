<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundFreezeTable extends Migration
{
    /**
	 * 冻结记录表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_freeze', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('purse_id')->comment('user_purse 表的钱包id');
            $table->decimal('amount',30,0)->comment('冻结的金额，单位分');
			$table->tinyInteger('status')->comment('0无效，1有效');
			$table->string('remarks')->nullable();
			
			$table->index('purse_id','purse_id');
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
        Schema::dropIfExists('fund_freeze');
    }
}
