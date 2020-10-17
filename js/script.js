$(document).ready(function(){
    $('.gallery-slider-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 650,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
        ]
    });
  });