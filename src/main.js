// Select the div with id 'store'
const store = document.getElementById('store');

renderCards();

// Search books and filter books elements
const submit = document.getElementById('submit');
const search = document.getElementById('search');
const filter = document.getElementById('filter');

// Filter books
filter.addEventListener('change', () => {
    search.value = ''; // Reset search
    while(store.firstChild){
        store.removeChild(store.firstChild);
    }

    for(let i = 0; i<books.length; i++){
        
        if(filter.value == "No filter"){ // if option "No filter" is selected
            i = i<books.length; // exit for
            renderCards();
        }

        for(let j = 0; j<books[i].genre.length; j++){
            const exists = books[i].genre.includes(filter.value);

            if(exists==true){
                let card = createCard(books[i]);
                store.appendChild(card)
                j = books[i].genre.length; // exit for
            }
        }
    }
})

// Search books
submit.addEventListener('click', () => {
    filter.value = "No filter" // Reset filter
    while(store.firstChild){
        store.removeChild(store.firstChild);
    }
    for(let i = 0; i<books.length; i++){
        const exists = books[i].title.toLowerCase().includes(search.value.toLowerCase());

        if(exists==true){
            let card = createCard(books[i]);
            store.appendChild(card)
        }
    }
});

// Cart
const btnAdd = document.querySelectorAll('.book-add'); // Select all 'add to cart' buttons
let cart = []; // create cart

existsLocalStorage(); // check if a cart is saved in localstorage

let j = 0;
btnAdd.forEach( (btn) =>{
    btn.addEventListener('click', () => {
        let selectedBook = books.find((book) => book.id == btn.dataset.id);
        cart.push(selectedBook)
        localStorage.setItem('cart', JSON.stringify(cart))
    })
})

// Simulator

// let customer;
// do{
//     customer = prompt("Tell me your name to start buying in TheBookEmpire");
// }while(customer=='')

// alert("Hi " + customer + "! welcome to TheBookEmpire, to start buying press any ENTER");

// buy();