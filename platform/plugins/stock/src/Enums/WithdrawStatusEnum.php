<?php

namespace Botble\Stock\Enums;

use Botble\Base\Supports\Enum;
use Html;

/**
 * @method static CustomerStatusEnum ACTIVATED()
 * @method static CustomerStatusEnum LOCKED()
 */
class WithdrawStatusEnum extends Enum
{
    public const ACCEPT = 'accept';
    public const PENDING = 'pending';
    public const REJECT = 'reject';

    /**
     * @var string
     */
    public static $langPath = 'plugins/stock::withdraw.statuses';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::ACCEPT:
                return Html::tag('span', self::ACCEPT()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::REJECT:
                return Html::tag('span', self::REJECT()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();        
            case self::PENDING:
                return Html::tag('span', self::PENDING()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}
