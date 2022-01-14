<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEbankWalletTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ebank_wallet_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100)->unique()->comment('钱包名称');
            $table->string('alias', 50)->unique()->comment('钱包英文别名，自动生成 reason 用');
            $table->tinyInteger('status')->comment('0无效，1有效');
            $table->string('remarks')->nullable();
            $table->timestamps();

            $table->unique('name', 'name');
            $table->unique('alias', 'alias');
        });

        \yybawang\ebank\Models\EbankWalletType::create(['name' => '现金钱包', 'alias' => 'cash', 'status' => 1, 'remarks' => '充值等业务使用']);
        \yybawang\ebank\Models\EbankWalletType::create(['name' => '授信钱包', 'alias' => 'credit', 'status' => 1, 'remarks' => '平台预支消费等业务使用']);
        \yybawang\ebank\Models\EbankWalletType::create(['name' => '佣金钱包', 'alias' => 'income', 'status' => 1, 'remarks' => '推广奖励等业务使用']);
        \yybawang\ebank\Models\EbankWalletType::create(['name' => '积分钱包', 'alias' => 'integral', 'status' => 1, 'remarks' => '平台内部购买消费等业务使用']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ebank_wallet_types');
    }
}
