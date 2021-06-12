jQuery(document).ready(function($) {

    var carousel = $(".owl-carousel"); // Activator Class
    carousel.owlCarousel({
        loop : true,
        items : 5,
        margin:0,
        //nav : false,
        //center:true,
        autoplay:true,
        
        
    });

    checkClasses();
    carousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
        var total = $('.owl-carousel .owl-stage .owl-item.active').length; // nested class from activator class

        $('.owl-carousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem'); // nested class from activator class and remove first and last class if already added.

        $('.owl-carousel .owl-stage .owl-item.active').each(function(index){ // nested class from activator class
            if (index === 1) {
                // this is the first one
                $(this).addClass('firstActiveItem'); // add class in first item
            }
            if (index === total - 2 && total>1) {
                // this is the last one
                $(this).addClass('lastActiveItem'); // add class in last item
            }
        });
    }


});