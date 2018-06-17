![laravel-ebank](https://raw.githubusercontent.com/yybawang/images/master/ebank/laravel-ebank_code.png)



[![](https://travis-ci.org/yybawang/laravel_ebank.svg?branch=master)](https://travis-ci.org/yybawang/laravel_ebank)

# laravel_ebank

> 项目功能基本满足使用，并流畅运行，持续更新中(编辑于 2018-06-09日)

- **现已加入豪华午餐**
- **推荐中小型项目使用**


> 此项目功能已完成全部代码并满足基本需求（已服务三家电商公司），会一直吸取上线项目遇到的问题来优化项目，dev 分支会更新公测代码，master 分支为稳定版本，功能还在调整与完善中，但已满足中小型电商项目使用，欢迎阅读文档学习并使用。！

> 项目使用 PHP7.1+ & Laravel5.5 & Mysql5.7+ & npm & vue2 & mdui4 搭建

> 项目后台使用 vue 搭建，此项目中已自带编译后前端文件

## DEMO 演示

> **docker沙箱演示地址，每周清理数据库**

> [https://ebank-demo.thinkms.com](https://ebank-demo.thinkms.com "ebank演示沙箱站")

**后台账号密码**
- admin
- 123456

## 简介

**此电子银行系统集成两大功能**
1. 聚合支付
2. 站内积分

> 聚合支付已对接laravel-pay，支持支付宝PC，支付宝wap，支付宝APP，支付宝反扫，支付宝刷卡(反扫)，支付宝扫码(正扫)，微信公众号，微信H5，微信APP，微信刷卡(反扫)，微信扫码(正扫)，小程序支付，具体文档请查阅 [laravel-pay](https://yansongda.gitbooks.io/pay/ "laravel-pay")，支持同时选择积分一起组合支付(三方支付只能一个，内部钱包可无限个)，实现积分抵扣等需求，其他三方支付需查阅源码自行封装开发

> 站内积分为核心开发点，详细的API设计，积分的每次经历都会记录在表，方便审核和对账，详情介绍可查阅下方文档的白皮书介绍部分。
>> 1. 项目支持多种积分实现项目不同的业务逻辑，每种积分初始会有个系统总控盘，用于充值或赠送给用户<br />
>> 2. 多种积分可相互实现转化，积分的操作我们统称为《转账》，积分的加减都必须有一个出账人和一个进账人，所以项目初始的时候都会有个控盘金额在系统余额中<br />
>> 3. 积分每一笔的加减记录都必须有一个转账行为(reason参数)，用于开发者对此业务的中文释义以及对账的核实，保证用户积分余额经过每一笔转账之后是正确的<br />
>> 3. more...


## 文档（完善中）
[阅读在线文档](http://doc.thinkms.com/project/1 "Doc")

## 联系
**交流QQ群**

_EBank项目开发者交流群(新群，欢迎@提出不足或思路)_

454247844

![群二维码](https://raw.githubusercontent.com/yybawang/images/master/ebank/454247844.png)

**github**

[github](https://github.com/yybawang/ebank "github")

**码云**

[码云](https://gitee.com/qxr/ebank "码云")





## 安装

> 因项目中涉及大金额运算(万亿以上)以及php的linux特性语法，推荐学习并使用 laradock 搭建开发环境

[laradock](https://github.com/laradock/laradock "laradock")

> 可使用我修改过的版本(php7.2)，加快了下载速度，增加 gogs、drone、sentry、firebird 服务 (前提会配置laradock)

[yanyong/laradock-yy](http://gogs.thinkms.com/yanyong/laradock-yy.git "yanyong/laradock-yy")


**Linux 下使用 Makefile 自动安装**

```
// 项目目录下运行以下命令，如遇错误，可按照windows安装方式按步骤执行
1、cp .env.example .env
2、 编辑 .env 文件配置数据库、redis、email 等，需提前建立好数据库(字符集：utf8mb4 排序规则：utf8mb4_unicode_ci)，然后再继续执行以下命令
3、make && make install
```

**Windows 下手动步骤安装**

```
// 项目目录下运行以下命令
cp .env.example .env
// 编辑 .env 文件配置数据库、redis、email 等，需提前建立好数据库(字符集：utf8mb4 排序规则：utf8mb4_unicode_ci)，然后再继续执行以下命令
composer install
php artisan app:install
php artisan clear-compiled
```

## 最后一步

**配置nginx访问以及队列监听：**

> 项目目录下带有 ebank_nginx.conf 和 ebank_supervisor.ini 示例文件，自行配置即可


## Example

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154147.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154209.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154218.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154233.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154248.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154300.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154319.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154333.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154354.png)
