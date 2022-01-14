<?php


namespace yybawang\ebank\Console;


use Illuminate\Console\Command;
use yybawang\ebank\Models\EbankReason;
use yybawang\ebank\Models\EbankWalletType;

class CreateReasonCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ebank:reason';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new reason at laravel-ebank';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle() {
        $name = $this->ask('起个名字，输入一个转账业务名');
        $model_name = $this->ask('绑定转账身份，输入进出帐使用的模型名 [User|Admin]');
        $model_name = ucfirst(trim(trim($model_name), "\\"));
        $model_paths = [
            "\App\Models\\{$model_name}",
            "\App\\{$model_name}",
            "\\{$model_name}",
        ];
        $model_class = null;
        foreach ($model_paths as $path){
            if(class_exists($path)){
                $model_class = $path;
                $this->info('使用模型 '.$model_class);
                break;
            }
        }
        if(empty($model_class)){
            exit('未找到模型 '.$model_name.'，请尝试输入全命令空间后重试'."\n");
        }
        $wallet_types = EbankWalletType::select('name', 'alias', 'id')->get();
        $wallet_types = $wallet_types->keyBy('id')->transform(function($v){
            return "{$v->name}({$v->alias})";
        });
        $wallet_type = $this->choice('绑定钱包类型', $wallet_types->values()->toArray());
        $wallet_types_flip = $wallet_types->flip($wallet_types);
        $wallet_type_id = $wallet_types_flip[$wallet_type];
        $max = EbankReason::max('id');
        $code = 200000000 + (100000 + ($max + 1) * 1000) + $wallet_type_id;
        $code = $this->ask('转账 reason 代码', $code);
        if($code < 100000000){
            exit('reason 代码数位太低'."\n");
        }

        EbankReason::create([
            'name' => $name,
            'identity' => $model_class,
            'wallet_type_id' => $wallet_type_id,
            'code' => $code,
            'status' => 1,
        ]);
        $this->info('已成功创建 reason 数据，reason 代码为 '.$code);
        exit(0);
    }
}
