import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';


export function renderPaymentSummary() {
  let itemsPriceCents = 0;
  let itemsShippingCents = 0;

  cart.forEach((cartItem) => {
    const matchingProduct = getProduct(cartItem.productId);
    itemsPriceCents += matchingProduct.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);
    itemsShippingCents += deliveryOption.priceCents;
  });

  const totalBeforeTax = itemsShippingCents + itemsPriceCents;
  const itemsTax = totalBeforeTax * 0.1;
  const totalPriceCents = itemsTax + totalBeforeTax;

  let cartQty = 0;
  
  cart.forEach((cartItem) => {
    cartQty = cartQty + cartItem.quantity;
  });

  const paymentSummaryHTML = 
  `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cartQty}):</div>
      <div class="payment-summary-money">$42.75</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(itemsShippingCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(itemsTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalPriceCents)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}