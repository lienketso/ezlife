/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./platform/themes/nest/assets/js/main.js ***!
  \************************************************/
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function ($) {
  'use strict';

  var _this2 = this;
  var isRTL = $('body').prop('dir') === 'rtl';
  var digitInput = $('.digit-group');

  // Page loading
  $(window).on('load', function () {
    $('#preloader-active').fadeOut();
    $('body').css({
      'overflow': 'visible'
    });
    $('.home-slider .single-hero-slider').show();
    $('#news-flash ul li').show();
  });
  /*-----------------
      Menu Stick
  -----------------*/
  var header = $('.sticky-bar');
  var win = $(window);
  var $headerArea = $('header.header-area');
  win.on('scroll', function () {
    var scroll = win.scrollTop();
    if (scroll < 200) {
      header.removeClass("stick");
      $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
      $(".header-style-2 .categories-button-active").removeClass("open");
    } else {
      header.addClass("stick");
    }
  });

  /*------ ScrollUp -------- */
  $.scrollUp({
    scrollText: '<i class="fi-rs-arrow-small-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  //sidebar sticky
  if ($('.sticky-sidebar').length) {
    $('.sticky-sidebar').theiaStickySidebar();
  }

  /**
   * Number.prototype.format_price(n, x)
   *
   * @param integer n: length of decimal
   * @param integer x: length of sections
   */
  Number.prototype.format_price = function (n, x) {
    var currencies = window.currencies || {};
    if (!n) {
      n = currencies.number_after_dot != undefined ? currencies.number_after_dot : 2;
    }
    var re = '\\d(?=(\\d{' + (x || 3) + '})+$)';
    var priceUnit = '';
    var price = this;
    if (currencies.show_symbol_or_title) {
      priceUnit = currencies.symbol || currencies.title;
    }
    if (currencies.display_big_money) {
      if (price >= 1000000 && price < 1000000000) {
        price = price / 1000000;
        priceUnit = currencies.million + (priceUnit ? ' ' + priceUnit : '');
      } else if (price >= 1000000000) {
        price = price / 1000000000;
        priceUnit = currencies.billion + (priceUnit ? ' ' + priceUnit : '');
      }
    }
    price = price.toFixed(Math.max(0, ~~n));
    price = price.toString().split('.');
    price = price[0].toString().replace(new RegExp(re, 'g'), '$&' + currencies.thousands_separator) + (price[1] ? currencies.decimal_separator + price[1] : '');
    if (currencies.show_symbol_or_title) {
      if (currencies.is_prefix_symbol) {
        price = priceUnit + price;
      } else {
        price = price + priceUnit;
      }
    }
    return price;
  };

  /*---------------------
      Price range
  --------------------- */
  if ($('.slider-range').length) {
    $('.slider-range').map(function (i, el) {
      var $this = $(el);
      var $parent = $this.closest('.range');
      var $min = $parent.find('input.min-range');
      var $max = $parent.find('input.max-range');
      $this.slider({
        range: true,
        min: $min.data('min') || 0,
        max: $max.data('max') || 500,
        values: [$min.val() || 0, $max.val() || 500],
        slide: function slide(event, ui) {
          setInputRange($parent, ui.values[0], ui.values[1]);
        },
        change: function change(event, ui) {
          setInputRange($parent, ui.values[0], ui.values[1]);
        }
      });
      setInputRange($parent, $this.slider('values', 0), $this.slider('values', 1));
    });
  }
  function setInputRange($parent, min, max) {
    var $filter = $parent.closest('.widget-filter-item');
    var minFormatted = min;
    var maxFormatted = max;
    if ($filter.length && $filter.data('type') == 'price') {
      minFormatted = minFormatted.format_price();
      maxFormatted = maxFormatted.format_price();
    }
    var $from = $parent.find('.from');
    var $to = $parent.find('.to');
    $parent.find('input.min-range').val(min);
    $parent.find('input.max-range').val(max);
    $from.text(minFormatted);
    $to.text(maxFormatted);
  }
  $(document).on('click', '.price_range .list-of-suggetions li', function (event) {
    event.preventDefault();
    var $this = $(event.currentTarget);
    var $parent = $this.closest('.price_range');
    $parent.find('.slider-range').slider('values', 0, $this.data('from'));
    $parent.find('.slider-range').slider('values', 1, $this.data('to'));
  });

  /*------ Hero slider 1 ----*/
  $('.hero-slider-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: isRTL,
    fade: true,
    loop: true,
    dots: true,
    arrows: true,
    prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
    nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
    appendArrows: '.hero-slider-1-arrow',
    autoplay: true
  });

  /*Carousel 8 columns*/
  $('.carousel-8-columns').each(function () {
    var id = $(this).attr('id');
    var sliderID = '#' + id;
    var appendArrowsClassName = '#' + id + '-arrows';
    $(sliderID).slick({
      dots: false,
      infinite: true,
      rtl: isRTL,
      speed: 1000,
      arrows: true,
      autoplay: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      loop: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }],
      prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
      nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
      appendArrows: appendArrowsClassName
    });
  });

  /* Carousel 10 columns */
  $('.carousel-10-columns').each(function () {
    var id = $(this).attr('id');
    var sliderID = '#' + id;
    var appendArrowsClassName = '#' + id + '-arrows';
    $(sliderID).slick({
      dots: false,
      infinite: true,
      rtl: isRTL,
      speed: 1000,
      arrows: true,
      autoplay: false,
      slidesToShow: 10,
      slidesToScroll: 1,
      loop: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }],
      prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
      nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
      appendArrows: appendArrowsClassName
    });
  });

  /*Carousel 4 columns*/
  $(".carousel-4-columns").each(function () {
    var id = $(this).attr('id');
    var sliderID = '#' + id;
    var appendArrowsClassName = '#' + id + '-arrows';
    $(sliderID).slick({
      dots: false,
      infinite: true,
      rtl: isRTL,
      speed: 1000,
      arrows: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      loop: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }],
      prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
      nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
      appendArrows: appendArrowsClassName
    });
  });

  /*Carousel 4 columns*/
  $('.carousel-3-columns').each(function (key, item) {
    var id = $(this).attr('id');
    var sliderID = '#' + id;
    var appendArrowsClassName = '#' + id + '-arrows';
    $(sliderID).slick({
      dots: false,
      infinite: true,
      rtl: isRTL,
      speed: 1000,
      arrows: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      loop: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }],
      prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
      nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
      appendArrows: appendArrowsClassName
    });
  });

  /*Fix Bootstrap 5 tab & slick slider*/

  $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
    $('.carousel-4-columns').slick('setPosition');
  });

  /*------ Timer Countdown ----*/

  var trans = function trans(key) {
    window.trans = window.trans || {};
    return window.trans[key] !== 'undefined' && window.trans[key] ? window.trans[key] : key;
  };
  $('[data-countdown]').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $(this).html(event.strftime('' + '<span class="countdown-section"><span class="countdown-amount hover-up">%D</span><span class="countdown-period"> ' + trans('days') + ' </span></span>' + '<span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> ' + trans('hours') + ' </span></span>' + '<span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> ' + trans('mins') + ' </span></span>' + '<span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period"> ' + trans('sec') + ' </span></span>'));
    });
  });

  /*------ Product slider active 1 ----*/
  $('.product-slider-active-1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: isRTL,
    autoplay: true,
    fade: false,
    loop: true,
    dots: false,
    arrows: true,
    prevArrow: '<span class="pro-icon-1-prev"><i class="fi-rs-angle-small-left"></i></span>',
    nextArrow: '<span class="pro-icon-1-next"><i class="fi-rs-angle-small-right"></i></span>',
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  /*------ Testimonial active 1 ----*/
  $('.testimonial-active-1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: isRTL,
    fade: false,
    loop: true,
    dots: false,
    arrows: true,
    prevArrow: '<span class="pro-icon-1-prev"><i class="fi-rs-angle-small-left"></i></span>',
    nextArrow: '<span class="pro-icon-1-next"><i class="fi-rs-angle-small-right"></i></span>',
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  /*------ Testimonial active 3 ----*/
  $('.testimonial-active-3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: isRTL,
    fade: false,
    loop: true,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  /*------ Categories slider 1 ----*/
  $('.categories-slider-1').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: isRTL,
    fade: false,
    loop: true,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  /*----------------------------
      Category toggle function
  ------------------------------*/
  var searchToggle = $('.categories-button-active');
  searchToggle.on('click', function (e) {
    e.preventDefault();
    if ($headerArea.find('.categories-button-active').hasClass('cant-close') && !header.hasClass('stick')) {
      return false;
    } else {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).siblings('.categories-dropdown-active-large').removeClass('open');
        if (!$headerArea.find('.categories-button-active').hasClass('cant-close')) {
          $(this).siblings('.categories-dropdown-active-large').removeClass('default-open');
        }
      } else {
        $(this).addClass('open');
        $(this).siblings('.categories-dropdown-active-large').addClass('open');
      }
    }
  });

  /*-------------------------
      Testimonial active 2
  --------------------------*/
  var $status = $('.pagingInfo');
  var $slickElement = $('.testimonial-active-2');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text('0' + i + ' ------ ' + '0' + slick.slideCount);
  });
  $slickElement.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: isRTL,
    fade: false,
    loop: true,
    dots: false,
    arrows: true,
    prevArrow: '<span class="testimonial-icon-2-prev"><i class="fi-rs-angle-small-left"></i></span>',
    nextArrow: '<span class="testimonial-icon-2-next"><i class="fi-rs-angle-small-right"></i></span>'
  });

  /*-------------------------------
      Sort by active
  -----------------------------------*/
  if ($('.sort-by-product-area').length) {
    var $body = $('body'),
      $cartWrap = $('.sort-by-product-area'),
      $cartContent = $cartWrap.find('.sort-by-dropdown');
    $body.on('click', '.sort-by-product-area .sort-by-product-wrap', function (e) {
      e.preventDefault();
      var $this = $(this);
      if (!$this.parent().hasClass('show')) {
        $this.siblings('.sort-by-dropdown').addClass('show').closest('.sort-by-product-area').addClass('show');
      } else {
        $this.siblings('.sort-by-dropdown').removeClass('show').closest('.sort-by-product-area').removeClass('show');
      }
    });
    /*Close When Click Outside*/
    $body.on('click', function (e) {
      var $target = e.target;
      if (!$($target).is('.sort-by-product-area') && !$($target).parents().is('.sort-by-product-area') && $cartWrap.hasClass('show')) {
        $cartWrap.removeClass('show');
        $cartContent.removeClass('show');
      }
    });
  }

  /*-----------------------
      Shop filter active
  ------------------------- */
  var shopFiltericon = $('.shop-filter-toggle');
  shopFiltericon.on('click', function (e) {
    e.preventDefault();
    $('.shop-product-filter-header').slideToggle();
    $('.shop-filter-toggle').toggleClass('active');
  });
  function closeShopFilterSection() {
    if ($('.shop-filter-toggle').hasClass('active')) {
      $('.shop-product-filter-header').slideToggle();
      $('.shop-filter-toggle').removeClass('active');
    }
  }
  window.closeShopFilterSection = closeShopFilterSection;

  /*-------------------------------------
      Product details big image slider
  ---------------------------------------*/
  $('.pro-dec-big-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: isRTL,
    arrows: false,
    draggable: false,
    fade: false,
    asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2'
  });

  /*---------------------------------------
      Product details small image slider
  -----------------------------------------*/
  $('.product-dec-slider-small').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: isRTL,
    asNavFor: '.pro-dec-big-img-slider',
    dots: false,
    focusOnSelect: true,
    fade: false,
    arrows: false,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  /*-----------------------
      Magnific Popup
  ------------------------*/
  if ($('.img-popup').length) {
    $('.img-popup').each(function () {
      // the containers for all your galleries
      $(this).magnificPopup({
        delegate: 'a',
        // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });
  }

  /*---------------------
      Select active
  --------------------- */

  // Isotope active
  if ($('.grid').length) {
    $('.grid').imagesLoaded(function () {
      // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        layoutMode: 'masonry',
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
      });
    });
  }

  /*====== SidebarSearch ======*/
  function sidebarSearch() {
    var searchTrigger = $('.search-active'),
      endTriggersearch = $('.search-close'),
      container = $('.main-search-active');
    searchTrigger.on('click', function (e) {
      e.preventDefault();
      container.addClass('search-visible');
    });
    endTriggersearch.on('click', function () {
      container.removeClass('search-visible');
    });
  }
  ;
  sidebarSearch();

  /*====== Sidebar menu Active ======*/
  function mobileHeaderActive() {
    var navbarTrigger = $('.burger-icon'),
      endTrigger = $('.mobile-menu-close'),
      container = $('.mobile-header-active'),
      wrapper4 = $('body');
    wrapper4.prepend('<div class="body-overlay-1"></div>');
    navbarTrigger.on('click', function (e) {
      e.preventDefault();
      container.addClass('sidebar-visible');
      wrapper4.addClass('mobile-menu-active');
    });
    endTrigger.on('click', function () {
      container.removeClass('sidebar-visible');
      wrapper4.removeClass('mobile-menu-active');
    });
    $('.body-overlay-1').on('click', function () {
      container.removeClass('sidebar-visible');
      wrapper4.removeClass('mobile-menu-active');
    });
  }
  ;
  mobileHeaderActive();

  /*---------------------
       Mobile menu active
   ------------------------ */
  var $offCanvasNav = $('.mobile-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fi-rs-angle-down"></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
    var $this = $(this);
    if ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length) {
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
  });

  /*--- language currency active ----*/
  $('.mobile-language-active').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.single-mobile-header-info').find('.lang-dropdown-active').slideToggle(900);
  });

  /*--- categories-button-active-2 ----*/
  $('.categories-button-active-2').on('click', function (e) {
    e.preventDefault();
    $('.categories-dropdown-active-small').slideToggle(900);
  });

  /*-----More Menu Open----*/
  $('.more_slide_open').slideUp();
  $('.more_categories').on('click', function () {
    $(this).toggleClass('show');
    $('.more_slide_open').slideToggle();
  });

  /*--- VSticker ----*/
  $('#news-flash').vTicker({
    speed: 500,
    pause: 3000,
    animation: 'fade',
    mousePause: false,
    showItems: 1
  });
  var productDetails = function productDetails() {
    $('.product-image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: isRTL,
      arrows: false,
      fade: false,
      asNavFor: '.slider-nav-thumbnails'
    });
    $('.slider-nav-thumbnails').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      rtl: isRTL,
      asNavFor: '.product-image-slider',
      dots: false,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fi-rs-arrow-small-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fi-rs-arrow-small-right"></i></button>'
    });

    // Remove active class from all thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

    // Set active class to first thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.product-image-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
      $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });
    var $galleries = $('.product-image-slider');
    if ($galleries.length) {
      $galleries.map(function (index, value) {
        $(value).magnificPopup({
          delegate: '.slick-slide:not(.slick-cloned) a',
          // the selector for gallery item
          type: 'image',
          gallery: {
            enabled: true
          }
        });
      });
    }

    //Filter color/Size
    $('.list-filter').each(function () {
      $(this).find('a').on('click', function (event) {
        event.preventDefault();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
        $(this).parents('.attr-detail').find('.current-size').text($(this).text());
        $(this).parents('.attr-detail').find('.current-color').text($(this).attr('data-color'));
      });
    });
    $(document).on('click', '.dropdown-menu .cart_list', function (e) {
      e.stopPropagation();
    });
  };
  if (digitInput.length > 0) {
    digitInput.find('input').each(function () {
      $(this).attr('maxlength', 1);
      $(this).on('keyup', function (e) {
        var parent = $($(this).parent());
        if (e.keyCode === 8 || e.keyCode === 37) {
          var prev = parent.find('input#' + $(this).data('previous'));
          if (prev.length) {
            $(prev).select();
          }
        } else if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode === 39) {
          var next = parent.find('input#' + $(this).data('next'));
          if (next.length) {
            $(next).select();
          }
        }
      });
    });
  }
  $(document).on('change', '#address_city', function (event) {
    var $this = $(event.currentTarget);
    $.ajax({
      type: 'GET',
      url: $this.attr('data-ajax'),
      data: {
        province_id: $('#address_city option:selected').attr('data-id')
      },
      success: function success(res) {
        $('#address_state').html(res.data);
      },
      error: function error(res) {
        console.log(res);
      }
    });
  });
  $(document).on('change', '#address_state', function (event) {
    var $this = $(event.currentTarget);
    $.ajax({
      type: 'GET',
      url: $this.attr('data-ajax'),
      data: {
        district_id: $('#address_state option:selected', _this2).attr('data-id')
      },
      success: function success(res) {
        $('#address_ward').html(res.data);
      },
      error: function error(res) {
        console.log(res);
      }
    });
  });
  $(document).on('click', '.card-upload-button', function () {
    var formInput = $(this).next();
    formInput.click();
  });
  $(document).on('click', '.card-upload-inner img', function () {
    var formInput = $(this).prev('input');
    formInput.click();
  });
  $('.card-preview').change(function () {
    var _$$prop = $(this).prop('files'),
      _$$prop2 = _slicedToArray(_$$prop, 1),
      file = _$$prop2[0];
    var image = $(this).next();
    if (file) {
      image.attr('src', URL.createObjectURL(file));
    }
  });
  $(document).on('click', '.toggle-show-password i', function (e) {
    var _this = e.currentTarget;
    if ($(this).hasClass('active-icon')) {
      $(_this).parent().prev().attr('type', 'text');
      $(this).removeClass('active-icon');
      $(this).attr('class', 'fi-rs-eye-crossed');
    } else {
      $(this).attr('class', 'fi-rs-eye active-icon');
      $(_this).parent().prev().attr('type', 'password');
    }
  });
  $(document).on('click', '#copylink-affiliate', function (e) {
    e.preventDefault();
    /* Get the text field */
    var copyText = document.getElementById("register-link");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Link đăng ký đã được copy");
  });
  $(document).on('click', '.affiliate-popup-reject', function (e) {
    e.preventDefault();
    $('.ps-popup').hide();
  });
  $(document).on('click', '.affiliate-popup-accept', function (e) {
    e.preventDefault();
    $('input#affiliation_id').attr('readonly', true);
    $('.ps-popup').hide();
  });

  /* WOW active */
  if (typeof WOW != 'undefined') {
    new WOW().init();
  }

  //Load functions
  $(document).ready(function () {
    productDetails();
  });
})(jQuery);
/******/ })()
;