<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use yybawang\ebank\Models\FundTransfer;

class ReportController extends BaseController
{
    public function reason(Request $request){
        $List = FundTransfer::select(DB::raw('reasons.*, sum(amount) as amount'))
            ->leftJoin('fund_transfer_reasons as reasons', 'reasons.reason', '=', 'fund_transfers.reason')
            ->when($request->input('reason'), function($query, $reason){
                return $query->where('fund_transfers.reason', $reason);
            })
            ->when($request->input('user_id'), function($query, $id){
                return $query->where(function($query) use ($id){
                    return $query->where('out_user_id', $id)->orWhere('into_user_id', $id);
                });
            })
            ->withoutGlobalScope('success')
            ->where('fund_transfers.status', FundTransfer::STATUS_SUCCESS)
            ->groupBy('reasons.reason')
            ->get();
        return $this->success($List);
    }

    public function transfer(Request $request){
        $List = FundTransfer::select(DB::raw('max(id) as id, out_user_id, out_identity_type_id, out_purse_type_id, into_user_id, into_identity_type_id, into_purse_type_id, sum(amount) as amount'))
            ->when($request->input('user_id'), function($query, $id){
                return $query->where(function($query) use ($id){
                    return $query->where('out_user_id', $id)->orWhere('into_user_id', $id);
                });
            })
            ->when($request->input('out_identity_type_id'), function($query, $id){
                return $query->where('out_identity_type_id', $id);
            })
            ->when($request->input('out_purse_type_id'), function($query, $id){
                return $query->where('out_identity_type_id', $id);
            })
            ->when($request->input('into_identity_type_id'), function($query, $id){
                return $query->where('into_identity_type_id', $id);
            })
            ->when($request->input('into_purse_type_id'), function($query, $id){
                return $query->where('into_purse_type_id', $id);
            })
            ->groupBy('out_user_id')
            ->groupBy('out_identity_type_id')
            ->groupBy('out_purse_type_id')
            ->groupBy('into_user_id')
            ->groupBy('into_identity_type_id')
            ->groupBy('into_purse_type_id')
            ->get();
        return $this->success($List);
    }
}
