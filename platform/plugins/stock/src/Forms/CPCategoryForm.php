<?php

namespace Botble\Stock\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Stock\Enums\CPCategoryStatusEnum;
use Botble\Stock\Http\Requests\CPCategoryRequest;
use Botble\Stock\Models\CPCategory;

class CPCategoryForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $this
            ->setupModel(new CPCategory)
            ->setValidatorClass(CPCategoryRequest::class)
            ->withCustomFields()
            ->add('name', 'text', [
                'label'      => trans('core/base::forms.name'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => trans('core/base::forms.name_placeholder'),
                    'data-counter' => 120,
                ],
            ])
            ->add('category_code', 'text', [
                'label'      => 'Mã danh mục hợp đồng',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Nhập mã danh mục hợp đồng',
                    'data-counter' => 120,
                ],
            ])
            ->add('description', 'textarea', [
                'label'      => trans('core/base::forms.description'),
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'rows'         => 4,
                    'placeholder'  => trans('core/base::forms.description_placeholder'),
                    'data-counter' => 400,
                ],
            ])
            ->add('sort_order', 'number', [
                'label'         => 'Thứ tự',
                'label_attr'    => ['class' => 'control-label'],
                'attr'          => [
                    'placeholder' => 'Thứ tự',
                ],
                'default_value' => 0,
            ])
            ->add('thumbnail', 'mediaImage', [
                'label'      => trans('core/base::forms.image'),
                'label_attr' => ['class' => 'control-label'],
            ])
            ->add('status', 'customSelect', [
                'label'      => trans('core/base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'class' => 'form-control select-full',
                ],
                'choices'    => CPCategoryStatusEnum::labels(),
            ])
            ->setBreakFieldPoint('status');
    }
}
