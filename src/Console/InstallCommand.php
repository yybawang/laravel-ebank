<?php

namespace yybawang\ebank\Console;

use Illuminate\Console\Command;
use Illuminate\Container\Container;
use Illuminate\Support\Str;
use yybawang\ebank\Illuminate\FundService;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ebank:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install all of the EBank resources';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $this->comment('Publishing EBank Service Provider...');
        $this->callSilent('vendor:publish', ['--tag' => 'laravel-ebank-provider']);

        $this->comment('Publishing EBank Service Config...');
        $this->callSilent('vendor:publish', ['--tag' => 'laravel-ebank-config']);

        $this->comment('Publishing EBank Service Assets...');
        $this->callSilent('vendor:publish', ['--tag' => 'laravel-ebank-assets', '--force' => true]);

        $this->registerServiceProvider();

        $this->info('EBank scaffolding installed successfully.');
    }


    /**
     * Register the Horizon service provider in the application configuration file.
     *
     * @return void
     */
    protected function registerServiceProvider()
    {

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
}
