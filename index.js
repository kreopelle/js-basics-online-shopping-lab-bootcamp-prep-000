var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
	var itemPrice = Math.floor(Math.random() * Math.floor(100))
	cart.unshift({[itemName]: itemPrice})
	console.log(`${itemName} has been added to your cart.`)
	return cart;
}

function viewCart() {
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
  for (var i = 0; i < cart.length-1; i++) {
        var cartItem = cart[i];
        var cartItemKey = Object.keys(cartItem);
        var cartItemPrice = Object.values(cartItem);
        if (cart.length === 1) {
          console.log(`In your cart, you have ${cartItemKey} at $${cartItemPrice}.`);
    	  } else if (cart.length === 2) {
          console.log(`In your cart, you have ${cartItemKey} at $${cartItemPrice} and ${Object.keys(cart[i+1])} at $${Object.values(cart[i+1])}.`);
        } else {
          var shoppingList = [];
            shoppingList.unshift(`${cartItemKey[i]} at $${cartItemPrice[i]}, `);
          console.log(`In your cart, you have ${shoppingList}.`);
            return cart;
        }
    }
  }
}


function total() {
  var total = 0
  for (var i = 0; i < cart.length-1; i++) {
    total+=(cart[i]);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
