$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
	/*-----------------------------------------------------------------------------------*/
    var options = {
        offset: 350,
        offsetSide: 'top',
        classes: {
            clone: 'banner--clone fixed',
            stick: 'banner--stick',
            unstick: 'banner--unstick'
        },
        onStick: function() {
            $($.SmartMenus.Bootstrap.init);
        }
    };
    var banner = new Headhesive('.navbar', options);
    $('.offset').css('padding-top', $('.navbar').height() + 'px');
    $(window).resize(function() {
        $('.offset').css('padding-top', $('.navbar').height() + 'px');
    });
    $('.onepage .navbar .nav li a').on('click', function() {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.nav-bars').removeClass('is-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	HAMBURGER MENU ICON
	/*-----------------------------------------------------------------------------------*/
    $(".nav-bars").click(function() {
        $(".nav-bars").toggleClass("is-active");
    });
    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION
	/*-----------------------------------------------------------------------------------*/
    $("#fullslider").revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1240, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: {
                touchenabled: "on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }
    });
	$("#boxslider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        /*fullScreenOffsetContainer: ".navbar",*/
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:1170,
		gridheight:550,
		minHeight: '300',
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: {
                touchenabled: "on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 6,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE PORTFOLIO GRID
	/*-----------------------------------------------------------------------------------*/
    var $portfoliogrid = $('.portfolio-grid .isotope');
    $portfoliogrid.isotope({
        itemSelector: '.item',
        percentPosition: true,
        transitionDuration: '0.7s',
        masonry: {
            columnWidth: $portfoliogrid.width() / 12
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $portfoliogrid.isotope({
            masonry: {
                columnWidth: $portfoliogrid.width() / 12
            }
        });
    });
    $('.portfolio-grid .isotope-filter').on('click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $portfoliogrid.isotope({
            filter: filterValue
        });
    });
    $('.portfolio-grid .isotope-filter').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });
    $portfoliogrid.imagesLoaded(function() {
        $portfoliogrid.isotope('layout');
    });
    jQuery('.btn-load-more').click(function() {
        var url = $(this).attr('href'),
            $this = $(this);

        $this.text('Loading...').addClass('btn-disabled');
        jQuery.get(url, function(data) {
            var $data = jQuery(data).find('.portfolio-grid .isotope .item');
            imagesLoaded($data, function() {
                jQuery('.portfolio-grid .isotope').append($data).isotope('appended', $data);

                $this.remove();
                setTimeout(function() {
                    jQuery('.portfolio-grid .isotope').isotope('layout');
                }, 600);
            });
        });
        return false;
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE BLOG GRID
	/*-----------------------------------------------------------------------------------*/
    var $bloggrid = $('.blog-grid.isotope');
    $bloggrid.isotope({
        itemSelector: '.item',
        percentPosition: true,
        transitionDuration: '0.7s',
        masonry: {
            columnWidth: $bloggrid.width() / 12
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $bloggrid.isotope({
            masonry: {
                columnWidth: $bloggrid.width() / 12
            }
        });
    });
    $bloggrid.imagesLoaded(function() {
        $bloggrid.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	FITVIDS
	/*-----------------------------------------------------------------------------------*/
    $('.player').fitVids();
	/*-----------------------------------------------------------------------------------*/
    /*	LIGHTSLIDER
	/*-----------------------------------------------------------------------------------*/
	$(".text-carousel").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 30,
        pager: false,
        adaptiveHeight: true,
        prevHtml: '<i class="ion-ios-arrow-left"></i>',
        nextHtml: '<i class="ion-ios-arrow-right"></i>',
        responsive : [
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMargin: 0
                  }
            }
        ]
    });
    $(".image-carousel").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 15,
        pager: false,
        adaptiveHeight: true,
        prevHtml: '<i class="ion-ios-arrow-left"></i>',
        nextHtml: '<i class="ion-ios-arrow-right"></i>',
        responsive : [
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMargin: 0
                  }
            }
        ]
    });
    $(".clients").lightSlider({
        item: 6,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 15,
        pager: false,
        controls: false,
        responsive : [
            {
                breakpoint:768,
                settings: {
                    item:3
                  }
            }
        ]
    });
    $('.image-slider').lightSlider({
        item:1,
        slideMargin: 0,
        adaptiveHeight: true,
        auto:true,
        pause: 5000,
        loop:false,
        prevHtml: '<i class="ion-ios-arrow-left"></i>',
        nextHtml: '<i class="ion-ios-arrow-right"></i>'
    });
    $('.text-slider').lightSlider({
        item:1,
        slideMargin: 0,
        adaptiveHeight: true,
        auto:false,
        loop:false,
        pager: true,
        controls: false
    });
	/*-----------------------------------------------------------------------------------*/
    /*	PARALLAX MOBILE
    /*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	BOX LAYOUT BACKGROUND PARALLAX
    /*-----------------------------------------------------------------------------------*/
    $(".box-layout").append('<div class="bg"></div>');
    $(window).scroll(function(e) {
        parallax();
    });
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.box-layout .bg').css('top', -(scrolled * 0.1) + 'px');
    }
	/*-----------------------------------------------------------------------------------*/
    /*	LIGHTGALLERY
	/*-----------------------------------------------------------------------------------*/
    $('.light-gallery').lightGallery({
        thumbnail: false,
        selector: '.lgitem',
        animateThumb: true,
        showThumbByDefault: false,
        download: false,
        autoplayControls: false,
        zoom: false,
	    fullScreen: false,
        thumbWidth: 100,
        thumbContHeight: 80,
        videoMaxWidth: '1000px',
        loop: false,
        mousewheel: true
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TAB COLLAPSE
	/*-----------------------------------------------------------------------------------*/
    $('#tab1').tabCollapse({
        tabsClass: 'hidden-sm hidden-xs',
        accordionClass: 'visible-sm visible-xs'
    });
    $('#tab1').on('shown-accordion.bs.tabcollapse', function() {
        $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
        $('.panel-group').on('shown.bs.collapse', function(e) {
            $(e.target).closest('.panel-default').addClass(' panel-active');
        }).on('hidden.bs.collapse', function(e) {
            $(e.target).closest('.panel-default').removeClass(' panel-active');
        });
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOGGLE
	/*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PROGRESS BAR
	/*-----------------------------------------------------------------------------------*/
    $('.progress-list .progress .bar').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        height: 4
    });
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
	/*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /*	VANILLA
    /*-----------------------------------------------------------------------------------*/
    var myForm;
    myForm = new VanillaForm($("form.vanilla-form"));
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
	/*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint()      
});