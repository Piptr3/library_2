const myLibrary = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}

const book1 = new Book('first_book', 'first_author');
const book2 = new Book('second_book', 'second_author');
const book3 = new Book('third_book', 'third_author');

function displayBook(){

}