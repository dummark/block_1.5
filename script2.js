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

const toggleButton = document.getElementById('toggleButton')
const tabletItems = document.querySelectorAll('.hide-768')
const monitorItems = document.querySelectorAll('.show-1120')
const arrows = document.querySelectorAll('.arrows')

toggleButton.addEventListener('click', () => {
	tabletItems.forEach(item => {
		if (item.style.display === 'none') {
			item.style.display = 'flex'
			toggleButton.textContent = 'Скрыть'
		} else {
			item.style.display = 'none'
			toggleButton.textContent = 'Показать все'
		}
	})
})
