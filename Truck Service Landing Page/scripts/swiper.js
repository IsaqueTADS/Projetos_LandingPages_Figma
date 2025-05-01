import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export default function initSwiper() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}
