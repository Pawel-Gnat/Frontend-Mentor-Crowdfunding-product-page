const bookmarkBtn = document.querySelector('.btn2')
const bookmarkText = document.querySelector('.btn2__text')
const bookmarkImageBtn = document.querySelector('.btn2__img')
const mediaQuery = window.matchMedia('(min-width: 576px)')
const hamburgerBtn = document.querySelector('.mobile-btn')
const mobileLinksContainer = document.querySelector('.mobile-linkbox')
const bodyHtml = document.querySelector('body')

function addBookmarkText(view) {
	if (view.matches) {
		bookmarkText.textContent = 'Bookmark'
		bookmarkText.classList.add('margin')
	} else {
		bookmarkText.textContent = ''
		bookmarkText.classList.remove('margin')
	}
}

function handleBookmarkBtn() {
	bookmarkImageBtn.classList.toggle('btn2-img-bookmarked')
	bookmarkText.classList.toggle('btn2-txt-bookmarked')
}

function handleHamburgerIcon() {
	if (mobileLinksContainer.classList.contains('opened')) {
		document.querySelector('.mobile-btn__close-icon').classList.add('opened')
		document.querySelector('.mobile-btn__open-icon').classList.add('closed')
		bodyHtml.classList.add('overflow')
	} else {
		document.querySelector('.mobile-btn__close-icon').classList.remove('opened')
		document.querySelector('.mobile-btn__open-icon').classList.remove('closed')
		bodyHtml.classList.remove('overflow')
	}
}

bookmarkBtn.addEventListener('click', handleBookmarkBtn)

hamburgerBtn.addEventListener('click', e => {
	mobileLinksContainer.classList.toggle('opened')
	handleHamburgerIcon()
})

mediaQuery.addListener(addBookmarkText)
addBookmarkText(mediaQuery)

// zrobic zeby w hamburger menu na klika poza boxem znikalo menu, tak samo jak w link

// zrobic margin w bookmark text
