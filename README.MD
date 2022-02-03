# Laravel-EBank

> 电商类站内虚拟积分与聚合支付解决方案

### 运行环境最低要求

- PHP 7.2+
- Mysql 5.7
- Redis (加锁用于配合数据库事务)

### 开始安装

`composer require yybawang/laravel-ebank:1.0.0`

### 1. 发布资源

`php artisan ebank:install`

### 2. 运行数据表迁移

`php artisan migrate`

### 3. 初始化钱包余额

`php artisan ebank:purse-init`

### 更多配置项

`config/ebank.php`

### 添加支付方式

`php artisan make:payment CLASS_NAME`

### 控制面板访问地址

`env('APP_URL')/ebank`

#### 如返回 403 无权限，请配置下方文件的 gate 方法返回true则表示权限通过

`app/Providers/EBankServiceProvider.php`

### 查看文档

[Gitbook Document](https://yybawang.gitbook.io/laravel-ebank/)

### 一些场景和一些示例代码

- 上面的步骤安装好之后，就可以访问 APP_URL/ebank 看到Dashboard，然后进行reason添加了
```php

// 添加 reason 时如果选的身份是系统/中央，则 user_id 会强制设置为0，如果是用户身份则必 > 0
$reason = '去访问Ebank控制面板添加，一个业务行为对应一个reason';
$user_id = 1;

// 用户充值，给用户ID为1的加 100.63 的余额
\yybawang\ebank\Facades\EBank::transfer(0, $user_id, 100.63, $reason);

// 用户下单，扣用户ID为1的余额 99.43
\yybawang\ebank\Facades\EBank::transfer($user_id, 0, 99.43, $reason);

// 用户抢单，提现冻结余额100，抢到则解冻并扣除，没抢到则解冻还原余额（这里已经做了redis lock，无需再处理事务和并发，包括其它所有行为都做了 lock）
$purse = \yybawang\ebank\Facades\EBank::wallet($user_id, 'cash');  // 获取cash钱包Model对象
$freeze_id = \yybawang\ebank\Facades\EBank::freeze($purse->id, 100);   // 会翻一个int id，这个需要保存起来在你的业务表，作为后续解冻操作，不保存很难追溯哦
// 某一用户抢到单了，则给这个用户解冻并扣除余额
\yybawang\ebank\Facades\EBank::unfreeze($freeze_id);    // 其它用户没抢到单，则只需要做这一个解冻操作就可以了，会自动还原余额
\yybawang\ebank\Facades\EBank::transfer($user_id, 0, 100, $reason);

```

### 截图

![](https://raw.githubusercontent.com/yybawang/images/master/picgo/20200312172715.png)
![](https://raw.githubusercontent.com/yybawang/images/master/picgo/20200312172807.png)
![](https://raw.githubusercontent.com/yybawang/images/master/picgo/20200312172848.png)
