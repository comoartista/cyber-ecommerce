import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", function () {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    // If we need pagination
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".browse-category-next",
      prevEl: ".browse-category-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
