<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\FundConfig;
use App\Models\FundMerchantBehavior;
use App\Models\FundMerchant;
use App\Models\FundOrder;
use App\Models\FundOrderPayment;
use App\Models\FundPurseType;
use App\Models\FundTransfer;
use App\Models\FundUserPurse;
use App\Models\FundWithdraw;
use Illuminate\Support\Facades\DB;

class IndexController extends CommonController
{
	public function index(Request $request){
		$project_name = FundConfig::get('project_name', config('app.name'));
		$github_show = FundConfig::get('github_show', '1');
		return view('admin.index', compact(
			'project_name',
			'github_show'
		));
	}
	
	/**
	 * 页面菜单/用户信息初始化
	 * @param Request $request
	 * @return array
	 */
	public function init(Request $request){
		$data['user'] = admin_user();
		$data['menu'] = init_menu();
		return json_success('OK',$data);
	}
	
	public function welcome(Request $request){
		return json_success('OK');
	}
	
	/**
	 * 首页报表
	 * @param Request $request
	 * @return array
	 */
	public function sum_today(Request $request){
		$today_start = date('Y-m-d');
		$today_end = date('Y-m-d',strtotime('+1 day'));
		
		$FundOrderToday = FundOrder::where('created_at','>=',$today_start)->where('created_at','<',$today_end)->where(['pay_status'=>1,'status'=>1]);
		$FundOrderUnPayToday = FundOrder::where('created_at','>=',$today_start)->where('created_at','<',$today_end)->where(['pay_status'=>0,'status'=>1]);
		$today_unified_count = (clone $FundOrderToday)->count();
		$today_unified_amount = (clone $FundOrderToday)->sum('amount');
		$today_unified_un_pay_count = (clone $FundOrderUnPayToday)->count();
		$today_unified_un_pay_amount = (clone $FundOrderUnPayToday)->sum('amount');
		
		$FundWithdrawToday = FundWithdraw::where('created_at','>=',$today_start)->where('created_at','<',$today_end);
		$today_withdraw_count = (clone $FundWithdrawToday)->where('status',1)->count();
		$today_withdraw_amount = (clone $FundWithdrawToday)->where('status',1)->sum('amount');
		$today_withdraw_un_count = (clone $FundWithdrawToday)->where('status',0)->count();
		$today_withdraw_un_amount = (clone $FundWithdrawToday)->where('status',0)->sum('amount');
		
		$FundUserPurseToday = FundUserPurse::where('created_at','>=',$today_start)->where('created_at','<',$today_end)->where('user_id','>',0)->groupBy('user_id');
		$today_new_user_count = (clone $FundUserPurseToday)->count();
		
		$FundBehaviorToday = FundMerchantBehavior::where('created_at','>=',$today_start)->where('created_at','<',$today_end);
		$FundTransferToday = FundTransfer::where('created_at','>=',$today_start)->where('created_at','<',$today_end)->where('status',1);
		$today_behavior_count = (clone $FundBehaviorToday)->count();
		$today_behavior_error_count = (clone $FundBehaviorToday)->where('status','!=',1)->count();
		$today_transfer = (clone $FundTransferToday)->count();
		
		$data = [
			'today_unified_count'			=> ['sum' => $today_unified_count,],
			'today_unified_amount'			=> ['sum' => $today_unified_amount,],
			'today_unified_un_pay_count'	=> ['sum' => $today_unified_un_pay_count,],
			'today_unified_un_pay_amount'	=> ['sum' => $today_unified_un_pay_amount,],
			'today_withdraw_count'			=> ['sum' => $today_withdraw_count,],
			'today_withdraw_amount'			=> ['sum' => $today_withdraw_amount,],
			'today_withdraw_un_count'		=> ['sum' => $today_withdraw_un_count,],
			'today_withdraw_un_amount'		=> ['sum' => $today_withdraw_un_amount,],
			'today_new_user_count'			=> ['sum' => $today_new_user_count,],
			'today_transfer'				=> ['sum' => $today_transfer,],
			'today_behavior_count'			=> ['sum' => $today_behavior_count,],
			'today_behavior_error_count'	=> ['sum' => $today_behavior_error_count,],
		];
		
		return json_success('OK',$data);
	}
	
	public function sum_yesterday(Request $request){
		$yesterday_start = date('Y-m-d',strtotime('-1 day'));
		$yesterday_end = date('Y-m-d');
		
		$FundOrderYesterday = FundOrder::where('created_at','>=',$yesterday_start)->where('created_at','<',$yesterday_end)->where(['pay_status'=>1,'status'=>1]);
		$FundOrderUnPayYesterday = FundOrder::where('created_at','>=',$yesterday_start)->where('created_at','<',$yesterday_end)->where(['pay_status'=>0,'status'=>1]);
		$yesterday_unified_count = (clone $FundOrderYesterday)->count();
		$yesterday_unified_amount = (clone $FundOrderYesterday)->sum('amount');
		$yesterday_unified_un_pay_count = (clone $FundOrderUnPayYesterday)->count();
		$yesterday_unified_un_pay_amount = (clone $FundOrderUnPayYesterday)->sum('amount');
		
		
		$FundWithdrawYesterday = FundWithdraw::where('created_at','>=',$yesterday_start)->where('created_at','<',$yesterday_end);
		$yesterday_withdraw_count = (clone $FundWithdrawYesterday)->where('status',1)->count();
		$yesterday_withdraw_amount = (clone $FundWithdrawYesterday)->where('status',1)->sum('amount');
		$yesterday_withdraw_un_count = (clone $FundWithdrawYesterday)->where('status',0)->count();
		$yesterday_withdraw_un_amount = (clone $FundWithdrawYesterday)->where('status',0)->sum('amount');
		
		$FundUserPurseYesterday = FundUserPurse::where('created_at','>=',$yesterday_start)->where('created_at','<',$yesterday_end)->where('user_id','>',0)->groupBy('user_id');
		$yesterday_new_user_count = (clone $FundUserPurseYesterday)->count();
		
		$FundBehaviorYesterday = FundMerchantBehavior::where('created_at','>=',$yesterday_start)->where('created_at','<',$yesterday_end);
		$FundTransferYesterday = FundTransfer::where('created_at','>=',$yesterday_start)->where('created_at','<',$yesterday_end)->where('status',1);
		$yesterday_behavior_count = (clone $FundBehaviorYesterday)->count();
		$yesterday_behavior_error_count = (clone $FundBehaviorYesterday)->where('status','!=',1)->count();
		$yesterday_transfer = (clone $FundTransferYesterday)->count();
		$data = [
			'yesterday_unified_count'			=> ['sum' => $yesterday_unified_count,],
			'yesterday_unified_amount'			=> ['sum' => $yesterday_unified_amount,],
			'yesterday_unified_un_pay_count'	=> ['sum' => $yesterday_unified_un_pay_count,],
			'yesterday_unified_un_pay_amount'	=> ['sum' => $yesterday_unified_un_pay_amount,],
			'yesterday_withdraw_count'			=> ['sum' => $yesterday_withdraw_count,],
			'yesterday_withdraw_amount'			=> ['sum' => $yesterday_withdraw_amount,],
			'yesterday_withdraw_un_count'		=> ['sum' => $yesterday_withdraw_un_count,],
			'yesterday_withdraw_un_amount'		=> ['sum' => $yesterday_withdraw_un_amount,],
			'yesterday_new_user_count'			=> ['sum' => $yesterday_new_user_count,],
			'yesterday_transfer'				=> ['sum' => $yesterday_transfer,],
			'yesterday_behavior_count'			=> ['sum' => $yesterday_behavior_count,],
			'yesterday_behavior_error_count'	=> ['sum' => $yesterday_behavior_error_count,],
		];
		
		return json_success('OK',$data);
	}
	
	/**
	 * 订单支付成功，但未通知的列表
	 * @param Request $request
	 * @return array
	 */
	public function order_unnotify(Request $request){
		$data = FundOrder::where(['status'=>1,'pay_status'=>1,'notify_status'=>0])->orderByDesc('id')->limit(20)->get();
		return json_success('OK',$data);
	}
	
	/**
	 * 主页，数据统计等
	 * @param Request $request
	 * @return array
	 */
	public function order_into(Request $request){
		$days = 14;	// 15天，因为从0开始
		$fundOrder = new FundOrder();
		$payments = $fundOrder->payments;
		$payments['total'] = '总额';
		$columns = $rows = [];
		$latest = date('Y-m-d',strtotime("-$days day"));
		
		$merchant = FundMerchant::active()->pluck('name','id');
		$payments = FundOrderPayment::whereDate('created_at','>=',$latest)->groupBy('type')->pluck('type','type')->merge($payments);
		
		// 默认数据填充
		for($i=$days;$i>=0;$i--){
			$date = date('Y-m-d',strtotime("-$i days"));
			$columns[] = $date;
			$rows['total'][$date] = 0;	// or ''
			foreach($payments as $payment => $payment_name){
				$rows[$payment][$date] = 0;
			}
		}
		
		FundOrder::rightJoin('fund_order_payment as payment','payment.order_id','=','fund_order.id')
			->select(DB::raw('date_format(fund_order.created_at,\'%Y-%m-%d\') as date,payment.type,sum(payment.amount) amount'))
			->where(['fund_order.status'=>1,'fund_order.pay_status'=>1])->whereDate('fund_order.created_at','>=',$latest)
			->groupBy('payment.type')
			->groupBy('date')
			->get()->each(function($v,$k) use (&$rows){
				$rows[$v->type][$v->date] = $v->amount;
				$rows['total'][$v->date] += $v->amount;
			});
		
		return json_success('OK',[
			'columns' => $columns,
			'rows' => $rows,
			'payments' => $payments,
			'merchant' => $merchant,
			'days' => $days + 1,
		]);
	}
	
	/**
	 * 用户身份收入、支出统计
	 * @param Request $request
	 * @return array
	 */
	public function user_transfer(Request $request){
		$days = 14;
		$out = $into = [];
		$series = [];
		$purse_types_all = FundPurseType::active()->get(['id','name','alias']);
		
		$purse_types = collect([
			'total'		=> '总额',
			'-total'	=> '总额(负)',
		]);
		$purse_types_all->each(function($v) use (&$series,&$purse_types){
			$series[$v->id] = $v->alias;
			$purse_types[$v->alias] = $v->name.'(收入)';
			$purse_types['-'.$v->alias] = $v->name.'(支出)';
		});
		
		$dates = [];
		// 数据初始化为0，图表数据占位
		for($i=$days;$i>=0;$i--){
			$date = time2date_date(strtotime("-$i day"));
			$dates[] = $date;
			$purse_types_all->each(function($v) use (&$out,&$into,$date){
				$out['-'.$v->alias][$date] = 0;
				$into[$v->alias][$date] = 0;
			});
		}
		$latest = time2date_date(strtotime("-$days day"));
		
		$model_out = FundTransfer::select(DB::raw('out_purse_type_id,into_purse_type_id,date_format(created_at,\'%Y-%m-%d\') as date,sum(amount) as amount'))
			->whereDate('created_at','>=',$latest)
			->where(['status'=>1])
			->groupBy('date');
		$model_into = clone $model_out;
		
		$model_out->where('out_user_id','!=',0)->where(['out_user_type_id'=>3])->groupBy('out_purse_type_id')->get()->each(function($v) use (&$out,$series){
			$out['-'.$series[$v->out_purse_type_id]][$v->date] = -$v->amount;
//			$out['-total'][$v->date] += -$v->amount;
		});
		$model_into->where('into_user_id','!=',0)->where(['into_user_type_id'=>3])->groupBy('into_purse_type_id')->get()->each(function($v) use (&$into,$series){
			$into[$series[$v->into_purse_type_id]][$v->date] = $v->amount;
		});
		$amounts = array_merge($into,$out);
		return json_success('OK',[
			'dates'			=> $dates,
			'purse_types'	=> $purse_types,
			'out'			=> $out,
			'into'			=> $into,
			'amounts'		=> $amounts,
			'days'			=> $days + 1,
		]);
	}
	
	/**
	 * 服务器版本信息
	 * @param Request $request
	 * @return array
	 */
	public function sysinfo(Request $request){
		$data = [
			'服务器系统'		=> php_uname(),
			'运行模式'		=> php_sapi_name(),
			'运行用户名'		=> Get_Current_User(),
			'PHP版本'		=> PHP_VERSION,
			'运行时最大内存'	=> ini_get('memory_limit'),
			'时区'			=> config('app.timezone'),
			'允许上传大小'	=> ini_get('upload_max_filesize'),
			'数据库版本'		=> array_shift(DB::select('select version() as version'))->version,
			'服务器IP'		=> GetHostByName($_SERVER['SERVER_NAME']),
			'客户端IP'		=> $_SERVER['REMOTE_ADDR'],
		];
		return json_success('OK',$data);
	}
}
