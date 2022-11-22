let cart = []; // create cart

existsLocalStorage(); // check if a cart is saved in localstorage
renderCartProduct(); // show cart products

// Remove products from cart
const btnRemove = document.querySelectorAll('.book-remove'); // Select all 'Remove from cart' buttons
btnRemove.forEach( (btn) => {
    btn.addEventListener('click', () => {
        let bookId = btn.dataset.id;
        let removeBook = books.find((book) => book.id == bookId);

        let indexOfObject = cart.findIndex((book) => book.id == removeBook.id);
        cart.splice(indexOfObject, 1);
        localStorage.setItem('cart', JSON.stringify(cart))
        renderCartProduct();
    })
})