<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class CommonController extends Controller
{
    
    
    /**
     * 图片上传，可一次多张，数组
     *
     * 如果需要用原始文件名保存
     * store 改为 storeAs，并加入第二个参数 $file->getClientOriginalName()
     *
     * @param Request $request
     * @return array
     */
    public function upload(Request $request){
        $allFile = $request->allFiles();
        $files = [];
        foreach($allFile as $name => $file){
            $path = $file->store('upload/'.date('Y/m/d'));
            $files[$name] = Storage::url($path);
        }
        return json_success('OK', $files);
    }
}
