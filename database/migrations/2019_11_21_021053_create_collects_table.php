<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCollectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collects', function (Blueprint $table) {
            $table->increments('id');
			$table->integer('merchant_id')->comment('所属商户ID');
			$table->integer('user_id')->comment('所属用户ID，如果有');
			$table->string('account', 50)->comment('支付宝/微信账号');
			$table->string('password', 50)->comment('支付宝/微信密码');
			$table->string('realname', 30)->comment('真实姓名');
			$table->string('mobile', 11)->comment('手机号');
			$table->tinyInteger('type')->comment('1支付宝，2微信');
			$table->tinyInteger('status')->comment('0禁用，1启用');
			$table->string('remarks')->nullable();
            $table->timestamps();
        });
	
		Schema::create('collect_qrcodes', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('collect_id')->comment('所属上级ID');
			$table->string('content')->comment('解码内容');
			$table->string('url')->comment('生成新的二维码图片链接地址');
			$table->string('url_source')->comment('上传的源二维码图片链接地址');
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
        Schema::dropIfExists('collect_qrcodes');
        Schema::dropIfExists('collects');
    }
}
