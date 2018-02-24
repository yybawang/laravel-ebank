<?php

namespace App\Jobs;

use Exception;
use App\Models\FundAdminExport;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class ExportCsv implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $id;
    protected $name;
    protected $filename;
    protected $field;
    protected $data;
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(int $id,string $name,string $filename,array $field,array $data)
    {
    	$this->id = $id;
        $this->name = $name;
        $this->filename = $filename;
        $this->field = $field;
        $this->data = $data;
	}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
//    	if($this->datas){
			$fs = fopen('./public/export/'.$this->filename,'w+');
			// 如果定义了字段标识就以用户定义的为准，否则以英文字段名为准
			if(!$this->field){
				$data = $this->data;
				$attributes = array_shift(array_slice($data,0,1));
				foreach($attributes as $field => $field_name){
					$this->field[$field] = $field;
				}
			}
			foreach($this->field as $k => $v){
				$this->field[$k] = iconv('utf-8','gb2312',$v);
			}
			// 先写入第一行标题
			fputcsv($fs,array_values($this->field));
			
			foreach($this->data as $k => $v){
				$data_line = $this->field;
				foreach($v as $k2 => $v2){
					$data_line[$k2] = '';
					if(!in_array($k2,array_keys($this->field))){
						continue;
					}
					$v2 = iconv('utf-8','gb2312',$v2);
					$data_line[$k2] = $v2;
				}
				fputcsv($fs,array_values($data_line));
			}
			fclose($fs);
//    	}
		FundAdminExport::where(['id'=>$this->id])->update(['status'=>1,'complete_at'=>time2date(time())]);
		
    }
	
    
	public function failed(Exception $exception)
	{
		FundAdminExport::where(['id'=>$this->id])->update(['status'=>2,'remarks'=>$exception->getMessage()]);
		bug_email('导出任务：['.$this->id.']导出失败',$exception->__toString());
	}
}
