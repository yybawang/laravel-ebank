<?php

namespace App\Exceptions;

use Exception;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Foundation\Http\Exceptions\MaintenanceModeException;
use Illuminate\Validation\ValidationException;
use Prophecy\Exception\InvalidArgumentException;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
		\Symfony\Component\HttpKernel\Exception\HttpException::class,
		\Illuminate\Database\Eloquent\ModelNotFoundException::class,
		\Illuminate\Validation\ValidationException::class,
		\App\Exceptions\LoginException::class,
		\Illuminate\Foundation\Http\Exceptions\MaintenanceModeException::class
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
		
		if($this->shouldReport($exception)){
			if($exception instanceof ValidationException){
				$message = $exception->validator->errors()->first();
			}else{
				$message = $exception->getMessage();
			}
			// 有异常就发送邮件记录，不保险，可能会死循环，选择其他替代方案(存库)或第三方
//			bug_email($message,$exception->__toString());
//			bug_wechat($message,$exception->__toString());
		}
	
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
    	if($exception instanceof LoginException){
    		$message = $exception->getMessage();
			return response()->json(json_login($message),200,['Content-type'=>'Application/json']);
		}else{
			if($exception instanceof ValidationException){
				$message = $exception->validator->errors()->first();
			}elseif($exception instanceof NotFoundHttpException){
				$message = 'HTTP 路由请求地址错误';
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
//		logger($request->all());
//		logger($exception->getMessage());
//		logger($exception->getTraceAsString());
//		if($exception instanceof QueryException || $exception instanceof ModelNotFoundException){
//			if(config('basic.test')){
//				return SymfonyResponse::create(json_encode(json_error($exception->getMessage())),200,['Content-type'=>'Application/json']);
//			}else{
//				logger('API 数据参数错误：错误信息'.$exception->getMessage());
//				logger($request->all());
//				return SymfonyResponse::create(json_encode(json_error('数据参数错误，如有疑问请联系管理员')),200,['Content-type'=>'Application/json']);
//			}
//		}elseif($exception instanceof NotFoundHttpException){
//			return SymfonyResponse::create(json_encode(json_error('HTTP 路由请求异常')),200,['Content-type'=>'Application/json']);
//		}elseif($exception instanceof NotLoginException){
//			return SymfonyResponse::create(json_encode(json_login($exception->getMessage())),200,['Content-type'=>'Application/json']);
//		}elseif($exception instanceof ApiException){
//			return SymfonyResponse::create(json_encode(json_error($exception->getMessage())),200,['Content-type'=>'Application/json']);
//		}else
//		if($exception instanceof ValidationException){
//			$message = $exception->validator->errors()->first();
//			return SymfonyResponse::create(json_encode(json_error($message)),200,['Content-type'=>'Application/json']);
//		}elseif($exception instanceof MethodNotAllowedHttpException){
//			return SymfonyResponse::create(json_encode(json_error('非法HTTP请求类型')),200,['Content-type'=>'Application/json']);
//		}
////		elseif($exception instanceof HttpException){
////			return parent::render($request, $exception);
////		}
//		else{
//			return SymfonyResponse::create(json_encode(json_error($exception->getMessage())),200,['Content-type'=>'Application/json']);
//		}
    
    }
}
