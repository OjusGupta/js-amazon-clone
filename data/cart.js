export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

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
			quantity: quantity,
      deliveryOptionsId: '1'
    });
  }  
  saveToStorage();
}

export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption (productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionsId = deliveryOptionId;

  saveToStorage();
}