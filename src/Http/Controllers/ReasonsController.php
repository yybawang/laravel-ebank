<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Models\FundIdentityType;
use yybawang\ebank\Models\FundPurseType;
use yybawang\ebank\Models\FundTransferReason;

class ReasonsController extends BaseController
{
    public function index(Request $request){
        $Reasons = FundTransferReason::when($request->input('name'), function($query, $name){
            return $query->where('name', 'like', "%{$name}%");
        })
            ->when($request->input('reason'), function($query, $reason){
                return $query->where('reason', 'like', "%{$reason}%");
            })
            ->withoutGlobalScope('active')
            ->latest()
            ->paginate();
        return $this->success($Reasons);
    }

    public function show(Request $request, int $id){
        $Identities = FundIdentityType::all(['id', 'name']);
        $Purses = FundPurseType::all(['id', 'name']);
        $Reason = FundTransferReason::withoutGlobalScope('active')->firstOrNew(['id' => $id], [
            'name' => '',
            'out_identity_type_id' => 0,
            'out_purse_type_id' => 0,
            'into_identity_type_id' => 0,
            'into_purse_type_id' => 0,
            'reason' => '',
            'status' => 1,
            'remarks' => null,
        ]);
        $max = FundTransferReason::withoutGlobalScope('active')->max('id');
        return $this->success([
            'identities' => $Identities,
            'purses' => $Purses,
            'reason' => $Reason,
            'max' => $max + 1,
        ]);
    }

    public function store(Request $request){
        $param = $request->validate([
            'id' => '',
            'name' => 'required',
            'out_identity_type_id' => 'required|integer|min:1',
            'out_purse_type_id' => 'required|integer|min:1',
            'into_identity_type_id' => 'required|integer|min:1',
            'into_purse_type_id' => 'required|integer|min:1',
            'reason' => 'required|integer',
            'status' => 'required|integer',
            'remarks' => '',
        ]);
        // 出入相同不能保存
        if($param['out_identity_type_id'] == $param['into_identity_type_id'] && $param['out_purse_type_id'] == $param['into_purse_type_id']){
            abort(422, '检测出入帐配置相同，请正确选择');
        }

        $Reason = FundTransferReason::withoutGlobalScope('active')->updateOrCreate(['id' => $param['id']], $param);
        return $this->success($Reason);
    }

    public function delete(Request $request, int $id){
        FundTransferReason::withoutGlobalScope('active')->where('id', $id)->delete();
        return $this->success();
    }
}
