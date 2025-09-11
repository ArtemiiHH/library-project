const myLibrary = ['book1', 'book2'];

const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('#modal-container');
modal.classList.add('hidden');
const exitBtn = document.querySelector('.x-btn');
const calcelBtn = document.querySelector('.close-btn');

function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
};

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    return myLibrary;
};


// open modal when Add button pressed
addBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Close modal when X pressed
exitBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});

// Close modal when Close pressed
calcelBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});