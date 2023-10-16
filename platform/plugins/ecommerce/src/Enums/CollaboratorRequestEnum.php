<?php
/**
 * CollaboratorRequestEnum.php
 * Created by: trainheartnet
 * Created at: 24/07/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Enums;

use Botble\Base\Supports\Enum;
use Html;

class CollaboratorRequestEnum extends Enum
{
    public const ACCEPT = 2;
    public const PENDING = 1;
    public const REJECT = 3;

    public static $langPath = 'plugins/ecommerce::order.collaborator_request.status';

    public function toHtml()
    {
        switch ($this->value) {
            case self::PENDING:
                return Html::tag('span', 'Chưa xử lý', ['class' => 'label-warning status-label'])
                    ->toHtml();
            case self::ACCEPT:
                return Html::tag('span', 'Duyệt', ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::REJECT:
                return Html::tag('span', 'Từ chối', ['class' => 'label-danger status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}
