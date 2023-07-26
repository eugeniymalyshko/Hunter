// Slider Hero
if (document.querySelector(".hero__slider")) {
  new Swiper(".hero__slider", {
    direction: "horizontal",
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 16,
    watchOverflow: true,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 6,
    preloadImages: false,
    parallax: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 2,
      },
    },
  });
}
// Slider recommendation
if (document.querySelector(".recommendation__slider")) {
  new Swiper(".recommendation__slider", {
    direction: "horizontal",
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 15,
    watchOverflow: true,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 8,
    preloadImages: false,
    parallax: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 0px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".recommendation__slider-controlls .slider-controlls_next",
      prevEl: ".recommendation__slider-controlls .slider-controlls_prew",
    },
  });
}
// Slider sell
if (document.querySelector(".sell__slider")) {
  new Swiper(".sell__slider", {
    direction: "horizontal",
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 15,
    watchOverflow: true,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 8,
    preloadImages: false,
    parallax: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 640px
      767: {
        spaceBetween: 40,
      },
    },
  });
}
// Slider sreview
if (document.querySelector(".review__slider")) {
  new Swiper(".review__slider", {
    direction: "horizontal",
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 15,
    watchOverflow: true,
    speed: 800,
    //  loop: true,
    loopAdditionalSlides: 8,
    preloadImages: false,
    parallax: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 640px
      767: {
        spaceBetween: 56,
      },
    },
  });
}
