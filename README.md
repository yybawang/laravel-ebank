# ebank
> 项目使用 PHP7.1+ & Laravel5.5 & Mysql5.7+ & npm & webpack & vue2 & mdui3 搭建

> 项目后台使用 vue 搭建，此 github 中不带编译后前端文件，请自行安装 npm 环境，然后执行打包，详情可看安装步骤。

## 安装

---

**Linux 下使用 Makefile 自动安装**

```
	// 项目目录下运行以下命令，如遇错误，可按照windows安装方式按步骤执行
	cp .env.example .env
	// 编辑 .env 文件配置数据库、redis、email 等，需提前建立好数据库，然后再继续执行以下命令
	make && make install
```

**Windows 下手动步骤安装**

```
	// 项目目录下运行以下命令
	cp .env.example .env
	// 编辑 .env 文件配置数据库、redis、email 等，需提前建立好数据库，然后再继续执行以下命令
	composer install -o --no-dev
	npm install
	npm run dev
	php artisan app:install
	php artisan clear-compiled
```

## 最后一步

**配置nginx访问以及队列监听：**

> 项目目录下带有 ebank_nginx.conf 和 ebank_supervisor.ini 示例文件，自行配置即可
