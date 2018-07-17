![laravel-ebank](https://raw.githubusercontent.com/yybawang/images/master/ebank/laravel-ebank_code.png)



[![](https://travis-ci.org/yybawang/laravel_ebank.svg?branch=master)](https://travis-ci.org/yybawang/laravel_ebank)
[![GitHub license](https://img.shields.io/github/license/yybawang/laravel_ebank.svg)](https://github.com/yybawang/laravel_ebank/blob/master/LICENSE)
[![PHP from Travis config](https://img.shields.io/travis/php-v/symfony/symfony.svg)](https://github.com/yybawang/laravel_ebank)
[![npm (tag)](https://img.shields.io/npm/v/npm/next.svg)](https://github.com/yybawang/laravel_ebank)



# laravel-ebank

> 电商类虚拟积分与聚合支付通用解决方案

> 项目功能基本满足使用，并流畅运行，持续更新中，如有使用方式问题可在QQ群里@群主

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

### 此电子银行系统集成两大功能
#### 1. 聚合支付


聚合支付已对接laravel-pay

- 支付宝PC
- 支付宝wap
- 支付宝APP
- 支付宝反扫
- 支付宝刷卡(反扫)
- 支付宝扫码(正扫)
- 微信公众号
- 微信H5
- 微信APP
- 微信刷卡(反扫)
- 微信扫码(正扫)
- 小程序支付

所有支付方式调用后返回值的使用方式可在 【[统一下单](https://doc.thinkms.com/project/1?p=5 "查看聚合支付返回参数")】 中查看即可，无需看 [laravel-pay 的文档](https://yansongda.gitbooks.io/pay/ "laravel-pay") 了<br />支持同时选择积分一起组合支付(三方支付只能一个，内部钱包可无限个)，实现积分抵扣等需求，其他三方支付需查阅源码自行封装开发

#### 2. 站内积分


　　站内积分为核心开发点，详细的API设计，积分的每次经历都会记录在表，方便审核和对账，详情介绍可查阅下方文档的白皮书介绍部分。
> 1. 项目支持多种积分实现项目不同的业务逻辑，每种积分初始会有个系统总控盘，用于充值或赠送给用户<br />
> 2. 多种积分可相互实现转化，积分的操作我们统称为《转账》，积分的加减都必须有一个出账人和一个进账人，所以项目初始的时候都会有个控盘金额在系统余额中用来扣除<br />
> 3. 积分每一笔的加减记录都必须有一个转账行为(reason参数)，每个业务对应一个reason，如提现成功为300001，发送红包为300002，用于开发者对此业务的中文释义以及对账的核实，保证用户积分余额经过每一笔转账之后是正确的<br />
> 4. 每种积分互相转账都是无限制的，只需对接好你的业务需求即可，需求需要怎么转就怎么转
> 5. more...中央银行是什么、系统银行是什么、reason意义、多项目对接 [请参阅项目介绍白皮书]('https://doc.thinkms.com/project/1?p=22' "项目说明")


## 文档
[阅读在线文档](http://doc.thinkms.com/project/1 "Doc")


**github**

[github](https://github.com/yybawang/laravel-ebank "github")

**码云**

[码云](https://gitee.com/yybawang/ebank "码云")





## 安装

> 因项目中涉及大金额运算(万亿以上)，需使用 php >= 7.1.12，推荐学习并使用 docker + laradock 搭建开发环境(系统带有laravel/horizon，不支持windows下运行)

[laradock 搭建开发、测试、生产环境](https://github.com/laradock/laradock "laradock")



**Linux 下使用 Makefile 自动安装**

```
// 项目目录下运行以下命令，如遇错误，可按照windows安装方式按步骤执行
1、cp .env.example .env
// 连接数据库执行语句建立数据库
CREATE SCHEMA `ebank` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
2、 编辑 .env 文件配置数据库、redis、SMTP 等，然后再继续执行以下命令
3、make && make install
```


**Windows 下手动步骤安装**

```
// 项目目录下运行以下命令
1、copy .env.example .env
// 连接数据库执行语句建立数据库
2、CREATE SCHEMA `ebank` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

// 编辑 .env 文件配置数据库、redis、SMTP 等，然后再继续执行以下命令
3、composer install
4、php artisan app:install
5、php artisan clear-compiled
```


## 最后一步

**配置nginx访问以及队列监听：**

> 项目目录下带有 ebank_nginx.conf 和 ebank_supervisor.ini 示例文件，自行配置即可

## 未来开发计划

- [x] SDK 封装，给API对接商户下发使用的请求接口请求类，位于 [app/Libraries/EBankSdk.php](https://github.com/yybawang/laravel-ebank/blob/master/app/Libraries/EBankSdk.php "查看代码") 复制任意其他php框架中都可使用，同样要求 php >= 7.1
- [ ] 中央系统式，多项目对应多商户，积分互不干预，实现搭建一套，多项目可用
- [ ] 多语言
- [ ] 国外支付接口
- [ ] 后台功能点说明文案
- [ ] 对接 hhxsv5/laravel-s 可选常驻内存式部署

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
