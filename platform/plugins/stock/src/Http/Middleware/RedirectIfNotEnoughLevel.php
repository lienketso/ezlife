<?php
/**
 * RedirectIfNotEnoughLevel.php
 * Created by: trainheartnet
 * Created at: 10/08/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Http\Middleware;

use Botble\Ecommerce\Enums\CollaboratorLevelEnums;
use Botble\Ecommerce\Enums\CustomerStatusEnum;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotEnoughLevel
{
    /**
     * @param $request
     * @param Closure $next
     * @param string $guard
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function handle($request, Closure $next, $guard = 'customer')
    {
        if (!Auth::guard($guard)->check()) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            }
            return redirect()->guest(route('customer.login'));
        }

        $customer = Auth::guard($guard)->user();
        if ($customer->collaborator_level->getValue() === CollaboratorLevelEnums::IRON) {
            return redirect()->back()->withErrors('Tài khoản của bạn chưa đạt yêu cầu đê thực hiện rút lợi nhuận');
        }

        return $next($request);
    }
}