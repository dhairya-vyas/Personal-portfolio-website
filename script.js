$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu v/s navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplayTimeOut: 100,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },

            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    });
});