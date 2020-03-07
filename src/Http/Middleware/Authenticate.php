<?php
namespace yybawang\ebank\Http\Middleware;

use yybawang\ebank\ServiceProvider;

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
        return ServiceProvider::check($request) ? $next($request) : abort(403);
    }
}
