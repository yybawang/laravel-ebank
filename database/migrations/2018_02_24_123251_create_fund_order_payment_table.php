<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundOrderPaymentTable extends Migration
{
    /**
	 * 订单组合支付方式表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_order_payment', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order_id')->comment('所属订单表ID，一对多');
            $table->string('type')->comment('支付方式，对应 OrderController 的方法名');
            $table->decimal('amount',30,0)->comment('支付金额，单位分');
			$table->string('remarks')->nullable();
			
			$table->index('order_id','order_id');
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
        Schema::dropIfExists('fund_order_payment');
    }
}
