const myLibrary = ['book1', 'book2'];

const addBtn = document.querySelector('.add-btn');

function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
};

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    newBook.push(myLibrary);
    console.log(myLibrary());
};