<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Foundation\Http\Exceptions\MaintenanceModeException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        // 全部上报
//		\Symfony\Component\HttpKernel\Exception\HttpException::class,
//		\Illuminate\Database\Eloquent\ModelNotFoundException::class,
//		\Illuminate\Validation\ValidationException::class,
//		\App\Exceptions\LoginException::class,
//		\Illuminate\Foundation\Http\Exceptions\MaintenanceModeException::class
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
		if (app()->bound('sentry') && $this->shouldReport($exception)) {
			app('sentry')->captureException($exception);
		}
	
		parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
	 * 所有成功都会返回 200 正确，只会返回 json 数据。
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
//		return parent::render($request, $exception);
		// 得到错误发送到邮件
		if($this->shouldReport($exception)){
			email_bug($exception->__toString());
		}
		
    	if($exception instanceof LoginException){
    		$message = $exception->getMessage();
			return response()->json(json_login($message),200,['Content-type'=>'Application/json']);
		}else{
			if($exception instanceof ValidationException){
				$message = $exception->validator->errors()->first();
			}elseif($exception instanceof NotFoundHttpException){
				$message = '404 Not Found';
			}elseif($exception instanceof QueryException){
				$production = config('basic.production');
				$message = $production ? '数据参数错误，请稍后重试' : (string)$exception->getMessage();
			}elseif($exception instanceof ModelNotFoundException){
				$production = config('basic.production');
				$message = $production ? '查询数据不存在' : $exception->getMessage();
			}elseif($exception instanceof MaintenanceModeException){
				$message = '服务器维护中，请稍后~';
			}else{
				$message = $exception->getMessage();
			}
			return response()->json(json_error($message),200,['Content-type'=>'Application/json']);
		}
    }
}
