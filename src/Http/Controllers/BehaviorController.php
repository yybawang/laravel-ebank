<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\EbankBehavior;
use yybawang\ebank\Models\EbankFreeze;

class BehaviorController extends BaseController
{
    public function index(Request $request){
        $Behaviors = EbankBehavior::when($request->input('funcname'), function($query, $name){
            return $query->where('funcname', $name);
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
            'behaviors' => $Behaviors,
            'funcnames' => EbankBehavior::FUNCNAMES,
        ]);
    }

    public function show(Request $request, int $id){
        $Behavior =  EbankBehavior::findOrFail($id);
        return $this->success($Behavior);
    }
}
