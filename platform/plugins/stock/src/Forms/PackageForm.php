<?php

namespace Botble\Stock\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Stock\Enums\PackageStatusEnum;
use Botble\Stock\Enums\StockPaymentTypeEnum;
use Botble\Stock\Enums\StockTypeEnum;
use Botble\Stock\Http\Requests\PackageRequest;
use Botble\Stock\Forms\Fields\AssignCPCategorySelector;
use Botble\Stock\Models\Package;

class PackageForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $this
            ->setupModel(new Package)
            ->setValidatorClass(PackageRequest::class)
            ->withCustomFields()
            ->add('name', 'text', [
                'label'      => trans('core/base::forms.name'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => trans('core/base::forms.name_placeholder'),
                    'data-counter' => 120,
                ],
            ])
            ->add('package_code', 'text', [
                'label'      => 'Mã gói',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Nhập mã gói',
                    'data-counter' => 120,
                ],
            ])
            
            ->add('content', 'textarea', [
                'label'      => trans('core/base::forms.description'),
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'rows'         => 4,
                    'placeholder'  => trans('core/base::forms.description_placeholder'),
                    'data-counter' => 400,
                ],
            ])
            ->add('payment_type', 'select', [
                'label'      => 'Hình thức trả lãi',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'class' => 'form-control select-full',
                ],
                'choices'    => StockPaymentTypeEnum::labels(),
            ])
            ->add('percentage', 'number', [
                'label'      => 'Lợi nhuận / năm(%)',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Lợi nhuận',
                ],
            ])
            ->add('price_per_stock', 'number', [
                'label'      => 'Giá trên 1 cổ phần',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Giá trên 1 cổ phần',
                ],
            ])   
            ->add('qty_of_stock', 'text', [
                'label'      => 'Số lượng cổ phần',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Số lượng cổ phần',
                ],
            ])          
            ->add('percent_paid_by_ubgxu', 'number', [
                'label'      => 'Tổng lợi tức theo xu (%)',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Tổng lợi tức theo xu (%)',
                ],
            ]) 
            ->add('percent_paid_by_money', 'number', [
                'label'      => 'Tổng lợi tức theo VNĐ (%)',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Tổng lợi tức theo VNĐ (%)',
                ],
            ]) 
            ->add('end_date', 'text', [
                'label'      => 'Kỳ hạn',
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'placeholder'  => 'Kỳ hạn',
                    'class'        => 'form-control',  
                ]
            ])
            ->add('cp_package', 'html', [
                'html' => view('plugins/stock::forms.partials.commission', [
                    'commission' => $this->model->commission,
                    'title'    => __('Cấu hình hoa hồng cho Sale'),
                ])
                    ->render(),
            ])
            ->add('status', 'customSelect', [
                'label'      => trans('core/base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'class' => 'form-control select-full',
                ],
                'choices'    => PackageStatusEnum::labels(),
            ])
            ->add('cp_category_id', 'html', [
                'html'       => AssignCPCategorySelector::render($this->getModel()),
                'label'      => 'Loại hợp đồng',
                'wrapper'    => false,
                'label_show' => false,
            ])
            ->add('type', 'select', [
                'label'      => 'Hình thức gói',
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'class' => 'form-control select-full',
                ],
                'choices'    => StockTypeEnum::labels(),
            ])
            ->add('thumbnail', 'mediaImage', [
                'label'      => trans('core/base::forms.image'),
                'label_attr' => ['class' => 'control-label'],
            ])
            ->setBreakFieldPoint('status');
    }
}
