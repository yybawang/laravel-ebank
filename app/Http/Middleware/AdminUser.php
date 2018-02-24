<?php

namespace App\Http\Middleware;

use App\Exceptions\LoginException;
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
    	if($uid){
			// 判断权限
			$group_id = FundAdmin::where(['id'=>$uid])->value('group_id');
			// 权限管理不为1的时候才开启
			if($group_id != 1){
				$init_menu = init_menu();
				$menu = [];
				foreach($init_menu as $k => $v){
					foreach($v as $k2 => $v2){
						array_push($menu,$k2);
					}
				}
				$rule = FundAdminGroup::where(['id'=>$group_id])->value('rule');
				$rule_name = array_pop(explode('.',$request->route()->getName()));
				$rule_names = json_decode($rule,true);
				// 如果在菜单里面并且不在权限组里面
				if(in_array($rule_name,$menu) && !in_array($rule_name,$rule_names)){
					abort_500('用户组无权限');
				}
			}
			
			return $next($request);
		}else{
    		if($request->ajax()){
    			throw new LoginException('登录状态失效，请登录后继续操作');
			}else{
				return redirect(url('admin'));
			}
		}
    
    }
}
