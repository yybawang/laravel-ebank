![ebank](https://raw.githubusercontent.com/yybawang/images/master/ebank/laravel-ebank_code.png)



[![](https://travis-ci.org/yybawang/laravel_ebank.svg?branch=master)](https://travis-ci.org/yybawang/laravel_ebank)
[![GitHub license](https://img.shields.io/github/license/yybawang/laravel_ebank.svg)](https://github.com/yybawang/laravel_ebank/blob/master/LICENSE)
[![PHP from Travis config](https://img.shields.io/travis/php-v/symfony/symfony.svg)](https://github.com/yybawang/laravel_ebank)
[![npm (tag)](https://img.shields.io/npm/v/npm/next.svg)](https://github.com/yybawang/laravel_ebank)



# ebank

> 电商类站内虚拟积分与聚合支付通用解决方案

> 项目功能基本满足使用，并流畅运行，持续维护中，如有使用问题可提交 issue


- **已进入平滑维护期**
- **推荐中小型项目使用**


> 此项目完全开源且功能已完成全部代码并满足基本需求（已服务多家电商公司），会一直汲取上线项目遇到的业务等问题来优化项目，dev 分支会更新公测代码，master 分支为稳定版本，功能还在调整与完善中，但已满足中小型电商项目使用，欢迎阅读文档学习并使用

## 项目技术选型
 
[PHP7.1+](http://www.laruence.com/)
 
[Laravel5.5](https://github.com/laravel/laravel)

Mysql5.7+ / MariaDB

[Vue2](https://github.com/vuejs/vue)

[MDUI](https://github.com/zdhxiong/mdui)



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
- 微信小程序支付

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

> 因项目中涉及大金额运算(万亿以上，未使用 bcmath)，需使用 php >= 7.1.12，推荐学习并使用 docker + laradock 搭建开发环境，避免 php 计算整数长度变为 2147483647 问题

[laradock 搭建开发、测试、生产环境](https://github.com/laradock/laradock "laradock")



**Linux 下使用 Makefile 自动安装**

```
1. cd [项目目录]
2. cp .env.example .env
// 连接数据库执行语句建立数据库
CREATE SCHEMA `ebank` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
3.  编辑 .env 文件配置数据库、redis、SMTP 等，然后再继续执行以下命令
4. make && make install
```


**Windows 下手动步骤安装**

```
1. cd [项目目录]
2. copy .env.example .env
// 连接数据库执行语句建立数据库
3. CREATE SCHEMA `ebank` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

// 编辑 .env 文件配置数据库、redis、SMTP 等，然后再继续执行以下命令
4. composer install
5. php artisan app:install
```


## 最后一步

**配置nginx访问以及队列监听：**

> 项目目录下带有 ebank_nginx.conf 和 ebank_supervisor.ini 示例文件，自行配置即可

## 开发计划

- [x] SDK 封装，给API对接商户下发使用的请求接口请求类，位于 [app/Libraries/EBankSdk.php](https://github.com/yybawang/laravel-ebank/blob/master/app/Libraries/EBankSdk.php "查看代码") 复制任意其他php框架中都可使用，同样要求 php >= 7.1
- [x] 中央系统式，多项目对应多商户，积分互不干预，实现搭建一套，多项目可用
- [x] 支付秘钥后台设置，后台 > 支付秘钥管理
- [x] 商户接口记录出参，便于排查
- [x] 后台菜单丰富，全部使用 restful api
- [ ] 费率设置，可切换给下游渠道对接，对应结算更改，实现类似四方支付功能
- [x] 丰富图表，今日、昨日用户增长，消费，收入统计等等
- [x] 商户接口错误率统计
- [ ] 流水关联重新设计
- [ ] 后台功能点帮助文案
- [ ] 对接 hhxsv5/laravel-s 可选常驻内存式部署
- [ ] 报表统计动态筛选，选择下拉生成对应sql，形成数据统计

## Q && A

> - Q1: 为什么数据库金额有的是 2147483647 类似数字

> - A1: 项目并未使用 bcmath 扩展，7.1.12 以上的 linux PHP 已直接支持大金额加减乘除等运算，windows 环境 PHP 任何版本还是不能直接大金额运算，所以 windows 下推荐使用 docker for windows + laradock 安装开发环境，避免大金额运算问题，当然服务器也可以使用 docker + laradock 搭建相同的生产环境 

> - Q2: 缺少统计报表，很多都没做数据统计

> - A2: 基本的报表数据统计其实都可在对应主页面上进行筛选得到类似报表的功能，比如某用户今天下了多少单，某用户今天待提现数据等等，此类需求已加入开发计划

## Example

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154147.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214200.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20180224154209.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214225.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214254.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214314.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214331.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214402.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214425.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214436.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214448.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214517.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214536.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214549.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214613.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214623.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214706.png)

![示例](https://raw.githubusercontent.com/yybawang/images/master/ebank/TIM%E6%88%AA%E5%9B%BE20181013214727.png)
