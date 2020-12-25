let cart = document.querySelector('.cart')
let modal_cart = document.querySelector('#modal_cart')
let cart_close = document.querySelector('.cart_close')

cart.addEventListener('click', () => {
    modal_cart.style.display = "block";
})

cart_close.addEventListener('click', () => {
    modal_cart.style.display = "none";
})

