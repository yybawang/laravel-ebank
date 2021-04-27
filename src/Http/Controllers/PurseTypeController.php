<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use yybawang\ebank\Models\FundPurseType;

class PurseTypeController extends BaseController
{
    public function index(Request $request){
        $Purses = FundPurseType::when($request->input('name'), function($query, $name){
            return $query->where('name', 'like', "%{$name}%");
        })
            ->withoutGlobalScope('active')
            ->latest()
            ->paginate();
        return $this->success($Purses);
    }

    public function show(Request $request, int $id){
        $Purse = FundPurseType::withoutGlobalScope('active')->firstOrNew(['id' => $id], [
            'name' => '',
            'alias' => '',
            'status' => 1,
        ]);
        return $this->success($Purse);
    }

    public function store(Request $request){
        $param = $request->validate([
            'id' => '',
            'name' => 'required',
            'alias' => 'required|alpha',
            'status' => 'required|integer',
        ]);
        $param['alias'] = strtolower($param['alias']);
        $Purse = FundPurseType::withoutGlobalScope('active')->updateOrCreate(['id' => $param['id']], $param);
        Artisan::call('ebank:purse-init');
        return $this->success($Purse);
    }

    public function delete(Request $request, int $id){
        FundPurseType::withoutGlobalScope('active')->where('id', $id)->delete();
        return $this->success();
    }
}
