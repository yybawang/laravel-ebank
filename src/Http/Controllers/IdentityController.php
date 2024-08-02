<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use yybawang\ebank\Illuminate\FundService;
use yybawang\ebank\Models\FundIdentityType;

class IdentityController extends BaseController
{
    public function index(Request $request){
        $Identities = FundIdentityType::when($request->input('name'), function($query, $name){
            return $query->where('name', 'like', "%{$name}%");
        })
            ->withoutGlobalScope('active')
            ->latest()
            ->paginate();
        return $this->success($Identities);
    }

    public function show(Request $request, int $id){
        $Identity = FundIdentityType::withoutGlobalScope('active')->firstOrNew(['id' => $id], [
            'name' => '',
            'alias' => '',
            'status' => 1,
        ]);
        return $this->success($Identity);
    }

    public function store(Request $request){
        $param = $request->validate([
            'id' => '',
            'name' => 'required',
            'alias' => 'required|alpha',
            'status' => 'required|integer',
        ]);
        $param['alias'] = strtolower($param['alias']);
        $Identity = FundIdentityType::withoutGlobalScope('active')->updateOrCreate(['id' => $param['id']], $param);
        $FundService = new FundService();
        $FundService->initPurse();
        return $this->success($Identity);
    }

    public function delete(Request $request, int $id){
        FundIdentityType::withoutGlobalScope('active')->where('id', $id)->delete();
        return $this->success();
    }
}
