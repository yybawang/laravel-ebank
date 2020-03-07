<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Models\FundIdentityType;
use yybawang\ebank\Models\FundPurse;
use yybawang\ebank\Models\FundPurseType;

class PurseController extends BaseController
{
    public function index(Request $request){
        $Purses = FundPurse::when($request->input('user_id'), function($query, $user_id){
            return $query->where('user_id', 'like', "%{$user_id}%");
        })
            ->when($request->input('identity_type_id'), function($query, $id){
                return $query->where('identity_type_id', $id);
            })
            ->when($request->input('purse_type_id'), function($query, $id){
                return $query->where('purse_type_id', $id);
            })
            ->withoutGlobalScope('active')
            ->latest('id')
            ->paginate();
        return $this->success($Purses);
    }

    public function filters(){
        $Identities = FundIdentityType::all(['id', 'name']);
        $Purses = FundPurseType::all(['id', 'name']);
        return $this->success([
            'identities' => $Identities,
            'purses' => $Purses,
        ]);
    }
}
