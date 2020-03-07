<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundPurseTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_purse_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100)->unique()->comment('钱包名称');
            $table->string('alias', 50)->unique()->comment('钱包英文别名，自动生成 reason 用');
            $table->tinyInteger('status')->comment('0无效，1有效');
            $table->string('remarks')->nullable();
            $table->timestamps();
        });

        \yybawang\ebank\Models\FundPurseType::create(['name' => '现金钱包', 'alias' => 'cash', 'status' => 1]);
        \yybawang\ebank\Models\FundPurseType::create(['name' => '积分钱包', 'alias' => 'integral', 'status' => 1]);
        \yybawang\ebank\Models\FundPurseType::create(['name' => '授信钱包', 'alias' => 'credit', 'status' => 1]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_purse_types');
    }
}
