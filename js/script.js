// navbar
var h_hght = document.getElementById('top-logo').clientHeight;
var h_mrg = 0;
                 
$(function(){
    var elem = $('#top-nav');
    var top = $(this).scrollTop();
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
    $(window).scroll(function(){
        top = $(this).scrollTop();
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
});

// owl carousel
$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        margin:10,
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
