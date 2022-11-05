class Book{
    constructor(title, author, genre,  price, img){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.img = img;
    }
}

const book1 = new Book('It Starts with Us', 'Colleen Hoover', ['Novel', 'Fiction', 'Romance'] , 12.98, 'it_starts_with_us.jpg');
const book2 = new Book('Friends, Lovers, and the Big Terrible Thing', 'Matthew Perry', ['Autobiography'], 20.12, 'friends_lovers_and_the_big_terrible_thing.jpg');
const book3 = new Book('Diary of a Wimpy Kid Book 17', 'Jeff Kinney', ['Graphic novel', 'Children literature'], 8.79, 'diary_of_a_wimpy_kid_book _17.jpg');
const book4 = new Book('Long Shadows', 'David Baldacci', ['Mystery', 'Suspense', 'Thriller'], 16.49, 'long_shadows.webp');

const books = [];
books.push(book1)
books.push(book2)
books.push(book3)
books.push(book4)
