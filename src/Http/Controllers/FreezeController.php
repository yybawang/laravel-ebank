<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\EbankFreeze;
use yybawang\ebank\Models\EbankWallet;

class FreezeController extends BaseController
{
    public function index(Request $request){
        $Identities = EbankWallet::groupBy('identity_type')->get(['identity_type as name']);
        $List = EbankFreeze::when($request->input('identity_id'), function($query, $value){
            return $query->where('identity_id', 'like', "%{$value}%");
        })
            ->when($request->input('identity_type'), function($query, $value){
                return $query->where('identity_type', $value);
            })
            ->when($request->input('id'), function($query, $id){
                return $query->where('id', $id);
            })
            ->when($request->input('date.0'), function($query, $date){
                return $query->where('created_at', '>=', $date);
            })
            ->when($request->input('date.1'), function($query, $date){
                return $query->where('created_at', '<=', $date);
            })
            ->latest()
            ->paginate();
        return $this->success([
            'list' => $List,
            'identities' => $Identities,
        ]);
    }

    public function unfreeze(Request $request, int $id){
        $Freeze =  EbankFreeze::findOrFail($id);
        EBank::unfreeze($Freeze->id);
        return $this->success();
    }
}
