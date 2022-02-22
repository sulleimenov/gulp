// import '~/app/vendor/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	/* lazy */
	const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]')
	const loadMapBlock = document.querySelector('.load-map')
	const windowHeight = document.documentElement.clientHeight

	let lazyImagesPositions = []
	if (lazyImages > 0) {
		lazyImages.forEach(img => {
			if (img.dataset.src || img.dataset.srcset) {
				lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)
			}
		})
	}
})