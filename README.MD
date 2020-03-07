# Laravel-EBank

> 电商类站内虚拟积分与聚合支付解决方案

### 运行环境最低要求

- PHP7.2+
- Mysql 5.7

### 开始安装

`composer require yybawang/laravel-ebank:dev-master`

### 发布资源

`php artisan vendor:publish --tag=laravel-ebank`

### 运行数据表迁移

`php artisan migrate`

### 更多配置项

`config/ebank.php`

### 控制面板访问地址

`env('APP_URL')/ebank`

#### 如返回 403 无权限，请配置下方文件的 gate 方法返回权限认证

`app/Providers/EBankServiceProvider.php`


# 门面方法示例

#### 获取用户下所有类型钱包
```
use yybawang\ebank\Facades\EBank;

$wallets = EBank::wallets($user_id);
```

#### 获取用户下某一类型钱包
```
use yybawang\ebank\Facades\EBank;

$wallet = EBank::wallet($user_id, 'cash');
```

#### 开始转账
```
use yybawang\ebank\Facades\EBank;

$transfer_id = EBank::transfer($out_user_id, $into_user_id, $amount, $reason);
```

#### 转账冲正
```
use yybawang\ebank\Facades\EBank;

$wallets = EBank::unTransfer($transfer_id);
```

#### 钱包余额冻结
```
use yybawang\ebank\Facades\EBank;

$wallet = EBank::wallet($user_id, 'cash');
$freeze_id = EBank::freeze($wallet->id, $amount);
// 如果处理坏账，可以使用 freezeForce 方法不验证余额，允许扣为负数
```

#### 钱包余额解冻
```
use yybawang\ebank\Facades\EBank;

$wallets = EBank::unfreeze($freeze_id);
```

#### 下单支付
```
use yybawang\ebank\Facades\EBank;

$response = EBank::order($user_id, $order_no, $product_name, $payments, $extra_param);

// $payments 为数组，允许传入多个做组合支付，三方支付只能一个，内部钱包可以无限个，内部钱包会先冻结余额
// 支付成功处理异步回调时请调用，自动解冻并转账
EBank::orderPaid($order_no);
// 支付失败或取消后，记得调用取消订单方法自动解冻
EBank::orderCancelled($order_no);

// $extra_param 三方支付用到的其它参数
```
