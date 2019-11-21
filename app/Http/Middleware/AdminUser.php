<?php

namespace App\Http\Middleware;

use App\Models\FundAdmin;
use App\Models\FundAdminGroup;
use Closure;

class AdminUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
	 * @throws LoginException
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
    	$uid = session('admin_uid');
    	if(!$uid){
    		if($request->ajax()){
				exception('登录状态失效', 401);
			}else{
				return redirect(url('admin'));
			}
		}
		$init_menu = init_menu();
		$menu = [];
		foreach($init_menu as $k => $v){
			foreach($v as $k2 => $v2){
				array_push($menu,$v2['name_full']);
			}
		}
		// 判断权限，权限管理组不为 1 的时候才开启
		$group_id = FundAdmin::where(['id'=>$uid])->value('group_id');
		$rule_names = FundAdminGroup::where('id','>',1)->where(['id'=>$group_id])->value('rule');
		$rule_name = $request->route()->getName();
		// 如果在菜单里面并且不在权限组里面
		if($rule_names && in_array($rule_name,$menu) && !in_array($rule_name,$rule_names)){
			exception('用户组无权限');
		}
		
		return $next($request);
    }
}
