<?php
/**
 * 个人/商家码管理
 * 2019-11-21 02:23:00
 */
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Collect;
use App\Models\CollectQrcode;
use App\Models\FundMerchant;

class CollectController extends CommonController
{
    public function index(Request $request){
		$types = Collect::TYPES;
		$merchants = FundMerchant::active()->pluck('name','id');
		$list = Collect::when($request->input('user_id'), function($query) use ($request){
			$query->where('user_id', 'like', '%'.$request->input('user_id').'%');
		})
			->when($request->input('account'), function($query) use ($request){
				$query->where('account', 'like', '%'.$request->input('account').'%');
			})
			->when($request->input('type'), function($query) use ($request){
				$query->whereIn('type', $request->input('type'));
			})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->withCount(['qrcodes'])
			->pages();
		
		return json_success('OK', [
			'types'	=> $types,
			'merchants'	=> $merchants,
			'list'	=> $list,
		]);
	}
	
	public function detail(Request $request, int $id){
    	$Collect = Collect::firstOrNew(['id'=> $id], [
    		'merchant_id'	=> 0,
    		'user_id'	=> 0,
    		'account'	=> '',
    		'password'	=> '',
    		'realname'	=> '',
    		'mobile'	=> '',
    		'type'		=> 0,
    		'status'	=> 1,
    		'remarks'	=> '',
		]);
    	return json_success('OK', $Collect);
	}
	
	public function add(Request $request){
    	$param = request()->validate([
    		'id'			=> '',
    		'merchant_id'	=> 'required|integer|min:1',
    		'user_id'		=> 'nullable|integer|min:0',
			'account'		=> 'required',
			'password'		=> '',
			'realname'		=> 'required',
			'mobile'		=> 'required',
			'type'			=> 'required|integer',
			'status'		=> 'required|integer',
			'remarks'		=> '',
		]);
    	$qrcodes = request()->validate([
			'qrcodes'		=> 'required|array',
		]);
    	if(!$param['password']){
    		unset($param['password']);
		}
    	$Collect = Collect::updateOrCreate(['id'=> $param['id']], $param);
    	foreach($qrcodes as $qrcode){
			// todo.. 处理上传的图片，解码->生成新的自己的样式二维码存入数据库
			
			CollectQrcode::updateOrCreate([
    			'collect_id'	=> $Collect->id,
				'content' => '',
				'url' => '',
				'url_source' => $qrcode,
			]);
		}
    	return json_success();
	}
	
	public function delete(int $id){
    	Collect::destroy($id);
    	return json_success();
	}
}
