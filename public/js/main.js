/**
 Template Name: Candlly - Multipurpose Template
 Author: CoderThemes
 Email: coderthemes@gmail.com
 File: Main js file
 */


(function ($) {

    'use strict';

    function initNavbar() {

        var scroll = $(window).scrollTop();

        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
            $('.cart, .search').removeClass('open');
        });

        $('.navigation-menu>li>a.navMenuItem').on('click', function () {
            if ($('.navbar-toggle').hasClass('open')) {
                $('.navbar-toggle').toggleClass('open');
                $('#navigation').slideToggle(400);
            }
        });

        $('.submenu>li>a.navMenuItem').on('click', function () {
            if ($('.navbar-toggle').hasClass('open')) {
                $('.navbar-toggle').toggleClass('open');
                $('#navigation').slideToggle(400);
            }

        })

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

        $('.navigation-menu li.has-submenu a[href="#"]').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }

    function initNavitemActive() {
        $(".navigation-menu a").each(function () {
            if (this.href == window.location.href) {
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
            }
        });
    }

    function initLoad() {
        $(window).load(function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });
    }

    function initCounter() {
        $('.counter').counterUp({
            delay: 100,
            time: 1200
        });
    }

    function initSliders() {
        $('.main-slider').flexslider({
            slideshowSpeed: 5000,
            directionNav: false,
            controlNav: true,
            animation: "fade"
        });
    }

    function initSubscribeForm() {
        $('#subscribe-form').ajaxChimp({});
    }

    function initCustomModal() {
        $('[data-plugin="custommodal"]').on('click', function (e) {
            Custombox.open({
                target: $(this).attr("href"),
                effect: $(this).attr("data-animation"),
                overlaySpeed: $(this).attr("data-overlaySpeed"),
                overlayColor: $(this).attr("data-overlayColor")
            });
            e.preventDefault();
        });
    }

    function initNavbarClass() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".defaultscroll").addClass("scroll");
            } else {
                $(".defaultscroll").removeClass("scroll");
            }
        });
    }

    function initBackToTop() {
        // Back to top
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        $('.back-to-top').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    }

    function initStellar() {
        $(window).stellar({
            responsive: true,
            scrollProperty: 'scroll',
            parallaxElements: false,
            horizontalScrolling: false,
            horizontalOffset: 0,
            verticalOffset: 0
        });
    }

    function initProductSlider() {
        $(".product-slider-thumb").flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    }

    function init() {
        initNavbar();
        initNavitemActive();
        initLoad();
        initCounter();
        initSliders();
        initCustomModal();
        initSubscribeForm();
        initNavbarClass();
        initBackToTop();
        initStellar();
        initProductSlider();
        new WOW().init();
    }

    init();

})(jQuery)

