<?php
/**
 * CollaboratorRequestField.php
 * Created by: trainheartnet
 * Created at: 23/07/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Forms\Fields;


class CollaboratorRequestField
{
    /**
     * @return string
     */
    public static function render($user)
    {
        return view('plugins/ecommerce::collaborator.partials.info', compact('user'));
    }
}
