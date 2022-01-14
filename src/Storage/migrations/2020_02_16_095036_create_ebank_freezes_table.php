<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEbankFreezesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ebank_freezes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('wallet_id')->comment('钱包id');
            $table->decimal('amount', 34, 4)->unsigned()->comment('冻结的金额，精确到4位小数');
            $table->bigInteger('identity_id')->comment('身份ID');
            $table->string('identity_type')->comment('身份模型');
            $table->tinyInteger('status')->comment('1冻结中，2已解冻');
            $table->string('remarks')->nullable();
            $table->timestamps();

            $table->index('wallet_id', 'wallet_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ebank_freezes');
    }
}
