<?php

namespace Botble\Ecommerce\Http\Controllers;

use Assets;
use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Enums\OrderStatusEnum;
use Botble\Ecommerce\Enums\ShippingCodStatusEnum;
use Botble\Ecommerce\Enums\ShippingStatusEnum;
use Botble\Ecommerce\Events\OrderCompletedEvent;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderHistoryInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Ecommerce\Repositories\Interfaces\ShipmentHistoryInterface;
use Botble\Ecommerce\Repositories\Interfaces\ShipmentInterface;
use Botble\Ecommerce\Tables\ShipmentTable;
use Botble\Marketplace\Repositories\Interfaces\CommissionsInterface;
use Carbon\Carbon;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\View\View;
use OrderHelper;
use Throwable;
use Str;

class ShipmentController extends BaseController
{
    /**
     * @var OrderInterface
     */
    protected $orderRepository;

    /**
     * @var ShipmentInterface
     */
    protected $shipmentRepository;

    /**
     * @var OrderHistoryInterface
     */
    protected $orderHistoryRepository;

    /**
     * @var ShipmentHistoryInterface
     */
    protected $shipmentHistoryRepository;

    protected $commissionRepository;
    protected $customerRepository;
    /**
     * @param OrderInterface $orderRepository
     * @param ShipmentInterface $shipmentRepository
     * @param OrderHistoryInterface $orderHistoryRepository
     * @param ShipmentHistoryInterface $shipmentHistoryRepository
     */
    public function __construct(
        OrderInterface $orderRepository,
        ShipmentInterface $shipmentRepository,
        OrderHistoryInterface $orderHistoryRepository,
        ShipmentHistoryInterface $shipmentHistoryRepository,
        CommissionsInterface $commissionRepository,
        CustomerInterface $customerRepository
    ) {
        $this->orderRepository = $orderRepository;
        $this->shipmentRepository = $shipmentRepository;
        $this->orderHistoryRepository = $orderHistoryRepository;
        $this->shipmentHistoryRepository = $shipmentHistoryRepository;
        $this->commissionRepository = $commissionRepository;
        $this->customerRepository = $customerRepository;
    }

    /**
     * @param ShipmentTable $dataTable
     * @return Factory|View
     *
     * @throws Throwable
     */
    public function index(ShipmentTable $dataTable)
    {
        page_title()->setTitle(trans('plugins/ecommerce::shipping.shipments'));

        return $dataTable->renderTable();
    }

    /**
     * @param int $id
     * @return Factory|View
     */
    public function edit($id)
    {
        Assets::addStylesDirectly('vendor/core/plugins/ecommerce/css/ecommerce.css')
            ->addScriptsDirectly('vendor/core/plugins/ecommerce/js/shipment.js');

        $shipment = $this->shipmentRepository->findOrFail($id);
        page_title()->setTitle(trans('plugins/ecommerce::shipping.edit_shipping', ['code' => get_shipment_code($id)]));

        return view('plugins/ecommerce::shipments.edit', compact('shipment'));
    }

    /**
     * @param int $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function postUpdateStatus($id, Request $request, BaseHttpResponse $response)
    {
        $shipment = $this->shipmentRepository->findOrFail($id);
        $this->shipmentRepository->createOrUpdate(['status' => $request->input('status')], compact('id'));

        $this->shipmentHistoryRepository->createOrUpdate([
            'action'      => 'update_status',
            'description' => trans('plugins/ecommerce::shipping.changed_shipping_status', [
                'status' => ShippingStatusEnum::getLabel($request->input('status')),
            ]),
            'shipment_id' => $id,
            'order_id'    => $shipment->order_id,
            'user_id'     => Auth::id() ?? 0,
        ]);
        switch (Str::lower($request->input('status'))) {
            case ShippingStatusEnum::DELIVERED:
                $shipment->date_shipped = now();
                $shipment->save();

                $order = $this->orderRepository->createOrUpdate(
                    ['status' => OrderStatusEnum::COMPLETED],
                    ['id' => $shipment->order_id]
                );

                event(new OrderCompletedEvent($order));

                do_action(ACTION_AFTER_ORDER_STATUS_COMPELETED_ECOMMERCE, $order, $request);

                $this->orderHistoryRepository->createOrUpdate([
                    'action'      => 'update_status',
                    'description' => trans('plugins/ecommerce::shipping.order_confirmed_by'),
                    'order_id'    => $shipment->order_id,
                    'user_id'     => Auth::id() ?? 0,
                ]);

                break;
            case ShippingStatusEnum::CANCELED:
                $this->orderHistoryRepository->createOrUpdate([
                    'action'      => 'cancel_shipment',
                    'description' => trans('plugins/ecommerce::shipping.shipping_canceled_by'),
                    'order_id'    => $shipment->order_id,
                    'user_id'     => Auth::id(),
                ]);

                break;
            case ShippingStatusEnum::APPROVED:
                try {

                $clientID = setting('247_client_id','30642');
                $token = setting('247_token','59fff64eda59c6fd0948dbc08075a349b9e54a93dea314c3f8161a6cb5f81fc3');
                $order = $this->orderRepository->findOrFail($shipment->order_id);
                $order_address = $order->address;

                $rawData = [
                    'OrderInfo'=>[
                        'ClientHubID'=>'46238',
                        'CusWareHouseID'=>'46238',
                        'ContactName'=>'Nguyễn Thành An',
                        'ContactPhone'=>'0979823452',
                        'ReceiverPhone'=>$order_address->phone,
                        'ReceiverName'=>$order_address->name,
                        'ReceiverAddress'=>$order_address->address,
                        'ReceiverProvinceName'=>$order_address->city,
                        'ReceiverDistrictName'=>$order_address->state,
                        'ReceiverWardName'=>'Xã An Khánh',
                        'RealWeight'=>($shipment->weight/1000),
                        'Length'=>10,
                        'Width'=>10,
                        'Height'=>10,
                        'Quantity'=>1,
                        'Note'=>'Hàng hóa',
                        'ServiceTypeID'=>'DE',
                        'MailerType'=>'HH',
                        'CODAmount'=>0,
                        'ExternalCode'=>$order->id,
                        'SpecialInstructionId'=>'',
                        'InformFee'=>$order->amount,
                        'ExtraServices'=>[],
                        'Items'=>[
                            [
                                'No'=>'1',
                                'ItemID'=>'product01',
                                'ItemName'=>'Sản phẩm test',
                                'UnitName'=>'Gói',
                                'Qty'=>'1',
                                'UnitPrice'=>'20000',
                                'UnitPricePromo'=>'20000',
                                'Amount'=>'20000',
                                'Notes'=>'không'
                            ],

                        ]
                    ]
                ];

                    $res = Http::withHeaders([
                        'Content-Type' => 'application/json',
                        'ClientID' => $clientID,
                        'Token' => $token
                    ])->post('http://stg.247post.vn:51099/Api/Customer/CustomerAPICreateOrder', $rawData)
                        ->throw(function ($response, $e) {
                            return ['error' => $response['ErrorMessage']];
                        });
                    if ($res->successful()) {
                        $resData = $res->json();
                        $shipment->tracking_id = $resData['ErrorCode'] == 0 ? $resData['OrderInfo']['OrderCode'] : $resData['ErrorMessage'];
                        $shipment->save();
                        return $response->setMessage($resData['ErrorCode'] == 0 ? $resData['OrderInfo']['OrderCode'] : $resData['ErrorMessage']);
                    }else{
                        $resData = $res->json();
                        return $response->setMessage($resData['ErrorMessage']);
                    }
                }catch (\Exception $e){
                    return $response->setMessage($e->getMessage());
                }
                break;
        }

        return $response->setMessage(trans('plugins/ecommerce::shipping.update_shipping_status_success'));
    }

    /**
     * @param int $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function postUpdateCodStatus($id, Request $request, BaseHttpResponse $response)
    {
        $shipment = $this->shipmentRepository->findOrFail($id);

        $this->shipmentRepository->createOrUpdate(['cod_status' => $request->input('status')], compact('id'));

        if ($request->input('status') == ShippingCodStatusEnum::COMPLETED) {
            OrderHelper::confirmPayment($shipment->order);
        }

        $this->shipmentHistoryRepository->createOrUpdate([
            'action'      => 'update_cod_status',
            'description' => trans('plugins/ecommerce::shipping.updated_cod_status_by', [
                'status' => ShippingCodStatusEnum::getLabel($request->input('status')),
            ]),
            'shipment_id' => $id,
            'order_id'    => $shipment->order_id,
            'user_id'     => Auth::id() ?? 0,
        ]);

        return $response->setMessage(trans('plugins/ecommerce::shipping.update_cod_status_success'));
    }

    /**
     * @param int $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, Request $request, BaseHttpResponse $response)
    {
        $shipment = $this->shipmentRepository->findOrFail($id);

        $shipment->fill($request->only([
            'tracking_id',
            'shipping_company_name',
            'tracking_link',
            'estimate_date_shipped',
            'note',
        ]));

        $this->shipmentRepository->createOrUpdate($shipment);

        return $response
            ->setPreviousUrl(route('posts.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }
}
