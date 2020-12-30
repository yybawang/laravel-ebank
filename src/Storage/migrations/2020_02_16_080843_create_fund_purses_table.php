<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundPursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_purses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->comment('用户ID');
            $table->bigInteger('identity_type_id')->comment('fund_identity_types 表的id，区分身份类型');
            $table->bigInteger('purse_type_id')->comment('fund_purse_type 表的ID，区分钱包类型');
            $table->decimal('balance', 30, 0)->comment('用户钱包可用余额，单位分，全部余额需加上 freeze 字段');
            $table->decimal('freeze', 30, 0)->comment('冻结余额，单位分');
            $table->tinyInteger('status')->comment('0无效，1有效');
            $table->string('remarks')->nullable();
            $table->timestamps();

            $table->unique(['user_id', 'identity_type_id', 'purse_type_id'], 'unique_purse');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_purses');
    }
}
