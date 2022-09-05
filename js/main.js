const bookmarkText = document.querySelector('.btn2-container__btn2 > span')
const mediaQuery = window.matchMedia('(min-width: 576px)')

function addBookmarkText(view) {
	if (view.matches) {
		bookmarkText.textContent = 'Bookmark'
		bookmarkText.style.margin = '0 2rem 0 1rem'
	} else {
		bookmarkText.textContent = ''
		bookmarkText.style.margin = '0'
	}
}

mediaQuery.addListener(addBookmarkText)
addBookmarkText(mediaQuery)
