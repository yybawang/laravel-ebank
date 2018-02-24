<?php

namespace App\Console\Commands;

use App\Libraries\Bank;
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
		//
//		$this->clearCaches();
		
		if (!$this->verifyNotInstalled()) {
			return -1;
		}
		
		$this->line('');
		$this->info('************************************');
		$this->info('*         Welcome to EBank         *');
		$this->info('*          正在进行最后配置          *');
		$this->info('************************************');
		$this->line('');
		
		
		// 2、复制 .env.example 文件
		$config = base_path('.env');
		if (!file_exists($config)) {
			copy(base_path('.env.example'), $config);
		}
		$this->call('key:generate');
		
		// 3、生成数据
		$this->call('migrate',['--seed'=>true]);
		
		// 4、生成 storage link 链接
		$this->call('storage:link');
		
		// 5、缓存配置和路由，生产环境使用
//		$this->clearCaches();
		
		// 6、初始化钱包
		$bank = new Bank();
		$bank->init();
		
		$this->line('');
		$this->comment('安装成功，接下来可能要做的事：');
		$this->comment('1、配置访问域名，推荐使用 Nginx，可参考本项目目录下的 ebank_nginx.conf');
		$this->comment('2、配置队列环境，推荐使用 Supervisor，可参考本项目目录下的 ebank_supervior.conf');
		$this->comment('3、重启nginx，访问域名测试');
		$this->comment('4、进行队列测试，可调用 bug_email() 方法测试(配置好 SMTP 服务)');
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
	 * Ensures that Fixhub has not been installed yet.
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
