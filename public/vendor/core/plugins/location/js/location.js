/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ./platform/plugins/location/resources/assets/js/location.js ***!
  \*******************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Location = /*#__PURE__*/function () {
  function Location() {
    _classCallCheck(this, Location);
  }
  _createClass(Location, [{
    key: "init",
    value: function init() {
      var country = 'select[data-type="country"]';
      var state = 'select[data-type="state"]';
      var city = 'select[data-type="city"]';
      $(document).on('change', country, function (event) {
        event.preventDefault();
        var $element = $(document).find(state);
        if ($element.length && $(this).val()) {
          Location.getStates($element, $(event.currentTarget).val());
        }
      });
      $(document).on('change', state, function (event) {
        event.preventDefault();
        var $element = $(document).find(city);
        if ($element.length) {
          Location.getCities($element, $(event.currentTarget).val());
        }
      });
    }
  }], [{
    key: "getStates",
    value: function getStates($element, countryId) {
      $.ajax({
        url: $element.data('url') + '?country_id=' + countryId,
        type: 'GET',
        beforeSend: function beforeSend() {
          $element.closest('form').find('button[type=submit], input[type=submit]').prop('disabled', true);
        },
        success: function success(data) {
          var option = '';
          $.each(data.data, function (index, item) {
            option += '<option value="' + item.id + '">' + item.name + '</option>';
          });
          $element.html(option);
          $element.closest('form').find('button[type=submit], input[type=submit]').prop('disabled', false);
        }
      });
    }
  }, {
    key: "getCities",
    value: function getCities($element, stateId) {
      $.ajax({
        url: $element.data('url') + '?state_id=' + stateId,
        type: 'GET',
        beforeSend: function beforeSend() {
          $element.closest('form').find('button[type=submit], input[type=submit]').prop('disabled', true);
        },
        success: function success(data) {
          var option = '';
          $.each(data.data, function (index, item) {
            option += '<option value="' + item.id + '">' + item.name + '</option>';
          });
          $element.html(option);
          $element.trigger('change');
          $element.closest('form').find('button[type=submit], input[type=submit]').prop('disabled', false);
        }
      });
    }
  }]);
  return Location;
}();
$(document).ready(function () {
  new Location().init();
});
/******/ })()
;