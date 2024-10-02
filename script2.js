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

const toggleButton = document.querySelector('.toggleButton')
const swiperHeight = document.querySelectorAll('.swiper')
const arrows = document.querySelector('.arrows')

toggleButton.addEventListener('click', () => {
	swiperHeight.forEach(item => {
		if (toggleButton.textContent == 'Скрыть') {
			item.style.height = '170px'
			toggleButton.textContent = 'Показать все'
			arrows.src = 'images/arrows.svg'
		} else {
			item.style.height = 'auto'
			toggleButton.textContent = 'Скрыть'
			arrows.src = 'images/arrowsreverse.svg'
		}
	})
})
