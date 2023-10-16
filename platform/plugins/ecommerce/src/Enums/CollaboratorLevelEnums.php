<?php
/**
 * CollaboratorLevelEnums.php
 * Created by: trainheartnet
 * Created at: 03/08/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Enums;

use Botble\Base\Supports\Enum;
use Html;

class CollaboratorLevelEnums extends Enum
{
    public const IRON = 0;
    public const BRONZE = 1;
    public const SILVER = 2;
    public const GOLD = 3;
    public const DIAMOND = 4;
    public const PLATINUM = 5;

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::IRON:
                return Html::tag('span', 'Thực tập', ['class' => 'label-warning status-label'])
                    ->toHtml();
            case self::BRONZE:
                return Html::tag('span', 'Đồng', ['class' => 'label-warning status-label'])
                    ->toHtml();
            case self::SILVER:
                return Html::tag('span', 'Bạc', ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::GOLD:
                return Html::tag('span', 'Vàng', ['class' => 'label-danger status-label'])
                    ->toHtml();
            case self::DIAMOND:
                return Html::tag('span', 'Kim Cương', ['class' => 'label-danger status-label'])
                    ->toHtml();
            case self::PLATINUM:
                return Html::tag('span', 'Platinum', ['class' => 'label-danger status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }

    /**
     * @param $value
     * @return string
     */
    public static function compareValue($value)
    {
        switch ($value) {
            case self::IRON:
                return 'Thực tập';
            case self::SILVER:
                return 'Bạc';
            case self::GOLD:
                return 'Vàng';
            case self::DIAMOND:
                return 'Kim Cương';
            case self::PLATINUM:
                return 'Platinum';
            default:
                return 'Đồng';
        }
    }
}