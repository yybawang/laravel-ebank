<?php


namespace yybawang\ebank;


use Illuminate\Container\Container;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider as LaravelServiceProvider;
use Illuminate\Support\Str;
use yybawang\ebank\Console\InstallCommand;
use yybawang\ebank\Console\PaymentMakeCommand;
use yybawang\ebank\Facades\EBank;

/**
 * Class EBankServiceProvider
 * @package yybawang\ebank
 */
class EbankServiceProvider extends LaravelServiceProvider
{
    /**
     * The callback that should be used to authenticate Horizon users.
     *
     * @var \Closure
     */
    public static $authUsing;

    public function boot(){
        $this->checkCache();
        // 注册路由，注册数据库迁移，加载配置，加载前端资源，多语言
        $this->registerPublishing();
        $this->registerMigrates();
        $this->registerRoutes();
        $this->registerTransactions();
        $this->registerViews();
    }

    private function checkCache(){
        if($this->app->runningInConsole()){
            $allow = [
                'memcached', 'redis'
            ];
            if(!in_array(config('cache.default'), $allow)){
                echo '[laravel-ebank] 请将 .env 文件中的 CACHE_DRIVER 配置为 redis 或 memcached 以保证正常运行'.PHP_EOL;
            }
        }
    }

    private function registerRoutes(){
        Route::namespace('yybawang\ebank\Http\Controllers\Dashboard')
            ->as('ebank.admin.')
            ->group(function(){
                $this->loadRoutesFrom(__DIR__ . '/routes/ebank.php');
            });
    }

    private function registerMigrates(){
        if ($this->app->runningInConsole()) {
            $this->loadMigrationsFrom(__DIR__ . '/Storage/migrations');
        }
    }

    private function registerPublishing(){
        if($this->app->runningInConsole()){
            $this->publishes([
                __DIR__ . '/../config/ebank.php' => config_path('ebank.php'),
            ], 'laravel-ebank-config');

            $this->publishes([
                __DIR__ . '/../public' => public_path('vendor/ebank'),
            ], 'laravel-ebank-assets');

            $this->publishes([
                __DIR__ . '/stubs/EBankServiceProvider.stub' => app_path('Providers/EBankServiceProvider.php'),
            ], 'laravel-ebank-provider');
        }
    }

    private function registerTransactions(){
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'ebank');
    }

    private function registerViews(){
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'ebank');
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/ebank.php', 'laravel-ebank'
        );

        $this->app->singleton('ebank', function(){
            return new EBank();
        });

        if($this->app->runningInConsole()){
            $this->commands([
                InstallCommand::class,
                PaymentMakeCommand::class,
            ]);
        }
    }

    public function provides()
    {
        return ['ebank'];
    }

    /**
     * Determine if the given request can access the dashboard.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    public static function check($request)
    {
        return (static::$authUsing ?: function () {
            return app()->environment('local');
        })($request);
    }

    /**
     * Set the callback that should be used to authenticate users.
     *
     * @param  \Closure  $callback
     */
    public static function auth(\Closure $callback)
    {
        static::$authUsing = $callback;
    }

}
