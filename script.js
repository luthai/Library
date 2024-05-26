"use strict";


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

const hobbit = new Book("Hobbit", "J.R.R. Tolkien", "265 pages", "not read yet");
const lotr1 = new Book("The Fellowship of the Ring", "J.R.R Tolkien", "432 pages", "read");
const lotr2 = new Book("The Two Towers", "J.R.R. Tolkien", "448 pages", "read");
const lotr3 = new Book("The Return of the King", "J.R.R. Tolkien", "432 pages", "read");
addBookToLibrary(hobbit);
addBookToLibrary(lotr1);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);

const main_container = document.querySelector(".main");
for (const book in myLibrary) {
    console.log(myLibrary[book].title);

    let card = document.createElement("div");
    card.className = "book";

    let card_title = document.createElement("h2");
    card_title.className = "title";
    card_title.textContent = myLibrary[book].title;
    card.appendChild(card_title);

    let card_author = document.createElement("p");
    card_author.textContent = myLibrary[book].author;
    card.appendChild(card_author);

    let card_pages = document.createElement("p");
    card_pages.textContent = myLibrary[book].pages;
    card.appendChild(card_pages);

    let card_read = document.createElement("p");
    card_read.textContent = myLibrary[book].read;
    card.appendChild(card_read);

    main_container.appendChild(card);
}