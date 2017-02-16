webpackJsonp([1,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, $) {window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(0);

__webpack_require__(1);
__webpack_require__(4);
__webpack_require__(2);
var skrollr = __webpack_require__(3);

;
(function () {

    'use strict';

    var isMobile = {
        Android: function Android() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function BlackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function iOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function Opera() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function Windows() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function any() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };

    var mobileMenuOutsideClick = function mobileMenuOutsideClick() {

        $(document).click(function (e) {
            var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas')) {

                    $('body').removeClass('offcanvas');
                    $('.js-fh5co-nav-toggle').removeClass('active');
                }
            }
        });
    };

    var scrollNavBar = function scrollNavBar() {

        if ($(window).scrollTop() > 50) {
            $('body').addClass('scrolled');
            $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
        } else {
            $('body').removeClass('scrolled');
            $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $('body').addClass('scrolled');
                $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
            } else {
                $('body').removeClass('scrolled');
                $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
            }
        });
    };

    var offcanvasMenu = function offcanvasMenu() {

        $('#page').prepend('<div id="fh5co-offcanvas" />');
        $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
        var clone1 = $('.menu-1 > ul').clone();
        $('#fh5co-offcanvas').append(clone1);
        var clone2 = $('.menu-2 > ul').clone();
        $('#fh5co-offcanvas').append(clone2);

        $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
        $('#fh5co-offcanvas').find('li').removeClass('has-dropdown');

        // Hover dropdown menu on mobile
        $('.offcanvas-has-dropdown').mouseenter(function () {
            var $this = $(this);

            $this.addClass('active').find('ul').slideDown(500, 'easeOutExpo');
        }).mouseleave(function () {

            var $this = $(this);
            $this.removeClass('active').find('ul').slideUp(500, 'easeOutExpo');
        });

        $(window).resize(function () {

            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
        });
    };

    var burgerMenu = function burgerMenu() {

        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
            var $this = $(this);

            if ($('body').hasClass('overflow offcanvas')) {
                $('body').removeClass('overflow offcanvas');
            } else {
                $('body').addClass('overflow offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();
        });
    };

    var contentWayPoint = function contentWayPoint() {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '85%' });
    };

    var dropdown = function dropdown() {

        $('.has-dropdown').mouseenter(function () {

            var $this = $(this);
            $this.find('.dropdown').css('display', 'block').addClass('animated-fast fadeInUpMenu');
        }).mouseleave(function () {
            var $this = $(this);

            $this.find('.dropdown').css('display', 'none').removeClass('animated-fast fadeInUpMenu');
        });
    };

    var goToTop = function goToTop() {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }
        });
    };

    // Loading page
    var loaderPage = function loaderPage() {
        $(".fh5co-loader").fadeOut("slow");
    };

    var counter = function counter() {
        $('.js-counter').countTo({
            formatter: function formatter(value, options) {
                return value.toFixed(options.decimals);
            }
        });
    };

    var counterWayPoint = function counterWayPoint() {
        if ($('#fh5co-counter').length > 0) {
            $('#fh5co-counter').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(counter, 400);
                    $(this.element).addClass('animated');
                }
            }, { offset: '90%' });
        }
    };

    var parallax = function parallax() {
        if (!isMobile.any()) {
            skrollr.init({
                edgeStrategy: 'set',
                easing: {
                    WTF: Math.random,
                    inverted: function inverted(p) {
                        return 1 - p;
                    }
                }
            });
        }
    };

    // Page Nav
    var clickMenu = function clickMenu() {

        $('#fh5-navbar a:not([class="external"])').click(function (event) {
            var section = $(this).data('nav-section'),
                navbar = $('#fh5-navbar');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top
                }, 500);
            }

            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });
    };

    // Page Nav
    var clickMenuOffCanvas = function clickMenuOffCanvas() {

        $('#fh5co-offcanvas a:not([class="external"])').click(function (event) {
            var section = $(this).data('nav-section'),
                navbar = $('fh5co-offcanvas');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top
                }, 500);
            }

            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });
    };

    // Reflect scrolling in navigation
    var navActive = function navActive(section) {

        var $el = $('#fh5-navbar ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });
    };

    var navigationSection = function navigationSection() {

        var $section = $('section[data-section]');

        $section.waypoint(function (direction) {

            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function (direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function offset() {
                return -$(this.element).height() + 50;
            }
        });
    };

    $(function () {
        mobileMenuOutsideClick();
        scrollNavBar();
        offcanvasMenu();
        burgerMenu();
        contentWayPoint();
        dropdown();
        goToTop();
        loaderPage();
        counterWayPoint();
        parallax();
        clickMenu();
        clickMenuOffCanvas();
        navigationSection();
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ })
],[7]);