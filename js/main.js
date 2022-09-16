const backButton = document.querySelector('.btn1')
const selectRewardButton = document.querySelectorAll('.product__bottom--btn')
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
const totalMoney = document.querySelector('.textarea__container:nth-child(1) > p:nth-child(1)')
const totalBackers = document.querySelector('.textarea__container:nth-child(2) > p:nth-child(1)')
const mainDialog = document.querySelector('#back-dialog')
const closeMainDialog = document.querySelector('.back-dialog__heading--close-icon')
const resultDialog = document.querySelector('#result-dialog')
const closeResultDialog = document.querySelector('.result-dialog__btn')
const radioInputDialog = document.querySelectorAll('.product-info__input')
const productStock = document.querySelectorAll('.number')
const productsName = document.querySelectorAll('.product__top--heading')
const productsPrice = document.querySelectorAll('.product__top--price-text')
const productsInfo = document.querySelectorAll('.product__text')
const productsStock = document.querySelectorAll('.number')
const dialogContinueButtons = document.querySelectorAll('.pledge-container__submit')
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

const backButtons = [backButton, ...selectRewardButton]

let money = 89914
let backers = 5007

const products = [
	{
		id: 1,
		name: 'Bamboo Stand',
		pledge: 'Pledge 25$ or more',
		about:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
		stock: 101,
	},
	{
		id: 2,
		name: 'Black Edition Stand',
		pledge: 'Pledge 75$ or more',
		about:
			"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
		stock: 64,
	},
	{
		id: 3,
		name: 'Mahogany Special Edition',
		pledge: 'Pledge 200$ or more',
		about:
			"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to Our Backer member list. Shipping is included.",
		stock: 1,
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

function displayCollectedMoney(money) {
	let stringMoney = money.toString()
	let lastThreeLetters = stringMoney.length - 3
	let correctedValue = '$' + stringMoney.slice(0, lastThreeLetters) + ',' + stringMoney.slice(lastThreeLetters)

	return (totalMoney.textContent = correctedValue)
}

function displayTotalBackers(backers) {
	let stringBackers = backers.toString()
	let lastThreeLetters = stringBackers.length - 3

	return (totalBackers.textContent =
		stringBackers.slice(0, lastThreeLetters) + ',' + stringBackers.slice(lastThreeLetters))
}

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

function calculateProgressBar(money) {
	// set width of progress bar
	const totalValueNeeded = 100000
	let progressWidth = (money * 100) / totalValueNeeded
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
			product.parentElement.nextElementSibling.lastElementChild.lastElementChild.disabled = true
		}
	})
}

function mainDialogClose() {
	// close main dialog
	mainDialog.close()
	bodyHtml.classList.remove('overflow')
}

function resultDialogOpen() {
	// open result dialog
	resultDialog.showModal()
	bodyHtml.classList.add('overflow')
}

function resultDialogClose() {
	// close result dialog
	resultDialog.close()
	bodyHtml.classList.remove('overflow')
}

function removeRadioInputFocusState() {
	// remove border color from product div
	document.querySelectorAll('.product-dialog').classList.remove('border-color')
}

radioInputDialog.forEach(input => {
	//function displays additional pledge container with a submit input
	input.addEventListener('click', () => {
		document.querySelectorAll('.product-dialog').forEach(product => {
			product.classList.remove('border-color')
		})

		document.querySelectorAll('.product-pledge').forEach(container => {
			container.classList.remove('active')
		})

		if (input.checked) {
			input.closest('.product-dialog').classList.add('border-color')
			input.parentElement.parentElement.lastElementChild.classList.add('active')
		}
	})
})

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

backButtons.forEach(button => {
	button.addEventListener('click', () => {
		mainDialog.showModal()
		bodyHtml.classList.add('overflow')
	})
})

dialogContinueButtons.forEach(button => {
	button.addEventListener('click', () => {
		let declaredPrice = button.previousElementSibling.lastElementChild.value
		bodyHtml.classList.remove('overflow')
		money += +declaredPrice
		backers += 1
		displayCollectedMoney(money)
		calculateProgressBar(money)
		displayTotalBackers(backers)

		for (let i = 0; i < products.length; i++) {
			if (button.dataset.id == products[i].id) {
				products[i].stock -= 1
				productStock[i].textContent = products[i].stock
				dialogProductsStock[i].textContent = products[i].stock
				handleProductStock()
			}
		}

		mainDialogClose()

		setTimeout(() => {
			resultDialogOpen()
		}, 1000)
	})
})

bookmarkBtn.addEventListener('click', handleBookmarkBtn)
closeMainDialog.addEventListener('click', mainDialogClose)
closeResultDialog.addEventListener('click', resultDialogClose)
displayCollectedMoney(money)
displayTotalBackers(backers)
mediaQuery.addListener(addBookmarkText)
addBookmarkText(mediaQuery)
calculateProgressBar(money)

// dodac ifa z min value na inpucie, bo moge klikac non stop i pobiera mi produkt (zakomentuj set timeouta)
// zrobic clamp na textach
