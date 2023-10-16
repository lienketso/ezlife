<?php
/**
 * RedirectIfNotCollaborator.php
 * Created by: trainheartnet
 * Created at: 02/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotCollaborator
{
    /**
     * @param $request
     * @param Closure $next
     * @param string $guard
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|mixed
     */
    public function handle($request, Closure $next, $guard = 'customer')
    {
        if (!Auth::guard($guard)->check() || !Auth::guard($guard)->user()->is_affiliater) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            }

            return redirect()->guest(route('customer.login'));
        }

        if (Auth::guard($guard)->user()->is_affiliater != 1 || Auth::guard($guard)->user()->affiliater_status->getValue() != 2) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('Tài khoản đại lý chưa được kích hoạt.', 403);
            }

            return redirect()->guest(route('collaborator.become-collaborator'));
        }

        return $next($request);
    }
}