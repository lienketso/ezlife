<?php


namespace Botble\Ecommerce\Forms;


use Botble\Base\Forms\FormAbstract;
use Botble\Ecommerce\Models\Customer;

class EditXuForm extends FormAbstract
{

    public function buildForm()
    {
        $this->setupModel(new Customer)
            ->withCustomFields()
            ->add('transaction_type', 'customSelect', [
                'label'      => 'Loại update',
                'label_attr' => ['class' => 'control-label required'],
                'choices'    => [
                    'increase' => 'Cộng điểm',
                    'decrease'=> 'Giảm điểm',
                    'increase_transfer' => 'Cộng điểm tài khoản giao dịch',
                    'decrease_transfer' => 'Giảm tài khoản giao dịch',
                ],
            ])
            ->add('ubgxu','number',[
                'label'=>'Số điểm tiêu dùng hiện tại',
                'label_attr'=>['class'=>'control-label'],
                'attr'=>[
                    'placeholder'=>'',
                    'disabled'=>'disable'
                ]
            ])
            ->add('ubgxu_transfer','number',[
                'label'=>'Số điểm giao dịch hiện tại',
                'label_attr'=>['class'=>'control-label'],
                'attr'=>[
                    'placeholder'=>'',
                    'disabled'=>'disable'
                ]
            ])
            ->add('ubgxu_update','number',[
                'label'=>'Số điểm muốn cập nhật ( Cộng hoặc trừ đi số điểm hiện tại )',
                'label_attr'=>['class'=>'control-label required'],
                'attr'=>[
                    'placeholder'=>'Nhập số điểm muốn sửa',
                ]
            ])
            ->add(
                'why','text',[
                    'label'=>'Lý do sửa',
                    'label_attr'=>['class'=>'control-label required'],
                    'attr'=>['placeholder'=>'Lý do thay đổi số điểm']
                ]
            );
    }

}