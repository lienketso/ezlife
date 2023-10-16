<?php
/**
 * RegisterCollaboratorListener.php
 * Created by: trainheartnet
 * Created at: 28/04/2022
 * Contact me at: longlengoc90@gmail.com
 */

namespace Botble\Ecommerce\Listeners;

use Botble\ACL\Enums\UserStatusEnum;
use Botble\Ecommerce\Enums\CollaboratorLevelEnums;
use Botble\Ecommerce\Events\RegisterCollaboratorEvent;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Repositories\Interfaces\WalletInterface;
use Illuminate\Http\Request;

class RegisterCollaboratorListener
{
    /**
     * @var Request
     */
    protected $request;

    /**
     * RegisterCollaboratorListener constructor.
     * @param Request $request
     */
    public function __construct(
        Request $request
    ) {
        $this->request = $request;
    }

    /**
     * @param RegisterCollaboratorEvent $event
     */
    public function handle(RegisterCollaboratorEvent $event)
    {
        $customer = $event->customer;

        if (get_class($customer) == Customer::class &&
            !$customer->is_affiliater &&
            $this->request->input('is_affiliater') == 1) {

            //upload ảnh CMND
            $card_front = rv_media_handle_upload($this->request->file('card_front'), '0', 'cmnd-ctv');
            $card_back = rv_media_handle_upload($this->request->file('card_back'), '0', 'cmnd-ctv');

            $customer->is_affiliater = 1;
            $customer->card_front = $card_front['data']->url;
            $customer->card_back = $card_back['data']->url;
            $customer->area = $this->request->input('city');
            $customer->affiliater_status = 1;
            $customer->collaborator_level = CollaboratorLevelEnums::BRONZE;
            $customer->save();

            /**
             * Tạo ví
             * Check xem ví tồn tại chưa, nếu chưa thì tạo
             */
            $wallet = app(WalletInterface::class)->getFirstBy(['customer_id' => $customer->id]);
            if ($wallet == null) {
                app(WalletInterface::class)->createOrUpdate([
                    'customer_id' => $customer->id,
                    'status' => UserStatusEnum::ACTIVATED
                ]);
            }
        }
    }
}