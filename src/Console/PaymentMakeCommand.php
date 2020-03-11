<?php

namespace yybawang\ebank\Console;

use Illuminate\Console\GeneratorCommand;

class PaymentMakeCommand extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:payment {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new payment class';

    protected $type = 'Payment';

    public function handle()
    {
        if (parent::handle() === false && ! $this->option('force')) {
            return false;
        }
        $this->info('在 config/ebank.php 的 payments 数组中添加此类即可');
    }

    protected function getStub()
    {
        return __DIR__ . '/../stubs/payment.stub';
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace.'\Payments';
    }
}
