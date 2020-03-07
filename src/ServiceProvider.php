<?php


namespace yybawang\ebank;


use Illuminate\Container\Container;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider as LaravelServiceProvider;
use Illuminate\Support\Str;
use yybawang\ebank\Facades\EBank;

/**
 * Class EBankServiceProvider
 * @package yybawang\ebank
 */
class ServiceProvider extends LaravelServiceProvider
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
        $this->registerRoutes();
        $this->registerMigrates();
        $this->registerPublishing();
        $this->registerTransactions();
        $this->registerViews();
    }

    private function checkCache(){
        if($this->app->runningInConsole()){
            $allow = [
                'memcached', 'redis'
            ];
            if(!in_array(config('cache.default'), $allow)){
                exit('请将 .env 文件中的 CACHE_DRIVER 配置为 redis 或 memcached 以保证数据并发正确性'.PHP_EOL);
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
                __DIR__ . '/../public' => public_path('vendor/ebank'),
            ], 'laravel-ebank');
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
            __DIR__ . '/../config/ebank.php', 'ebank'
        );

        $this->app->singleton('ebank', function(){
            return new EBank();
        });

        if($this->app->runningInConsole()){
            $this->registerServiceProvider();
        }
    }

    public function provides()
    {
        return ['ebank'];
    }

    /**
     * Register the Horizon service provider in the application configuration file.
     *
     * @return void
     */
    protected function registerServiceProvider()
    {
//        $this->publishes([
//            __DIR__ . '/stubs/EBankServiceProvider.stub' => app_path('Providers/EBankServiceProvider.php'),
//        ]);
        // todo.. 有时间优化
        if(!file_exists(app_path('Providers/EBankServiceProvider.php'))){
            copy(__DIR__ . '/stubs/EBankServiceProvider.stub', app_path('Providers/EBankServiceProvider.php'));
        }

        $namespace = Str::replaceLast('\\', '', Container::getInstance()->getNamespace());

        $appConfig = file_get_contents(config_path('app.php'));

        if (Str::contains($appConfig, $namespace.'\\Providers\\EBankServiceProvider::class')) {
            return;
        }

        file_put_contents(config_path('app.php'), str_replace(
            "{$namespace}\\Providers\EventServiceProvider::class,".PHP_EOL,
            "{$namespace}\\Providers\EventServiceProvider::class,".PHP_EOL."        {$namespace}\Providers\EBankServiceProvider::class,".PHP_EOL,
            $appConfig
        ));

        file_put_contents(app_path('Providers/EBankServiceProvider.php'), str_replace(
            "namespace App\Providers;",
            "namespace {$namespace}\Providers;",
            file_get_contents(app_path('Providers/EBankServiceProvider.php'))
        ));
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
