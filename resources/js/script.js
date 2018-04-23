$(document).ready(function() {

    /* sticky nav */
    $('.js--section-features').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
             $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
    /* scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });
    
    /* nav scroll */
    $('a[href*="#"]').not('[href="#"]').click(function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
    });
    
    /* animations on scrolls */
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp'); 
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse'); 
    }, {
        offset: '50%'
    });
    
    /* mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200);

        $('.js--nav-icon i').toggleClass('ion-close-round ion-navicon-round');
        
    })
    
    /* maps */
    var map = new GMaps({
        div: '.map',
        lat: 19.4143697,
        lng: -99.1733912,
        zoom: 16
    });
    
    map.addMarker({
        lat: 19.4153106,
        lng: -99.1848389,
        title: 'La Condesa',
        infoWindow: {
            content: '<p>Our HQ</p>'
        }
    });
    
//    var map;
//    $(window).resize(function(){
//        if ($(window).width() > 767){
//            map = new GMaps({
//                div: '.map',
//                lat: 38.7436266,
//                lng: -9.05,
//                zoom: 12,
//                zoomControl: false,
//                streetViewControl: false,
//                mapTypeControl: false,
//                scaleControl: false,
//                scrollwheel: false
//            });
//        } else {
//            map = new GMaps({
//                div: '.map',
//                lat: 38,
//                lng: -8,
//                zoom: 12,
//                zoomControl: false,
//                streetViewControl: false,
//                mapTypeControl: false,
//                scaleControl: false,
//                scrollwheel: false
//            });
//        }
//    }).resize();
//    map.addMarker({
//        lat: 38.7436266,
//        lng: -9.1602037,
//        title: 'Lisbon',
//        infoWindow: {
//            content: '<p>Our Lisbon HQ</p>'
//        }
//    });
    
});