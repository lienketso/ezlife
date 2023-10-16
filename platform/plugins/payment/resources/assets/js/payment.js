'use strict';

var BPayment = BPayment || {};

BPayment.initResources = function () {
    let paymentMethod = $(document).find('input[name=payment_method]').first();

    if (paymentMethod.length) {
        paymentMethod.trigger('click').trigger('change');
        paymentMethod.closest('.list-group-item').find('.payment_collapse_wrap').addClass('show');
    }

    if ($('.stripe-card-wrapper').length > 0) {
        new Card({
            // a selector or DOM element for the form where users will
            // be entering their information
            form: '.payment-checkout-form', // *required*
            // a selector or DOM element for the container
            // where you want the card to appear
            container: '.stripe-card-wrapper', // *required*

            formSelectors: {
                numberInput: 'input#stripe-number', // optional — default input[name="number"]
                expiryInput: 'input#stripe-exp', // optional — default input[name="expiry"]
                cvcInput: 'input#stripe-cvc', // optional — default input[name="cvc"]
                nameInput: 'input#stripe-name' // optional - defaults input[name="name"]
            },

            width: 350, // optional — default 350px
            formatting: true, // optional - default true

            // Strings for translation - optional
            messages: {
                validDate: 'valid\ndate', // optional - default 'valid\nthru'
                monthYear: 'mm/yyyy', // optional - default 'month/year'
            },

            // Default placeholders for rendered fields - optional
            placeholders: {
                number: '•••• •••• •••• ••••',
                name: 'Full Name',
                expiry: '••/••',
                cvc: '•••'
            },

            masks: {
                cardNumber: '•' // optional - mask card number
            },

            // if true, will log helpful messages for setting up Card
            debug: false // optional - default false
        });
    }
}

BPayment.init = function () {
    BPayment.initResources();

    let paymentMethod = $(document).find('input[name=payment_method]').first();

    if (paymentMethod.length) {
        paymentMethod.trigger('click').trigger('change');
        paymentMethod.closest('.list-group-item').find('.payment_collapse_wrap').addClass('show');
    }

    $(document).on('change', '.js_payment_method', function () {
        $('.payment_collapse_wrap').removeClass('collapse').removeClass('show').removeClass('active');
    });

    $(document).off('click', '.payment-checkout-btn').on('click', '.payment-checkout-btn', function (event) {
        event.preventDefault();

        var _self = $(this);
        var form = _self.closest('form');
        _self.attr('disabled', 'disabled');
        var submitInitialText = _self.html();
        _self.html('<i class="fa fa-gear fa-spin"></i> ' + _self.data('processing-text'));

        if ($('input[name=payment_method]:checked').val() === 'stripe') {
            Stripe.setPublishableKey($('#payment-stripe-key').data('value'));
            Stripe.card.createToken(form, function (status, response) {
                if (response.error) {
                    if (typeof Botble != 'undefined') {
                        Botble.showError(response.error.message, _self.data('error-header'));
                    } else {
                        alert(response.error.message);
                    }
                    _self.removeAttr('disabled');
                    _self.html(submitInitialText);
                } else {
                    form.append($('<input type="hidden" name="stripeToken">').val(response.id));
                    form.submit();
                }
            });
        }
        else if ($('input[name=payment_method]:checked').val() === 'vnpay') {
            let ajaxVnPayRequest = $('#ajax-vnpay-request').val();
            let amount = $('#shopeepay-total-price').val();
            let token = $('#checkout-token').val();
            let csrf = $('meta[name="csrf-token"]').attr('content');
            let shipping_method_value = $('input.shipping_method_options:checked').val()
            let shipping_method_data = $('input.shipping_method_options:checked').attr('data-option')
            let order_shipping_value = $('input[name="order_shipping_value"]').val();

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': csrf
                }
            });
            $.ajax({
                url: ajaxVnPayRequest,
                type: 'POST',
                data: {
                    amount: amount,
                    token: token,
                    order_shipping_value: order_shipping_value,
                    shipping_method_value: shipping_method_value,
                    shipping_method_data: shipping_method_data
                },
                success: function( response ) {
                    window.location.href = response.data
                },
                error: function( err ) {
                    // console.log('getProvinceError:' , err)
                }
            });
        }
        else {
            form.submit();
        }
    });
};

function ajaxGetLocation(type, url, provinceId, districtId) {
    const addressCityForm = $('#address_city');
    const addressStateForm = $('#address_state');
    const addressWardForm = $('#address_ward');
    //const url = addressCityForm.attr('data-ajax')

    $.ajax({
        url: url,
        type: 'GET',
        data: {
            type: type,
            province_id: provinceId,
            district_id: districtId
        },
        success: function( response ) {
            switch (type) {
                case 'get-provinces':
                    addressCityForm.empty();
                    addressCityForm.append(response.data);
                    break;
                case 'get-districts':
                    addressStateForm.empty();
                    addressWardForm.empty();
                    addressStateForm.append(response.data);
                    break;
                case 'get-wards':
                    addressWardForm.empty();
                    addressWardForm.append(response.data);
                    break;
                default:
                    return false;
            }

            // formGroup.append(response.data);
        },
        error: function( err ) {
            console.log('getProvinceError:' , err)
        }
    });
}

function refreshCartTarget() {
    let target = '#cart-item';
    if ($('#main-checkout-product-info').is(':hidden')) {
        target = '#main-checkout-product-info-mobile';
    }

    $('.payment-info-loading').show();
    $('.payment-checkout-btn').attr('disabled', true)
    $('.payment-checkout-btn').text('Đang tính phí vận chuyển')

    $('.mobile-total').text('...');

    return target;
}

$(document).ready(function () {
    BPayment.init();

    //Checkout
    const body = $('body');

    if ($('#address_city').length > 0) {
        ajaxGetLocation('get-provinces', 0, 0)
        ajaxGetLocation('get-districts', 1, 0)
        ajaxGetLocation('get-wards', 0, 1)
    }

    body.on('change', '#address_city', function (e) {
        let value  = $(this).find('option:selected').attr('data-id');
        ajaxGetLocation('get-districts', $(this).attr('data-ajax'), value, 0)
    })

    body.on('change', '#address_state', function (e) {
        let value  = $(this).find('option:selected').attr('data-id');
        ajaxGetLocation('get-wards', $(this).attr('data-ajax'), 0, value);

        let target = refreshCartTarget()

        $(target).load(window.location.href
            + '?receiver_province=' + encodeURIComponent($('#address_city').find('option:selected').val())
            + '&receiver_district=' + encodeURIComponent($('#address_state').find('option:selected').val())
            + ' ' + target + ' > *', () => {
            $('.payment-info-loading').hide();
            $('.payment-checkout-btn').attr('disabled', false)
            $('.payment-checkout-btn').text('Thanh toán')
        });
    })

    body.on('click','.shipping-sub-menu-item', function () {
        $('.shipping-sub-menu-item').removeClass('active');
        $(this).addClass('active');
    })

    body.on('change', '#address_id', function (e) {
        let value = $(this).val();

        let addressTargetWrapper = $('.address-item[data-id="'+ value +'"]');

        let city = addressTargetWrapper.find('.address-item-city').val();
        let district = addressTargetWrapper.find('.address-item-district').val();

        let target = refreshCartTarget()

        $(target).load(window.location.href
            + '?receiver_province=' + encodeURIComponent(city)
            + '&receiver_district=' + encodeURIComponent(district)
            + ' ' + target + ' > *', () => {
            $('.payment-info-loading').hide();
            $('.payment-checkout-btn').attr('disabled', false)
            $('.payment-checkout-btn').text('Thanh toán')
        });
    })

    body.on('change', '#ubg-xu-checkout', function () {
        let check = $('#ubg-xu-checkout').is(":checked");

        let target = refreshCartTarget()

        let ubgxutarget = '#ubgxu-checkout';

        $(target).load(window.location.href
            + '?pay_with_ubgxu=' + check
            + ' ' + target + ' > *', () => {
            $('.payment-info-loading').hide();
            $('.payment-checkout-btn').attr('disabled', false)
            $('.payment-checkout-btn').text('Thanh toán')
        });

        $(ubgxutarget).load(window.location.href
            + '?pay_with_ubgxu=' + check
            + ' ' + ubgxutarget + ' > *', () => {
            $('.payment-info-loading').hide();
            $('.payment-checkout-btn').attr('disabled', false)
            $('.payment-checkout-btn').text('Thanh toán')
        });
    })

    document.addEventListener('payment-form-reloaded', function() {
        BPayment.initResources();
    });
});
