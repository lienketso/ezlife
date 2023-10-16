<?php
/**
 * CollaboratorSettingController.php
 * Created by: trainheartnet
 * Created at: 02/05/2022
 * Contact me at: longlengoc90@gmail.com
 */
namespace Botble\Ecommerce\Http\Controllers\Collaborator\Webview;

use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Marketplace\Http\Requests\SettingRequest;
use Botble\Marketplace\Models\Store;
use Botble\Marketplace\Repositories\Interfaces\StoreInterface;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Assets;
use SlugHelper;
use RvMedia;

class CollaboratorSettingController
{
    /**
     * DashboardController constructor.
     * @param Repository $config
     */
    public function __construct(Repository $config)
    {
        Assets::setConfig($config->get('plugins.marketplace.assets', []));
    }

    /**
     * @return Application|Factory|View
     */
    public function getSetting()
    {
        page_title()->setTitle('Cài đặt');

        $collaborator = auth('customer')->user();

        return view('plugins/ecommerce::collaborator.webview.dashboard.settings', compact('collaborator'));
    }

    /**
     * @param SettingRequest $request
     * @param StoreInterface $storeRepository
     * @param BaseHttpResponse $response
     */
    public function saveSettings(SettingRequest $request, StoreInterface $storeRepository, BaseHttpResponse $response)
    {
        $customer = auth('customer')->user();
        if ($customer && $customer->id) {
            $walletInfo = $customer->walletInfo;
            $walletInfo->bank_info = $request->input('bank_info');
            $walletInfo->save();
        }

        event(new UpdatedContentEvent(STORE_MODULE_SCREEN_NAME, $request, $customer));

        return $response
            ->setNextUrl(route('collaborator.settings'))
            ->setMessage(__('Update successfully!'));
    }
}