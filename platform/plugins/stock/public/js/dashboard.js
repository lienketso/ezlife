/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************************!*\
  !*** ./platform/plugins/stock/resources/assets/js/dashboard.js ***!
  \*****************************************************************/
$(document).ready(function () {
  //Checkout
  var body = $('body');
  body.on('change', '#select_contract_to_withdraw', function () {
    var contractId = $(this).val();
    var url = $('#ajax_get_contract_by_id').val();
    $.ajax({
      url: url,
      type: 'GET',
      data: {
        contract_id: contractId
      },
      success: function success(response) {
        $('#amount-wrapper').html(response.data);
      },
      error: function error(err) {
        console.log('getProvinceError:', err);
      }
    });
  });
});
/******/ })()
;