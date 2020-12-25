let to_cart_not_login = document.querySelectorAll('.add_to_cart_not_login')
let to_cart = document.querySelectorAll('.add_to_cart')
let cart_array = [];

to_cart_not_login.forEach((item) => {
    item.addEventListener('click', () => {
    	modal.style.display = "block"
	})
});

to_cart.forEach((item) => {
    item.addEventListener('click', () => {
    	console.log(cart_array.push(item.id))
    	console.log(cart_array)
	})
});





