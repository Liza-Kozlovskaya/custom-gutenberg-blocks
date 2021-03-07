const PSwiper = new Swiper( '.swiper-container', {
	observer: true,
	observeParents: true,
	direction: 'horizontal',
	effect: 'fade',
	setWrapperSize: true,
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
} );
