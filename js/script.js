(function ($) {

  "use strict";



  $(document).ready(function () {

    var swiper = new Swiper(".testimonial-swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView: 3,
      spaceBetween: 40,
      breakpoints: {

        390: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }

    });

    // Animate on Scroll
    AOS.init({
      duration: 1000,
      once: true,
    })




  });


})(jQuery);
