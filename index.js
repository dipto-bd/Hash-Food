const cartIcon = document.querySelector('.cart-icon');
const cart = document.querySelector('.cart');
const searchIcon = document.querySelector('.search-icon');
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search--input input');
const searchBody = document.querySelector('.search--body');


cartIcon.addEventListener('click', () => {
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
})

searchIcon.addEventListener('click', () => {
    if(search.style.display === 'none'){
        search.style.display = 'block';
    } else{
        search.style.display = 'none';
        searchBody.style.display = 'none';
    }
})

searchInput.addEventListener('click', () => {
    if(searchBody.style.display === 'none'){
        searchBody.style.display = 'block';
    }
})
