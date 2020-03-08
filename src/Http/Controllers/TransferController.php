<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Http\Request;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\FundIdentityType;
use yybawang\ebank\Models\FundPurseType;
use yybawang\ebank\Models\FundTransfer;

class TransferController extends BaseController
{
    public function index(Request $request){
        $Purses = FundTransfer::when($request->input('user_id'), function($query, $id){
            return $query->where(function($query) use ($id){
                return $query->where('out_user_id', $id)->orWhere('into_user_id', $id);
            });
        })
            ->when($request->input('out_identity_type_id'), function($query, $id){
                return $query->where('out_identity_type_id', $id);
            })
            ->when($request->input('out_purse_type_id'), function($query, $id){
                return $query->where('out_identity_type_id', $id);
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
        $Identities = FundIdentityType::all(['id', 'name']);
        $Purses = FundPurseType::all(['id', 'name']);
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
        EBank::unTransfer($id, '后台操作冲正');
        return $this->success();
    }

    public function delete(Request $request, int $id){
        FundTransfer::withoutGlobalScope('success')->where('id', $id)->delete();
        return $this->success();
    }
}
