<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class ExportCsv {

    public function transfer(Builder $builder){
        $fields = [
            'id' => 'ID',
            'reason' => 'Reason',
            'out_user_id' => '出帐用户ID',
            'outIdentityType.name' => '出帐身份类型',
            'outPurseType.name' => '出帐钱包类型',
            'out_purse_id' => '出帐钱包ID',
            'out_balance' => '出帐后余额',
            'into_user_id' => '入帐用户ID',
            'intoIdentityType.name' => '入帐身份类型',
            'intoPurseType.name' => '入帐钱包类型',
            'into_purse_id' => '入帐钱包ID',
            'into_balance' => '入帐后余额',
            'amount' => '交易金额',
            'status' => '状态',
        ];
        $collections = $builder->get();
        $collections->each(function($v){
            $v->status = $v->status ? '有效' : '无效';
            $v->reason = "\t".$v->reason;
            $v->out_balance = "\t".$v->out_balance;
            $v->into_balance = "\t".$v->into_balance;
            $v->amount = "\t".$v->amount;
        });
        return $this->download($collections, $fields);
    }

    public function freeze(Builder $builder){
        $fields = [
            'id' => 'ID',
            'purse.user_id' => '用户ID',
            'purse.identityType.name' => '身份类型',
            'purse.purseType.name' => '钱包类型',
            'purse_id' => '钱包ID',
            'amount' => '冻结金额',
            'status' => '状态',
        ];
        $collections = $builder->get();
        $collections->each(function($v){
            $v->status = $v->status == 2 ? '已解冻' : ($v->status == 1 ? '冻结中' : '无效');
            $v->amount = "\t".$v->amount;
        });
        return $this->download($collections, $fields);
    }

    public function purse(Builder $builder){
        $fields = [
            'id' => 'ID',
            'purse.user_id' => '用户ID',
            'identityType.name' => '身份类型',
            'purseType.name' => '钱包类型',
            'total' => '总金额',
            'freeze' => '冻结金额',
            'balance' => '可用金额',
            'status' => '状态',
        ];
        $collections = $builder->get();
        $collections->each(function($v){
            $v->total = "\t".number_format($v->balance + $v->freeze, 0, '.', '');
            $v->balance = "\t".$v->balance;
            $v->freeze = "\t".$v->freeze;
            $v->status = $v->status ? '启用' : '禁用';
        });
        return $this->download($collections, $fields);
    }


    /**
     * 输出文件下载头
     * @param Collection $collections
     * @param array $fields
     * @return string
     */
    private function download(Collection $collections, array $fields){
        $filename = date('Y-m-d_His').'.csv';
        $file = new \SplTempFileObject(1024 * 1024 * 20);
        $titles = collect($fields)->transform(function($v){
            return iconv('UTF-8', 'GB2312', $v);
        })->values()->toArray();
        $file->fputcsv($titles);

        $collections->chunk(1000)->each(function($collections) use ($file, $fields){
            foreach ($collections as $collection){
                $csv_fields = [];
                foreach ($fields as $field => $title){
                    $title = iconv('UTF-8', 'GB2312', data_get($collection, $field));
                    $csv_fields[] = $title;
                }
                $file->fputcsv($csv_fields);
            }
        });

        header('Content-Type:text/csv');
        header('Content-Transfer-Encoding: binary');
        header('Content-Description: File Transfer');
        header('Content-Disposition: attachment; filename="'.$filename.'"');
//        header('Content-Length:'.filesize($filename));
        $file->rewind();
        $file->fpassthru();
        return '';
    }
}
