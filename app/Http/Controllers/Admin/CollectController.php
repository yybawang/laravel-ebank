<?php
/**
 * 个人/商家码管理
 * 2019-11-21 02:23:00
 */
namespace App\Http\Controllers\Admin;

use App\Models\FundConfig;
use Illuminate\Http\Request;
use App\Models\FundCollect;
use App\Models\FundCollectQrcode;
use App\Models\FundMerchant;
use Illuminate\Support\Facades\Storage;
use Zxing\Qrcode\QRCodeReader;
use Zxing\QrReader;

class CollectController extends CommonController
{
    public function index(Request $request){
		$types = FundCollect::TYPES;
		$limit_types = FundCollect::LIMIT_TYPES;
		$limit_qrcode = FundConfig::get('collect_qrcode_limit', 10);
		$merchants = FundMerchant::active()->pluck('name','id');
		$list = FundCollect::when($request->input('user_id'), function($query) use ($request){
			$query->where('user_id', 'like', '%'.$request->input('user_id').'%');
		})
			->when($request->input('account'), function($query) use ($request){
				$query->where('account', 'like', '%'.$request->input('account').'%');
			})
			->when($request->input('type'), function($query) use ($request){
				$query->whereIn('type', $request->input('type'));
			})
            ->when($request->input('limit_type'), function($query) use ($request){
                $query->whereIn('limit_type', $request->input('limit_type'));
            })
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->withCount(['qrcodes'])
			->pages();
		
		return json_success('OK', [
			'limit_qrcode'	=> $limit_qrcode,
			'limit_types'	=> $limit_types,
			'types'	=> $types,
			'merchants'	=> $merchants,
			'list'	=> $list,
		]);
	}
	
	public function detail(Request $request, int $id){
    	$Collect = FundCollect::firstOrNew(['id'=> $id], [
    		'merchant_id'	=> 0,
    		'user_id'	=> 0,
    		'account'	=> '',
    		'password'	=> '',
    		'realname'	=> '',
    		'mobile'	=> '',
    		'limit'	    => 5000,    // 每日限额
    		'limit_type'=> 0,
    		'type'		=> 0,
    		'status'	=> 1,
    		'remarks'	=> '',
		]);
    	$Collect->load(['qrcodes']);
    	return json_success('OK', $Collect);
	}
	
	public function add(Request $request){
    	$param = $request->validate([
    		'id'			=> '',
    		'merchant_id'	=> 'required|integer|min:1',
    		'user_id'		=> 'nullable|integer|min:0',
			'account'		=> 'required',
			'password'		=> '',
			'realname'		=> 'required',
			'mobile'		=> 'required',
			'limit'		    => 'required|integer|min:0',
			'limit_type'	=> 'required|integer|min:1',
			'type'			=> 'required|integer',
			'status'		=> 'required|integer',
			'remarks'		=> '',
		]);
    	$qrcodes = $request->validate([
			'qrcodes'		=> 'required|array',
		]);
    	if(!$param['password']){
    		unset($param['password']);
		}
    	$Collect = FundCollect::updateOrCreate(['id'=> $param['id']], $param);
    	
    	FundCollectQrcode::where('collect_id', $Collect->id)->whereNotIn('url_source', $qrcodes)->delete();
    	foreach($qrcodes['qrcodes'] as $val){
    	    $qrcode = $val['url_source'];
			// todo.. 生成新的自己的样式二维码存入数据库
			$Qrcode = new QrReader('.'.$qrcode);
			$content = $Qrcode->text();
			FundCollectQrcode::updateOrCreate(['url_source'=> $qrcode], [
    			'collect_id'	=> $Collect->id,
				'content' => $content,
				'url' => $qrcode,
				'url_source' => $qrcode,
			]);
		}
    	return json_success();
	}
	
	public function delete(int $id){
    	FundCollect::destroy($id);
    	return json_success();
	}
}
