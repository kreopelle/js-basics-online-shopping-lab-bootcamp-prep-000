var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
        var cartItem = cart[i];
        var cartItemKey = Object.keys(cartItem);
        var cartItemPrice = Object.values(cartItem);
        if (cart.length === 1) {
          console.log(`In your cart, you have ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`);
    	  } else if (cart.length === 2) {
          console.log(`In your cart, you have ${cartItemKey[0]} at $${cartItemPrice[0]} and ${Object.keys(cart[i+1])} at $${Object.values(cart[i+1])}.`);
        } else {
            var shoppingList = [];
          for (var j = 0; j < cart.length-1; j++) {
            shoppingList.unshift(`${cartItemKey[j]} at $${cartItemPrice[j]}, `);
          }
          console.log(`In your cart, you have ${shoppingList}.`);
            return cart;
        }
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
