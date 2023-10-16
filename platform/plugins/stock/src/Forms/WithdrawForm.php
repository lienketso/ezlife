<?php

namespace Botble\Stock\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Stock\Enums\WithdrawStatusEnum;
use Botble\Stock\Http\Requests\WithdrawRequest;
use Botble\Stock\Models\Withdraw;

class WithdrawForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {   
        $selectedContract = $this->data['contractId'];
        $selectedCustomer = $this->data['customer'];
        $actionButtons = view('plugins/stock::withdrawals.forms.notice')->render();
        $this
            
            ->setupModel(new Withdraw)
            ->setValidatorClass(WithdrawRequest::class)
            ->withCustomFields()
            ->add('amount', 'text', [
                'label'      => 'Amount (₫)',
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'disabled' => 'disabled',
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
            ->add('customer_info', 'html', [
                'html' => view('plugins/stock::withdrawals.customer-info', [
                    'selectedCustomer' => $selectedCustomer
                ])
                    ->render(),
            ])
            ->add('contract_info', 'html', [
                'html' => view('plugins/stock::withdrawals.contract-info', [
                    'selectedContract' => $selectedContract
                ])
                    ->render(),
            ])
            ->add('bankInfo', 'html', [
                'html' => view('plugins/stock::withdrawals.bank-info', [
                    'bankInfo' => $this->getModel()->bank_info,
                    'title'    => __('Thông tin tài khoản'),
                ])->render(),
                ]);
            if( $this->getModel()->status == WithdrawStatusEnum::PENDING) {    
                $this->add('status', 'customSelect', [
                        'label'      => trans('core/base::tables.status'),
                        'label_attr' => ['class' => 'control-label required'],
                        'attr'       => [
                            'class' => 'form-control select-full',
                        ],
                        'choices'    => WithdrawStatusEnum::labels(),
                    ]);
            }
            $this->removeActionButtons()
            ->setActionButtons($actionButtons);
           
    }
}
