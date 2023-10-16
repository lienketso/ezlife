<?php
/**
 * CollaboratorRequestForm.php
 * Created by: trainheartnet
 * Created at: 01/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Ecommerce\Enums\CollaboratorRequestEnum;
use Botble\Ecommerce\Forms\Fields\CategoryMultiField;
use Botble\Ecommerce\Forms\Fields\CollaboratorRequestField;
use Botble\Ecommerce\Http\Requests\CustomerCreateRequest;
use Botble\Ecommerce\Models\Customer;

class CollaboratorRequestForm extends FormAbstract
{
    public function buildForm()
    {
        $this
            ->setupModel(new Customer())
            ->setValidatorClass(CustomerCreateRequest::class)
            ->withCustomFields()
            ->addCustomField('categoryMulti', CategoryMultiField::class)
            ->add('rate_group_repeater', 'html', [
                'html'       => CollaboratorRequestField::render($this->getModel()),
                'wrapper'    => false,
                'label_show' => false,
            ])
            ->add('reason', 'editor', [
                'label'      => 'Nội dung phản hồi (Nếu có)',
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'rows'         => 2,
                    'placeholder'  => 'Nội dung phản hồi lại yêu cầu',
                    'data-counter' => 1000,
                ],
            ])
            ->add('affiliater_status', 'customSelect', [
                'label'      => 'Xử lý yêu cầu',
                'label_attr' => ['class' => 'control-label required'],
                'choices'    => CollaboratorRequestEnum::labels(),
            ])
            ->setBreakFieldPoint('affiliater_status');
    }
}