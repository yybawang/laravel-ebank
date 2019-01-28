<?php

namespace App\Console\Commands;

use App\Libraries\Bank\EBank;
use Illuminate\Console\Command;

class AppInstall extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'app:install';
	
	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = '应用初始化安装，依次配置.env、storage';
	
	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}
	
	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function handle()
	{
//		$this->clearCaches();
		
		
		$this->line('');
		$this->info('************************************');
		$this->info('*         Welcome to EBank         *');
		$this->info('************************************');
		$this->line('');
		
		// 初始安装，写入lock文件，剩下的不用操作
		$installed = base_path('.installed');
		if (file_exists($installed)) {
			$this->info('You have already installed');
			$this->info('exit');
			return 0;
		}
		
		// 复制 .env.example 文件
		$config = base_path('.env');
		if (!file_exists($config)) {
//			copy(base_path('.env.example'), $config);
			$this->error('未发现 .env 配置文件，请复制 .env.example 文件为 .env 并修改配置');
			return 1;
		}
		
		// 初始化数据
		$this->call('key:generate');
		$this->call('migrate',['--seed'=>true]);
		
		
		
		// 4、生成 storage link 链接
		$this->call('storage:link');
		
		// 5、缓存配置和路由，生产环境使用.
//		$this->clearCaches();
		
		// 6、初始化钱包
		$EBank = new EBank();
		$EBank->initPurse();
		
		file_put_contents($installed,time2date());
		$this->line('');
		$this->comment('安装成功，接下来可能要做的事：');
		$this->comment('1、配置访问域名，推荐使用 Nginx，可参考本项目目录下的 ebank_nginx.conf');
		$this->comment('2、配置队列环境，推荐使用 Supervisor，可参考本项目目录下的 ebank_supervior.ini');
		$this->comment('3、重启nginx，访问域名测试');
		$this->comment('4、访问 [域名]/admin 登录后台，账号/密码：admin/123456');
		$this->comment('5、访问 [域名]/sandbox 进行沙盒接口调试(模拟 EBankSdk.php)');
		$this->comment('6、务必进行队列(queue)测试，可调用 email_bug() 方法测试(配置好 .env下的 SMTP)');
	}
	
	
	/**
	 * Clears all Laravel caches.
	 */
	protected function clearCaches()
	{
		$this->call('clear-compiled');
		$this->call('cache:clear');
		$this->call('route:cache');
		$this->call('config:cache');
		$this->call('view:clear');
	}
	
	
	/**
	 * Ensures that ebank has not been installed yet.
	 *
	 * @return bool
	 */
	private function verifyNotInstalled()
	{
		if (config('app.key') != false && config('app.key') !== 'SomeRandomString') {
			$this->error('You have already installed');
			$this->error('The env(APP_KEY) is not empty');
			$this->line('exist');
			return false;
		}
		
		return true;
	}
}
