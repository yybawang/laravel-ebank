<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEbankReasonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ebank_reasons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->comment('转账业务说明');

            $table->string('identity', 80)->comment('所属身份模型');   //  多态关联，转账绑定模型
            $table->bigInteger('wallet_type_id')->comment('钱包类型ID');

            $table->bigInteger('code')->unsigned()->comment('转账reason行为代码，业务不同code不同');
            $table->tinyInteger('status')->comment('0禁用，1启用');
            $table->string('remarks')->nullable()->comment('详细说明');
            $table->timestamps();

            $table->index(['identity', 'wallet_type_id'], 'type');
            $table->unique(['code'], 'code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ebank_reasons');
    }
}
