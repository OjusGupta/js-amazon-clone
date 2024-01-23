import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { getCartQty } from './utils/cartQty.js';

renderOrderSummary();
renderPaymentSummary();

export function updateCartQty() {

  const cartQty = getCartQty();
  document.querySelector('.js-top-qty').innerHTML = `${cartQty} items`;
}

updateCartQty();
