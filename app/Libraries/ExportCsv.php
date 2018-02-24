<?php
namespace App\Libraries;
use App\Models\FundAdminExport;
use Illuminate\Support\Collection;

/**
 * 使用队列导出为 csv 文件并插库
 * Class Export
 * @package App\Libraries
 */
class ExportCsv {
	
	protected $name = '导出';
	protected $filename = '';
	protected $field = [];
	protected $data;
	
	/**
	 * 指定操作名称
	 * @param string $name
	 * @return $this
	 */
	public function name(string $name){
		$this->name = $name;
		return $this;
	}
	
	/**
	 * @param string $filename	// 指定文件名，不能传入路径等
	 * @return $this
	 */
	public function filename(string $filename){
		$this->filename = $filename;
		return $this;
	}
	
	public function field(array $field){
		$this->field = $field;
		return $this;
	}
	
	/**
	 * 传入集合对象
	 * @param Collection $collection
	 * @return $this
	 */
	public function data(Collection $collection){
		$this->data = $collection->toArray();
		return $this;
	}
	
	/**
	 * 使用队列导出并存库
	 */
	public function save(){
		$admin_id = admin_user('id');
		if(!$this->filename){
			$this->filename = date('Y-m-d_H-i-s').'__'.$admin_id.'.csv';
		}
		$add = [
			'admin_id'	=> admin_user('id'),
			'name'		=> $this->name,
			'file_name'	=> $this->filename,
			'file_path'	=> '/export/'.$this->filename,
			'status'	=> 0,
		];
		$id = FundAdminExport::create($add)->id;
		return \App\Jobs\ExportCsv::dispatch($id,$this->name,$this->filename,$this->field,$this->data)->onQueue('export');
	}
}