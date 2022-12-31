// For AOS
AOS.init();

// Slick
$(document).ready(function () {
  $(".slick-priceing").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,   
        }
      }
      
    ]
    
  });
});
