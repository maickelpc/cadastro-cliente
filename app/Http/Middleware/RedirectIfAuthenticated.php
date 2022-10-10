<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $guard = \Tenant::isTenantRequest() ? 'cliente' : 'system';
        if (Auth::guard($guard)->check()) {
            return $guard == 'cliente'?
                redirect()->route('cliente.home', ['prefix' => \Request::route('prefix')]):
                redirect()->route('system.home');
        }

        return $next($request);
    }
}
