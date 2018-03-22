<?php

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Laravel application instance
| which serves as the "glue" for all the components of Laravel, and is
| the IoC container for the system binding all of the various parts.
|
*/

$app = new Illuminate\Foundation\Application(
    realpath(__DIR__.'/../')
);

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    App\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

// 每日日志记录，windows下无权限问题，所以只在非win下开启这个配置
if(strtoupper(substr(PHP_OS,0,3)) !== 'WIN'){
	$app->configureMonologUsing(function (Monolog\Logger $monolog) {
		$filename = storage_path('logs/' . php_sapi_name() . '-' . posix_getpwuid(posix_geteuid())['name'] . '.log');
		$monolog->pushHandler($handler = new Monolog\Handler\RotatingFileHandler($filename, 30));
		$handler->setFilenameFormat('laravel-{date}-{filename}', 'Y-m-d');
		$formatter = new \Monolog\Formatter\LineFormatter(null, null, true, true);
		$formatter->includeStacktraces();
		$handler->setFormatter($formatter);
	});
}

/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/

return $app;
