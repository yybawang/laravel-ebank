<?php


namespace yybawang\ebank;


use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider as LaravelServiceProvider;
use yybawang\ebank\Provides\EBankAdminProvider;
use yybawang\ebank\Provides\EBankApiProvider;

/**
 * Class EBankServiceProvider
 * @package yybawang\ebank
 */
class ServiceProvider extends LaravelServiceProvider
{
    public function boot(){
        // 注册路由，注册数据库迁移，加载配置，加载前端资源，多语言
        $this->registerRoutes();
        $this->registerMigrates();
        $this->registerPublishing();
        $this->registerTransactions();
    }

    private function registerRoutes(){
        Route::namespace('yybawang\ebank\Http\Controllers\Admin')
            ->as('ebank.admin.')
            ->group(function(){
                $this->loadRoutesFrom(__DIR__.'/routes/admin.php');
            });
        Route::namespace('yybawang\ebank\Http\Controllers\Api')
            ->as('ebank.api.')
            ->group(function(){
                $this->loadRoutesFrom(__DIR__.'/routes/api.php');
            });
    }

    private function registerMigrates(){
        if ($this->app->runningInConsole()) {
            $this->loadMigrationsFrom(__DIR__.'/Storage/migrations');
        }
    }

    private function registerPublishing(){
        if($this->app->runningInConsole()){
            $this->publishes([
                __DIR__.'/Storage/migrations' => database_path('migrations'),
            ], 'migrations');

            $this->publishes([
                __DIR__.'/../config/ebank.php' => config_path('ebank.php'),
            ], 'config');
        }
    }

    private function registerTransactions(){
        $this->loadTranslationsFrom(__DIR__.'/resources/lang', 'ebank');
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/ebank.php', 'ebank'
        );

        $this->app->singleton('ebank.admin', function(){
            return new EBankAdminProvider();
        });
        $this->app->singleton('ebank.api', function(){
            return new EBankApiProvider();
        });
    }

    public function provides()
    {
        return ['ebank.admin', 'ebank.api'];
    }
}
