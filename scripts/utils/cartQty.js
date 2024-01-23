import { cart } from '../../data/cart.js';

export function getCartQty () {
  let cartQty = 0;

  cart.forEach((cartItem) => {
    cartQty = cartQty + cartItem.quantity;
  });

  return cartQty;
}

