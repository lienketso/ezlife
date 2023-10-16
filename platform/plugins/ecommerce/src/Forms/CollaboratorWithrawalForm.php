<?php
/**
 * CollaboratorWithrawalForm.php
 * Created by: trainheartnet
 * Created at: 04/05/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Ecommerce\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Ecommerce\Http\Requests\CollaboratorEditWithdrawalRequest;
use Botble\Ecommerce\Http\Requests\CollaboratorWithdrawalRequest;
use Botble\Ecommerce\Models\CollaboratorWithdrawal;

class CollaboratorWithrawalForm extends FormAbstract
{
    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {

        $exists = $this->getModel() && $this->getModel()->id;

        $actionButtons = view('plugins/ecommerce::collaborator.withdrawals.forms.actions')->render();
        if ($exists) {
            $fee = null;
            if (!$this->getModel()->vendor_can_edit) {
                $actionButtons = ' ';
            }
        }

        $model = auth('customer')->user();
        if ($exists) {
            $model = $this->getModel();
        }

        $disabled = ['disabled' => 'disabled'];

        $this
            ->setupModel(new CollaboratorWithdrawal())
            ->setValidatorClass($exists ? CollaboratorEditWithdrawalRequest::class : CollaboratorWithdrawalRequest::class)
            ->setFormOption('template', 'plugins/ecommerce::collaborator.dashboard.forms.base')
            ->withCustomFields()
            ->add('amount', 'number', [
                'label'      => 'Số tiền',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => array_merge([
                    'placeholder'  => 'Nhập số tiền bạn muốn rút',
                    'data-counter' => 120,
                    'max'          => $model->balance,
                ], $exists ? $disabled : [])
            ]);


        $this
            ->add('transaction_id', 'text', [
                'label'      => 'Mã giao dịch',
                'label_attr' => ['class' => 'control-label'],
                'attr'       => $disabled,
            ]);

        $this
            ->add('description', 'textarea', [
                'label'      => trans('core/base::forms.description'),
                'label_attr' => ['class' => 'control-label'],
                'attr'       => array_merge([
                    'rows'         => 3,
                    'placeholder'  => trans('core/base::forms.description_placeholder'),
                    'data-counter' => 200,
                ], $exists && !$this->getModel()->vendor_can_edit ? $disabled : []),
            ])
            ->add('bankInfo', 'html', [
                'html' => view('plugins/ecommerce::collaborator.withdrawals.bank-info', [
                    'bankInfo' => $exists ? $model->bank_info : $model->collaborator_bank_info,
                    'link'     => $exists ? null : route('collaborator.settings', ['#tab_bank_info']),
                ])
                    ->render(),
            ]);

        if ($exists) {
            if ($model->images) {
                $this->addMetaBoxes([
                    'images' => [
                        'title'    => __('Withdrawal images'),
                        'content'  => view('plugins/ecommerce::collaborator.withdrawals.forms.images', compact('model'))->render(),
                        'priority' => 4,
                    ],
                ]);
            }

            if ($this->getModel()->vendor_can_edit) {
                $this->add('cancel', 'onOff', [
                    'label'      => 'Bạn muốn hủy yêu cầu này?',
                    'label_attr' => ['class' => 'control-label'],
                    'help_block' => [
                        'text' => 'Sau khi hủy yêu cầu, số dư sẽ được chuyển lại vào tài khoản khả dụng của bạn.',
                    ],
                ]);
            } else {
                $this->add('cancel', 'html', [
                    'label' => trans('core/base::tables.status'),
                    'html'  => $model->status->toHtml(),
                ]);
            }
        }

        $this
            ->setBreakFieldPoint('cancel')
            ->setActionButtons($actionButtons);
    }
}