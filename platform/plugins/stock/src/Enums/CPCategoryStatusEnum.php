<?php

namespace Botble\Stock\Enums;

use Botble\Base\Supports\Enum;
use Html;

/**
 * @method static CustomerStatusEnum ACTIVATED()
 * @method static CustomerStatusEnum LOCKED()
 */
class CPCategoryStatusEnum extends Enum
{
    public const PUBLISHED = 'published';
    public const DISABLED = 'disabled';

    /**
     * @var string
     */
    public static $langPath = 'plugins/stock::category.statuses';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::PUBLISHED:
                return Html::tag('span', self::PUBLISHED()->label(), ['class' => 'label-success status-label'])
                    ->toHtml();
            case self::DISABLED:
                return Html::tag('span', self::DISABLED()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}
