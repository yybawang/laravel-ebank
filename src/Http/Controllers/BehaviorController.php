<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\FundBehavior;
use yybawang\ebank\Models\FundFreeze;

class BehaviorController extends BaseController
{
    public function index(Request $request){
        $Behaviors = FundBehavior::when($request->input('funcname'), function($query, $name){
            return $query->where('funcname', $name);
        })
            ->latest()
            ->paginate();
        return $this->success([
            'behaviors' => $Behaviors,
            'funcnames' => FundBehavior::FUNCNAMES,
        ]);
    }

    public function show(Request $request, int $id){
        $Behavior =  FundBehavior::findOrFail($id);
        return $this->success($Behavior);
    }
}
