<?php

namespace Botble\Ecommerce\Http\Controllers\Fronts;

use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Enums\OrderStatusEnum;
use Botble\Ecommerce\Enums\ShippingMethodEnum;
use Botble\Ecommerce\Events\OrderPlacedEvent;
use Botble\Ecommerce\Http\Requests\ApplyCouponRequest;
use Botble\Ecommerce\Http\Requests\CheckoutRequest;
use Botble\Ecommerce\Http\Requests\SaveCheckoutInformationRequest;
use Botble\Ecommerce\Repositories\Interfaces\AddressInterface;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\DiscountInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderAddressInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderHistoryInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderProductInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductInterface;
use Botble\Ecommerce\Repositories\Interfaces\ShippingInterface;
use Botble\Ecommerce\Repositories\Interfaces\TaxInterface;
use Botble\Ecommerce\Services\HandleApplyCouponService;
use Botble\Ecommerce\Services\HandleApplyPromotionsService;
use Botble\Ecommerce\Services\HandleRemoveCouponService;
use Botble\Ecommerce\Services\HandleShippingFeeService;
use Botble\Marketplace\Models\Commissions;
use Botble\Payment\Enums\PaymentMethodEnum;
use Botble\Payment\Http\Requests\PayPalPaymentCallbackRequest;
use Botble\Payment\Repositories\Interfaces\PaymentInterface;
use Botble\Payment\Services\Abstracts\VnpayService;
use Botble\Payment\Services\Gateways\BankTransferPaymentService;
use Botble\Payment\Services\Gateways\CodPaymentService;
use Botble\Payment\Services\Gateways\PayPalPaymentService;
use Botble\Payment\Services\Gateways\StripePaymentService;
use Botble\Payment\Supports\PaymentHelper;
use Carbon\Carbon;
use Cart;
use EcommerceHelper;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\View\View;
use OrderHelper;
//use Telegram\Bot\Laravel\Facades\Telegram;
use Theme;
use Validator;
use Str;
use Exception;
use DB;
use Botble\Marketplace\Repositories\Interfaces\CommissionsInterface;
class PublicCheckoutController
{
    /**
     * @var TaxInterface
     */
    protected $taxRepository;

    /**
     * @var OrderInterface
     */
    protected $orderRepository;

    /**
     * @var OrderProductInterface
     */
    protected $orderProductRepository;

    /**
     * @var OrderAddressInterface
     */
    protected $orderAddressRepository;

    /**
     * @var AddressInterface
     */
    protected $addressRepository;

    /**
     * @var CustomerInterface
     */
    protected $customerRepository;

    /**
     * @var ShippingInterface
     */
    protected $shippingRepository;

    /**
     * @var OrderHistoryInterface
     */
    protected $orderHistoryRepository;

    /**
     * @var ProductInterface
     */
    protected $productRepository;

    /**
     * @var DiscountInterface
     */
    protected $discountRepository;

    protected $comissionsRepo;

    /**
     * PublicCheckoutController constructor.
     * @param TaxInterface $taxRepository
     * @param OrderInterface $orderRepository
     * @param OrderProductInterface $orderProductRepository
     * @param OrderAddressInterface $orderAddressRepository
     * @param AddressInterface $addressRepository
     * @param CustomerInterface $customerRepository
     * @param ShippingInterface $shippingRepository
     * @param OrderHistoryInterface $orderHistoryRepository
     * @param ProductInterface $productRepository
     * @param DiscountInterface $discountRepository
     */
    public function __construct(
        TaxInterface $taxRepository,
        OrderInterface $orderRepository,
        OrderProductInterface $orderProductRepository,
        OrderAddressInterface $orderAddressRepository,
        AddressInterface $addressRepository,
        CustomerInterface $customerRepository,
        ShippingInterface $shippingRepository,
        OrderHistoryInterface $orderHistoryRepository,
        ProductInterface $productRepository,
        DiscountInterface $discountRepository,
        CommissionsInterface $commisionRepository
    ) {
        $this->taxRepository = $taxRepository;
        $this->orderRepository = $orderRepository;
        $this->orderProductRepository = $orderProductRepository;
        $this->orderAddressRepository = $orderAddressRepository;
        $this->addressRepository = $addressRepository;
        $this->customerRepository = $customerRepository;
        $this->shippingRepository = $shippingRepository;
        $this->orderHistoryRepository = $orderHistoryRepository;
        $this->productRepository = $productRepository;
        $this->discountRepository = $discountRepository;
        $this->comissionsRepo = $commisionRepository;
    }

    /**
     * @param string $token
     * @param BaseHttpResponse $response
     * @param HandleApplyPromotionsService $applyPromotionsService
     * @return BaseHttpResponse|Application|Factory|View
     */
    public function getCheckout(
        $token,
        Request $request,
        BaseHttpResponse $response,
        HandleShippingFeeService $shippingFeeService,
        HandleApplyCouponService $applyCouponService,
        HandleRemoveCouponService $removeCouponService,
        HandleApplyPromotionsService $applyPromotionsService
    ) {
        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }

        if (!EcommerceHelper::isEnabledGuestCheckout() && !auth('customer')->check()) {
            return $response->setNextUrl(route('customer.login'));
        }

        if ($token !== session('tracked_start_checkout')) {
            $order = $this->orderRepository->getFirstBy(['token' => $token, 'is_finished' => false]);
            if (!$order) {
                return $response->setNextUrl(route('public.index'));
            }
        }

        $sessionCheckoutData = OrderHelper::getOrderSessionData($token);

        //---------------------------------- Optimize
        [$products, $weight] = $this->getProductsInCart();
        if (!$products->count()) {
            return $response->setNextUrl(route('public.cart'));
        }

        foreach ($products as $product) {
            if ($product->isOutOfStock()) {
                return $response
                    ->setError()
                    ->setNextUrl(route('public.cart'))
                    ->setMessage(__('Product :product is out of stock!', ['product' => $product->original_product->name]));
            }
        }

        $sessionCheckoutData = $this->processOrderData($token, $sessionCheckoutData, $request);

        if (is_plugin_active('marketplace')) {
            [
                $sessionCheckoutData,
                $shipping,
                $defaultShippingMethod,
                $defaultShippingOption,
                $shippingAmount,
                $promotionDiscountAmount,
                $couponDiscountAmount,
            ] = apply_filters(PROCESS_CHECKOUT_ORDER_DATA_ECOMMERCE, $products, $token, $sessionCheckoutData, $request);
        } else {

            $promotionDiscountAmount = $applyPromotionsService->execute($token);

            $sessionCheckoutData['promotion_discount_amount'] = $promotionDiscountAmount;

            $couponDiscountAmount = 0;
            if (session()->has('applied_coupon_code')) {
                $couponDiscountAmount = Arr::get($sessionCheckoutData, 'coupon_discount_amount', 0);
            }

            $orderTotal = Cart::instance('cart')->rawTotal() - $promotionDiscountAmount;
            $orderTotal = $orderTotal > 0 ? $orderTotal : 0;

            $shippingData = [
                'address'     => isset($loggedInAddress->address) ? $loggedInAddress->address : Arr::get($sessionCheckoutData, 'address'),
                'country'     => Arr::get($sessionCheckoutData, 'country'),
                'state'       => isset($loggedInAddress->state) ? $loggedInAddress->state : Arr::get($sessionCheckoutData, 'state'),
                'city'        => isset($loggedInAddress->city) ? $loggedInAddress->city : Arr::get($sessionCheckoutData, 'city'),
                'ward'        => isset($loggedInAddress->ward) ? $loggedInAddress->ward : Arr::get($sessionCheckoutData, 'ward'),
                'weight'      => $weight,
                'order_total' => $orderTotal,
            ];

            if ($request->get('receiver_province') != null && $request->get('receiver_district') != null) {
                $shippingData['city'] = $request->get('receiver_province');
                $shippingData['state'] = $request->get('receiver_district');
            }

//            if (EcommerceHelper::isUsingInMultipleCountries()) {
//                $shippingData['country'] = Arr::get($sessionCheckoutData, 'country');
//            } else {
//                $shippingData['country'] = EcommerceHelper::getFirstCountryId();
//            }

//            $shipping = $shippingFeeService->execute($shippingData);

//            $shippingMethod = 'bestexpress';
            $shippingMethod = 'haibonbay';
            // Tính phí ship
            $shipping = $shippingFeeService->execute($shippingData, $shippingMethod);


            foreach ($shipping as $key => &$shipItem) {
                if (get_shipping_setting('free_ship', $key)) {
                    foreach ($shipItem as &$subShippingItem) {
                        Arr::set($subShippingItem, 'price', 0);
                    }
                }
            }

            $defaultShippingMethod = $request->input('shipping_method',
                old('shipping_method',
                    Arr::get($sessionCheckoutData, 'shipping_method', Arr::first(array_keys($shipping)))));

            $defaultShippingOption = null;
            if (!empty($shipping)) {
                $defaultShippingOption = Arr::first(array_keys(Arr::first($shipping)));
                $defaultShippingOption = $request->input('shipping_option',
                    old('shipping_option', Arr::get($sessionCheckoutData, 'shipping_option', $defaultShippingOption)));
            }

            $shippingAmount = Arr::get($shipping, $defaultShippingMethod . '.' . $defaultShippingOption . '.price', 0);

            Arr::set($sessionCheckoutData, 'shipping_method', $defaultShippingMethod);
            Arr::set($sessionCheckoutData, 'shipping_option', $defaultShippingOption);
            Arr::set($sessionCheckoutData, 'shipping_amount', $shippingAmount);
            OrderHelper::setOrderSessionData($token, $sessionCheckoutData);

            if (session()->has('applied_coupon_code')) {
                if (!$request->input('applied_coupon')) {
                    $discount = $applyCouponService->getCouponData(session('applied_coupon_code'),
                        $sessionCheckoutData);
                    if (empty($discount)) {
                        $removeCouponService->execute();
                    } else {
                        $shippingAmount = Arr::get($sessionCheckoutData, 'is_free_shipping') ? 0 : $shippingAmount;
                    }
                } else {
                    $shippingAmount = Arr::get($sessionCheckoutData, 'is_free_shipping') ? 0 : $shippingAmount;
                }
            }
        }

        $payWithUbgXu = false;
        if ($request->get('pay_with_ubgxu') != null && $request->get('pay_with_ubgxu') == 'true') {
            $payWithUbgXu = true;
        }

        $data = compact(
            'token',
            'shipping',
            'defaultShippingMethod',
            'defaultShippingOption',
            'shippingAmount',
            'promotionDiscountAmount',
            'couponDiscountAmount',
            'sessionCheckoutData',
            'products',
            'payWithUbgXu'
        );
        $checkoutView = Theme::getThemeNamespace() . '::views.ecommerce.orders.checkout';
        if (view()->exists($checkoutView)) {
            return view($checkoutView, $data);
        }
//        dd($shipping);
        return view('plugins/ecommerce::orders.checkout', $data);
    }

    /**
     * @return array
     */
    protected function getProductsInCart(): array
    {
        $products = Cart::instance('cart')->products();
        $weight = Cart::instance('cart')->weight();

        return [$products, $weight];
    }

    /**
     * @param string $token
     * @param array $sessionData
     * @param Request $request
     * @param bool $finished
     * @return array
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function processOrderData(string $token, array $sessionData, Request $request, bool $finished = false): array
    {
        if ($request->input('address', [])) {
            if (!isset($sessionData['created_account']) && $request->input('create_account') == 1) {
                $validator = Validator::make($request->input(), [
                    'password'              => 'required|min:6',
                    'password_confirmation' => 'required|same:password',
                    'address.email'         => 'required|max:60|min:6|email|unique:ec_customers,email',
                    'address.name'          => 'required|min:3|max:120',
                ]);

                if (!$validator->fails()) {

                    $customer = $this->customerRepository->createOrUpdate([
                        'name'     => clean($request->input('address.name')),
                        'email'    => clean($request->input('address.email')),
                        'phone'    => clean($request->input('address.phone')),
                        'password' => bcrypt($request->input('password')),
                    ]);

                    auth('customer')->attempt([
                        'email'    => $request->input('address.email'),
                        'password' => $request->input('password'),
                    ], true);

                    event(new Registered($customer));

                    $sessionData['created_account'] = true;

                    $address = $this->addressRepository->createOrUpdate($request->input('address') + [
                        'customer_id' => $customer->id,
                        'is_default'  => true,
                    ]);

                    $request->merge(['address.address_id' => $address->id]);
                    $sessionData['address_id'] = $address->id;
                }
            }

            if ($finished && auth('customer')->check() && (auth('customer')->user()->addresses()->count() == 0 || $request->input('address.address_id') == 'new')) {
                $address = $this->addressRepository->createOrUpdate($request->input('address', []) +
                    ['customer_id' => auth('customer')->id(), 'is_default' => auth('customer')->user()->addresses()->count() == 0]);

                $request->merge(['address.address_id' => $address->id]);
                $sessionData['address_id'] = $address->id;
            }
        }

        if (is_plugin_active('marketplace')) {
            $products = Cart::instance('cart')->products();

            $sessionData = apply_filters(HANDLE_PROCESS_ORDER_DATA_ECOMMERCE, $products, $token, $sessionData,
                $request);

            OrderHelper::setOrderSessionData($token, $sessionData);

            return $sessionData;
        }

        if (!isset($sessionData['created_order'])) {
            $currentUserId = 0;
            if (auth('customer')->check()) {
                $currentUserId = auth('customer')->id();
            }

            //check ctv
            $affiliateId = 0;
            if (auth('customer')->check()) {
                $affiliateId = auth('customer')->user()->presenter_id;
            }

            $request->merge([
                'amount'          => Cart::instance('cart')->rawTotal(),
                'user_id'         => $currentUserId,
                'shipping_method' => $request->input('shipping_method', ShippingMethodEnum::DEFAULT),
                'shipping_option' => $request->input('shipping_option'),
                'shipping_amount' => 0,
                'tax_amount'      => Cart::instance('cart')->rawTax(),
                'sub_total'       => Cart::instance('cart')->rawSubTotal(),
                'coupon_code'     => session()->get('applied_coupon_code'),
                'discount_amount' => 0,
                'status'          => OrderStatusEnum::PENDING,
                'is_finished'     => false,
                'token'           => $token,
                'affliate_user_id' => $affiliateId
            ]);

            $order = $this->orderRepository->getFirstBy(compact('token'));

            if ($order) {
                $order->fill($request->input());
                $order = $this->orderRepository->createOrUpdate($order);
            } else {
                $order = $this->orderRepository->createOrUpdate($request->input());
            }

            $sessionData['created_order'] = true;
            $sessionData['created_order_id'] = $order->id;
        }

        $address = null;

        if ($request->input('address.address_id') && $request->input('address.address_id') !== 'new') {
            $address = $this->addressRepository->findById($request->input('address.address_id'));
            if (!empty($address)) {
                $sessionData['address_id'] = $address->id;
                $sessionData['created_order_address_id'] = $address->id;
            }
        } elseif (auth('customer')->check() && !Arr::get($sessionData, 'address_id')) {
            $address = $this->addressRepository->getFirstBy([
                'customer_id' => auth('customer')->id(),
                'is_default'  => true,
            ]);

            if ($address) {
                $sessionData['address_id'] = $address->id;
            }
        }

        if (Arr::get($sessionData, 'address_id') && Arr::get($sessionData, 'address_id') !== 'new') {
            $address = $this->addressRepository->findById(Arr::get($sessionData, 'address_id'));
        }

        $addressData = [];
        if (!empty($address)) {
            $addressData = [
                'name'       => $address->name,
                'phone'      => $address->phone,
                'email'      => $address->email,
                'country'    => $address->country,
                'state'      => $address->state,
                'city'       => $address->city,
                'ward'       => $address->ward,
                'address'    => $address->address,
                'zip_code'   => $address->zip_code,
                'order_id'   => $sessionData['created_order_id'],
                'address_id' => $address->id,
            ];
        } elseif ((array)$request->input('address', [])) {
            $addressData = array_merge(['order_id' => $sessionData['created_order_id']],
                (array)$request->input('address', []));
        }

        foreach ($addressData as $key => $addressItem) {
            if (!is_string($addressItem)) {
                continue;
            }

            $addressData[$key] = clean($addressItem);
        }

        if ($addressData && !empty($addressData['name']) && (EcommerceHelper::isPhoneFieldOptionalAtCheckout() || !empty($addressData['phone'])) && !empty($addressData['address'])) {
            if (!isset($sessionData['created_order_address'])) {
                $createdOrderAddress = $this->createOrderAddress($addressData,
                    Arr::get($addressData, 'created_order_id'));
                if ($createdOrderAddress) {
                    $sessionData['created_order_address'] = true;
                    $sessionData['created_order_address_id'] = $createdOrderAddress->id;
                }
            } elseif (!empty($sessionData['created_order_id'])) {
                $this->createOrderAddress($addressData,
                    $sessionData['created_order_id'] ?: Arr::get($addressData, 'address_id'));
            }
        }

        $sessionData = array_merge($sessionData, $addressData);

        if (!isset($sessionData['created_order_product'])) {
            $weight = 0;
            foreach (Cart::instance('cart')->content() as $cartItem) {
                $product = $this->productRepository->findById($cartItem->id);
                if ($product) {
                    if ($product->weight) {
                        $weight += $product->weight * $cartItem->qty;
                    }
                }
            }

            $weight = $weight > 0.1 ? $weight : 0.1;

            $this->orderProductRepository->deleteBy(['order_id' => $sessionData['created_order_id']]);

            foreach (Cart::instance('cart')->content() as $cartItem) {
                $data = [
                    'order_id'     => $sessionData['created_order_id'],
                    'product_id'   => $cartItem->id,
                    'product_name' => $cartItem->name,
                    'qty'          => $cartItem->qty,
                    'weight'       => $weight,
                    'price'        => $cartItem->price,
                    'tax_amount'   => $cartItem->tax,
                    'options'      => [],
                ];

                if ($cartItem->options->extras) {
                    $data['options'] = $cartItem->options->extras;
                }

                $this->orderProductRepository->create($data);
            }

            $sessionData['created_order_product'] = Cart::instance('cart')->getLastUpdatedAt();
        }

        OrderHelper::setOrderSessionData($token, $sessionData);

        return $sessionData;
    }

    /**
     * @param array $data
     * @return false|mixed
     */
    protected function createOrderAddress(array $data, $orderId = null)
    {
        if ($orderId) {
            return $this->orderAddressRepository->createOrUpdate($data, ['order_id' => $orderId]);
        }

        $rules = [
            'name'    => 'required|max:255',
            'email'   => 'email|nullable|max:60',
            'state'   => 'required|max:120',
            'city'    => 'required|max:120',
            'address' => 'required|max:120',
            'phone'   => EcommerceHelper::getPhoneValidationRule(),
        ];

        if (EcommerceHelper::isZipCodeEnabled()) {
            $rules['zip_code'] = 'required|max:20';
        }

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            return false;
        }

        return $this->orderAddressRepository->create($data);
    }

    /**
     * @param string $token
     * @param SaveCheckoutInformationRequest $request
     * @param BaseHttpResponse $response
     * @param HandleApplyCouponService $applyCouponService
     * @param HandleRemoveCouponService $removeCouponService
     * @return BaseHttpResponse
     */
    public function postSaveInformation(
        $token,
        SaveCheckoutInformationRequest $request,
        BaseHttpResponse $response,
        HandleApplyCouponService $applyCouponService,
        HandleRemoveCouponService $removeCouponService
    ) {
        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }

        if ($token !== session('tracked_start_checkout')) {
            $order = $this->orderRepository->getFirstBy(['token' => $token, 'is_finished' => false]);
            if (!$order) {
                return $response->setNextUrl(route('public.index'));
            }
        }

        if (is_plugin_active('marketplace')) {
            $sessionData = array_merge(OrderHelper::getOrderSessionData($token), $request->input('address'));
            $sessionData = apply_filters(PROCESS_POST_SAVE_INFORMATION_CHECKOUT_ECOMMERCE, $sessionData, $request,
                $token);
        } else {
            $sessionData = array_merge(OrderHelper::getOrderSessionData($token), $request->input('address'));
            OrderHelper::setOrderSessionData($token, $sessionData);
            if (session()->has('applied_coupon_code')) {
                $discount = $applyCouponService->getCouponData(session('applied_coupon_code'), $sessionData);
                if (empty($discount)) {
                    $removeCouponService->execute();
                }
            }
        }

        $this->processOrderData($token, $sessionData, $request);

        return $response->setData($sessionData);
    }

    /**
     * @param string $token
     * @param CheckoutRequest $request
     * @param PayPalPaymentService $palPaymentService
     * @param StripePaymentService $stripePaymentService
     * @param BaseHttpResponse $response
     * @param HandleShippingFeeService $shippingFeeService
     * @param HandleApplyCouponService $applyCouponService
     * @param HandleRemoveCouponService $removeCouponService
     * @param HandleApplyPromotionsService $handleApplyPromotionsService
     * @return mixed
     */
    public function postCheckout(
        $token,
        CheckoutRequest $request,
        PayPalPaymentService $payPalService,
        StripePaymentService $stripePaymentService,
        CodPaymentService $codPaymentService,
        BankTransferPaymentService $bankTransferPaymentService,
        BaseHttpResponse $response,
        HandleShippingFeeService $shippingFeeService,
        HandleApplyCouponService $applyCouponService,
        HandleRemoveCouponService $removeCouponService,
        HandleApplyPromotionsService $handleApplyPromotionsService
    ) {


        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }

        if (!EcommerceHelper::isEnabledGuestCheckout() && !auth('customer')->check()) {
            return $response->setNextUrl(route('customer.login'));
        }

        if (!Cart::instance('cart')->count()) {
            return $response
                ->setError()
                ->setMessage(__('No products in cart'));
        }

        if (EcommerceHelper::getMinimumOrderAmount() > Cart::instance('cart')->rawSubTotal()) {
            return $response
                ->setError()
                ->setMessage(__('Minimum order amount is :amount, you need to buy more :more to place an order!', [
                    'amount' => format_price(EcommerceHelper::getMinimumOrderAmount()),
                    'more'   => format_price(EcommerceHelper::getMinimumOrderAmount() - Cart::instance('cart')
                            ->rawSubTotal()),
                ]));
        }

        //chức năng tạo hoa hồng cho người tiêu dùng , đại lý
        $orders = $this->orderRepository->getFirstBy(compact('token'));
        $currentUserIdd = 0;
        if (auth('customer')->check()) {
            $currentUserIdd = auth('customer')->id();
        }
        $affiliateIdd = 0;
        if (auth('customer')->check()) {
            $affiliateIdd = auth('customer')->user()->presenter_id;
        }
        $userLogin = auth('customer')->user();
       $level_1 = intval(get_ecommerce_setting('consumer_level_1'));
        $level_2 = intval(get_ecommerce_setting('consumer_level_2'));
        $level_3 = intval(get_ecommerce_setting('consumer_level_3'));
        $agency = intval(get_ecommerce_setting('agency_level'));

        foreach(Cart::instance('cart')->content() as $cartItem){
            //create commission for customer
            $myproduct = $this->productRepository->findById($cartItem->id);
            //Số phần trăm mà nhà cung cấp chiết khấu cho sản phẩm
            $productComissionPercent = $myproduct->commission;
            //Số tiền chiết khấu
            $moneyComit = ($cartItem->price*$cartItem->qty) * ($productComissionPercent/100);
            //Chiết khấu cộng đồng người tiêu dùng bằng 60%
            $moneyCommission = $moneyComit*(60/100);

            $commissionAmount = $moneyCommission * ($level_1/100);
            //người tiêu dùng
            try {
                    //cộng tiền 5% cho người tiêu dùng mua hàng
                    $comiss = [
                        'customer_id' => $currentUserIdd,
                        'customer_level' => 1,
                        'presenter_id' => $affiliateIdd,
                        'product_id' => $cartItem->id,
                        'order_id' => $orders->id,
                        'amount' => $cartItem->price*$cartItem->qty,
                        'percentage' => $level_1,
                        'commission' => $commissionAmount,
                        'description' => 'Tiền hoa hồng cho người tiêu dùng',
                        'is_agency' => 0,
                        'status' => 'disable'
                    ];
                    $consumer = $this->comissionsRepo->create($comiss);

                if ($affiliateIdd != 0) {
                    $userLv2 = $this->customerRepository->getModel()->where('id', $affiliateIdd)->first();
                    //nếu người giới thiệu lv2 là đại lý
//                    if($userLv2->is_affiliater==1){
//                        $commissionAcency = $moneyCommission * ($agency/100);
//                        $comissDL = [
//                            'customer_id' => $userLv2->id,
//                            'customer_level' => 4,
//                            'presenter_id' => $userLv2->presenter_id,
//                            'product_id' => $cartItem->id,
//                            'order_id' => $orders->id,
//                            'amount' => $cartItem->price*$cartItem->qty,
//                            'percentage' => $agency,
//                            'commission' => $commissionAcency,
//                            'description' => 'Tiền hoa hồng cho tài khoản đại lý',
//                            'is_agency' => 1,
//                            'status' => 'disable'
//                        ];
//                        $daily1 = $this->comissionsRepo->create($comissDL);
//                    }
                    $affiliateId2 = 0;
                    //Người giới thiệu lv3
                    if (!is_null($userLv2->presenter_id) || $userLv2->presenter_id != 0) {
                        $affiliateId2 = $userLv2->presenter_id;
                        $userLv3 = $this->customerRepository->getModel()->where('id', $affiliateId2)->first();
                        $commissionAmountLv3 = $moneyCommission * ($level_3 / 100);
                        $commissLv3 = [
                            'customer_id' => $affiliateId2,
                            'customer_level' => 3,
                            'presenter_id' => 0,
                            'product_id' => $cartItem->id,
                            'order_id' => $orders->id,
                            'amount' => $cartItem->price*$cartItem->qty,
                            'percentage' => $level_3,
                            'commission' => $commissionAmountLv3,
                            'description' => 'Tiền hoa hồng cho người giới thiệu vị trí 3',
                            'is_agency' => 0,
                            'status' => 'disable'
                        ];
                        $this->comissionsRepo->create($commissLv3);
                        //nếu người giới thiệu lv3 là đại lý
                        if($userLv3->is_affiliater==1){
                            $commissionAcency2 = $moneyCommission * ($agency/100);
                            $comissDL2 = [
                                'customer_id' => $userLv3->id,
                                'customer_level' => 4,
                                'presenter_id' => $userLv3->presenter_id,
                                'product_id' => $cartItem->id,
                                'order_id' => $orders->id,
                                'amount' => $cartItem->price*$cartItem->qty,
                                'percentage' => $agency,
                                'commission' => $commissionAcency2,
                                'description' => 'Tiền hoa hồng cho tài khoản đại lý',
                                'is_agency' => 1,
                                'status' => 'disable'
                            ];
                            $daily2 = $this->comissionsRepo->create($comissDL2);
                        }
                    }
                    //người giới thiệu lv2
                    $commissionAmountLv2 = $moneyCommission * ($level_2 / 100);
                    $comissAff = [
                        'customer_id' => $affiliateIdd,
                        'customer_level' => 2,
                        'presenter_id' => $affiliateId2,
                        'product_id' => $cartItem->id,
                        'order_id' => $orders->id,
                        'amount' => $cartItem->price*$cartItem->qty,
                        'percentage' => $level_2,
                        'commission' => $commissionAmountLv2,
                        'description' => 'Tiền hoa hồng cho người giới thiệu',
                        'is_agency' => 0,
                        'status' => 'disable'
                    ];
                    $this->comissionsRepo->create($comissAff);
                }

            }catch(Exception $e){
                return redirect()->back()->with($e->getMessage());
            }
        }

//        dd('ok');

        $sessionData = OrderHelper::getOrderSessionData($token);

        $this->processOrderData($token, $sessionData, $request, true);

        if (is_plugin_active('marketplace')) {
            $products = Cart::instance('cart')->products();

            foreach ($products as $product) {
                if ($product->isOutOfStock()) {
                    return $response
                        ->setError()
                        ->setMessage(__('Product :product is out of stock!', ['product' => $product->original_product->name]));
                }
            }

            return apply_filters(
                HANDLE_PROCESS_POST_CHECKOUT_ORDER_DATA_ECOMMERCE,
                $products,
                $request,
                $token,
                $sessionData,
                $response
            );
        }

        $weight = 0;
        foreach (Cart::instance('cart')->content() as $cartItem) {
            $product = $this->productRepository->findById($cartItem->id);
            if ($product) {
                if ($product->isOutOfStock()) {
                    return $response
                        ->setError()
                        ->setMessage(__('Product :product is out of stock!', ['product' => $product->original_product->name]));
                }

                if ($product->weight) {
                    $weight += $product->weight * $cartItem->qty;
                }
            }
        }

        $weight = $weight < 0.1 ? 0.1 : $weight;

        $promotionDiscountAmount = $handleApplyPromotionsService->execute($token);
        $couponDiscountAmount = Arr::get($sessionData, 'coupon_discount_amount');

        $shippingAmount = 0;

        if ($request->has('shipping_method') && !get_shipping_setting('free_ship',
                $request->input('shipping_method'))) {

            $shippingData = [
                'address'     => isset($loggedInAddress->address) ? $loggedInAddress->address : Arr::get($sessionData, 'address'),
                'country'     => Arr::get($sessionData, 'country'),
                'state'       => isset($loggedInAddress->state) ? $loggedInAddress->state : Arr::get($sessionData, 'state'),
                'city'        => isset($loggedInAddress->city) ? $loggedInAddress->city : Arr::get($sessionData, 'city'),
                'weight'      => $weight,
                'order_total' => Cart::instance('cart')->rawTotal() - $promotionDiscountAmount - $couponDiscountAmount,
            ];

            $shippingMethod = $shippingFeeService->execute($shippingData, $request->input('shipping_method'),
                $request->input('shipping_option'));

            $shippingAmount = Arr::get(Arr::first($shippingMethod), 'bestexpress.price', 0);
        }

        if (session()->has('applied_coupon_code')) {
            $discount = $applyCouponService->getCouponData(session('applied_coupon_code'), $sessionData);
            if (empty($discount)) {
                $removeCouponService->execute();
            } else {
                $shippingAmount = Arr::get($sessionData, 'is_free_shipping') ? 0 : $shippingAmount;
            }
        }

        $currentUserId = 0;
        if (auth('customer')->check()) {
            $currentUserId = auth('customer')->id();
        }

        $amount = Cart::instance('cart')->rawTotal() + (float)$shippingAmount - $promotionDiscountAmount - $couponDiscountAmount;

        //check ctv
        $affiliateId = 0;
        if (auth('customer')->check()) {
            $affiliateId = auth('customer')->user()->presenter_id;
        }



        //Xử lý xu

        $paidWithUbgXu = $request->get('ubg_xu_checkout') == 'on';

        $paidUbgXuAmount = 0;

        if ($paidWithUbgXu) {
            $ubgxu = auth('customer')->user()->ubgxu;
            if ($ubgxu >= $amount) {
                $amount -= Cart::instance('cart');
                $paidUbgXuAmount = Cart::instance('cart');
            } else {
                $amount -= $ubgxu;
                $paidUbgXuAmount = $ubgxu;
            }
        }

        $request->merge([
            'amount'          => $amount ?: 0,
            'currency'        => $request->input('currency', strtoupper(get_application_currency()->title)),
            'user_id'         => $currentUserId,
            'shipping_method' => $request->input('shipping_method', ShippingMethodEnum::DEFAULT),
            'shipping_option' => $request->input('shipping_option'),
            'shipping_amount' => (float)$shippingAmount,
            'tax_amount'      => Cart::instance('cart')->rawTax(),
            'sub_total'       => Cart::instance('cart')->rawSubTotal(),
            'coupon_code'     => session()->get('applied_coupon_code'),
            'discount_amount' => $promotionDiscountAmount + $couponDiscountAmount,
            'status'          => OrderStatusEnum::PENDING,
            'is_finished'     => true,
            'token'           => $token,
            'affliate_user_id' => $affiliateId,
            'paid_by_ubgxu'  => $paidUbgXuAmount
        ]);

        $order = $this->orderRepository->getFirstBy(compact('token'));

        if ($order) {
            $order->fill($request->input());
            $order = $this->orderRepository->createOrUpdate($order);
        } else {
            $order = $this->orderRepository->createOrUpdate($request->input());
        }



        if ($order) {
            $this->orderHistoryRepository->createOrUpdate([
                'action'      => 'create_order_from_payment_page',
                'description' => __('Order is created from checkout page'),
                'order_id'    => $order->id,
            ]);

            $discount = $this->discountRepository
                ->getModel()
                ->where('code', session()->get('applied_coupon_code'))
                ->where('type', 'coupon')
                ->where('start_date', '<=', now())
                ->where(function ($query) {
                    /**
                     * @var Builder $query
                     */
                    return $query
                        ->whereNull('end_date')
                        ->orWhere('end_date', '>', now());
                })
                ->first();

            if (!empty($discount)) {
                $discount->total_used++;
                $this->discountRepository->createOrUpdate($discount);
            }

            $this->orderProductRepository->deleteBy(['order_id' => $order->id]);

            foreach (Cart::instance('cart')->content() as $cartItem) {
                $data = [
                    'order_id'     => $order->id,
                    'product_id'   => $cartItem->id,
                    'product_name' => $cartItem->name,
                    'qty'          => $cartItem->qty,
                    'weight'       => $weight,
                    'price'        => $cartItem->price,
                    'tax_amount'   => $cartItem->tax,
                    'options'      => [],
                ];

                if ($cartItem->options->extras) {
                    $data['options'] = $cartItem->options->extras;
                }

                $this->orderProductRepository->create($data);

                $this->productRepository
                    ->getModel()
                    ->where([
                        'id'                         => $cartItem->id,
                        'with_storehouse_management' => 1,
                    ])
                    ->where('quantity', '>=', $cartItem->qty)
                    ->decrement('quantity', $cartItem->qty);
            }

            $request->merge([
                'order_id' => $order->id,
            ]);

            $paymentData = [
                'error'     => false,
                'message'   => false,
                'amount'    => (float)format_price($order->amount, null, true),
                'currency'  => strtoupper(get_application_currency()->title),
                'type'      => $request->input('payment_method'),
                'charge_id' => null,
            ];

            $request->merge(['amount' => $paymentData['amount']]);

            switch ($request->input('payment_method')) {
                case PaymentMethodEnum::STRIPE:
                    $result = $stripePaymentService->execute($request);
                    if ($stripePaymentService->getErrorMessage()) {
                        $paymentData['error'] = true;
                        $paymentData['message'] = $stripePaymentService->getErrorMessage();
                    }

                    $paymentData['charge_id'] = $result;

                    break;

                case PaymentMethodEnum::PAYPAL:

                    $supportedCurrencies = $payPalService->supportedCurrencyCodes();

                    if (!in_array($paymentData['currency'], $supportedCurrencies)) {
                        $paymentData['error'] = true;
                        $paymentData['message'] = __(":name doesn't support :currency. List of currencies supported by :name: :currencies.", ['name' => 'PayPal', 'currency' => $paymentData['currency'], 'currencies' => implode(', ', $supportedCurrencies)]);
                        break;
                    }

                    $checkoutUrl = $payPalService->execute($request);
                    if ($checkoutUrl) {
                        return redirect($checkoutUrl);
                    }

                    $paymentData['error'] = true;
                    $paymentData['message'] = $payPalService->getErrorMessage();
                    break;
                case PaymentMethodEnum::COD:

                    $minimumOrderAmount = setting('payment_cod_minimum_amount', 0);

                    if ($minimumOrderAmount > Cart::instance('cart')->rawSubTotal()) {
                        $paymentData['error'] = true;
                        $paymentData['message'] = __('Minimum order amount to use COD (Cash On Delivery) payment method is :amount, you need to buy more :more to place an order!', ['amount' => format_price($minimumOrderAmount), 'more' => format_price($minimumOrderAmount - Cart::instance('cart')->rawSubTotal())]);
                        break;
                    }

                    $paymentData['charge_id'] = $codPaymentService->execute($request);
                    break;

                case PaymentMethodEnum::BANK_TRANSFER:
                    $paymentData['charge_id'] = $bankTransferPaymentService->execute($request);
                    break;
                case PaymentMethodEnum::VNPAY:
                    $payment = app(PaymentInterface::class)->getFirstBy(['order_id' => $order->id]);
                    if ($payment) {
                        $paymentData['charge_id'] = $payment->charge_id;
                    }
                    break;
                default:
                    $paymentData = apply_filters(PAYMENT_FILTER_AFTER_POST_CHECKOUT, $paymentData, $request);
                    break;
            }

            $redirectURL = PaymentHelper::getRedirectURL($token);

            if ($paymentData['error'] || !$paymentData['charge_id']) {
                return $response
                    ->setError()
                    ->setNextUrl(PaymentHelper::getCancelURL($token))
                    ->withInput()
                    ->setMessage($paymentData['message'] ?: __('Checkout error!'));
            }



            if ($paidWithUbgXu) {
                DB::beginTransaction();
                try {
                    //Trừ xu trong tài khoản
                    DB::table('ec_customers')->where('id', $currentUserId)->decrement('ubgxu', $paidUbgXuAmount);

                    //Ghi log giao dịch xu
                    DB::table('ubgxu_pay_log')->insert([
                        'content' => 'Bạn vừa sử dụng '.number_format($paidUbgXuAmount).' xu cho việc thanh toán đơn hàng số '.get_order_code($order->id),
                        'customer_id' => $currentUserId,
                        'created_at' => Carbon::now()
                    ]);

                    //Tạo giao dịch xu
                    DB::table('ubgxu_transaction')->insert([
                        'customer_id' => $currentUserId,
                        'amount' => $paidUbgXuAmount,
                        'description' => 'Bạn vừa sử dụng '.number_format($paidUbgXuAmount).' xu cho việc thanh toán đơn hàng số '.get_order_code($order->id),
                        'transaction_type' => 'decrease',
                        'transaction_source' => 'https://ezlife.vn',
                        'total_day_refund' => 0,
                        'rest_cashback_amount' => 0,
                        'compare_code' => get_order_code($order->id),
                        'created_at' => Carbon::now(),
                        'status' => 'completed'
                    ]);

                } catch (Exception $e) {
                    DB::rollBack();
                }
                DB::commit();
            }


            return $response
                ->setNextUrl($redirectURL)
                ->setMessage(__('Checkout successfully!'));
        }

        return $response
            ->setError()
            ->setMessage(__('There is an issue when ordering. Please try again later!'));
    }

    /**
     * @param string $token
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse|Application|Factory|RedirectResponse|View
     */
    public function getCheckoutSuccess($token, BaseHttpResponse $response)
    {
        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }

        $order = $this->orderRepository->getFirstBy(compact('token'), [], ['address', 'products']);

        if (!$order) {
            abort(404);
        }

        if (!$order->payment_id) {
            return $response
                ->setError()
                ->setNextUrl(PaymentHelper::getCancelURL())
                ->setMessage(__('Payment failed!'));
        }

        event(new OrderPlacedEvent($order));

        if (is_plugin_active('marketplace')) {
            return apply_filters(PROCESS_GET_CHECKOUT_SUCCESS_IN_ORDER, $token, $response);
        }

        if ($token !== session('tracked_start_checkout') || !$order) {
            return $response->setNextUrl(route('public.index'));
        }

        $products = collect([]);

        $productsIds = $order->products->pluck('product_id')->all();

        if (!empty($productsIds)) {
            $products = get_products([
                'condition' => [
                    ['ec_products.id', 'IN', $productsIds],
                ],
                'select'    => [
                    'ec_products.id',
                    'ec_products.images',
                    'ec_products.name',
                    'ec_products.price',
                    'ec_products.sale_price',
                    'ec_products.sale_type',
                    'ec_products.start_date',
                    'ec_products.end_date',
                    'ec_products.sku',
                    'ec_products.is_variation',
                ],
                'with'      => [
                    'variationProductAttributes',
                ],
            ]);
        }

        OrderHelper::clearSessions($token);

        return view('plugins/ecommerce::orders.thank-you', compact('order', 'products'));
    }

    /**
     * @param ApplyCouponRequest $request
     * @param HandleApplyCouponService $handleApplyCouponService
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function postApplyCoupon(
        ApplyCouponRequest $request,
        HandleApplyCouponService $handleApplyCouponService,
        BaseHttpResponse $response
    ) {
        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }
        $result = [
            'error'   => false,
            'message' => ''
        ];
        if (is_plugin_active('marketplace')) {
            $result = apply_filters(HANDLE_POST_APPLY_COUPON_CODE_ECOMMERCE, $result, $request);
        } else {
            $result = $handleApplyCouponService->execute($request->input('coupon_code'));
        }

        if ($result['error']) {
            return $response
                ->setError()
                ->withInput()
                ->setMessage($result['message']);
        }

        $couponCode = $request->input('coupon_code');

        return $response
            ->setMessage(__('Applied coupon ":code" successfully!', ['code' => $couponCode]));
    }

    /**
     * @param Request $request
     * @param HandleRemoveCouponService $removeCouponService
     * @param BaseHttpResponse $response
     * @return array|BaseHttpResponse
     */
    public function postRemoveCoupon(
        Request $request,
        HandleRemoveCouponService $removeCouponService,
        BaseHttpResponse $response
    ) {
        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }

        if (is_plugin_active('marketplace')) {
            $products = Cart::instance('cart')->products();
            $result = apply_filters(HANDLE_POST_REMOVE_COUPON_CODE_ECOMMERCE, $products, $request);
        } else {
            $result = $removeCouponService->execute();
        }

        if ($result['error']) {
            if ($request->ajax()) {
                return $result;
            }
            return $response
                ->setError()
                ->setData($result)
                ->setMessage($result['message']);
        }

        return $response
            ->setMessage(__('Removed coupon :code successfully!', ['code' => session('applied_coupon_code')]));
    }

    /**
     * @param PayPalPaymentCallbackRequest $request
     * @param PayPalPaymentService $payPalPaymentService
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getPayPalStatus(
        PayPalPaymentCallbackRequest $request,
        PayPalPaymentService $payPalPaymentService,
        BaseHttpResponse $response
    ) {
        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }

        $status = $payPalPaymentService->getPaymentStatus($request);

        if (!$status) {
            return $response
                ->setError()
                ->setNextUrl(PaymentHelper::getCancelURL(OrderHelper::getOrderSessionToken()))
                ->withInput()
                ->setMessage(__('Payment failed!'));
        }

        $payPalPaymentService->afterMakePayment($request);

        return $response
            ->setNextUrl(PaymentHelper::getRedirectURL())
            ->setMessage(__('Checkout successfully!'));
    }

    /**
     * @param string $token
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param HandleShippingFeeService $shippingFeeService
     * @param HandleApplyCouponService $applyCouponService
     * @param HandleRemoveCouponService $removeCouponService
     * @param HandleApplyPromotionsService $applyPromotionsService
     * @return BaseHttpResponse|Application|Factory|View
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function getCheckoutRecover(
        $token,
        Request $request,
        BaseHttpResponse $response,
        HandleShippingFeeService $shippingFeeService,
        HandleApplyCouponService $applyCouponService,
        HandleRemoveCouponService $removeCouponService,
        HandleApplyPromotionsService $applyPromotionsService
    ) {
        if (!EcommerceHelper::isCartEnabled()) {
            abort(404);
        }

        if (!EcommerceHelper::isEnabledGuestCheckout() && !auth('customer')->check()) {
            return $response->setNextUrl(route('customer.login'));
        }

        if (is_plugin_active('marketplace')) {
            return apply_filters(PROCESS_GET_CHECKOUT_RECOVER_ECOMMERCE, $token, $request);
        }

        $order = $this->orderRepository
            ->getFirstBy([
                'token'       => $token,
                'is_finished' => 0,
            ], [], ['products', 'address']);

        if (!$order) {
            abort(404);
        }

        if (session()->has('tracked_start_checkout') && session('tracked_start_checkout') == $token) {
            $sessionCheckoutData = OrderHelper::getOrderSessionData($token);
        } else {
            session(['tracked_start_checkout' => $token]);
            $sessionCheckoutData = [
                'name'                      => $order->address->name,
                'email'                     => $order->address->email,
                'phone'                     => $order->address->phone,
                'address'                   => $order->address->address,
                'country'                   => $order->address->country,
                'state'                     => $order->address->state,
                'city'                      => $order->address->city,
                'zip_code'                  => $order->address->zip_code,
                'shipping_method'           => $order->shipping_method,
                'shipping_option'           => $order->shipping_option,
                'shipping_amount'           => $order->shipping_amount,
            ];
        }

        Cart::instance('cart')->destroy();
        foreach ($order->products as $orderProduct) {
            $request->merge(['qty' => $orderProduct->qty]);

            $product = $this->productRepository->findById($orderProduct->product_id);
            if ($product) {
                OrderHelper::handleAddCart($product, $request);
            }
        }

        [$products, $weight] = $this->getProductsInCart();

        $promotionDiscountAmount = $applyPromotionsService->execute($token);

        $sessionCheckoutData['promotion_discount_amount'] = $promotionDiscountAmount;

        $couponDiscountAmount = 0;
        if (session()->has('applied_coupon_code')) {
            $couponDiscountAmount = Arr::get($sessionCheckoutData, 'coupon_discount_amount', 0);
        }

        $orderTotal = Cart::instance('cart')->rawTotal() - $promotionDiscountAmount;
        $orderTotal = $orderTotal > 0 ? $orderTotal : 0;

        $sessionCheckoutData = $this->processOrderData($token, $sessionCheckoutData, $request);

        $shippingData = [
            'address'     => Arr::get($sessionCheckoutData, 'address'),
            'state'       => Arr::get($sessionCheckoutData, 'state'),
            'city'        => Arr::get($sessionCheckoutData, 'city'),
            'zip_code'    => Arr::get($sessionCheckoutData, 'zip_code'),
            'weight'      => $weight,
            'order_total' => $orderTotal,
        ];

        if (EcommerceHelper::isUsingInMultipleCountries()) {
            $shippingData['country'] = Arr::get($sessionCheckoutData, 'country');
        } else {
            $shippingData['country'] = EcommerceHelper::getFirstCountryId();
        }

        $shipping = $shippingFeeService->execute($shippingData);

        foreach ($shipping as $key => &$shippingItem) {
            if (get_shipping_setting('free_ship', $key)) {
                foreach ($shippingItem as &$subShippingItem) {
                    Arr::set($subShippingItem, 'price', 0);
                }
            }
        }

        $defaultShippingMethod = $request->input('shipping_method',
            old('shipping_method',
                Arr::get($sessionCheckoutData, 'shipping_method', Arr::first(array_keys($shipping)))));

        $defaultShippingOption = null;
        if (!empty($shipping)) {
            $defaultShippingOption = Arr::first(array_keys(Arr::first($shipping)));
            $defaultShippingOption = $request->input('shipping_option',
                old('shipping_option', Arr::get($sessionCheckoutData, 'shipping_option') ?? $defaultShippingOption));
        }
        $shippingAmount = Arr::get($shipping, $defaultShippingMethod . '.' . $defaultShippingOption . '.price', 0);

        Arr::set($sessionCheckoutData, 'shipping_method', $defaultShippingMethod);
        Arr::set($sessionCheckoutData, 'shipping_option', $defaultShippingOption);
        Arr::set($sessionCheckoutData, 'shipping_amount', $shippingAmount);
        OrderHelper::setOrderSessionData($token, $sessionCheckoutData);

        if (session()->has('applied_coupon_code')) {
            if (!$request->input('applied_coupon')) {
                $discount = $applyCouponService->getCouponData(session('applied_coupon_code'), $sessionCheckoutData);
                if (empty($discount)) {
                    $removeCouponService->execute();
                } else {
                    $shippingAmount = Arr::get($sessionCheckoutData, 'is_free_shipping') ? 0 : $shippingAmount;
                }
            } else {
                $shippingAmount = Arr::get($sessionCheckoutData, 'is_free_shipping') ? 0 : $shippingAmount;
            }
        }

        return view('plugins/ecommerce::orders.checkout', compact(
            'token',
            'shipping',
            'defaultShippingMethod',
            'defaultShippingOption',
            'shippingAmount',
            'promotionDiscountAmount',
            'couponDiscountAmount',
            'sessionCheckoutData',
            'products'
        ));
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     */
    public function ajaxVnpayRequest(
        Request $request,
        BaseHttpResponse $response,
        VnpayService $vnpayService,
        \Botble\Payment\Services\Gateways\VnpayService $vnpayGateway
    )
    {
        if (!$request->ajax()) {
            return abort(404);
        }

        $order = $this->orderRepository->getFirstBy(['token' => $request->get('token')]);
        if ($order) {

            $order->amount = $request->get('amount');
            $order->shipping_amount = $request->get('order_shipping_value');
            $order->shipping_option = 'vnpay';
            $order->save();

            $vnPayOrderId = $order->id.'-'.time().'-VNP-'.Str::random(6);

            $vnpayAmount = floatval($request->get('amount') + $request->get('order_shipping_value'));

            $vnpayGateway->execute($request, [
                'amount' => $vnpayAmount,
                'order_id' => $order->id,
                'customer_id' => auth('customer')->id(),
                'charge_id' => $vnPayOrderId,
            ]);

            $vnpUrl = $vnpayService->requestPayment([
                'amount' => $vnpayAmount,
                'order_id' => $vnPayOrderId,
                'token' => $request->get('token'),
                'order_shipping_value' => $request->get('order_shipping_value'),
                'shipping_method_value' => $request->get('shipping_method_value'),
                'shipping_method_data' => $request->get('shipping_method_data')
            ]);

//            \Log::channel('vnpay_ipn')->info('ship_request: '.$request->get('order_shipping_value'));

            return $response->setData($vnpUrl);

        } else {
            return $response->setError('Chưa xác nhận được giao dịch');
        }
    }

    /**
     * @param $token
     * @param Request $request
     * @param VnpayService $vnpayService
     */
    public function getVnpayReturn(
        $token,
        $vnp_OrderShippingValue,
        $shipping_method_value,
        $shipping_method_data,
        VnpayService $vnpayService
    )
    {
//        \Log::channel('vnpay_ipn')->info('shipping_value: '.$vnp_OrderShippingValue);
        $vnp_SecureHash = $_GET['vnp_SecureHash'];
        $inputData = array();
        foreach ($_GET as $key => $value) {
            if (substr($key, 0, 4) == "vnp_") {
                $inputData[$key] = $value;
            }
        }

        unset($inputData['vnp_SecureHash']);
        ksort($inputData);
        $i = 0;
        $hashData = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashData = $hashData . '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashData = $hashData . urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
        }

        $secureHash = hash_hmac('sha512', $hashData, $vnpayService->secretKey);
        if ($secureHash == $vnp_SecureHash) {
            if ($_GET['vnp_ResponseCode'] == '00') {
                $order = $this->orderRepository->getFirstBy(['token' => $token]);
//                $order->amount = floatval($_GET['vnp_Amount']) / 100;
//                $order->shipping_amount = $vnp_OrderShippingValue;
                //$order->save();

                \Log::channel('vnpay_ipn')->info('order_create_first: '.json_encode($order));

                $url = route('public.checkout.information', $token).'?vnp_OrderShippingValue='.$vnp_OrderShippingValue.'&shipping_method_value='.$shipping_method_value.'&shipping_method_data='.$shipping_method_data.'&'.$hashData;
                return redirect($url);
            }
            else {
                return redirect()->route('public.checkout.information', $token)->withErrors('Giao dịch VNPAY không thành công');
            }
        } else {
            return redirect()->route('public.checkout.information', $token)->withErrors('Chữ ký không hợp lệ');
        }
    }


}
