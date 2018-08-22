<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundAdminGroupTable extends Migration
{
    /**
	 * 后台权限组
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_admin_group', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',50)->comment('权限组名称');
            $table->longText('rule')->comment('权限组 json 格式');
			$table->tinyInteger('status')->comment('0无效，1有效');
			$table->string('remarks')->nullable();
			
			$table->unique(['name'],'name');
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
        Schema::dropIfExists('fund_admin_group');
    }
}
