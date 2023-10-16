/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./platform/core/base/resources/assets/js/tags.js ***!
  \********************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TagsManager = /*#__PURE__*/function () {
  function TagsManager() {
    _classCallCheck(this, TagsManager);
  }
  _createClass(TagsManager, [{
    key: "init",
    value: function init() {
      $(document).find('.tags').each(function (index, element) {
        var tagify = new Tagify(element, {
          keepInvalidTags: $(element).data('keep-invalid-tags') !== undefined ? $(element).data('keep-invalid-tags') : true,
          enforceWhitelist: $(element).data('enforce-whitelist') !== undefined ? $(element).data('enforce-whitelist') : false,
          delimiters: $(element).data('delimiters') !== undefined ? $(element).data('delimiters') : ',',
          whitelist: element.value.trim().split(/\s*,\s*/),
          userInput: $(element).data('user-input') !== undefined ? $(element).data('user-input') : true
        });
        if ($(element).data('url')) {
          tagify.on('input', function (e) {
            tagify.settings.whitelist.length = 0; // reset current whitelist
            tagify.loading(true).dropdown.hide.call(tagify); // show the loader animation

            $.ajax({
              type: 'GET',
              url: $(element).data('url'),
              success: function success(data) {
                tagify.settings.whitelist = data;

                // render the suggestions dropdown.
                tagify.loading(false).dropdown.show.call(tagify, e.detail.value);
              }
            });
          });
        }
      });
      document.querySelectorAll('.list-tagify').forEach(function (element) {
        var list = JSON.parse(element.dataset.list);
        var whiteList = [];
        for (var _i = 0, _Object$entries = Object.entries(list); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          whiteList.push({
            value: key,
            name: value
          });
        }
        var listChosen = String(element.value).split(',');
        var arrayChosen = whiteList.filter(function (obj) {
          if (listChosen.includes(String(obj.value))) {
            return {
              value: obj.id,
              name: obj.name
            };
          }
        });
        var tagTemplate = function tagTemplate(tagData) {
          return "\n                <tag title=\"".concat(tagData.title || tagData.name, "\"\n                        contenteditable='false'\n                        spellcheck='false'\n                        tabIndex=\"-1\"\n                        class=\"").concat(this.settings.classNames.tag, " ").concat(tagData["class"] ? tagData["class"] : '', "\"\n                        ").concat(this.getAttributes(tagData), ">\n                    <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>\n                    <div class=\"d-flex align-items-center\">\n                        <span class='tagify__tag-text'>").concat(tagData.name, "</span>\n                    </div>\n                </tag>\n            ");
        };
        var suggestionTemplate = function suggestionTemplate(tagData) {
          return "\n                <div ".concat(this.getAttributes(tagData), "\n                    class=\"tagify__dropdown__item d-flex align-items-center ").concat(tagData["class"] ? tagData["class"] : '', "\"\n                    tabindex=\"0\"\n                    role=\"option\">\n\n                    <div class=\"d-flex flex-column\">\n                        <strong>").concat(tagData.name, "</strong>\n                    </div>\n                </div>\n            ");
        };
        var tagify = new Tagify(element, {
          tagTextProp: 'name',
          enforceWhitelist: true,
          skipInvalid: true,
          // do not temporarily add invalid tags
          dropdown: {
            closeOnSelect: false,
            enabled: 0,
            classname: 'users-list',
            searchKeys: ['value', 'name']
          },
          templates: {
            tag: tagTemplate,
            dropdownItem: suggestionTemplate
          },
          whitelist: whiteList,
          originalInputValueFormat: function originalInputValueFormat(valuesArr) {
            return valuesArr.map(function (item) {
              return item.value;
            }).join(',');
          }
        });
        tagify.loadOriginalValues(arrayChosen);
      });
    }
  }]);
  return TagsManager;
}();
$(document).ready(function () {
  new TagsManager().init();
});
/******/ })()
;