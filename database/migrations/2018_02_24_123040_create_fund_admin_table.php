<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundAdminTable extends Migration
{
    /**
	 * 后台管理者用户表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_admin', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',50)->comment('登录名');
            $table->char('password')->comment('32位MD5密码');
            $table->string('realname',15)->comment('管理者真实姓名');
            $table->string('email',50)->comment('管理者邮箱');
            $table->char('mobile',11)->comment('管理者联系手机号');
            $table->integer('group_id')->comment('对应权限组ID');
            $table->timestamp('last_login')->nullable()->comment('上次登录日期');
            $table->tinyInteger('status')->comment('0无效，1有效');
            $table->string('remarks')->nullable();
            
            $table->unique('name','name');
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
        Schema::dropIfExists('fund_admin');
    }
}
