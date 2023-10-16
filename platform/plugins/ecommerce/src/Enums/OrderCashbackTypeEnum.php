<?php
/**
 * OrderCashbackTypeEnum.php
 * Created by: trainheartnet
 * Created at: 06/07/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Enums;

use Botble\Base\Supports\Enum;
use Html;

class OrderCashbackTypeEnum extends Enum
{
    public const SLOW = 'slow';
    public const NONE = 'none';
    public const FAST = 'fast';

    /**
     * @var string
     */
    public static $langPath = 'plugins/ecommerce::order.cashback';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::SLOW:
                return Html::tag('span', self::SLOW()->label(), ['class' => 'label-info status-label'])
                    ->toHtml();
            case self::NONE:
                return Html::tag('span', self::NONE()->label(), ['class' => 'label-info status-label'])
                    ->toHtml();
            case self::FAST:
                return Html::tag('span', self::FAST()->label(), ['class' => 'label-info status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}