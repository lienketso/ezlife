<?php
/**
 * RedirectIfNotHasTokenWebviewCollaborator.php
 * Created by: trainheartnet
 * Created at: 21/06/2022
 * Contact me at: longlengoc90@gmail.com
 */
namespace Botble\Ecommerce\Http\Middleware;

use Closure;
use GuzzleHttp\Psr7\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class RedirectIfNotHasTokenWebviewCollaborator
{
    /**
     * @param $request
     * @param Closure $next
     * @param string $guard
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|mixed
     */
    public function handle($request, Closure $next, $guard = 'customer')
    {
        if(!is_null($request->token)){
            $client = new \GuzzleHttp\Client(['verify'=>false]);
            $headers = [
                'token_type' => 'bearer',
                'access_token' => $request->token,
                'Authorization' => 'Bearer '.$request->token
            ];
            $httpRequest = new HttpRequest('GET', 'https://api.ubgmart.com/api/auth/user?token_type=bearer&access_token='.$request->token, $headers);
            $res = $client->sendAsync($httpRequest)->wait();
            $data = $res->getBody();
            $customer = json_decode($data);
            $id = $customer->id;
            auth('customer')->loginUsingId($id);

            if (!Auth::guard($guard)->check() || !Auth::guard($guard)->user()->is_affiliater) {
//            if ($request->ajax() || $request->wantsJson()) {
//                return response('Unauthorized.', 401);
//            }
                return redirect()->guest(route('customer.login'));
            }

            if (Auth::guard($guard)->user()->is_affiliater != 1 || Auth::guard($guard)->user()->affiliater_status->getValue() != 2) {
                if ($request->ajax() || $request->wantsJson()) {
                    return response('Tài khoản CTV chưa được kích hoạt.', 403);
                }

                return redirect()->guest(route('collaborator.become-collaborator'));
            }

            return $next($request);

        }else{
            return response()->json(['error'=>'Authentication fails']);
        }
    }
}