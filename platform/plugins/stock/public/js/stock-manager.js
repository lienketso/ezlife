/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************************************!*\
  !*** ./platform/plugins/stock/resources/assets/js/stock-manager.js ***!
  \*********************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Botble = /*#__PURE__*/function () {
  function Botble() {
    _classCallCheck(this, Botble);
    if (BotbleVariables && BotbleVariables.authorized === '0') {
      this.processAuthorize();
    }
  }
  _createClass(Botble, [{
    key: "countCharacter",
    value: function countCharacter() {
      $.fn.charCounter = function (max, settings) {
        max = max || 100;
        settings = $.extend({
          container: '<span></span>',
          classname: 'charcounter',
          format: '(%1 ' + BotbleVariables.languages.system.character_remain + ')',
          pulse: true,
          delay: 0
        }, settings);
        var p, timeout;
        var count = function count(el, container) {
          el = $(el);
          if (el.val().length > max) {
            el.val(el.val().substring(0, max));
            if (settings.pulse && !p) {
              pulse(container, true);
            }
          }
          if (settings.delay > 0) {
            if (timeout) {
              window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(function () {
              container.html(settings.format.replace(/%1/, max - el.val().length));
            }, settings.delay);
          } else {
            container.html(settings.format.replace(/%1/, max - el.val().length));
          }
        };
        var pulse = function pulse(el, again) {
          if (p) {
            window.clearTimeout(p);
            p = null;
          }
          el.animate({
            opacity: 0.1
          }, 100, function () {
            $(el).animate({
              opacity: 1.0
            }, 100);
          });
          if (again) {
            p = window.setTimeout(function () {
              pulse(el);
            }, 200);
          }
        };
        return this.each(function (index, el) {
          var container;
          if (!settings.container.match(/^<.+>$/)) {
            // use existing element to hold counter message
            container = $(settings.container);
          } else {
            // append element to hold counter message (clean up old element first)
            $(el).next('.' + settings.classname).remove();
            container = $(settings.container).insertAfter(el).addClass(settings.classname);
          }
          $(el).off('.charCounter').on('keydown.charCounter', function () {
            count(el, container);
          }).on('keypress.charCounter', function () {
            count(el, container);
          }).on('keyup.charCounter', function () {
            count(el, container);
          }).on('focus.charCounter', function () {
            count(el, container);
          }).on('mouseover.charCounter', function () {
            count(el, container);
          }).on('mouseout.charCounter', function () {
            count(el, container);
          }).on('paste.charCounter', function () {
            setTimeout(function () {
              count(el, container);
            }, 10);
          });
          if (el.addEventListener) {
            el.addEventListener('input', function () {
              count(el, container);
            }, false);
          }
          count(el, container);
        });
      };
      $(document).on('click', 'input[data-counter], textarea[data-counter]', function (event) {
        $(event.currentTarget).charCounter($(event.currentTarget).data('counter'), {
          container: '<small></small>'
        });
      });
    }
  }, {
    key: "manageSidebar",
    value: function manageSidebar() {
      var body = $('body');
      var navigation = $('.navigation');
      var sidebar_content = $('.sidebar-content');
      navigation.find('li.active').parents('li').addClass('active');
      navigation.find('li').has('ul').children('a').parent('li').addClass('has-ul');
      $(document).on('click', '.sidebar-toggle.d-none', function (event) {
        event.preventDefault();
        body.toggleClass('sidebar-narrow');
        body.toggleClass('page-sidebar-closed');
        if (body.hasClass('sidebar-narrow')) {
          navigation.children('li').children('ul').css('display', '');
          sidebar_content.delay().queue(function () {
            $(event.currentTarget).show().addClass('animated fadeIn').clearQueue();
          });
        } else {
          navigation.children('li').children('ul').css('display', 'none');
          navigation.children('li.active').children('ul').css('display', 'block');
          sidebar_content.delay().queue(function () {
            $(event.currentTarget).show().addClass('animated fadeIn').clearQueue();
          });
        }
      });
    }
  }], [{
    key: "blockUI",
    value: function blockUI(options) {
      options = $.extend(true, {}, options);
      var html = '';
      if (options.animate) {
        html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
      } else if (options.iconOnly) {
        html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="/vendor/core/core/base/images/loading-spinner-blue.gif" alt="loading"></div>';
      } else if (options.textOnly) {
        html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
      } else {
        html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="/vendor/core/core/base/images/loading-spinner-blue.gif" alt="loading"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
      }
      if (options.target) {
        // element blocking
        var el = $(options.target);
        if (el.height() <= $(window).height()) {
          options.cenrerY = true;
        }
        el.block({
          message: html,
          baseZ: options.zIndex ? options.zIndex : 1000,
          centerY: options.cenrerY !== undefined ? options.cenrerY : false,
          css: {
            top: '10%',
            border: '0',
            padding: '0',
            backgroundColor: 'none'
          },
          overlayCSS: {
            backgroundColor: options.overlayColor ? options.overlayColor : '#555555',
            opacity: options.boxed ? 0.05 : 0.1,
            cursor: 'wait'
          }
        });
      } else {
        // page blocking
        $.blockUI({
          message: html,
          baseZ: options.zIndex ? options.zIndex : 1000,
          css: {
            border: '0',
            padding: '0',
            backgroundColor: 'none'
          },
          overlayCSS: {
            backgroundColor: options.overlayColor ? options.overlayColor : '#555555',
            opacity: options.boxed ? 0.05 : 0.1,
            cursor: 'wait'
          }
        });
      }
    }
  }, {
    key: "unblockUI",
    value: function unblockUI(target) {
      if (target) {
        $(target).unblock({
          onUnblock: function onUnblock() {
            $(target).css('position', '');
            $(target).css('zoom', '');
          }
        });
      } else {
        $.unblockUI();
      }
    }
  }, {
    key: "showNotice",
    value: function showNotice(messageType, message) {
      var messageHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      toastr.clear();
      toastr.options = {
        closeButton: true,
        positionClass: 'toast-top-right',
        onclick: null,
        showDuration: 1000,
        hideDuration: 1000,
        timeOut: 10000,
        extendedTimeOut: 1000,
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut'
      };
      if (!messageHeader) {
        switch (messageType) {
          case 'error':
            messageHeader = 'Thông báo';
            break;
          case 'success':
            messageHeader = 'Thành công';
            break;
        }
      }
      toastr[messageType](message, messageHeader);
    }
  }, {
    key: "showError",
    value: function showError(message) {
      var messageHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.showNotice('error', message, messageHeader);
    }
  }, {
    key: "showSuccess",
    value: function showSuccess(message) {
      var messageHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.showNotice('success', message, messageHeader);
    }
  }, {
    key: "handleError",
    value: function handleError(data) {
      if (typeof data.errors !== 'undefined' && !_.isArray(data.errors)) {
        Botble.handleValidationError(data.errors);
      } else {
        if (typeof data.responseJSON !== 'undefined') {
          if (typeof data.responseJSON.errors !== 'undefined') {
            if (data.status === 422) {
              Botble.handleValidationError(data.responseJSON.errors);
            }
          } else if (typeof data.responseJSON.message !== 'undefined') {
            Botble.showError(data.responseJSON.message);
          } else {
            $.each(data.responseJSON, function (index, el) {
              $.each(el, function (key, item) {
                Botble.showError(item);
              });
            });
          }
        } else {
          Botble.showError(data.statusText);
        }
      }
    }
  }, {
    key: "handleValidationError",
    value: function handleValidationError(errors) {
      var message = '';
      $.each(errors, function (index, item) {
        message += item + '<br />';
        var $input = $('*[name="' + index + '"]');
        if ($input.closest('.next-input--stylized').length) {
          $input.closest('.next-input--stylized').addClass('field-has-error');
        } else {
          $input.addClass('field-has-error');
        }
        var $input_array = $('*[name$="[' + index + ']"]');
        if ($input_array.closest('.next-input--stylized').length) {
          $input_array.closest('.next-input--stylized').addClass('field-has-error');
        } else {
          $input_array.addClass('field-has-error');
        }
      });
      Botble.showError(message);
    }
  }, {
    key: "initDatePicker",
    value: function initDatePicker(element) {
      if (jQuery().bootstrapDP) {
        var format = $(document).find(element).data('date-format');
        if (!format) {
          format = 'yyyy-mm-dd';
        }
        $(document).find(element).bootstrapDP({
          maxDate: 0,
          changeMonth: true,
          changeYear: true,
          autoclose: true,
          dateFormat: format
        });
      }
    }
  }, {
    key: "initResources",
    value: function initResources() {
      if (jQuery().select2) {
        $.each($(document).find('.select-multiple'), function (index, element) {
          var options = {
            width: '100%',
            allowClear: true
          };
          var parent = $(element).closest('.modal');
          if (parent.length) {
            options.dropdownParent = parent;
          }
          $(element).select2(options);
        });
        $.each($(document).find('.select-search-full'), function (index, element) {
          var options = {
            width: '100%'
          };
          var parent = $(element).closest('.modal');
          if (parent.length) {
            options.dropdownParent = parent;
          }
          $(element).select2(options);
        });
        $.each($(document).find('.select-full'), function (index, element) {
          var options = {
            width: '100%',
            minimumResultsForSearch: -1
          };
          var parent = $(element).closest('.modal');
          if (parent.length) {
            options.dropdownParent = parent;
          }
          $(element).select2(options);
        });
        $('select[multiple].select-sorting').on('select2:select', function (evt) {
          var $element = $(evt.params.data.element);
          $element.detach();
          $(this).append($element);
          $(this).trigger('change');
        });
        $.each($(document).find('.select-search-ajax'), function (index, element) {
          if ($(element).data('url')) {
            var options = {
              placeholder: $(element).data('placeholder') || '--Select--',
              minimumInputLength: $(element).data('minimum-input') || 1,
              width: '100%',
              delay: 250,
              ajax: {
                url: $(element).data('url'),
                dataType: 'json',
                type: $(element).data('type') || 'GET',
                quietMillis: 50,
                data: function data(params) {
                  // Query parameters will be ?search=[term]&page=[page]
                  return {
                    search: params.term,
                    page: params.page || 1
                  };
                },
                processResults: function processResults(response) {
                  /**
                   * response {
                   *  error: false
                   *  data: {},
                   *  message: ''
                   * }
                   */
                  return {
                    results: $.map(response.data, function (item) {
                      return Object.assign({
                        text: item.name,
                        id: item.id
                      }, item);
                    }),
                    pagination: {
                      more: response.links ? response.links.next : null
                    }
                  };
                },
                cache: true
              },
              allowClear: true
            };
            var parent = $(element).closest('.modal');
            if (parent.length) {
              options.dropdownParent = parent;
            }
            $(element).select2(options);
          }
        });
      }
      if (jQuery().timepicker) {
        if (jQuery().timepicker) {
          $('.timepicker-default').timepicker({
            autoclose: true,
            showSeconds: false,
            minuteStep: 1,
            defaultTime: false
          });
          $('.timepicker-24').timepicker({
            autoclose: true,
            minuteStep: 5,
            showSeconds: false,
            showMeridian: false,
            defaultTime: false
          });
        }
      }
      if (jQuery().inputmask) {
        $.each($(document).find('.input-mask-number'), function (index, element) {
          var _$$data, _$$data2, _$$data3;
          $(element).inputmask({
            alias: 'numeric',
            rightAlign: false,
            digits: (_$$data = $(element).data('digits')) !== null && _$$data !== void 0 ? _$$data : 5,
            groupSeparator: (_$$data2 = $(element).data('thousands-separator')) !== null && _$$data2 !== void 0 ? _$$data2 : ',',
            radixPoint: (_$$data3 = $(element).data('decimal-separator')) !== null && _$$data3 !== void 0 ? _$$data3 : '.',
            digitsOptional: true,
            placeholder: '0',
            autoGroup: true,
            autoUnmask: true,
            removeMaskOnSubmit: true
          });
        });
      }
      if (jQuery().colorpicker) {
        $('.color-picker').colorpicker({
          inline: false,
          container: true,
          format: 'hex',
          extensions: [{
            name: 'swatches',
            options: {
              colors: {
                'tetrad1': '#000000',
                'tetrad2': '#000000',
                'tetrad3': '#000000',
                'tetrad4': '#000000'
              },
              namesAsValues: false
            }
          }]
        }).on('colorpickerChange colorpickerCreate', function (e) {
          var colors = e.color.generate('tetrad');
          colors.forEach(function (color, i) {
            var colorStr = color.string(),
              swatch = e.colorpicker.picker.find('.colorpicker-swatch[data-name="tetrad' + (i + 1) + '"]');
            swatch.attr('data-value', colorStr).attr('title', colorStr).find('> i').css('background-color', colorStr);
          });
        });
      }
      if (jQuery().fancybox) {
        $('.iframe-btn').fancybox({
          width: '900px',
          height: '700px',
          type: 'iframe',
          autoScale: false,
          openEffect: 'none',
          closeEffect: 'none',
          overlayShow: true,
          overlayOpacity: 0.7
        });
        $('.fancybox').fancybox({
          openEffect: 'none',
          closeEffect: 'none',
          overlayShow: true,
          overlayOpacity: 0.7,
          helpers: {
            media: {}
          }
        });
      }
      if (jQuery().tooltip) {
        $('[data-bs-toggle="tooltip"]').tooltip({
          placement: 'top',
          boundary: 'window'
        });
      }
      if (jQuery().areYouSure) {
        $('form').areYouSure();
      }
      Botble.initDatePicker('.datepicker');
      if (jQuery().mCustomScrollbar) {
        Botble.callScroll($('.list-item-checkbox'));
      }
      if (jQuery().textareaAutoSize) {
        $('textarea.textarea-auto-height').textareaAutoSize();
      }
      $('.select2_google_fonts_picker').each(function (i, obj) {
        if (!$(obj).hasClass('select2-hidden-accessible')) {
          $(obj).select2({
            templateResult: function templateResult(opt) {
              if (!opt.id) {
                return opt.text;
              }
              return $('<span style="font-family:\'' + opt.id + '\';"> ' + opt.text + '</span>');
            }
          });
        }
      });
      document.dispatchEvent(new CustomEvent('core-init-resources'));
    }
  }, {
    key: "numberFormat",
    value: function numberFormat(number, decimals, dec_point, thousands_sep) {
      // *     example 1: number_format(1234.56);
      // *     returns 1: '1,235'
      // *     example 2: number_format(1234.56, 2, ',', ' ');
      // *     returns 2: '1 234,56'
      // *     example 3: number_format(1234.5678, 2, '.', '');
      // *     returns 3: '1234.57'
      // *     example 4: number_format(67, 2, ',', '.');
      // *     returns 4: '67,00'
      // *     example 5: number_format(1000);
      // *     returns 5: '1,000'
      // *     example 6: number_format(67.311, 2);
      // *     returns 6: '67.31'
      // *     example 7: number_format(1000.55, 1);
      // *     returns 7: '1,000.6'
      // *     example 8: number_format(67000, 5, ',', '.');
      // *     returns 8: '67.000,00000'
      // *     example 9: number_format(0.9, 0);
      // *     returns 9: '1'
      // *    example 10: number_format('1.20', 2);
      // *    returns 10: '1.20'
      // *    example 11: number_format('1.20', 4);
      // *    returns 11: '1.2000'
      // *    example 12: number_format('1.2000', 3);
      // *    returns 12: '1.200'
      var n = !isFinite(+number) ? 0 : +number,
        precision = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        toFixedFix = function toFixedFix(n, precision) {
          // Fix for IE parseFloat(0.55).toFixed(0) = 0;
          var k = Math.pow(10, precision);
          return Math.round(n * k) / k;
        },
        s = (precision ? toFixedFix(n, precision) : Math.round(n)).toString().split('.');
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || '').length < precision) {
        s[1] = s[1] || '';
        s[1] += new Array(precision - s[1].length + 1).join('0');
      }
      return s.join(dec);
    }
  }]);
  return Botble;
}();
$(document).ready(function () {
  new Botble();
  window.Botble = Botble;
  var heroBanner = $('.hero-banner');
  if ($(window).width() >= 768) {
    if (heroBanner.length > 0) {
      heroBanner.owlCarousel({
        items: 4,
        margin: 15,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        autoplayTimeout: 5000,
        loop: true,
        autoplaySpeed: 3000,
        animateOut: 'fadeOut'
      });
    }
  }
});
(function ($) {
  'use strict';

  var body = $('body');
  $(function () {
    if (window.noticeMessages && window.noticeMessages.length) {
      noticeMessages.map(function (x, k) {
        Botble.showNotice(x.type, x.message, '');
      });
    }
  });
  body.on('click', '#confirm-payment', function () {
    var target = $(this).attr('data-popup');
    $('.stock-popup').css('display', 'flex');
    $('#' + target).show();
  });
  body.on('click', '#stock-popup-close', function () {
    $('.stock-popup').css('display', 'none');
    $('.stock-popup-content').hide();
  });
  body.on('click', '.stock-popup-accept', function () {
    var form = $(this).parent().prev('form');
    form.submit();
  });
  $(".mobile-menu-button").on("click", function (e) {
    $('.main-navigation').addClass('active');
    e.stopPropagation();
  });
  $(".mobile-menu-button").on("click", function (e) {
    $('.main-navigation').addClass('active');
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".main-navigation ") === false) {
      $(".main-navigation ").removeClass("active");
    }
  });
})(jQuery);
/******/ })()
;