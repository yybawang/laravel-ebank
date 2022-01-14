<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use yybawang\ebank\Models\EbankWalletType;

class WalletTypeController extends BaseController
{
    public function index(Request $request){
        $Purses = EbankWalletType::when($request->input('name'), function($query, $name){
            return $query->where('name', 'like', "%{$name}%");
        })
            ->latest()
            ->paginate();
        return $this->success($Purses);
    }

    public function show(Request $request, int $id){
        $Purse = EbankWalletType::firstOrNew(['id' => $id], [
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
        $Purse = EbankWalletType::updateOrCreate(['id' => $param['id']], $param);
        Artisan::call('ebank:purse-init');
        return $this->success($Purse);
    }

    public function delete(Request $request, int $id){
        EbankWalletType::where('id', $id)->delete();
        return $this->success();
    }
}
