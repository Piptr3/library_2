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

function displayBooks(book){
    const output = document.querySelector('output');
    output.innerHTML = "";
    myLibrary.forEach(book =>  {
        output.innerHTML += `<div> ${book.name} by ${book.author} </div>`
    });
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooks(Book);

const addBookButton = document.getElementById("showDialog");
const confirmButton = document.getElementById("confirmBtn");
const dialog = document.getElementById("dialog");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
})