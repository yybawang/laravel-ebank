<?php

namespace App\Jobs;

use Exception;
use App\Models\FundAdminExport;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\DB;

class ExportCsv implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $id;
    protected $filename;
    protected $field;
    protected $sql;
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(int $id,string $filename,array $field,string $sql)
    {
    	$this->id = $id;
        $this->filename = $filename;
        $this->field = $field;
        $this->sql = $sql;
	}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
		$data = json_decode(json_encode(DB::select($this->sql)),true);
		$fs = fopen($this->filename,'w+');
		// 如果定义了字段标识就以用户定义的为准，否则以英文字段名为准
		if(!$this->field){
			$attributes = array_shift(array_slice($data,0,1));
			foreach($attributes as $field => $field_name){
				$this->field[$field] = $field;
			}
		}
		foreach($this->field as $k => $v){
			$this->field[$k] = mb_convert_encoding ($v,'GBK','UTF-8');
		}
		// 先写入第一行标题
		fputcsv($fs,array_values($this->field));

		foreach($data as $k => $v){
			$data_line = $this->field;
			foreach($v as $k2 => $v2){
				$data_line[$k2] = '';
				if(!in_array($k2,array_keys($this->field))){
					continue;
				}
				$v2 =  mb_convert_encoding ($v2,'GBK','UTF-8');
				$data_line[$k2] = $v2;
			}
			fputcsv($fs,array_values($data_line));
		}
		fclose($fs);
		FundAdminExport::where(['id'=>$this->id])->update(['status'=>1,'complete_at'=>time2date(time())]);
    }
	
    
	public function failed(Exception $exception)
	{
		FundAdminExport::where(['id'=>$this->id])->update(['status'=>2,'remarks'=>$exception->getMessage()]);
//		email_bug('导出任务：['.$this->id.']导出失败',$exception->__toString());
	}
}
