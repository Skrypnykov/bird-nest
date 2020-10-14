// owl carousel
$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        margin:20,
        dots:true,
        loop:true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            900:{
                items:3,
                nav:false
            }
        }
    });
});