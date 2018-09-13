<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundWithdrawTable extends Migration
{
    /**
	 * 银行卡提现表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_withdraw', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('merchant_id')->comment('提现发起商户ID');
            $table->integer('user_id')->comment('提现人用户ID');
            $table->string('purse',50)->comment('出账钱包类型，对应 purse_type 的 alias');
            $table->string('pay_type',40)->comment('结算类型，可存中文，即时到账、T+1、T+2等');
            $table->decimal('amount',30,0)->unsigned()->comment('申请金额，单位分');
            $table->decimal('fee',30,0)->comment('手续费，单位分');
            $table->decimal('amount_actual',30,0)->unsigned()->comment('实际打款金额(扣除手续费的)，单位分');
            $table->char('realname',50)->comment('真实姓名/银行卡户名');
            $table->char('bank_name',100)->comment('开户行中文名称，如中国工商银行');
            $table->char('bank_no',30)->comment('银行卡号');
            $table->integer('freeze_id')->comment('冻结ID，申请后会冻结此金额');
            $table->integer('transfer_id')->comment('成功后转账ID');
			$table->tinyInteger('status')->comment('0申请中，1打款成功，2申请拒绝');
			$table->string('remarks')->nullable();
            $table->timestamps();
            
            $table->index(['user_id'],'user_id');
            $table->index(['realname'],'realname');
            $table->index(['bank_no'],'bank_no');
            $table->index(['purse'],'purse');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fund_withdraw');
    }
}
