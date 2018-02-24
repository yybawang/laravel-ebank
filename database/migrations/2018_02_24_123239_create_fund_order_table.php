<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundOrderTable extends Migration
{
    /**
	 * 用户下单记录表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_order', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('merchant_id')->comment('商户ID');
            $table->integer('user_id')->comment('用户ID，用于用户钱包扣款');
            $table->string('order_no',150)->comment('唯一订单号');
            $table->string('order_type')->comment('订单类型，商户自由区分，可存中文或英文');
            $table->string('product_name')->comment('商品名');
            $table->decimal('amount',30,0)->comment('组合支付总金额，单位分');
            $table->string('return_url')->comment('同步返回地址');
            $table->string('notify_url')->comment('异步返回地址');
            $table->text('param')->comment('所有参数，json保存预留');
            
            $table->tinyInteger('pay_status')->comment('第三方支付回调的支付状态，0未支付，1已支付');
            $table->timestamp('pay_time')->nullable()->comment('支付成功时间');
            $table->tinyInteger('notify_status')->comment('异步通知状态，0未通知，1通知完成，2多次通知失败(需重新通知)');
			$table->timestamp('notify_time')->nullable()->comment('异步通知成功时间');
			$table->tinyInteger('refund_status')->comment('退款状态，0未退款，1已退款');
			$table->timestamp('refund_time')->nullable()->comment('退款时间');
			$table->integer('refund_transfer_id')->comment('退款转账ID');
			
			$table->tinyInteger('status')->comment('0无效，1有效');
			$table->string('remarks')->nullable();
			
			$table->unique(['order_no','merchant_id'],'order_no');
			$table->index('user_id','user_id');
			$table->index('order_type','order_type');
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
        Schema::dropIfExists('fund_order');
    }
}
