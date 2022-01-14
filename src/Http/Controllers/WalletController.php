<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Models\EbankWallet;
use yybawang\ebank\Models\EbankWalletType;

class WalletController extends BaseController
{
    public function index(Request $request){
        $Purses = EbankWallet::when($request->input('identity_id'), function($query, $value){
            return $query->where('identity_id', $value);
        })
            ->when($request->input('id'), function($query, $id){
                return $query->where('id', $id);
            })
            ->when($request->input('identity_type'), function($query, $value){
                return $query->where('identity_type', $value);
            })
            ->when($request->input('wallet_type_id'), function($query, $id){
                return $query->where('wallet_type_id', $id);
            })
            ->latest('id')
            ->paginate();
        return $this->success($Purses);
    }

    public function filters(){
        $Identities = EbankWallet::groupBy('identity_type')->get(['identity_type as name']);
        $Purses = EbankWalletType::all(['id', 'name']);
        return $this->success([
            'identities' => $Identities,
            'purses' => $Purses,
        ]);
    }

    public function enabled(Request $request){
        $id = $request->input('id');
        EbankWallet::where('id', $id)->update(['status' => 1]);
        return $this->success();
    }

    public function disabled(Request $request){
        $id = $request->input('id');
        EbankWallet::where('id', $id)->update(['status' => 0]);
        return $this->success();
    }
}
