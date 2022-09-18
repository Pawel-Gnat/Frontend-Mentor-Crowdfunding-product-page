function renderView(data) {

  const {productContainer, productsDialogContainer} = data;

  const mainDialog = document.querySelector('#back-dialog') // primary dialog, visible after "select reward" button
  const resultDialog = document.querySelector('#result-dialog') // seconardy dialog

  function openModal() {
    // open result dialog
    resultDialog.showModal()
    bodyHtml.classList.add('overflow')
  }
  
  function getPriceFromPledge(pledge) {
    const pledgeToArray = pledge.split(' ');
    const price = pledgeToArray.find((str) => str.endsWith('$') === true);
    return Number(price.slice(0, -1));
  }

  function setAsideData() {
    const total = document.querySelector('body > main > section.backers > div.textarea > div:nth-child(1) > p.textarea__container--text1');
    const days = document.querySelector('body > main > section.backers > div.textarea > div:nth-child(1) > p.textarea__container--text3');

    backers.textContent = state.backers;

  }

  function createProductElement({ id, pledge, name, stock }) {
    const productElement = document.createElement('div');
    const price = getPriceFromPledge(pledge);

    productElement.classList.add('product');
    productElement.dataset.productId = id;
    productElement.innerHTML = `
  <div class="product__top">
    <h3 class="product__top--heading">${name}</h3>
    <p class="product__top--price-text">$${price}</p>
  </div>
  <p class="product__text">${pledge}</p>
  <div class="product__bottom">
    <div class="product__bottom--amount"><span class="number">${stock}</span><span class="left">left</span>
    </div>
    <button class="product__bottom--btn" data-product-id="${id}">Select Reward</button>
  </div>`;

    if (productsContainer != null) {
      productsContainer.appendChild(productElement);
    }
  }
  function createProductDialogElement({ id, name, pledge, about, stock }) {
    const productElement = document.createElement('div');
    const price = getPriceFromPledge(pledge);

    productElement.classList.add('product-dialog');
    productElement.id = `product-dialog-${id}`;

    productElement.innerHTML = `<div class="product-info">
    <input type="radio" name="product-${id}" id="product-${id}" data-product-id="${id}" value="" class="product-info__input">
    <div class="product-info__textarea">
      <label for="product-${id}" class="product-info__textarea--label">${name}</label>
      <p class="product-info__textarea--pledge">${pledge}</p>
    </div>
  </div>
  <div class="product-text">
    <p class="product-text__text">${about}</p>
  </div>
  <div class="product-stock"><span class="product-stock__number">${stock}</span><span
      class="product-stock__left">left</span>
  </div>
  <div class="product-pledge">
    <label for="pledg-bamboo" class="product-pledge__text">Enter your pledge</label>
    <div class="pledge-container">
      <div class="pledge-container__input-area">
        <span class="pledge-container__input-area--dollar-sign">$</span>
        <input type="number" min='${price}' name="pledge" id="${name.split(' ').join('-').toLowerCase()}"
          class="pledge-container__input-area--input">
      </div>
      <button type="submit" class="pledge-container__submit" data-product-id="${id}">Continue</button>
    </div>
  </div>`;

    if (productsDialogContainer != null) {
      productsDialogContainer.appendChild(productElement);
    }
  }

  setAsideData()

  products.forEach((obj) => {
    createProductElement(obj);
    createProductDialogElement(obj);

  })

  const form = document.querySelector('.form-dialog');

  form.addEventListener('change', (e) => {
    const input = e.target;
    const productId = input.dataset.productId;

    const productContainer = document.querySelector(`#product-dialog-${productId}`);

    if (productContainer) {
      productContainer.querySelector('.product-pledge').classList.add('active');
    }
  })

  const productBtns = document.querySelectorAll('.product button');

  productBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      mainDialog.showModal()
      document.body.classList.add('overflow');
      // maind
    });
    state.listeners.push({el: btn, e: 'click'});
  });
}

export default renderView;