<?php
/**
 * StockPaymentTypeEnum.php
 * Created by: trainheartnet
 * Created at: 28/07/2022
 * Contact me at: longlengoc90@gmail.com
 */

namespace Botble\Stock\Enums;

use Botble\Base\Supports\Enum;
use Html;

class StockPaymentTypeEnum extends Enum
{
    public const COIN = 'coin';
    public const VND = 'vnd';
    public const ALL = 'all';

    /**
     * @var string
     */
    public static $langPath = 'plugins/stock::contract.payment_type';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::COIN:
                return Html::tag('span', self::COIN()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::VND:
                return Html::tag('span', self::VND()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::ALL:
                return Html::tag('span', self::ALL()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}