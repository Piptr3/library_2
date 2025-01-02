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
    myLibrary.forEach((book, index) =>  {
        output.innerHTML += `
        <div> 
            ${book.name} by ${book.author} 
            <button data-index="${index}" class="removeBookBtn">Remove</button>
        </div>`
    });

    document.querySelectorAll(".removeBookBtn").forEach(button => {
        button.addEventListener("click", () => {
            const bookIndex = button.getAttribute("data-index");
            myLibrary.splice(bookIndex, 1);
            displayBooks();
        });
    });

}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooks(Book);

const addBookButton = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
const newBookForm = document.getElementById("newBookForm");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});

newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newBookForm);
    const name = formData.get("name");
    const author = formData.get("author");    

    const newBook = new Book(name, author);
    addBookToLibrary(newBook);
    displayBooks(newBook);

    dialog.close();
    newBookForm.reset();
})

const cancelButton = document.getElementById("cancelBtn");

cancelButton.addEventListener("click", () => {
    dialog.close();
});