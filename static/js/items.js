let to_cart_not_login = document.querySelectorAll('.add_to_cart_not_login')
let to_cart = document.querySelectorAll('.add_to_cart')
let cart_items = document.querySelector('#cart_items')
let final_price = document.querySelector('#final_price')
let cart_array_names = [];
let cart_array_price = [];
let items = 'items';

to_cart_not_login.forEach((item) => {
    item.addEventListener('click', () => {
    	modal.style.display = "block"
	})
});

let sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);

to_cart.forEach((item) => {
    item.addEventListener('click', () => {
        //console.log(item.name) //имено
        //console.log(item.id) //ценник

    	cart_array_names.push(item.name)
    	cart_array_price.push(+item.id)

    	//console.log(cart_array_names)
        //console.log(cart_array_price)

        document.getElementById("cart_items").innerHTML = cart_array_names.join(', ');
        document.getElementById("final_price").innerHTML = sum(cart_array_price);
	})
});