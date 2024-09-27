/* new Swiper('.swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
}) */

var init = false
var swiper
function swiperCard() {
	if (window.innerWidth < 768) {
		if (!init) {
			init = true
			swiper = new Swiper('.swiper', {
				slidesPerView: 'auto',
				spaceBetween: 20,
				freeMode: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				keyboard: {
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true,
				},
				mousewheel: {
					sensitivity: 1,
				},
			})
		}
	} else if (init) {
		swiper.destroy()
		init = false
	}
}
swiperCard()
window.addEventListener('resize', swiperCard)
