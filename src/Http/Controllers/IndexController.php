<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use yybawang\ebank\Models\FundIdentityType;
use yybawang\ebank\Models\FundPurse;
use yybawang\ebank\Models\FundPurseType;
use yybawang\ebank\Models\FundTransfer;

class IndexController extends BaseController
{
    public function index(Request $request){
        return view('ebank::admin');
    }

    public function dashboard(Request $request){
        $today = [Carbon::today(), Carbon::tomorrow()->subSecond()];
        $yesterday = [Carbon::yesterday(), Carbon::today()->subSecond()];

        $UserCount = FundPurse::selectRaw('count(*) count')->where('user_id', '>', 0)->groupBy('user_id');
        $TransferCount = FundTransfer::where(function($query){
            return $query->where('out_identity_type_id', 3)->orWhere('into_identity_type_id', 3);
        });
        $UserOut = FundTransfer::select(DB::raw('out_purse_type_id, sum(amount) as amount'))->where('out_user_id', '>', 0)->where(['out_identity_type_id'=> 3])->groupBy('out_purse_type_id');
        $UserInto = FundTransfer::select(DB::raw('into_purse_type_id, sum(amount) as amount'))->where('into_user_id', '>', 0)->where(['into_identity_type_id'=> 3])->groupBy('into_purse_type_id');

        $data['today_user_count'] = FundPurse::withoutGlobalScope('active')->from((clone $UserCount)->whereBetween('created_at', $today), 't')->count();
        $data['today_transfer_count'] = (clone $TransferCount)->whereBetween('created_at', $today)->count();
        $data['today_user_out'] = (clone $UserOut)->whereBetween('created_at', $today)->get();
        $data['today_user_out_sum'] = collect($data['today_user_out'])->sum('amount');
        $data['today_user_into'] = (clone $UserInto)->whereBetween('created_at', $today)->get();
        $data['today_user_into_sum'] = collect($data['today_user_into'])->sum('amount');

        $data['yesterday_user_count'] = FundPurse::withoutGlobalScope('active')->from((clone $UserCount)->whereBetween('created_at', $yesterday), 't')->count();
        $data['yesterday_transfer_count'] = (clone $TransferCount)->whereBetween('created_at', $yesterday)->count();
        $data['yesterday_user_out'] = (clone $UserOut)->whereBetween('created_at', $yesterday)->get();
        $data['yesterday_user_out_sum'] = collect($data['yesterday_user_out'])->sum('amount');
        $data['yesterday_user_into'] = (clone $UserInto)->whereBetween('created_at', $yesterday)->get();
        $data['yesterday_user_into_sum'] = collect($data['yesterday_user_into'])->sum('amount');

        $data['user_count'] = FundPurse::withoutGlobalScope('active')->from((clone $UserCount), 't')->count();
        $data['transfer_count'] = (clone $TransferCount)->count();
        $data['user_out'] = (clone $UserOut)->get();
        $data['user_out_sum'] = collect($data['user_out'])->sum('amount');
        $data['user_into'] = (clone $UserInto)->get();
        $data['user_into_sum'] = collect($data['user_into'])->sum('amount');

        return $this->success($data);
    }

    /**
     * 余额统计
     * @param Request $request
     * @return
     */
    public function report(Request $request){
        $IdentityTypes = FundIdentityType::all();
        $PurseTypes = FundPurseType::all();
        $List = FundPurse::selectRaw('max(user_id) user_id, identity_type_id, purse_type_id, sum(balance) balance, sum(freeze) freeze')->groupBy('identity_type_id')->groupBy('purse_type_id')->groupByRaw('user_id > 0')->get();
        return $this->success([
            'identities' => $IdentityTypes,
            'purse_types' => $PurseTypes,
            'list' => $List,
        ]);
    }
}
