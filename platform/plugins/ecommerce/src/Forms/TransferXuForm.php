<?php


namespace Botble\Ecommerce\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Ecommerce\Http\Requests\TransferXuRequest;
use Botble\Ecommerce\Models\Customer;

class TransferXuForm extends FormAbstract
{
    public function buildForm()
    {
        $actionButtons = view('plugins/ecommerce::ubgxu.withdrawals.forms.actions')->render();

        $this
            ->setupModel(new Customer())
            ->setValidatorClass(TransferXuRequest::class)
            ->setFormOption('template', 'plugins/ecommerce::ubgxu.dashboard.forms.base')
            ->withCustomFields();

        $this
            ->add('avaiablexu', 'text', [
                'label'      => 'Số điểm khả dụng',
                'label_attr' => ['class' => 'control-label'],
                'value' => number_format(auth('customer')->user()->ubgxu_transfer).' điểm',
                'attr' => array_merge([
                    'readonly'  => true,
                ])
            ])
            ->add('phone', 'text', [
                'label'      => 'Số điện thoại người nhận điểm',
                'label_attr' => ['class' => 'control-label required'],
            ])
            ->add('amount', 'number', [
                'label'      => 'Số điểm muốn chuyển',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => array_merge([
                    'placeholder'  => 'Nhập số điểm bạn muốn chuyển',
                    'max'          => intval(auth('customer')->user()->ubgxu_transfer),
                ])
            ])
            ->add('description', 'textarea', [
                'label'      => trans('core/base::forms.description'),
                'label_attr' => ['class' => 'control-label'],
                'attr'       => array_merge([
                    'rows'         => 3,
                    'placeholder'  => trans('core/base::forms.description_placeholder'),
                    'data-counter' => 200,
                ]),
            ]);

        $this
            ->setBreakFieldPoint('cancel')
            ->setActionButtons($actionButtons);
    }
}