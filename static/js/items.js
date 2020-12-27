let to_cart_not_login = document.querySelectorAll('.add_to_cart_not_login')
let to_cart = document.querySelectorAll('.add_to_cart')
let cart_items = document.querySelector('#cart_items')
let final_price = document.querySelector('#final_price')
let reset = document.querySelector('.reset')
let cart_array_names = [];
let cart_array_price = [];
let items = 'items';
let my_form = document.getElementById("my_form");

to_cart_not_login.forEach((item) => {
    item.addEventListener('click', () => {
    	modal.style.display = "block"
	})
});

let sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);

to_cart.forEach((item) => {
    item.addEventListener('click', () => {
    	cart_array_names.push(item.name)
    	cart_array_price.push(+item.id)
        document.getElementById("cart_items").innerHTML = cart_array_names.join(', ');
        document.getElementById("final_price").innerHTML = sum(cart_array_price);
        my_form.items.value = cart_array_names.join(', ');
        my_form.final_price.value = sum(cart_array_price);
	})
});

reset.addEventListener('click', () => {
    document.getElementById("cart_items").innerHTML = null;
    document.getElementById("final_price").innerHTML = null;
})