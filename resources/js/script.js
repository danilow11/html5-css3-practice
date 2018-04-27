$(document).ready(function() {

    /* remove parallax effect on ios */
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS) {
        $('header, .section-testimonials').css('background-attachment', 'initial');
    }

    /* sticky nav */
    $('.js--section-features').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').removeClass('mobile-nav-top');

            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

            if ($('.js--nav-icon').css('display') !== 'none') {
                if ($('.js--main-nav').css('display') !== 'none' ) {
                    $('nav').addClass('mobile-nav-top');
                    $('.hero-text-box').stop().fadeOut(200);
                } else {
                    $('.hero-text-box').stop().fadeIn(200);
                }
            }
        }
    }, {
        offset: '60px'
    });
    
    /* scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        var offsetSticky = $('.js--nav-icon').css('display') !== 'none' ? 60 : 0;
        
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top - offsetSticky
        }, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        var offsetSticky = $('.js--nav-icon').css('display') !== 'none' ? 60 : 0;

        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top - offsetSticky
        }, 1000);

        /* google analytics */
        ga('send', {
            hitType: 'event',
            eventCategory: 'Button',
            eventAction: 'click',
            eventLabel: 'Has interest'
        });
    });
    
    /* nav scroll */
    $('a[href*="#"]').not('[href="#"]').click(function(e){
        e.preventDefault();

        if ($(this).attr('href') === '#features') {
            $('.js--scroll-to-start').click();
            return false;
        }

        var offsetSticky = $('.js--nav-icon').css('display') !== 'none' ? 160 : 0;
        
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - offsetSticky
        }, 1000);
    });

    /* mobile nav */
    $('.js--nav-icon').click(function() {
        $('.js--nav-icon i').toggleClass('ion-close-round ion-navicon-round');
        
        if (!$('nav').hasClass('sticky')) {
            if ($('.js--main-nav').css('display') !== 'none' ) {
                $('.js--main-nav').stop().fadeOut({
                    duration: 200,
                    complete: function() {
                        $('nav').removeClass('mobile-nav-top');
                        $('.hero-text-box').stop().fadeIn(200);
                    }
                });
            } else {
                $('nav').addClass('mobile-nav-top');
                $('.hero-text-box').stop().fadeOut(200);
                $('.js--main-nav').stop().fadeIn(200);
            }
        } else {
            $('.js--main-nav').stop().slideToggle(200);
        }
    });

    /* animations on scrolls */
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn'); 
    }, {
        offset: '60%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp'); 
    }, {
        offset: '60%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn'); 
    }, {
        offset: '60%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse'); 
    }, {
        offset: '60%'
    });

    /* carosue for reviews */
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            1024:{
                items: 3
            }
        }
    });

    /* maps */
    function initMap() {
        var markerPos = {lat: 19.4153106, lng: -99.1848389};
        var mapPos = {lat: 19.4153106, lng: -99.16};

        if ($(window).width() <= 767) {
            mapPos = {lat: 19.4153106, lng: -99.19};
        }

        var map = new google.maps.Map(document.querySelector('.map'), {
          zoom: 14,
          center: mapPos
        });

        var marker = new google.maps.Marker({
          position: markerPos,
          map: map
        });
    }

    $(window).on('load resize', function() {
        initMap();
    });

});