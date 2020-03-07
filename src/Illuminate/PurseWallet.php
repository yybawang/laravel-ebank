<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;
use yybawang\ebank\Models\FundIdentityType;
use yybawang\ebank\Models\FundPurse;
use yybawang\ebank\Models\FundPurseType;

class PurseWallet
{
    use BehaviorMiddleware;

    // 用户ID，非用户传0
    private $user_id;
    // 身份类型ID
    private $identity_type_id;
    // 钱包类型ID
    private $purse_type_id;

    /**
     * @param int $user_id
     * @return $this
     */
    public function user(int $user_id){
        $this->user_id = $user_id;
        return $this;
    }

    /**
     * 指定身份类型
     * @param null|string $identityName
     * @return $this
     */
    public function identity(?string $identityName)
    {
        $identityName || $identityName = 'user';
        $Identity = FundIdentityType::where('alias', $identityName)->first();
        if(empty($Identity)){
            abort(422, trans('ebank::messages.身份名称不存在'));
        }
        $this->identity_type_id = $Identity->id;
        return $this;
    }

    /**
     * 指定钱包类型
     * @param string $purseName
     * @return $this
     */
    public function purse(string $purseName)
    {
        $PurseType = FundPurseType::where('alias', $purseName)->first();
        if(empty($PurseType)){
            abort(422, trans('ebank::messages.钱包名称不存在'));
        }
        $this->purse_type_id = $PurseType->id;
        return $this;
    }

    /**
     * 用户钱包数据
     * @return FundPurse
     */
    public function execute()
    {
        $params = [
            'user_id'=> $this->user_id,
            'purse_type_id'=> $this->purse_type_id,
            'identity_type_id'=> $this->identity_type_id,
        ];
        $Validator = Validator::make($params, [
            'user_id'=> 'required|integer|min:0',
            'purse_type_id'=> 'required|integer|min:1',
            'identity_type_id'=> 'required|integer|min:1',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->handle('wallet', $params);
        $EBankService = new FundService();
        $wallet = $EBankService->userWalletDetail($this->user_id, $this->purse_type_id, $this->identity_type_id);
//        $wallet = [
//            'id'=> $wallet->id,
//            'user_id'=> $wallet->user_id,
//            'identity_type_id'=> $wallet->identity_type_id,
//            'identity_type'=> $wallet->identityType->name,
//            'purse_type_id'=> $wallet->purse_type_id,
//            'purse_type'=> $wallet->purseType->name,
//            'balance'=> $wallet->balance,
//            'freeze'=> $wallet->freeze,
//        ];
        $this->terminate($wallet);
        return $wallet;
    }
}
