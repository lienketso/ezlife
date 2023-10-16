<?php

namespace Botble\Ecommerce\Http\Controllers\Customers;

use App\Http\Controllers\Controller;
use Botble\ACL\Traits\SendsPasswordResetPhone;
use Illuminate\Contracts\Auth\PasswordBroker;
use Password;
use Response;
use SeoHelper;
use Theme;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

//    use SendsPasswordResetEmails;
    use SendsPasswordResetPhone;

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('customer.guest');
    }

    /**
     * Display the form to request a password reset link.
     *
     * @return Response
     */
    public function showLinkRequestForm()
    {
        SeoHelper::setTitle(__('Forgot Password'));

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Login'), route('customer.password.reset'));

        return Theme::scope('ecommerce.customers.passwords.email', [],
            'plugins/ecommerce::themes.customers.passwords.email')
            ->render();
    }

    public function showLinkPhoneRequestForm()
    {
        SeoHelper::setTitle(__('Forgot Password'));

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Login'), route('customer.password.reset'));

        return Theme::scope('ecommerce.customers.passwords.phone', [],
            'plugins/ecommerce::themes.customers.passwords.phone')
            ->render();
    }

    public function showOtpRequestForm(){
        SeoHelper::setTitle(__('Forgot Password'));

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Login'), route('customer.password.reset'));
        return Theme::scope('ecommerce.customers.passwords.otp', [],
            'plugins/ecommerce::themes.customers.passwords.otp')
            ->render();
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return PasswordBroker
     */
    public function broker()
    {
        return Password::broker('customers');
    }
}
