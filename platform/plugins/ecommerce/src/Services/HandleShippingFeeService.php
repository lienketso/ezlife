<?php

namespace Botble\Ecommerce\Services;

use Botble\Base\Models\BaseModel;
use Botble\Ecommerce\Models\ShippingRule;
use Botble\Ecommerce\Repositories\Interfaces\AddressInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductInterface;
use Botble\Ecommerce\Repositories\Interfaces\ShippingInterface;
use Botble\Ecommerce\Repositories\Interfaces\ShippingRuleInterface;
use Botble\Ecommerce\Repositories\Interfaces\StoreLocatorInterface;
use Botble\Ecommerce\Traits\BestExpressConnection;
use Botble\Ecommerce\Traits\HBBExpressConnection;
use Botble\Ecommerce\Traits\ViettelPostConnection;
use EcommerceHelper;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class HandleShippingFeeService
{

    /**
     * @var ShippingInterface
     */
    protected $shippingRepository;

    /**
     * @var AddressInterface
     */
    protected $addressRepository;

    /**
     * @var ShippingRuleInterface
     */
    protected $shippingRuleRepository;

    /**
     * @var ProductInterface
     */
    protected $productRepository;

    /**
     * @var StoreLocatorInterface
     */
    protected $storeLocatorRepository;

    /**
     * @var array
     */
    protected $shipping;

    /**
     * @var BaseModel
     */
    protected $shippingDefault;

    /**
     * @var array
     */
    protected $shippingRules;

    /**
     * HandleShippingFeeService constructor.
     * @param ShippingInterface $shippingRepository
     * @param AddressInterface $addressRepository
     * @param ShippingRuleInterface $shippingRuleRepository
     * @param ProductInterface $productRepository
     * @param StoreLocatorInterface $storeLocatorRepository
     */
    public function __construct(
        ShippingInterface $shippingRepository,
        AddressInterface $addressRepository,
        ShippingRuleInterface $shippingRuleRepository,
        ProductInterface $productRepository,
        StoreLocatorInterface $storeLocatorRepository
    ) {
        $this->shippingRepository = $shippingRepository;
        $this->addressRepository = $addressRepository;
        $this->shippingRuleRepository = $shippingRuleRepository;
        $this->productRepository = $productRepository;
        $this->storeLocatorRepository = $storeLocatorRepository;
        $this->shipping = [];
        $this->shippingRules = [];
    }

    /**
     * @param array $data
     * @param null $method
     * @param null $option
     * @return array
     */
    public function execute(array $data, $method = null, $option = null)
    {
        if (!empty($method)) {
            return $this->getShippingFee($data, $method, $option);
        }

        $result = [];

        $default = $this->getShippingFee($data, 'default', $option);

        if ($default) {
            $result['default'] = $default;
        }

        return $result;
    }

    /**
     * @param array $data
     * @param string $method
     * @param string $option
     * @return array
     */
    protected function getShippingFee(array $data, $method, $option = null)
    {
        $weight = Arr::get($data, 'weight', 0.1);
        $weight = $weight ?: 0.1;

        $orderTotal = Arr::get($data, 'order_total', 0);

        if (EcommerceHelper::isUsingInMultipleCountries()) {
            $country = Arr::get($data, 'country');
        } else {
            $country = EcommerceHelper::getFirstCountryId();
        }

        $result = [];
        switch ($method) {
            case 'default':
                $methodKey = $method . '-' . $country;
                if (Arr::has($this->shipping, $methodKey)) {
                    $shipping = Arr::get($this->shipping, $methodKey);
                } else {
                    $shipping = $this->shippingRepository
                        ->getModel()
                        ->where('country', $country)
                        ->first();
                    Arr::set($this->shipping, $methodKey, $shipping);
                }

                if (!empty($shipping)) {
                    $result = $this->calculateDefaultFeeByAddress(
                        $shipping,
                        $weight,
                        $orderTotal,
                        Arr::get($data, 'city'),
                        $option
                    );
                }

                if (empty($result)) {
                    if ($this->shippingDefault) {
                        $default = $this->shippingDefault;
                    } else {
                        $default = $this->shippingRepository
                            ->getModel()
                            ->whereNull('country')
                            ->first();
                        $this->shippingDefault = $default;
                    }

                    $result = $this->calculateDefaultFeeByAddress(
                        $default,
                        $weight,
                        $orderTotal,
                        Arr::get($data, 'city'),
                        $option
                    );
                }
                break;
            case 'bestexpress':
                $senderAddress = BestExpressConnection::getDefaultStoreLocation();
                try {
                    $shippingData = [
                        'ProductPrice' => $orderTotal,
                        'COD' => 0,
                        'ServiceId' => 12491,
                        "DestCity"  => isset($data['city']) ? $data['city'] : '',
                        "DestDistrict"  => isset($data['state']) ? $data['state'] : '',
                        "SourceCity" => isset($senderAddress['city']) ? $senderAddress['city'] : '',
                        "SourceDistrict" => isset($senderAddress['state']) ? $senderAddress['state'] : '',
                        "Weight" => $weight,
                ];

                    $bestExpressShippingFee = BestExpressConnection::calculateShippingPrice($shippingData);

                    $result['bestexpress'] = [
                        'bestexpress' => [
                            'name'  => 'BestExpress',
                            'price' => $bestExpressShippingFee['TotalFeeVATWithDiscount']
                        ]
                    ];
                } catch (\Exception $e) {
                    $result['bestexpress'] = [
                        'bestexpress' => [
                            'name'  => 'BestExpress',
                            'price' => 0
                        ]
                    ];
                }

                break;
            case 'haibonbay':
                $senderAddress = HBBExpressConnection::getDefaultStoreLocation();
                $convertWeight = ($weight / 1000);

                try {
                    $shippingData = [
                        'ClientHubID' => $data['haibonbay_hubid'],
                        'ServiceTypeID' => 'DE',
                        "ToProvinceName"  => isset($data['city']) ? $data['city'] : '',
                        "ToDistrictName"  => isset($data['state']) ? $data['state'] : '',
                        "ToWardName"  => isset($data['ward']) ? $data['ward'] : '',
                        "Length" => isset($data['length']) ? $data['length'] : '',
                        "Height" => isset($data['height']) ? $data['height'] : '',
                        "Weight" => $convertWeight,
                    ];
//                    $shippingData = [
//                        'ClientHubID' => '46238',
//                        'ServiceTypeID' => 'DE',
//                        "ToProvinceName"  => 'Hà Nội',
//                        "ToDistrictName"  => 'Cầu Giấy',
//                        "ToWardName"  => 'Xuân Thủy',
//                        "Length" => 1,
//                        "Height" => 1,
//                        "Weight" => 0.33,
//                    ];
                    $haibonbayExpressShippingFee = HBBExpressConnection::calculateShippingPrice($shippingData);
                    $result['haibonbay'] = [
                        'haibonbay' => [
                            'name'  => 'HaibonbayExpress',
                            'price' => $haibonbayExpressShippingFee['TotalServiceCost']
                        ]
                    ];
                }catch (\Exception $e){
                    $result['haibonbay'] = [
                        'haibonbay' => [
                            'name'  => 'HaibonbayExpress',
                            'price' => 0
                        ]
                    ];
                }
                break;
        }

        if ($result) {
            $result = collect($result)->sortBy('price')->toArray();
        }

        return $result;
    }

    /**
     * @param string $address
     * @param int $weight
     * @param int $orderTotal
     * @param string $city
     * @param null $option
     * @return array
     */
    protected function calculateDefaultFeeByAddress($address, $weight, $orderTotal, $city, $option = null)
    {
        $result = [];

        if ($address) {
            $ruleKey = 'rule-option-' . $option;
            if (Arr::has($this->shippingRules, $ruleKey)) {
                $rule = Arr::get($this->shippingRules, $ruleKey);
            } else {
                $rule = $this->shippingRuleRepository->findById($option, ['items']);
                Arr::set($this->shippingRules, $ruleKey, $rule);
            }

            if ($rule) {
                $ruleDetail = $rule
                    ->items
                    ->where('city', $city)
                    ->where('is_enabled', 1)
                    ->first();
                if ($ruleDetail) {
                    $result[] = [
                        'name'  => $rule->name,
                        'price' => $rule->price + $ruleDetail->adjustment_price,
                    ];
                } else {
                    $result[] = [
                        'name'  => $rule->name,
                        'price' => $rule->price,
                    ];
                }
            } else {
                $rules = $this->shippingRuleRepository
                    ->getModel()
                    ->where(function (Builder $query) use ($orderTotal, $address) {
                        $query
                            ->where('shipping_id', $address->id)
                            ->where('type', 'base_on_price')
                            ->where('from', '<=', $orderTotal)
                            ->where(function (Builder $sub) use ($orderTotal) {
                                $sub
                                    ->whereNull('to')
                                    ->orWhere('to', '<=', 0)
                                    ->orWhere('to', '>=', $orderTotal);
                            });
                    })
                    ->orWhere(function (Builder $query) use ($weight, $address) {
                        $query
                            ->where('shipping_id', $address->id)
                            ->where('type', 'base_on_weight')
                            ->where('from', '<=', $weight)
                            ->where(function (Builder $sub) use ($weight) {
                                $sub
                                    ->whereNull('to')
                                    ->orWhere('to', '<=', 0)
                                    ->orWhere('to', '>=', $weight);
                            });
                    })
                    ->with(['items'])
                    ->get();

                foreach ($rules as $rule) {
                    /**
                     * @var ShippingRule $rule
                     */
                    $ruleDetail = $rule
                        ->items
                        ->where('city', $city)
                        ->where('is_enabled', 1)
                        ->first();
                    if ($ruleDetail) {
                        $result[$rule->id] = [
                            'name'  => $rule->name,
                            'price' => $rule->price + $ruleDetail->adjustment_price,
                        ];
                    } else {
                        $result[$rule->id] = [
                            'name'  => $rule->name,
                            'price' => $rule->price,
                        ];
                    }
                }
            }
        }

        return $result;
    }
}
