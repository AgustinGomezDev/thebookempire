// Function to create a card
function createCard(book){
    const div = document.createElement('div');
    div.classList.add('store-product');
    div.classList.add('col-12');
    div.innerHTML = `
    <img class="book_img w-100" src="${book.img}" alt="${book.title} image">
    <div class="product-info p-2">
        <p class="book-title m-0 fw-bold">${book.title}</p>
        <p class="book-author m-0 fw-normal">${book.author}</p>
        <p class="book-genre m-0 fw-light fst-italic">${book.genre}</p>
        <p class="book-price m-0 fw-semibold">US$${book.price}</p>
        <button data-id="${book.id}" class="book-btn book-add">Add to cart</button>
    </div>`
    return div;
}

// Create a card for each product
function renderCards(){
    books.forEach((book) => {
        let card = createCard(book);
        store.appendChild(card)
    })
}

// If exists localstorage, fill the cart
function existsLocalStorage(){
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

// Function to create cart
function createCartProduct(book){
    const div = document.createElement('div');
    div.classList.add('cart-product');
    div.innerHTML = `
    <img class="w-100" src="${book.img}" alt="${book.title} image">
    <div class="p-2 d-flex flex-column justify-content-center align-items-center text-center">
        <p class="m-0 fw-bold">${book.title}</p>
        <p class="m-0 fw-normal">${book.author}</p>
        <p class="m-0 fw-light fst-italic">${book.genre}</p>
        <p class="m-0 fw-semibold">US$${book.price}</p>
        <button data-id="${book.id}" class="book-btn book-remove" onclick="removeListener(${book.id})">Remove from cart</button>
    </div>`
    return div;
}

// Create a CartProduct for each product
function renderCartProduct(){
    // Get #cart
    let cartHTML = document.getElementById('cart');

    // Remove all childs from #cart
    while(cartHTML.firstChild){
        cartHTML.removeChild(cartHTML.firstChild);
    }

    // Create child to #cart
    for(let i = 0; i < cart.length; i++){
        let bookId = cart[i].id;
        let bookInCart = books.find( (book) => book.id == bookId);
        cartHTML.appendChild(createCartProduct(bookInCart));
    }
}

// Fetch data from json index
const fetchDataIndex = async () => {
    const res = await fetch('json/book.json')
    const data = await res.json();
    books = data;
    renderCards();
    btnAddListener();
}

// Fetch data from json cart
const fetchDataCart = async () => {
    const res = await fetch('../json/book.json')
    const data = await res.json();
    books = data;
    renderCartProduct();
}

// Create a toast from SweetAlert
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    customClass: 'add-product',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

// Check cart length
const cartLength = () => {
    const purchaseDiv = document.querySelector('#purchase-div');
    if(cart.length==0){
        const title = document.querySelector('#title');
        title.textContent = 'Your cart is empty';
    
        const cartInfo = document.querySelector('#cart-info');
        const a = document.createElement('a');
        a.href = '../index.html';
        a.textContent = 'Back to home';
        a.classList.add('btn');
        a.classList.add('btn-primary');
        a.classList.add('a');
        a.classList.add('text-decoration-none');
        cartInfo.appendChild(a);
        purchaseDiv.removeChild(purchaseDiv.firstChild);
    }else{
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="w-100 d-flex justify-content-center align-items-center p-3">
            <a href="form.html" id="purchase" class="btn btn-primary text-decoration-none">Purchase</a>
        </div>`;
        if(!purchaseDiv.firstChild){
            purchaseDiv.append(div);
        }
    }
}