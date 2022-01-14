<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use yybawang\ebank\Models\EbankTransfer;

class ReportController extends BaseController
{
    public function reason(Request $request){
        $List = EbankTransfer::select(DB::raw('reason_id, sum(abs(amount)) as amount'))
            ->when($request->input('code'), function($query, $code){
                $query->whereHas('reason', function($query) use($code){
                    $query->where('code', $code);
                });
            })
            ->where('status', EbankTransfer::STATUS_SUCCESS)
            ->groupBy('reason_id')
            ->get();
        return $this->success($List);
    }

    public function transfer(Request $request){
        $List = EbankTransfer::with(['walletType'])->select(DB::raw('identity_id, identity_type, (select wallet_type_id from ebank_wallets where id = ebank_transfers.wallet_id) as wallet_type_id, sum(abs(amount)) as amount'))
            ->when($request->input('identity_id'), function($query, $value){
                $query->where('identity_id', $value);
            })
            ->when($request->input('identity_type'), function($query, $value){
                $query->where('identity_type', $value);
            })
            ->groupBy('identity_id')
            ->groupBy('identity_type')
            ->groupBy('wallet_type_id')
            ->get();
        return $this->success($List);
    }
}
