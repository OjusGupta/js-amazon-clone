export let cart = [];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
    	matchingItem = cartItem;
    }
  });

  const quantity = Number(document.querySelector(`.js-qty-selector-${productId}`).value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
			productId: productId,
			quantity: quantity
    });
  }  
}

export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}