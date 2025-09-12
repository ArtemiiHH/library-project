const myLibrary = ['book1', 'book2'];

// DOM elements
// Add a new book button
const addNewBookBtn = document.querySelector('.add-new-btn');

// Modal container
const modal = document.querySelector('#modal-container');
// Class to hide modal
modal.classList.add('hidden');

// Buttons
// Add book button (Modal)
const addBtn = document.querySelector('.add-btn');
// X button
const exitBtn = document.querySelector('.x-btn');

// Card buttons
// Mark as read button
const readBtn = document.querySelector('.read-btn');
// Remove card button
const removeBtn = document.querySelector('.remove-btn');

// Cancel button
const calcelBtn = document.querySelector('.close-btn');

// Inputs
const bookInput = document.querySelector('.book-input');
const authorInput = document.querySelector('.author-input');
const numberInput = document.querySelector('.number-input');

// Card info
const cardTitle = document.querySelector('.card-title');
const cardUndertext = document.querySelector('.card-undertext');
const cardPages = document.querySelector('.card-pages');
// Card grid
const cardGrid = document.querySelector('.card-grid');

// Book constructor function
function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
};

// Add book to library function
function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    return myLibrary;
};


// Open modal when Add button pressed
addNewBookBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Close modal when X pressed
exitBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});

// Add book button (Modal)
addBtn.addEventListener('click', () => {
    if (bookInput.value === '' || authorInput.value === '' || numberInput.value === '') {
        alert('Enter your book information');
        modal.classList.remove('hidden');
    } else {
        const newBook = new Book(bookInput.value, authorInput.value, numberInput.value);
        const newCard = document.createElement('div');
        newCard.classList('.card');
        cardGrid.appendChild(newCard);
        const node = document.createTextNode(`${newBook.title}`);
        newCard.appendChild(node);
    }
});

// Remove book button
removeBtn.addEventListener('click', () => {
    const removedCard = document.querySelector('.card');
    removedCard.remove();
});

// Close modal when Close pressed
calcelBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});