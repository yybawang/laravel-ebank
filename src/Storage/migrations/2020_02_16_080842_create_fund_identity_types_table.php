<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundIdentityTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_identity_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100)->unique()->comment('身份类型名称');
            $table->string('alias', 50)->unique()->comment('身份类型英文别名，自动生成 reason 用');
            $table->tinyInteger('status')->comment('0无效，1有效');
            $table->string('remarks')->nullable();
            $table->timestamps();
        });

        \yybawang\ebank\Models\FundIdentityType::create(['name' => '中央银行', 'alias' => 'central', 'status' => 1]);
        \yybawang\ebank\Models\FundIdentityType::create(['name' => '系统银行', 'alias' => 'system', 'status' => 1]);
        \yybawang\ebank\Models\FundIdentityType::create(['name' => '用户银行', 'alias' => 'user', 'status' => 1]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_identity_types');
    }
}
