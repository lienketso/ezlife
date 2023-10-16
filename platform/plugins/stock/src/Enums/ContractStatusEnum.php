<?php
/**
 * ContractStatusEnum.php
 * Created by: trainheartnet
 * Created at: 22/06/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Enums;

use Botble\Base\Supports\Enum;
use Html;

class ContractStatusEnum extends Enum
{
    public const ACTIVE = 'active';
    public const UNSIGNED = 'unsigned';
    public const SIGNED = 'signed';
    public const EXPIRED = 'expired';
    public const REQUEST_TO_SIGN = 'request_to_sign';

    /**
     * @var string
     */
    public static $langPath = 'plugins/stock::contract.statuses';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::ACTIVE:
                return Html::tag('span', self::ACTIVE()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::SIGNED:
                return Html::tag('span', self::SIGNED()->label(), ['class' => 'label-info status-label'])
                    ->toHtml();
            case self::UNSIGNED:
                return Html::tag('span', self::UNSIGNED()->label(), ['class' => 'label-danger status-label'])
                    ->toHtml();
            case self::EXPIRED:
                return Html::tag('span', self::EXPIRED()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            case self::REQUEST_TO_SIGN:
                return Html::tag('span', self::REQUEST_TO_SIGN()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}