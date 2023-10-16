<?php
/**
 * StockTypeEnum.php
 * Created by: trainheartnet
 * Created at: 16/08/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Enums;

use Botble\Base\Supports\Enum;
use Html;

class StockTypeEnum extends Enum
{
    public const OFFICIAL = 'official';
    public const TRIAL = 'trial';

    /**
     * @var string
     */
    public static $langPath = 'plugins/stock::contract.type';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::OFFICIAL:
                return Html::tag('span', self::OFFICIAL()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::TRIAL:
                return Html::tag('span', self::TRIAL()->label(), ['class' => 'label-danger status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}