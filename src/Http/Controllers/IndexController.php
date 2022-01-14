<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use yybawang\ebank\Models\EbankWallet;
use yybawang\ebank\Models\EbankWalletType;
use yybawang\ebank\Models\EbankTransfer;

class IndexController extends BaseController
{
    public function index(Request $request){
        return view('ebank::admin');
    }

    public function dashboard(Request $request){
        $today = [Carbon::today(), Carbon::tomorrow()->subSecond()];
        $yesterday = [Carbon::yesterday(), Carbon::today()->subSecond()];

        $data['today_transfer_count'] = EbankTransfer::whereBetween('created_at', $today)->count();
        $data['today_user_out_sum'] = EbankTransfer::whereBetween('created_at', $today)->where('amount', '<', 0)->sum('amount');
        $data['today_user_into_sum'] = EbankTransfer::whereBetween('created_at', $today)->where('amount', '>', 0)->sum('amount');

        $data['yesterday_transfer_count'] = EbankTransfer::whereBetween('created_at', $yesterday)->count();
        $data['yesterday_user_out_sum'] = EbankTransfer::whereBetween('created_at', $yesterday)->where('amount', '<', 0)->sum('amount');
        $data['yesterday_user_into_sum'] = EbankTransfer::whereBetween('created_at', $yesterday)->where('amount', '>', 0)->sum('amount');

        $data['transfer_count'] = EbankTransfer::count();
        $data['user_out_sum'] = EbankTransfer::where('amount', '<', 0)->sum('amount');
        $data['user_into_sum'] = EbankTransfer::where('amount', '>', 0)->sum('amount');

        return $this->success($data);
    }

    /**
     * 余额统计
     * @param Request $request
     * @return
     */
    public function report(Request $request){
        $IdentityTypes = EbankWallet::select('identity_type')->groupBy('identity_type')->get();
        $WalletTypes = EbankWalletType::oldest('id')->get(['id', 'name']);
        $List = EbankWallet::selectRaw('identity_type, wallet_type_id, sum(balance) balance, sum(freeze) freeze')->groupBy('identity_type')->groupBy('wallet_type_id')->get()->groupBy('identity_type');
        return $this->success([
            'identities' => $IdentityTypes,
            'wallet_types' => $WalletTypes,
            'list' => $List,
        ]);
    }
}
