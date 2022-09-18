import products from "./products";
import renderView from "./renderView";
import { state, updateState } from "./state";

function init() {
  updateState('money', 89914);
  updateState('backers', 5007);
  updateState('daysLeft', 4838400000);
  updateState('products', products)
}

const productsContainer = document.querySelector('#products');
const productsDialogContainer = document.querySelector('.form-dialog');
const backers = document.querySelector('body > main > section.backers > div.textarea > div:nth-child(2) > p.textarea__container--text1');

function clearView() {
  productContainer.innerHTML = ``;
  productsDialogContainer.innerHTML = ``;
  backers.textContent = '';
  state.listeners.forEach(record => {
    record.el.removeEventListener(record.e);
  });
}

init();
renderView();
function updateProduct(productId, data) {
  const product = state.products.find(({id}) => productId === id);
  product.stock = data.stock;

  const updated = {...product, stock: product.stock };
  const updatedProducts = [...state.products, updated];
  updateState('product', updatedProducts);
}
updateProduct(1, {stock: 0})
clearView();
renderView({
  productsContainer,
  productsDialogContainer
});
