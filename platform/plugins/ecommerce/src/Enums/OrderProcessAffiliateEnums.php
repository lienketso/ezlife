<?php
/**
 * OrderProcessAffiliateEnums.php
 * Created by: trainheartnet
 * Created at: 03/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Enums;

use Botble\Base\Supports\Enum;
use Html;

class OrderProcessAffiliateEnums extends Enum
{
    public const PENDING = 0;
    public const SUCCESS = 1;

    /**
     * @var string
     */
    public static $langPath = 'plugins/ecommerce::order.statuses';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::PENDING:
                return Html::tag('span', 'Đang đợi', ['class' => 'label-warning status-label'])
                    ->toHtml();
            case self::SUCCESS:
                return Html::tag('span', 'Thành công', ['class' => 'label-success status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}