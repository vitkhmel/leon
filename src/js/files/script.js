
import { isMobile } from "./functions.js";
import { flsModules } from "./modules.js";


function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;
    document.body.removeChild(outer);
    return (w1 - w2);
}

function closeAllWindows(){
    $('.modal-window').removeClass('active');
    $('body').removeClass('modal-window-open');
    $('.modal-window').removeClass('mod-vertical-align-top');
    $.fancybox.close();
}


$(document).ready(function () {

    const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
    if (devices.test(navigator.userAgent))
    {
        $('body').addClass('is-mobile');
    }
    else
    {
        $('body').addClass('is-desktop');
    }

    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        $('body').addClass('safari');
    }



    //------ forms begin -------------------------------
    $('input').on('keyup',function(){
        var $this = $(this),
            val = $this.val();
        if(val.length >= 1){
            $(this).addClass('not-empty');
        }
        else {
            $(this).removeClass('not-empty');
        }
    });
    if ($("textarea").length) {
        var textarea = document.querySelector('textarea');
        textarea.addEventListener('keyup', function(){
            var $this_2 = $(this),
                val_2 = $this_2.val();
            if(val_2.length >= 1){
                $(this).addClass('not-empty');
                $(this).closest('label').addClass('not-empty-line');
            }else {
                $(this).removeClass('label');
                $(this).closest('label').removeClass('not-empty-line');
            }
            if(this.scrollTop > 0){
                this.style.height = this.scrollHeight + "px";
            }
        });
    }
   //------ forms end -------------------------------


    if ($('.section-for-social__b-text').length) {
        $(".section-for-social__b-text").clone().appendTo('.section-for-social').addClass('mod-clone');
    }

    if ($('.wow').length) {
        new WOW().init();
    }

    //------ sliders and carousels begin -------------------------------
    if ($('.main-page-slider').length) {
        $('.main-page-slider').not('.slick-initialized').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            arrows: false,
        });
    }
    if ($('.b-all-width-img-carrousel').length) {
        $('.b-all-width-img-carrousel').not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            cssEase: 'linear',
            arrows: true,
        });
    }
    if ($('.categories').length) {
        $('.categories').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            focusOnSelect: true,
            dots: false,
            infinite: true,
            cssEase: 'linear',
            arrows: true,
            touchThreshold: 8,
            responsive: [
                {
                    breakpoint: 1271,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
    if ($('.b-archive__slider').length) {
        $('.b-archive__slider').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            focusOnSelect: true,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            arrows: true,
            // touchThreshold: 8
            responsive: [
                {
                    breakpoint: 735,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if ($('.img-columns-3.img-carrousel').length) {
        $('.img-columns-3.img-carrousel').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            focusOnSelect: true,
            dots: false,
            infinite: true,
            cssEase: 'linear',
            arrows: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if ($('.product-cart__main-slider').length) {
        $('.product-cart__main-slider').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            dots: true,
            infinite: true,
            cssEase: 'linear',
            arrows: true,
        });
    }
    //------ sliders and carousels end -------------------------------


    //------ comparison begin -------------------------------
    $('.top-filter__unit select').on('selectric-change', function(event, element, selectric) {
        $(".comparison").hide();
        $(".comparison#" + $(this).val()).show();
    });

    $('.comparison').each(function () {

        const self = $(this);

        $(this).find('.comparison__btns .slider-button.mod-prev').on('click', function (event) {
            var element_width = self.find('.compare_table th').eq(0).innerWidth();
            self.find('.table-wrap').animate({scrollLeft: self.find('.table-wrap').scrollLeft() - element_width - 34}, 800);
            event.preventDefault();
        });
        $(this).find('.comparison__btns .slider-button.mod-next').on('click', function (event) {
            var element_width = self.find('.compare_table th').eq(0).innerWidth();
            self.find('.table-wrap').animate({scrollLeft: self.find('.table-wrap').scrollLeft() + element_width + 34}, 800);
            event.preventDefault();
        });


        var scr = self.find(".table-wrap");
        scr.mousedown(function (event0) {
            var startX = this.scrollLeft + event0.pageX;
            var startY = this.scrollTop + event0.pageY;
            scr.mousemove(function (event1) {
                this.scrollLeft = startX - event1.pageX;
                this.scrollTop = startY - event1.pageY;
                return false;
            });
        });
        $(window).mouseup(function () {
            scr.off("mousemove");
        });

    });
    //------ comparison end -------------------------------


    //accordions begin
    $.fn.togglepanels = function(){
        return this.each(function(){
            $(this).addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
                .find(".accordion-name")
                .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
                .hover(function() { $(this).toggleClass("ui-state-hover"); })
                .append('<span class="ui-icon ui-icon-triangle-1-e"></span>')
                .click(function() {
                    $(this)
                        .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
                        .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end()
                        .next().slideToggle();
                    $(this).closest('.line-accordion').toggleClass("accordion-active");
                    $(this).next()
                        .toggleClass("ui-state-active");
                    return false;
                })
                .next()
                .addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom")
                .not('.in').hide();
        });
    };
    $(".filter__list-group, .form-with-accordion").togglepanels();
    $(".line-accordion.mod-price .accordion-name").click();
    //accordions end

    //jQuery UI Slider begin
    if ($('.ui-slider').length) {
        $(".ui-slider").slider({
            range: "min",
            value: 168,
            min: 100,
            max: 250,
            slide: function (event, ui) {
                $(".ui-slider-amount").val(ui.value);
            }
        });
        $(".ui-slider-amount").val($(".ui-slider").slider("value"));
    }

    //filter price slider begin
    if ($('.sliders').length) {
        $(".sliders").slider({
            range: true,
            min: 0,
            max: 9999,
            values: [ 0, 9999 ],
            slide: function( event, ui ) {
                $( "#amount11" ).val( ui.values[ 0 ] );
                $( "#amount12" ).val( ui.values[ 1 ] );
            }
        });
        $( "#amount11" ).val( $( ".sliders" ).slider( "values", 0 ) );
        $( "#amount12" ).val($( ".sliders" ).slider( "values", 1 ) );
    }
    //filter price slider end


    //jQuery UI Slider end

    //select begin
    if ($('select').length) {
        $(function () {
            $('select').selectric();
        });
        $('select').on('eventname', function (event, element, selectric) {
        });
    }
    //select end


    //------ modal-window begin -------------------------------
    $('.link-to-window').on('click', function(event){
        event.preventDefault();
        $('.modal-window').removeClass('active');
        var id  = $(this).attr('href');
        $(id).addClass('active');
        $('body').addClass('modal-window-open');
    });
    $(document).on('click', '.modal-window-close', function(event){
        event.preventDefault();
        $(this).closest('.modal-window').removeClass('active');
        $('body').removeClass('modal-window-open');
        $(this).closest('.modal-window').removeClass('mod-vertical-align-top');
    });
    $(document).mouseup(function (e){
        var div = $(".modal-window .window__wrap");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.modal-window').removeClass('active');
            $('body').removeClass('modal-window-open');
            $('.modal-window').removeClass('mod-vertical-align-top');
        }
    });
    //------ modal-window end -------------------------------

    //------ tabs begin -------------------------------
    $('.tab__title-item:first-child .tab__link').addClass('active');
    $(document).on('click', '.tab__link', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
        }
        else {
            if ($(this).attr("data-id") !== undefined) {
                var tabId = $(this).attr('data-id');
            }
            else {
                var tabId = $(this).attr('href');

            }
            $(this).addClass('active');
            $(this).closest('.tab').find('.tab__link').not(this).removeClass('active');
            $(this).closest('.tab').find('.tab__info-unit').not(tabId).hide(0);
            $(tabId).show();
        }
        $(this).find('input').prop('checked', true);
    });
    //------ tabs end -------------------------------


    // ------------------ pc menu begin
    $('.nav-main__type-link').mouseenter(function(){
        var nav_tabId = $(this).attr('data-nav-type');
        var nav_img = $(this).attr('data-nav-img');
        $('.nav-main__type-link').not(this).removeClass('active-link');
        $('.nav-main__link').removeClass('active-link');
        $('.nav-main__link').removeClass('open');
        $('.nav-main__third-level-columns .nav-main__list').removeClass('visible');
        $('.nav-main__second-level-columns .nav-main__list').hide(0);
        $(this).addClass('active-link');
        $('.nav-main__info-unit').not(nav_tabId).hide(0);
        $(nav_tabId).show();
        $('.nav-main__img').css('backgroundImage', nav_img)
    });
    $('.nav-main__link').mouseenter(function(){
        var nav_img = $(this).attr('data-nav-img');
        $('.nav-main__link').not(this).removeClass('active-link');
        $(this).addClass('active-link');
        $('.nav-main__img').css('backgroundImage', nav_img)
    });
    $('.nav-main__list.first-level .nav-main__link').mouseenter(function(){
        var nav_tab_second = $(this).attr('data-nav-second');
        $('.nav-main__list.first-level .nav-main__link').removeClass('open');
        $('.nav-main__second-level-columns .nav-main__link').removeClass('open');
        $(this).addClass('open');
        $('.nav-main__second-level-columns .nav-main__list').not(nav_tab_second).hide(0);
        $(nav_tab_second).show();
        $('.nav-main__third-level-columns .nav-main__list').removeClass('visible');
    });
    $('.nav-main__second-level-columns .nav-main__link').mouseenter(function(){
        var nav_tab_third = $(this).attr('data-nav-third');
        $('.nav-main__second-level-columns .nav-main__link').removeClass('open');
        $(this).addClass('open');
        $('.nav-main__third-level-columns .nav-main__list').not(nav_tab_third).removeClass('visible');
        $(nav_tab_third).addClass('visible');
    });
    // ------------------ pc menu end


    // ------------------ mobile menu begin
    $(document).on('click', '.menu-btn', function (event) {
        event.preventDefault();
        if ( $(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.nav-main').slideUp(360);
            $('.mobile-category').removeClass('mod-open');
            $('.mobile-menu').removeClass('active');
            $('body').removeClass('menu-open');
        }
        else {
            $('.b-search').slideUp(350, function() {
                $('body').removeClass("mod-search-open");
            });
            $(this).addClass('active');
            $('.mobile-menu').addClass('active');
            $('body').addClass('menu-open');
            $( ".nav-main__type-item:first-child .nav-main__type-link" ).mouseenter();
            $('.nav-main').slideDown(360);
        }
    });
    $(document).mouseup(function (e){
        if ($('body.menu-open').length) {
            if ($(window).width() + getScrollBarWidth() < 1271) {
                var mobile_menu = $(".mobile-menu, .mobile-category");
                if (!mobile_menu.is(e.target)
                    && mobile_menu.has(e.target).length === 0) {
                    $('.mobile-menu').removeClass('active');
                    $('body').removeClass('menu-open');
                    $('.mobile-category').removeClass('mod-open');
                    $('.nav-main').slideUp(360);
                    $('.menu-btn').removeClass('active');
                }
            }
        }
    });
    $(document).on('click', '.mobile-menu__category-link', function (e) {
        e.preventDefault();
        $('.mobile-menu').removeClass('active');
        $('.mobile-category').addClass('mod-open');
        var type_category = $(this).attr('href');
        $('.mobile-category__menu').not(type_category).hide(0);
        $(type_category).show();
    });
    $('.mobile-category__menu-item').each(function () {
        if ($(this).has(".second-level-menu").length) {
            $(this).addClass('with-btn').append("<button class='mobile-menu__item-btn'><svg width=\"5\" height=\"9\">\n" +
                "                    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#arw\"></use>\n" +
                "                </svg></button>");
        }
    });
    $('.second-level-menu__item').each(function () {
        if ($(this).has(".third-level-menu").length) {
            $(this).addClass('with-btn').append("<button class='mobile-menu__item-btn'><svg width=\"5\" height=\"9\">\n" +
                "                    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#arw\"></use>\n" +
                "                </svg></button>");
        }
    });
    $(document).on('click', '.mobile-category__menu-item > .mobile-menu__item-btn', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).closest('.mobile-category__menu-item').find('.second-level-menu').slideUp(350);
            $(this).closest('.mobile-category__menu-item').removeClass("mod-open");
            $(this).removeClass("active");
        } else {
            $('.mobile-category .second-level-menu').slideUp(350);
            $('.mobile-category .mobile-category__menu-item').removeClass("mod-open");
            $('.mobile-category__menu-item > .mobile-menu__item-btn').removeClass("active");
            $(this).addClass("active");
            $(this).closest('.mobile-category__menu-item').addClass("mod-open");
            $(this).closest('.mobile-category__menu-item').find('.second-level-menu').slideDown(350);
        }
    });
    $(document).on('click', '.second-level-menu__item > .mobile-menu__item-btn', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).closest('.second-level-menu__item').find('.third-level-menu').slideUp(350);
            $(this).closest('.second-level-menu__item').removeClass("mod-open");
            $(this).removeClass("active");
        } else {
            $('.mobile-category .third-level-menu').slideUp(350);
            $('.mobile-category .second-level-menu__item').removeClass("mod-open");
            $('.second-level-menu__item > .mobile-menu__item-btn').removeClass("active");
            $(this).addClass("active");
            $(this).closest('.second-level-menu__item').addClass("mod-open");
            $(this).closest('.second-level-menu__item').find('.third-level-menu').slideDown(350);
        }
    });
    $(document).on('click', '.mobile-menu__close', function (e) {
        e.preventDefault();
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('menu-open');
        $('.mobile-category').removeClass('mod-open');
        $('.nav-main').slideUp(360);
        $('.menu-btn').removeClass('active');
    });
    $(document).on('click', '.mobile-category__top-title.mod-first-level', function (e) {
        e.preventDefault();
        $('.mobile-menu').addClass('active');
        $('.mobile-category').removeClass('mod-open');
    });
    // ------------------ mobile menu end


    // ------------------ fancybox-zoom begin
    if ($(".fancybox-zoom").length) {
        var imgOpts = $.extend(true, {}, $.fancybox.defaults, {   slideShow  : true,
            fullScreen : false,
            buttons: [
                "zoom",
            ],
            infobar: false,
            loop: true,
            thumbs : {
                autoStart : true,
                axis      : 'x'
            },
            afterLoad : function() {
            }
        });
        $('.fancybox-zoom').fancybox(imgOpts);
    }
    // ------------------ fancybox-zoom end


   //amount begin
    $(document).on('click', '.button_minus', function () {
        var quantity_id = parseInt($(this).attr('data-quantity-id'));
        var value = parseInt($('#quantity-' + quantity_id).val()) - 1;
        if (value == 0) return false;
        $('#quantity-' + quantity_id).val(value);
        $(this).parent().find('.cart_update').trigger('click');
        return false;
    });
    $(document).on('click', '.button_plus', function () {
        var quantity_id = parseInt($(this).attr('data-quantity-id'));
        var value = parseInt($('#quantity-' + quantity_id).val()) + 1;
        $('#quantity-' + quantity_id).val(value);
        $(this).parent().find('.cart_update').trigger('click');
    });
    //amount end

    $(window).resize(function () {
        if ($('.compare_table').length) {
        }
        else {
            $('.text table').each(function(){
                if($(this).width() > $(".wrap").width()){
                    if($(this).hasClass('mod-long')){
                    }
                    else {
                        $(this).addClass('mod-long');
                        $(this).wrap("<div class='text-table-overflow'></div>");
                    }
                }
                else {
                    if ($(this).hasClass('mod-long')) {
                        $(this).removeClass('mod-long');
                        $(this).unwrap();
                    }
                    else {
                    }
                }
            });
        }
    }).resize();

    //filter begin
    $(document).on('click', '.filter-btn, .filter-close-btn', function (event) {
        event.preventDefault();
        if ($('.filter-aside').hasClass('active')) {
            $('.filter-close-btn').removeClass('mod-fixed');
            $('.filter-form').animate({ "left": "-480px" }, 700, function() {
                $('.filter-aside').removeClass("active");
            });
            $('body').removeClass("filter-open");
        } else {
            $('.filter-aside').addClass("active");
            $('.filter-form').animate({ "left": "0" }, 700, function() {
                $('.filter-close-btn').addClass('mod-fixed');
            });
            $('body').addClass("filter-open");
        };
    });
    $(document).mouseup(function (e){
        if ($('.filter-aside').hasClass('active')) {
            var filter = $(".filter-form");
            if (!filter.is(e.target)
                && filter.has(e.target).length === 0) {
                $('.filter-close-btn').removeClass('mod-fixed');
                $('.filter-form').animate({ "left": "-480px" }, 700, function() {
                    $('.filter-aside').removeClass("active");
                });
                $('body').removeClass("filter-open");
            }
        }
    });
    //filter end

    //search begin
    $(document).on('click', '.b-search__close, .search-btn', function (event) {
        event.preventDefault();
        if ($('body').hasClass('mod-search-open')) {
            $('.b-search').slideUp(350, function() {
                $('body').removeClass("mod-search-open");
            });
        } else {
            $('.menu-btn').removeClass('active');
            $('.nav-main').slideUp(360);
            $('.mobile-category').removeClass('mod-open');
            $('.mobile-menu').removeClass('active');
            $('body').removeClass('menu-open');
            $('body').addClass("mod-search-open");
            $('.b-search').slideDown(350);
        }
    });
    //search begin


    // animation for b-title__line begin
    if ($('.b-title__line').length) {
        function is_fully_shown(target) {
            var wt = $(window).scrollTop();
            var wh = $(window).height();
            var eh = $(target).height();
            var et = $(target).offset().top;
            var dh = $(document).height();
            if (wt + wh >= et || wh + wt == dh || eh + et < wh){
                return true;
            } else {
                return false;
            }
        }
        $(window).scroll(function(){
            $('.b-title__line').each(function(){
                if (is_fully_shown($(this))) {
                    var line = $(this);
                    setTimeout(function () {
                        line.addClass('animation-line');
                    }, 1200);
                }
            });
        });
        $(document).ready(function(){
            $('.b-title__line').each(function(){
                if (is_fully_shown($(this))) {
                    var line = $(this);
                    setTimeout(function () {
                        line.addClass('animation-line');
                    }, 0);
                }
            });
        });
    }
    // animation for b-title__line  end


    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $('body').addClass('header-fixed');
        } else {
            $('body').removeClass('header-fixed');
        }
    });


    //  different clicks begin
    $(document).on('click', '.checkout__box__top-line', function (event) {
        if ($(this).closest('.checkout__box').hasClass('active')) {
        } else {
            $(this).closest('.box-for-checkout__box').find('.checkout__box.active .checkout__box__box-content').slideUp(360);
            $(this).closest('.box-for-checkout__box').find('.checkout__box.active').removeClass('active');
            $(this).closest('.checkout__box').addClass("active");
            $(this).closest('.checkout__box').find('.checkout__box__box-content').slideDown(360);
            $(this).find('.checkout__box-radio input').prop('checked', true);
        };
    });
    $(document).on('click', '.promo-code-btn', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $('.promo-code__form').slideUp(350);
            $(this).removeClass("active");
        } else {
            $('.promo-code__form').slideDown(350);
            $(this).addClass("active");
        }
    });
    $(document).on('click', '.b-product__link-with-icon', function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
    });
    $(document).on('click', '.step__label', function (e) {
        $('.step__line-for-btn .btn').addClass('active');
        $('.step__line-for-btn').addClass('mod-btn-active');
    });
    $(document).on('click', '.product-cart__description-nav-link', function (event){
        var id = $(this).attr('href');
        if ($(window).width() + getScrollBarWidth() < 736) {
            $('html,body').animate({
                    scrollTop: $(id).offset().top - 80},
                'slow');
        }
        else {
            $('html,body').animate({
                    scrollTop: $(id).offset().top - 110},
                'slow');
        }
        event.preventDefault();
    });

    $(document).on('click', '.product-cart__comments-section-all, .rating-line__link.all-comments', function (event) {
        event.preventDefault();
        if ($('.box-for-comments').hasClass('active')) {
            $('.comment_hidden').slideUp(350);
            $('.box-for-comments').removeClass("active");
        } else {
            $('.comment_hidden').slideDown(350);
            $('.box-for-comments').addClass("active");
        }
    });

    //  different clicks end


    //  order begin
    function confirm_order(){
        $('.shop-order__confirm').addClass('active');
        $('.shop-order__line-for-btn').addClass('mod-btn-active');
        $('.mobile-confirm-btn').show();;
        $('.mobile__btn:not(".mobile-confirm-btn")').hide();
    }

    function cancel_confirm_order() {
        $('.shop-order__confirm').removeClass('active');
        $('.shop-order__line-for-btn').removeClass('mod-btn-active');
        $('.mobile-confirm-btn').hide();
        $('.mobile__btn:not(".mobile-confirm-btn")').show();

    }

    if ($('.tab.checkout').length) {
        if (document.location.hash) {
            var hash = document.location.hash;
            if (hash == '#quick-order') {
                $('.quick-order__link').click();
                confirm_order();
            }
        }
    }

    $(document).on('click', '.tab.checkout .tab__link:not(".order-step-3 .tab.checkout .tab__link")', function (e) {
        if ($(this).hasClass('quick-order__link')) {
            confirm_order();
        } else {
            cancel_confirm_order();
        }
    });

    if ($('.order-step-3').length) {
        confirm_order();
    }
    //  order end


});
