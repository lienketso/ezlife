<?php
/**
 * WalletHistoryTypeEnum.php
 * Created by: trainheartnet
 * Created at: 21/06/2021
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Enums;

use Botble\Base\Supports\Enum;
use Html;

/**
 * Class WalletHistoryTypeEnum
 * @package Botble\Ecommerce\Enums
 */
class WalletHistoryTypeEnum extends Enum
{
    public const INCREASE = 'increase';

    public const DECREASE = 'decrease';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::INCREASE:
                return Html::tag('span', self::INCREASE()->label(), ['class' => 'label-info status-label'])
                    ->toHtml();
            case self::DECREASE:
                return Html::tag('span', self::DECREASE()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}
