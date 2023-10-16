<?php
/**
 * UbgxuTransactionEnum.php
 * Created by: trainheartnet
 * Created at: 08/09/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Enums;

use Botble\Base\Supports\Enum;
use Html;

class UbgxuTransactionEnum extends Enum
{
    public const INCREASE = 'increase';
    public const CASH = 'cash';
    public const TRANSFER_UP = 'transfer_up';
    public const TRANSFER_DOWN = 'transfer_down';
    public const DECREASE = 'decrease';
    public const DEPOSIT = 'deposit';


    /**
     * @var string
     */
    public static $langPath = 'plugins/ecommerce::ubgxu_transaction';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::INCREASE:
                return Html::tag('span', self::INCREASE()->label(), ['class' => 'status-label label-success'])
                    ->toHtml();
            case self::DECREASE:
                return Html::tag('span', self::DECREASE()->label(), ['class' => 'status-label label-danger'])
                    ->toHtml();
            case self::CASH:
                return Html::tag('span', self::CASH()->label(), ['class' => 'status-label label-warning'])
                    ->toHtml();
            case self::TRANSFER_UP:
                return Html::tag('span', self::TRANSFER_UP()->label(), ['class' => 'status-label label-info'])
                    ->toHtml();
            case self::TRANSFER_DOWN:
                return Html::tag('span', self::TRANSFER_DOWN()->label(), ['class' => 'status-label label-danger'])
                    ->toHtml();
            case self::DEPOSIT:
                return Html::tag('span', self::DEPOSIT()->label(), ['class' => 'status-label label-danger'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}