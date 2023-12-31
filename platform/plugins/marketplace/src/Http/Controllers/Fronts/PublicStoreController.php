<?php

namespace Botble\Marketplace\Http\Controllers\Fronts;

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Services\Products\GetProductService;
use Botble\Marketplace\Http\Requests\CheckStoreUrlRequest;
use Botble\Marketplace\Models\Store;
use Botble\Marketplace\Repositories\Interfaces\StoreInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductCategoryInterface;
use Botble\Ecommerce\Repositories\Caches\ProductCategoryCacheDecorator;
use Botble\SeoHelper\SeoOpenGraph;
use Botble\Slug\Repositories\Interfaces\SlugInterface;
use EcommerceHelper;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use MarketplaceHelper;
use Response;
use RvMedia;
use SeoHelper;
use SlugHelper;
use Theme;

class PublicStoreController
{
    /**
     * @var StoreInterface
     */
    protected $storeRepository;

    /**
     * @var SlugInterface
     */
    protected $slugRepository;
     /**
     * @var ProductCategoryInterface
     */
    protected $productCategoryRepository;

    /**
     * PublicStoreController constructor.
     * @param StoreInterface $storeRepository
     * @param SlugInterface $slugRepository
     * @param ProductCategoryInterface $productCategoryRepository
     */
    public function __construct(StoreInterface $storeRepository, SlugInterface $slugRepository, ProductCategoryInterface $productCategoryRepository)
    {
        $this->storeRepository = $storeRepository;
        $this->slugRepository = $slugRepository;
        $this->productCategoryRepository = $productCategoryRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|Response|Theme|void
     */
    public function getStores(Request $request)
    {
        Theme::breadcrumb()->add(__('Home'), route('public.index'))
            ->add(__('Stores'), route('public.stores'));

        SeoHelper::setTitle(__('Stores'))->setDescription(__('Stores'));

        $condition = ['status' => BaseStatusEnum::PUBLISHED];

        $search = clean($request->input('q'));
        if ($search) {
            $condition[] = ['name', 'LIKE', '%' . $search . '%'];
        }

        $with = ['slugable'];
        if (EcommerceHelper::isReviewEnabled()) {
            $with['reviews'] = function ($query) {
                $query->where([
                    'ec_products.status' => BaseStatusEnum::PUBLISHED,
                    'ec_reviews.status'  => BaseStatusEnum::PUBLISHED,
                ]);
            };
        }

        $stores = $this->storeRepository->advancedGet([
            'condition' => $condition,
            'order_by'  => ['created_at' => 'desc'],
            'paginate'  => [
                'per_page'      => 12,
                'current_paged' => (int)$request->input('page'),
            ],
            'with'      => $with,
            'withCount' => [
                'products' => function ($query) {
                    $query->where(['status' => BaseStatusEnum::PUBLISHED]);
                },
            ],
        ]);

        return Theme::scope('marketplace.stores', compact('stores'), 'plugins/marketplace::themes.stores')->render();
    }

    /**
     * @param string $slug
     * @param Request $request
     * @param GetProductService $productService
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|RedirectResponse|Response
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function getStore(
        $slug,
        Request $request,
        GetProductService $productService,
        BaseHttpResponse $response
    ) {
        $slug = $this->slugRepository->getFirstBy([
            'key'            => $slug,
            'reference_type' => Store::class,
            'prefix'         => SlugHelper::getPrefix(Store::class),
        ]);

        if (!$slug) {
            abort(404);
        }

        $condition = [
            'mp_stores.id'     => $slug->reference_id,
            'mp_stores.status' => BaseStatusEnum::PUBLISHED,
        ];

        if (Auth::check() && $request->input('preview')) {
            Arr::forget($condition, 'status');
        }

        $store = $this->storeRepository->getFirstBy($condition, ['*'], ['slugable', 'metadata']);

        if (!$store) {
            abort(404);
        }

        if ($store->slugable->key !== $slug->key) {
            return redirect()->to($store->url);
        }

        SeoHelper::setTitle($store->name)->setDescription($store->description);

        $meta = new SeoOpenGraph;
        if ($store->logo) {
            $meta->setImage(RvMedia::getImageUrl($store->logo));
        }
        $meta->setDescription($store->description);
        $meta->setUrl($store->url);
        $meta->setTitle($store->name);

        SeoHelper::setSeoOpenGraph($meta);

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Stores'), route('public.stores'))
            ->add($store->name, $store->url);

        $with = [
            'slugable',
            'variations',
            'productLabels',
            'variationAttributeSwatchesForProductList',
            'store',
            'store.slugable',
        ];

        $withCount = EcommerceHelper::withReviewsCount();

        $products = $productService->getProduct($request, null, null, $with, $withCount, ['store_id' => $store->id]);
        $categories = $categories = $this->productCategoryRepository->getModel()->whereIn('id', array(76,77,91,92,93,94,95,96,97,98,99,100,101))->get();
       
        if ($request->ajax()) {
            $total = $products->total();
            $message = $total > 1 ? __(':total Products found', compact('total')) : __(':total Product found',
                compact('total'));

            $view = Theme::getThemeNamespace('views.marketplace.stores.items');

            if (!view()->exists($view)) {
                $view = 'plugins/marketplace::themes.stores.items';
            }

            return $response
                ->setData(view($view, compact('products', 'store'))->render())
                ->setMessage($message);
        }

        return Theme::scope('marketplace.store', compact('store', 'products', 'categories'), 'plugins/marketplace::themes.store')->render();
    }

    /**
     * @param CheckStoreUrlRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function checkStoreUrl(CheckStoreUrlRequest $request, BaseHttpResponse $response)
    {
        if (!$request->ajax()) {
            abort(404);
        }
        $slug = $request->input('url');
        $slug = Str::slug($slug, '-', !SlugHelper::turnOffAutomaticUrlTranslationIntoLatin() ? 'en' : false);

        $existing = SlugHelper::getSlug($slug, SlugHelper::getPrefix(Store::class), Store::class);

        $response->setData(['slug' => $slug]);

        if ($existing && $existing->reference_id != $request->input('reference_id')) {
            return $response
                ->setError()
                ->setMessage(__('Not Available'));
        }

        return $response->setMessage(__('Available'));
    }
}
