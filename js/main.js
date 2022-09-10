const bookmarkBtn = document.querySelector('.btn2')
const bookmarkText = document.querySelector('.btn2__text')
const mediaQuery = window.matchMedia('(min-width: 576px)')
const hamburgerBtn = document.querySelector('.mobile-btn')
const mobileLinksContainer = document.querySelector('.mobile-linkbox')
const mobileLinks = document.querySelectorAll('.mobile-linkbox a')
const bodyHtml = document.querySelector('body')
const circle1 = document.querySelector('#circle1') // svg button element
const circle2 = document.querySelector('#circle2') // svg button element
const progressBar = document.querySelector('.backers__progress-bar--bar')
const money = document.querySelector('.textarea__container:nth-child(1) > p:nth-child(1)')
// const productStands = document.querySelectorAll('.product')
const productStock = document.querySelectorAll('.number')
const productsName = document.querySelectorAll('.product__top--heading')
const productsPrice = document.querySelectorAll('.product__top--price-text')
const productsInfo = document.querySelectorAll('.product__text')
const productsStock = document.querySelectorAll('.number')
const dialogProductsName = document.querySelectorAll(
	'.product-dialog:nth-child(n+2) > .product-info > .product-info__textarea > .product-info__textarea--label'
)
const dialogProductsPrice = document.querySelectorAll(
	'.product-dialog:nth-child(n+2) > .product-info > .product-info__textarea > .product-info__textarea--pledge'
)
const dialogProductsInfo = document.querySelectorAll(
	'.product-dialog:nth-child(n+2) > .product-text > .product-text__text'
)
const dialogProductsStock = document.querySelectorAll(
	'.product-dialog:nth-child(n+2) > .product-stock > .product-stock__number'
)

const products = [
	{
		name: 'Bamboo Stand',
		pledge: 'Pledge 25$ or more',
		about:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
		stock: 101,
	},
	{
		name: 'Black Edition Stand',
		pledge: 'Pledge 75$ or more',
		about:
			"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
		stock: 64,
	},
	{
		name: 'Mahogany Special Edition',
		pledge: 'Pledge 200$ or more',
		about:
			"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to Our Backer member list. Shipping is included.",
		stock: 0,
	},
]

productsName.forEach((product, index) => {
	const { name } = products[index]
	product.textContent = name
})

dialogProductsName.forEach((product, index) => {
	const { name } = products[index]
	product.textContent = name
})

productsPrice.forEach((price, index) => {
	const { pledge } = products[index]
	price.textContent = pledge
})

dialogProductsPrice.forEach((price, index) => {
	const { pledge } = products[index]
	price.textContent = pledge
})

productsInfo.forEach((info, index) => {
	const { about } = products[index]
	info.textContent = about
})

dialogProductsInfo.forEach((info, index) => {
	const { about } = products[index]
	info.textContent = about
})

productsStock.forEach((amount, index) => {
	const { stock } = products[index]
	amount.textContent = stock
})

dialogProductsStock.forEach((amount, index) => {
	const { stock } = products[index]
	amount.textContent = stock
})

function addBookmarkText(view) {
	// dynamic add bookmark text if display width matches
	if (view.matches) {
		bookmarkText.textContent = 'Bookmark'
		bookmarkText.classList.add('margin')
	} else {
		bookmarkText.textContent = ''
		bookmarkText.classList.remove('margin')
	}
}

function handleBookmarkBtn() {
	// change bookmark svg color and text on click
	circle1.classList.toggle('btn2-img-bookmarked1')
	circle2.classList.toggle('btn2-img-bookmarked2')
	bookmarkText.classList.toggle('btn2-txt-bookmarked')
}

function handleHamburgerIcon() {
	// toggle hamburger menu icon and prevent vertical scroll
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

function calculateProgressBar() {
	// set width of progress bar
	const totalValueNeeded = 100000
	const moneyValue = money.textContent.match(/\d/g).join('')
	let progressWidth = (moneyValue * 100) / totalValueNeeded
	progressBar.style.width = progressWidth + '%'
}

function handleProductStock() {
	// disable selecting a product if his stock is 0
	productStock.forEach(product => {
		if (parseInt(product.textContent) === 0) {
			product.closest('.product').style.opacity = 0.4
			product.parentElement.nextElementSibling.style.backgroundColor = 'rgb(122, 122, 122)'
			product.parentElement.nextElementSibling.textContent = 'Out of stock'
			product.parentElement.nextElementSibling.disabled = true
			product.parentElement.nextElementSibling.style.cursor = 'default'
		}
	})

	dialogProductsStock.forEach(product => {
		if (parseInt(product.textContent) === 0) {
			product.closest('.product-dialog').style.opacity = 0.4
			product.parentElement.parentElement.firstElementChild.firstElementChild.disabled = true
		}
	})
}

mobileLinks.forEach(link => {
	// close my mobile menu view while selecting one of website links
	link.addEventListener('click', () => {
		document.querySelector('.mobile-btn__close-icon').classList.remove('opened')
		document.querySelector('.mobile-btn__open-icon').classList.remove('closed')
		document.querySelector('.mobile-btn__open-icon').classList.add('opened')
		mobileLinksContainer.classList.remove('opened')
		bodyHtml.classList.remove('overflow')
	})
})

hamburgerBtn.addEventListener('click', e => {
	// listener opening my hamburger menu links
	mobileLinksContainer.classList.toggle('opened')
	handleHamburgerIcon()
})

bookmarkBtn.addEventListener('click', handleBookmarkBtn)
mediaQuery.addListener(addBookmarkText)
addBookmarkText(mediaQuery)
calculateProgressBar()
handleProductStock()
