<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundFreezesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_freezes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('purse_id')->comment('fund_purse 表的钱包id');
            $table->decimal('amount', 30, 0)->unsigned()->comment('冻结的金额，单位分');
            $table->json('detail')->nullable()->comment('业务详情');
            $table->tinyInteger('status')->comment('1冻结中，2已解冻');
            $table->string('remarks')->nullable();
            $table->timestamps();

            $table->index('purse_id','purse_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_freezes');
    }
}
