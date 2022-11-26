let cart = []; // create cart
let books = []; // create array for books feteched

existsLocalStorage(); // check if a cart is saved in localstorage
cartLength();
fetchDataCart(); // fetch data

const removeListener = (btnId) => {
    let bookId = btnId;
    let removeBook = books.find((book) => book.id == bookId);

    let indexOfObject = cart.findIndex((book) => book.id == removeBook.id);
    cart.splice(indexOfObject, 1);
    localStorage.setItem('cart', JSON.stringify(cart))
    Toast.fire({
        icon: 'success',
        title: 'Product removed from cart successfully'
    })
    renderCartProduct(); 
    cartLength();
}