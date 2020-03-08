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
            ->when($request->input('date.0'), function($query, $date){
                return $query->where('created_at', '>=', $date);
            })
            ->when($request->input('date.1'), function($query, $date){
                return $query->where('created_at', '<=', $date);
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
