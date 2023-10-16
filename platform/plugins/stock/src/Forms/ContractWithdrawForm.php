<?php
/**
 * ContractWithdrawForm.php
 * Created by: trainheartnet
 * Created at: 30/06/2022
 * Contact me at: longlengoc90@gmail.com
 */


namespace Botble\Stock\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Ecommerce\Http\Requests\CollaboratorEditWithdrawalRequest;
use Botble\Ecommerce\Http\Requests\CollaboratorWithdrawalRequest;
use Botble\Stock\Enums\ContractStatusEnum;
use Botble\Stock\Http\Requests\StockWithdrawlRequest;
use Botble\Stock\Models\Withdraw;
use Botble\Stock\Repositories\Interfaces\ContractInterface;

class ContractWithdrawForm extends FormAbstract
{
    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $exists = $this->getModel() && $this->getModel()->id;

        $actionButtons = view('plugins/stock::withdrawals.forms.actions')->render();
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

        $selectedContract = $this->data['contractId'];

        $this
            ->setupModel(new Withdraw())
            ->setValidatorClass($exists ? CollaboratorEditWithdrawalRequest::class : StockWithdrawlRequest::class)
            ->setFormOption('template', 'plugins/stock::dashboard.forms.base')
            ->withCustomFields()
            ->add('contract_info', 'html', [
                'html' => view('plugins/stock::withdrawals.contract-info', [
                    'selectedContract' => $selectedContract
                ])
                    ->render(),
            ])
            ->add('amount', 'number', [
                'label'      => 'Số tiền',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => array_merge([
                    'placeholder'  => 'Nhập số tiền bạn muốn rút',
                    'max'          => $selectedContract->amount_available,
                ], $exists ? $disabled : [])
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
                'html' => view('plugins/stock::withdrawals.bank-info', [
                    'bankInfo' => $exists ? auth('customer')->user()->collaborator_bank_info : $model->collaborator_bank_info,
                    'link'     => $exists ? null : route('stock-manager.settings', ['#tab_bank_info']),
                ])
                    ->render(),
            ]);

        if ($exists) {
            if ($model->images) {
                $this->addMetaBoxes([
                    'images' => [
                        'title'    => __('Withdrawal images'),
                        'content'  => view('plugins/stock::withdrawals.forms.images', compact('model'))->render(),
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