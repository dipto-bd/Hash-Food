const foodButton = document.querySelector('.food--button');
const cart = document.querySelector('.cart');
const body = document.querySelector('body');

foodButton.addEventListener('click', () => {
    cart.style.display = 'block';
})