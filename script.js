"use strict";


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = random5Digits();
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

function random5Digits() {
   return Math.random().toString(36).substring(3,9);
};

const hobbit = new Book("Hobbit", "J.R.R. Tolkien", "265 pages", "not read yet");
const lotr1 = new Book("The Fellowship of the Ring", "J.R.R Tolkien", "432 pages", "read");
const lotr2 = new Book("The Two Towers", "J.R.R. Tolkien", "448 pages", "read");
const lotr3 = new Book("The Return of the King", "J.R.R. Tolkien", "432 pages", "read");
addBookToLibrary(hobbit);
addBookToLibrary(lotr1);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);

const dialog = document.querySelector(".dialog-new-book");
const newBook = document.querySelector(".new-book");
newBook.addEventListener("click", (e) => {
    dialog.showModal();
});

const cancelBtn = document.querySelector(".cancel-button");
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

const confirmBtn = document.querySelector(".confirm-button");
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formTitle = document.querySelector(".form-title");
    const formAuthor = document.querySelector(".form-author");
    const formPages = document.querySelector(".form-pages");
    const formRead = document.querySelector(".form-read");

    addBookToLibrary(
        new Book(formTitle.value, formAuthor.value, formPages.value, formRead.value)
    );

    createCard(myLibrary[myLibrary.length - 1]);

    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.value = "";

    dialog.close();
});

function createCard(book) {
    let card = document.createElement("div");
    card.className = "book";
    card.id = book.id;

    let card_title = document.createElement("h2");
    card_title.className = "title";
    card_title.textContent = book.title;
    card.appendChild(card_title);

    let card_author = document.createElement("p");
    card_author.textContent = book.author;
    card.appendChild(card_author);

    let card_pages = document.createElement("p");
    card_pages.textContent = book.pages;
    card.appendChild(card_pages);

    let card_read = document.createElement("p");
    card_read.textContent = book.read;
    card.appendChild(card_read);

    let card_btn_delete = document.createElement("button");
    card_btn_delete.className = "card-btn-delete";
    card_btn_delete.id = book.id;
    card_btn_delete.textContent = "Delete";
    card.appendChild(card_btn_delete);

    main.appendChild(card);
};

function deleteBook() {
    console.log("hello world");
}

const main = document.querySelector(".main");
for (const book in myLibrary) {
    createCard(myLibrary[book]);
}

main.addEventListener("click", (e) => {
    if(e.target.tagName === 'BUTTON') {
        const book_id = e.target.id;
        const index = myLibrary.findIndex(x => x.id === book_id);
        
        myLibrary.splice(index, 1);

        const book_card = document.querySelector(`#${book_id}`);
        book_card.parentNode.removeChild(book_card);
    }
});