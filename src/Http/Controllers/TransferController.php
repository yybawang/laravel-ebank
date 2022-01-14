<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\EbankWallet;
use yybawang\ebank\Models\EbankWalletType;
use yybawang\ebank\Models\EbankTransfer;

class TransferController extends BaseController
{
    public function index(Request $request){
        $Purses = EbankTransfer::when($request->input('id'), function($query, $id){
                return $query->where('id', $id);
            })
            ->when($request->input('identity_id'), function($query, $id){
                return $query->where('identity_id', $id);
            })
            ->when($request->input('identity_type'), function($query, $id){
                return $query->where('identity_type', $id);
            })
            ->when($request->input('wallet_type_id'), function($query, $id){
                $query->whereHas('wallet', function($query) use ($id){
                    $query->where('wallet_type_id', $id);
                });
            })
            ->when($request->input('into_identity_type_id'), function($query, $id){
                return $query->where('into_identity_type_id', $id);
            })
            ->when($request->input('into_purse_type_id'), function($query, $id){
                return $query->where('into_purse_type_id', $id);
            })
            ->when($request->input('date.0'), function($query, $date){
                return $query->where('created_at', '>=', $date);
            })
            ->when($request->input('date.1'), function($query, $date){
                return $query->where('created_at', '<=', $date);
            })
            ->withoutGlobalScope('success')
            ->latest('id')
            ->paginate();
        return $this->success($Purses);
    }

    public function filters(){
        $Identities = EbankWallet::groupBy('identity_type')->get(['identity_type as name']);
        $Purses = EbankWalletType::oldest('id')->get(['id', 'name']);
        return $this->success([
            'identities' => $Identities,
            'purses' => $Purses,
        ]);
    }

    /**
     * 冲正
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function un_transfer(Request $request, int $id){
        EBank::unTransfer($id);
        return $this->success();
    }

    public function delete(Request $request, int $id){
        EbankTransfer::where('id', $id)->delete();
        return $this->success();
    }
}
