<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\FundFreeze;

class FreezeController extends BaseController
{
    public function index(Request $request){
        $Purses = FundFreeze::when($request->input('user_id'), function($query, $user_id){
            return $query->where('user_id', 'like', "%{$user_id}%");
        })
            ->when($request->input('id'), function($query, $id){
                return $query->where('id', $id);
            })
            ->latest()
            ->paginate();
        return $this->success($Purses);
    }

    public function unfreeze(Request $request, int $id){
        $Freeze =  FundFreeze::findOrFail($id);
        EBank::unfreeze($Freeze->id);
        return $this->success();
    }
}
