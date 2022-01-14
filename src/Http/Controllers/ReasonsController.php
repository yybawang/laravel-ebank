<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Models\EbankWalletType;
use yybawang\ebank\Models\EbankReason;

class ReasonsController extends BaseController
{
    public function index(Request $request){
        $Reasons = EbankReason::when($request->input('name'), function($query, $name){
            return $query->where('name', 'like', "%{$name}%");
        })
            ->when($request->input('code'), function($query, $reason){
                return $query->where('code', 'like', "%{$reason}%");
            })
            ->latest()
            ->paginate();
        return $this->success($Reasons);
    }

    public function show(Request $request, int $id){
        $Purses = EbankWalletType::oldest('id')->get(['id', 'name']);
        $Reason = EbankReason::firstOrNew(['id' => $id], [
            'name' => '',
            'identity' => '',
            'wallet_type_id' => 0,
            'code' => '',
            'status' => 1,
            'remarks' => null,
        ]);
        $max = EbankReason::max('id');
        return $this->success([
            'purses' => $Purses,
            'data' => $Reason,
            'max' => $max + 1,
        ]);
    }

    public function store(Request $request){
        $param = $request->validate([
            'id' => '',
            'name' => 'required',
            'identity' => 'required',
            'wallet_type_id' => 'required|integer|min:1',
            'code' => 'required|integer',
            'status' => 'required|integer',
            'remarks' => '',
        ]);
        $model_name = ucfirst(trim(trim($param['identity']), "\\"));
        $model_paths = [
            "App\Models\\{$model_name}",
            "App\\{$model_name}",
            "{$model_name}",
        ];
        $model_class = null;
        foreach ($model_paths as $path){
            if(class_exists($path)){
                $model_class = $path;
                break;
            }
        }
        abort_if(empty($model_class), 422, '未找到模型 '.$model_name.'，请尝试输入全命令空间后重试');
        $param['identity'] = $model_class;
        $Reason = EbankReason::updateOrCreate(['id' => $param['id']], $param);
        return $this->success($Reason);
    }

    public function delete(Request $request, int $id){
        EbankReason::where('id', $id)->delete();
        return $this->success();
    }
}
