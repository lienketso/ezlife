<?php

namespace Theme\Nest\Http\Controllers;

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Blog\Repositories\Interfaces\PostInterface;
use Botble\Ecommerce\Enums\OrderStatusEnum;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Models\Product;
use Botble\Ecommerce\Repositories\Eloquent\CustomerRepository;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\FlashSaleInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductCategoryInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductVariationInterface;
use Botble\Payment\Enums\PaymentStatusEnum;
use Botble\Payment\Models\Payment;
use Botble\Payment\Repositories\Interfaces\PaymentInterface;
use Botble\Payment\Services\Abstracts\VnpayService;
use Botble\Theme\Http\Controllers\PublicController;
use Cart;
use EcommerceHelper;
use Illuminate\Http\Request;
use Theme;
use Theme\Nest\Http\Resources\BrandResource;
use Theme\Nest\Http\Resources\PostResource;
use Theme\Nest\Http\Resources\ProductCategoryResource;
use Theme\Nest\Http\Resources\ProductMiniResource;
use Theme\Nest\Http\Resources\ProductResource;
use Theme\Nest\Http\Resources\ReviewResource;
use Theme\Nest\Http\Resources\TopSellingProductResource;
use Log;
use OrderHelper;

class NestController extends PublicController
{
    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxCart(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        return $response->setData([
            'count' => Cart::instance('cart')->count(),
            'html'  => Theme::partial('cart-panel'),
        ]);
    }

    /**
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getFeaturedProducts(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $data = [];

        $products = get_featured_products([
            'take'      => (int)$request->input('limit', 8),
            'with'      => [
                'slugable',
                'variations',
                'productLabels',
                'variationAttributeSwatchesForProductList',
            ],
            'withCount' => EcommerceHelper::withReviewsCount(),
        ]);

        foreach ($products as $product) {
            $data[] = view(Theme::getThemeNamespace() . '::views.ecommerce.includes.product-item-small',
                compact('product'))->render();
        }

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param PostInterface $postRepository
     * @return BaseHttpResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Resources\Json\JsonResource
     */
    public function ajaxGetPosts(Request $request, BaseHttpResponse $response, PostInterface $postRepository)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $posts = $postRepository->getFeatured(4, ['slugable']);

        return $response
            ->setData(PostResource::collection($posts))
            ->toApiResponse();
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getFeaturedProductCategories(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $categories = get_featured_product_categories([
            'with'      => ['slugable', 'metadata'],
            'withCount' => ['products'],
        ]);

        return $response->setData(ProductCategoryResource::collection($categories));
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxGetFeaturedBrands(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $brands = get_featured_brands();

        return $response->setData(BrandResource::collection($brands));
    }

    /**
     * @param int $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param ProductInterface $productRepository
     * @return BaseHttpResponse
     */
    public function ajaxGetProductReviews(
        $id,
        Request $request,
        BaseHttpResponse $response,
        ProductInterface $productRepository
    ) {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $product = $productRepository->getFirstBy([
            'id'           => $id,
            'status'       => BaseStatusEnum::PUBLISHED,
            'is_variation' => 0,
        ]);

        if (!$product) {
            abort(404);
        }

        $star = (int)$request->input('star');
        $perPage = (int)$request->input('per_page', 10);

        $reviews = EcommerceHelper::getProductReviews($product, $star, $perPage);

        if ($star) {
            $message = __(':total review(s) ":star star" for ":product"', [
                'total'   => $reviews->total(),
                'product' => $product->name,
                'star'    => $star,
            ]);
        } else {
            $message = __(':total review(s) for ":product"', [
                'total'   => $reviews->total(),
                'product' => $product->name,
            ]);
        }

        return $response
            ->setData(ReviewResource::collection($reviews))
            ->setMessage($message)
            ->toApiResponse();
    }

    /**
     * @param int $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param ProductInterface $productRepository
     * @return BaseHttpResponse
     */
    public function ajaxGetRelatedProducts(
        $id,
        $storeid,
        Request $request,
        BaseHttpResponse $response,
        ProductInterface $productRepository
    ) {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }
        
        $product = $productRepository->findOrFail($id);

        $products = get_related_products($product,$storeid, (int)$request->input('limit'));

        $data = [];
        foreach ($products as $product) {
            $data[] = view(Theme::getThemeNamespace() . '::views.ecommerce.includes.product-item',
                compact('product'))->render();
        }

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param FlashSaleInterface $flashSaleRepository
     * @return BaseHttpResponse
     */
    public function ajaxGetFlashSales(
        Request $request,
        BaseHttpResponse $response,
        FlashSaleInterface $flashSaleRepository
    ) {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        $flashSales = $flashSaleRepository->getModel()
            ->notExpired()
            ->where('status', BaseStatusEnum::PUBLISHED)
            ->with([
                'products' => function ($query) use ($request) {
                    $with = ['slugable', 'productCollections'];

                    if (is_plugin_active('marketplace')) {
                        $with = array_merge($with, ['store', 'store.slugable']);
                    }

                    return $query
                        ->where('status', BaseStatusEnum::PUBLISHED)
                        ->limit((int)$request->input('limit', 2))
                        ->withCount(EcommerceHelper::withReviewsCount())
                        ->with($with);
                },
                'metadata'
            ])
            ->get();

        if (!$flashSales->count()) {
            return $response->setData([]);
        }

        $data = [];
        foreach ($flashSales as $flashSale) {
            foreach ($flashSale->products as $product) {
                if (!EcommerceHelper::showOutOfStockProducts() && $product->isOutOfStock()) {
                    continue;
                }

                $data[] = Theme::partial('flash-sale-product', compact('product', 'flashSale'));
            }
        }

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxGetProducts(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $products = get_products_by_collections([
            'collections' => [
                'by'       => 'id',
                'value_in' => [$request->input('collection_id')],
            ],
            'take'        => 8,
            'with'        => [
                'slugable',
                'variations',
                'productCollections',
                'variationAttributeSwatchesForProductList',
            ],
            'withCount'   => EcommerceHelper::withReviewsCount(),
        ]);

        $data = [];
        foreach ($products as $product) {
            $data[] = view(Theme::getThemeNamespace() . '::views.ecommerce.includes.product-item',
                compact('product'))->render();
        }

        return $response->setData($data);
    }

    /**
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxGetProductsByCategoryId(
        Request $request,
        BaseHttpResponse $response,
        ProductInterface $productRepository
    ) {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $categoryId = $request->input('category_id');

        if (!$categoryId) {
            return $response;
        }

        $products = $productRepository->getProductsByCategories([
            'categories' => [
                'by'       => 'id',
                'value_in' => [$categoryId],
            ],
            'take'       => 6,
            'withCount'  => EcommerceHelper::withReviewsCount(),
            ['images', '!=', '[]']
        ]);

        $data = [];
        foreach ($products as $product) {
            $data[] = view(Theme::getThemeNamespace() . '::views.ecommerce.includes.product-item', compact('product'))
                ->render();
        }

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param int $id
     * @param BaseHttpResponse $response
     * @return mixed
     */
    public function getQuickView(Request $request, $id, BaseHttpResponse $response)
    {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        $product = get_products([
            'condition' => [
                'ec_products.id'     => $id,
                'ec_products.status' => BaseStatusEnum::PUBLISHED,
            ],
            'take'      => 1,
            'with'      => [
                'defaultProductAttributes',
                'slugable',
                'tags',
                'tags.slugable',
            ],
            'withCount' => EcommerceHelper::withReviewsCount(),
        ]);

        if (!$product) {
            return $response->setNextUrl(route('public.index'));
        }

        $productImages = $product->images;
        if ($product->is_variation) {
            $product = $product->original_product;
            $selectedAttrs = app(ProductVariationInterface::class)->getAttributeIdsOfChildrenProduct($product->id);
            if (count($productImages) == 0) {
                $productImages = $product->images;
            }
        } else {
            $selectedAttrs = $product->defaultVariation->productAttributes;
        }

        return $response->setData(Theme::partial('quick-view', compact('product', 'selectedAttrs', 'productImages')));
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxGetProductCategories(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $params = array_merge([
            'condition' => [
                'ec_product_categories.status' => BaseStatusEnum::PUBLISHED,
            ],
            'take'      => null,
            'order_by'  => [
                'ec_product_categories.order' => 'DESC',
            ],
            'select'    => ['*'],
            'with'      => ['slugable', 'metadata'],
        ]);

        $categoryIds = array_filter(explode(',', $request->input('categories')));

        if (!empty($categoryIds)) {
            $params['condition'][] = ['ec_product_categories.id', 'IN', $categoryIds];
        }

        $categories = app(ProductCategoryInterface::class)->advancedGet($params);

        return $response->setData(ProductCategoryResource::collection($categories, ['simple' => true]));
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxTopProductsGroup(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $tabs = array_filter(explode(',', $request->input('tabs')));

        if (empty($tabs)) {
            $tabs = ['top-selling', 'trending-products', 'recent-added', 'top-rated'];
        }

        $limit = 4;

        $withCount = EcommerceHelper::withReviewsCount();

        $with = ['slugable', 'variationInfo', 'productCollections'];

        $data = [];

        if (in_array('top-selling', $tabs)) {
            $endDate = now();
            $startDate = now()->subDays((int) $request->input('top_selling_in_days', 30));

            $topSelling = app(ProductInterface::class)
                ->getModel()
                ->join('ec_order_product', 'ec_products.id', '=', 'ec_order_product.product_id')
                ->join('ec_orders', 'ec_orders.id', '=', 'ec_order_product.order_id')
                ->join('payments', 'payments.order_id', '=', 'ec_orders.id')
                ->where('payments.status', PaymentStatusEnum::COMPLETED)
                ->whereDate('ec_orders.created_at', '>=', $startDate)
                ->whereDate('ec_orders.created_at', '<=', $endDate)
                ->select([
                    'ec_products.*',
                    'ec_order_product.qty as qty',
                ])
                ->with($with)
                ->orderBy('ec_order_product.qty', 'DESC')
                ->distinct()
                ->limit($limit)
                ->get();

            if ($topSelling->count()) {
                $data[] = [
                    'title'    => 'Sản phẩm bán chạy',
                    'products' => TopSellingProductResource::collection($topSelling),
                ];
            }
        }

        if (in_array('trending-products', $tabs)) {
            $trendingProducts = get_trending_products([
                'take'      => $limit,
                'with'      => $with,
                'withCount' => $withCount,
            ]);

            $data[] = [
                'title'    => 'Sản phẩm được quan tâm nhiều',
                'products' => ProductMiniResource::collection($trendingProducts),
            ];
        }

        if (in_array('recent-added', $tabs)) {
            $recentlyAdded = app(ProductInterface::class)->advancedGet([
                'condition' => [
                    'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                    'ec_products.is_variation' => 0,
                ],
                'order_by'  => [
                    'ec_products.order'      => 'ASC',
                    'ec_products.created_at' => 'DESC',
                ],
                'take'      => $limit,
                'with'      => $with,
                'withCount' => $withCount,
            ]);

            $data[] = [
                'title'    => 'Sản phẩm mới',
                'products' => ProductMiniResource::collection($recentlyAdded),
            ];
        }

        if (in_array('top-rated', $tabs)) {
            $topRated = get_top_rated_products($limit, $with, $withCount);

            if ($topRated->count()) {
                $data[] = [
                    'title'    => 'Sản phẩm được đánh giá cao',
                    'products' => ProductMiniResource::collection($topRated),
                ];
            }
        }

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxPopularProducts(Request $request, BaseHttpResponse $response)
    {
        if (!$request->ajax() || !$request->wantsJson()) {
            return $response->setNextUrl(route('public.index'));
        }

        $with = [
            'metadata',
            'slugable',
            'categories',
            'categories.slugable',
            'productLabels',
            'productCollections',
        ];

        if (is_plugin_active('marketplace')) {
            $with = array_merge($with, ['store', 'store.slugable']);
        }

        $products = app(ProductInterface::class)
            ->getModel()
            ->join('meta_boxes', function ($join) {
                $join
                    ->on('ec_products.id', '=', 'meta_boxes.reference_id')
                    ->where('meta_boxes.reference_type', '=', Product::class);
            })
            ->where([
                'meta_boxes.meta_key'      => 'is_popular',
                'meta_boxes.meta_value'    => '["1"]',
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ])
            ->with($with)
            ->orderBy('ec_products.created_at', 'DESC')
            ->orderBy('ec_products.order', 'ASC')
            ->withCount(EcommerceHelper::withReviewsCount())
            ->limit((int) $request->input('limit') ?: 8)
            ->select('ec_products.*')
            ->distinct()
            ->get();

        return $response->setData(ProductResource::collection($products));
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxGetDistricts(
        Request $request,
        BaseHttpResponse $response
    )
    {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        $provinceId = $request->get('province_id');
        $districts = EcommerceHelper::getAvailableDistrict(intval($provinceId));
        $data = ['<option value="">Chọn Quận/Huyện</option>'];

        foreach ($districts as $key => $district) {
            $data[] = '<option value="'.$district.'" data-id="'.$key.'">'.$district.'</option>';
        }

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxGetWards(
        Request $request,
        BaseHttpResponse $response
    )
    {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        $districtId = $request->get('district_id');
        $wards = EcommerceHelper::getAvaiableWard(intval($districtId));
        $data = ['<option value="">Chọn Phường/Xã</option>'];
        foreach ($wards as $key => $ward) {
            $data[] = '<option value="'.$ward.'" data-id="'.$key.'">'.$ward.'</option>';
        }

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function checkXu(
        Request $request,
        BaseHttpResponse $response
    )
    {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        $phone = $request->get('customer_phone');

        $data = Customer::where('phone', $phone)->first();

        return $response->setData($data);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return bool|BaseHttpResponse
     */
    public function checkPaymentCode(
        Request $request,
        BaseHttpResponse $response
    )
    {
        if (!$request->ajax()) {
            return $response->setNextUrl(route('public.index'));
        }

        $phone = $request->get('customer_phone');
        $code = $request->get('code');
        $data = Customer::where('phone', $phone)->first();

        if ($data == null) {
            return false;
        }

        return $data->payment_code == $code;
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function affiliateRegister(
        Request $request,
        BaseHttpResponse $response
    )
    {
        $affLink = $request->get('aff_id');
        $affiliationId = base64_decode($affLink);

        if (auth('customer')->check()) {
            $loggedInCustomer = auth('customer')->user();
            if ($loggedInCustomer->affiliation_id == $affiliationId) {
                return $response->setNextUrl(route('public.index'));
            } else {
                return $response->setNextUrl(route('customer.edit-account', ['aff_id' => $affLink]));
            }
        } else {
            return $response->setNextUrl(route('customer.register', ['aff_id' => $affLink]));
        }
    }

    /**
     * @param VnpayService $vnpayService
     * @param OrderInterface $orderRepository
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     */
    public function checkIpn(
        VnpayService $vnpayService,
        OrderInterface $orderRepository
    )
    {
        $inputData = array();
        $returnData = array();

        foreach ($_GET as $key => $value) {
            if (substr($key, 0, 4) == "vnp_") {
                $inputData[$key] = $value;
            }
        }

        $vnp_SecureHash = $inputData['vnp_SecureHash'];
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
        $vnpTranId = $inputData['vnp_TransactionNo']; //Mã giao dịch tại VNPAY
        $vnp_BankCode = $inputData['vnp_BankCode']; //Ngân hàng thanh toán
        $vnp_Amount = $inputData['vnp_Amount']/100; // Số tiền thanh toán VNPAY phản hồi

        //$Status = 0; // Là trạng thái thanh toán của giao dịch chưa có IPN lưu tại hệ thống của merchant chiều khởi tạo URL thanh toán.
        $vnp_TxnRef = $inputData['vnp_TxnRef'];

        $vnp_TxnRef_Array = explode('-', $vnp_TxnRef);

        $orderId = $vnp_TxnRef_Array[0];

        try {
            //Check Orderid
            //Kiểm tra checksum của dữ liệu
            if ($secureHash == $vnp_SecureHash) {
                //Lấy thông tin đơn hàng lưu trong Database và kiểm tra trạng thái của đơn hàng, mã đơn hàng là: $orderId
                //Việc kiểm tra trạng thái của đơn hàng giúp hệ thống không xử lý trùng lặp, xử lý nhiều lần một giao dịch
                //Giả sử: $order = mysqli_fetch_assoc($result);

                $order = $orderRepository->findById($orderId);
                $payment = Payment::where([
                    'charge_id' => $vnp_TxnRef
                ])->first();

//                Log::channel('vnpay_ipn')->info('payment_status: '. $payment->status);
//                Log::channel('vnpay_ipn')->info('payment_obj: '. $payment);

                if ($payment != null) {
                    if($order->amount == $vnp_Amount) //Kiểm tra số tiền thanh toán của giao dịch: giả sử số tiền kiểm tra là đúng. //$order["Amount"] == $vnp_Amount
                    {
                        if ($payment->status == PaymentStatusEnum::PENDING) {
                            if ($inputData['vnp_ResponseCode'] == '00' && $inputData['vnp_TransactionStatus'] == '00') {
                                //$Status = 1; // Trạng thái thanh toán thành công
                                $order->status = OrderStatusEnum::PROCESSING;
                                $order->is_confirmed = 1;

                                $orderRepository->createOrUpdate($order);

                                $payment->description = 'Mã giao dịch VNPAY: '.$vnpTranId .' - Ngân hàng: '.$vnp_BankCode;
                                $payment->status = PaymentStatusEnum::COMPLETED;
                                $payment->save();

                                $mailer = \EmailHandler::setModule(ECOMMERCE_MODULE_SCREEN_NAME);
                                if ($mailer->templateEnabled('order_confirm')) {
                                    OrderHelper::setEmailVariables($order);
                                    $mailer->sendUsingTemplate(
                                        'order_confirm',
                                        $order->user->email ? $order->user->email : $order->address->email
                                    );
                                }
                            } else {
                                //$Status = 2; // Trạng thái thanh toán thất bại / lỗi
                                $order->status = OrderStatusEnum::PENDING;
                                $order->is_confirmed = 0;
                                $payment = app(PaymentInterface::class)->getFirstBy(['charge_id' => $vnp_TxnRef]);
                                if ($payment) {
                                    $payment->status = PaymentStatusEnum::FAILED;
                                    $payment->save();
                                }
                            }
                            //Cài đặt Code cập nhật kết quả thanh toán, tình trạng đơn hàng vào DB
                            //
                            //
                            //
                            //Trả kết quả về cho VNPAY: Website/APP TMĐT ghi nhận yêu cầu thành công
                            $returnData['RspCode'] = '00';
                            $returnData['Message'] = 'Confirm Success';
                        } else {
                            $returnData['RspCode'] = '02';
                            $returnData['Message'] = 'Order already confirmed';
                        }
                    }
                    else {
                        $returnData['RspCode'] = '04';
                        $returnData['Message'] = 'invalid amount';
                    }
                } else {
                    $returnData['RspCode'] = '01';
                    $returnData['Message'] = 'Order not found';
                }
            } else {
                $returnData['RspCode'] = '97';
                $returnData['Message'] = 'Invalid signature';
            }
        } catch (\Exception $e) {
            $returnData['RspCode'] = '99';
            $returnData['Message'] = 'Unknow error';
        }
        //Trả lại VNPAY theo định dạng JSON
        Log::channel('vnpay_ipn')->info(json_encode($returnData));
        return response()->json($returnData);
    }
}
