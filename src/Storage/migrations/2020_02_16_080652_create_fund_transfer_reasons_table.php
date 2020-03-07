<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundTransferReasonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_transfer_reasons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->comment('转账业务说明');
            $table->bigInteger('out_identity_type_id')->comment('出账身份类型ID');
            $table->bigInteger('out_purse_type_id')->comment('出账钱包类型ID');
            $table->bigInteger('into_identity_type_id')->comment('进账身份类型ID');
            $table->bigInteger('into_purse_type_id')->comment('进账钱包类型ID');
            $table->bigInteger('reason')->unsigned()->comment('转账reason行为代码，业务不同reason不同');
            $table->tinyInteger('status')->comment('0无效，1有效');
            $table->string('remarks')->nullable();
            $table->timestamps();

            $table->index(['out_identity_type_id', 'out_purse_type_id', 'into_identity_type_id', 'into_purse_type_id'], 'type');
            $table->unique(['reason'], 'reason');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_transfer_reasons');
    }
}
