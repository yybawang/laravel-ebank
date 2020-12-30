<?php
namespace yybawang\ebank\Http\Middleware;

use yybawang\ebank\EbankServiceProvider;

class Authenticate {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, $next){
        return EbankServiceProvider::check($request) ? $next($request) : abort(403);
    }
}
