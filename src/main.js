// Functions for the simulator
function buy(){
    let book = Number(prompt("Which book do you want to buy?\n\n1-> It Starts with Us\n2-> Friends, Lovers, and the Big Terrible Thing\n3-> Diary of a Wimpy Kid Book 17\n4-> Long Shadows"));
    
    if(book<1 || book>4){
        alert("We don't have this book, please choose one from the list!");
        buy();
    }

    switch(book){
        case 1: chosenBook(0); break;
        case 2: chosenBook(1); break;
        case 3: chosenBook(2); break;
        case 4: chosenBook(3); break;
    }
}

function chosenBook(num){
    alert("Nice we will save the book " + books[num].title + " for you!");
    let bookData = Number(prompt("Let me tell you some information about your book:\n\nTitle: "+ books[num].title + "\nAuthor: "+ books[num].author + "\nGenre: "+ books[num].genre + "\nPrice: US$"+ books[num].price +"\n\n1-> Purchase\n2-> Cancel"));

    if(bookData==2){
        alert("Maybe another day...");
    }else{
        alert("Your purchase has been entered into the system, we will contact you for news, Goodbye " + customer)
    }
}

// Function to create a card
function createCard(book){
    const div = document.createElement('div');
    div.classList.add('store-product');
    div.innerHTML = `
    <img class="book_img w-100" src="assets/img/${book.img}" alt="${book.title} image">
    <div class="product-info p-2">
        <p class="book-title m-0 fw-bold">${book.title}</p>
        <p class="book-author m-0 fw-normal">${book.author}</p>
        <p class="book-genre m-0 fw-light fst-italic">${book.genre}</p>
        <p class="book-price m-0 fw-semibold">US$${book.price}</p>
        <button class="book-add">Add to cart</button>
    </div>`
    return div;
}

// Select the div with id 'store'
const store = document.getElementById('store');

// Create a div for each product
for(const book of books){
    let card = createCard(book);
    store.appendChild(card)
}

// Search and filter
const submit = document.getElementById('submit');
const search = document.getElementById('search');

submit.addEventListener('click', () => {
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

// Simulator

let customer;
do{
    customer = prompt("Tell me your name to start buying in TheBookEmpire");
}while(customer=='')

alert("Hi " + customer + "! welcome to TheBookEmpire, to start buying press any ENTER");

buy();