const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 20,
    breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
	},
	950: {
      slidesPerView: 3,
    }
  },
  loop: true,
  pagination: {
	  el: '.pagination',
	  bulletClass: 'pagination__button',
	  bulletActiveClass: 'pagination__button-active',
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});