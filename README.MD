# Laravel-EBank

> 电商类站内虚拟积分与聚合支付解决方案

### 运行环境最低要求

- PHP 7.2+
- Mysql 5.7
- Redis (加锁用于配合数据库事务)

### 开始安装

`composer require yybawang/laravel-ebank`

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

### 截图

![](https://raw.githubusercontent.com/yybawang/images/master/picgo/20200312172715.png)
![](https://raw.githubusercontent.com/yybawang/images/master/picgo/20200312172807.png)
![](https://raw.githubusercontent.com/yybawang/images/master/picgo/20200312172848.png)
