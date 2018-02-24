<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFundAdminExportTable extends Migration
{
    /**
	 * 后台操作人员导出记录表
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fund_admin_export', function (Blueprint $table) {
            $table->increments('id');
			$table->integer('admin_id')->comment('所属操作人员(后台登录用户)ID');
			$table->string('name')->comment('操作名');
			$table->string('file_name')->comment('文件名');
			$table->string('file_path')->comment('文件路径');
			$table->integer('downloads')->comment('下载次数统计');
			$table->timestamp('complete_at')->nullable()->comment('导出完成时间');
			$table->tinyInteger('status')->comment('0无效，1有效');
			$table->string('remarks')->nullable();
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
        Schema::dropIfExists('fund_admin_export');
    }
}
