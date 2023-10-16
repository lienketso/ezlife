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

class ContractPaymentStatusEnum extends Enum
{
    public const UNPAID = 'unpaid';
    public const PAID = 'paid';
    public const PENDING_PAYMENT = 'pending';

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
            case self::UNPAID:
                return Html::tag('span', self::UNPAID()->label(), ['class' => 'label-danger status-label'])
                    ->toHtml();
            case self::PENDING_PAYMENT:
                return Html::tag('span', self::PENDING_PAYMENT()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            case self::PAID:
                return Html::tag('span', self::PAID()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}