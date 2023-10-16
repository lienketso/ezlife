<?php

namespace Botble\Stock\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Stock\Http\Requests\ChartRequest;
use Botble\Stock\Forms\Fields\AssignCPCategorySelector;
use Botble\Stock\Models\Chart;

class ChartForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $this
            ->setupModel(new Chart)
            ->setValidatorClass(ChartRequest::class)
            ->withCustomFields()
            ->add('price', 'number', [
                'label'      => 'Giá (VNĐ)',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Nhập giá(VNĐ)',
                ],
            ]) 
            ->add('chart_date', 'text', [
                'label'      => 'Thời gian',
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'placeholder'  => 'Thời gian',
                    'class'        => 'form-control datepicker',  
                    'data-date-format' => 'yyyy/mm/dd',
                ],
                'default_value' => now()->addDay()->format('Y/m/d'),
            ]);  
    }
}
