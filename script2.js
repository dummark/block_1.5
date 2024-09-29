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

/* var popup = document.querySelector('.modal')
var openPopupButton = document.querySelector('.button-open')
var closePopupButton = popup.querySelector('.button-close')

openPopupButton.addEventListener('click', function (evt) {
	evt.preventDefault()
	popup.classList.add('modal--show')
})

closePopupButton.addEventListener('click', function (evt) {
	popup.classList.remove('modal--show')
})
	*/

function showCompanies() {
	'modal--show'
		.show()(
			// скрываем элементы
			'button-open'
		)
		.on('click', function () {
			// указываем кнопку при клике на которую покажутся элементы
			'modal--show'.open() // показываем элементы
			appNormalise()
		})
}
