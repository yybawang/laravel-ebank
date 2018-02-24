<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Http\Controllers\Controller;

class CommonController extends Controller
{
	
	
	/**
	 * 图片上传，可一次多张，数组
	 * @param BasicRequest $request
	 * @return array
	 */
	public function upload(BasicRequest $request){
		$allFile = $request->allFiles();
		$images = [];
		collect($allFile)->each(function($v,$k) use ($request,&$images){
			$path = $v->store('images');
			$images[$k] = \Illuminate\Support\Facades\Storage::url($path);
		});
		return json_success('OK',$images);
	}
}
