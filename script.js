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
// Cancel button
const calcelBtn = document.querySelector('.close-btn');

// Inputs
const bookInput = document.querySelector('.book-input');
const authorInput = document.querySelector('.author-input');
const numberInput = document.querySelector('.number-input');

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
addBtn.addEventListener('click', (e) => {
    if (bookInput.value === '' || authorInput.value === '' || numberInput.value === '') {
        alert('Enter your book information');
        modal.classList.remove('hidden');
    } else {
        // Prevent form from submitting by default
        e.preventDefault();

        // Hide modal after 'Add book' pressed
        modal.classList.toggle('hidden');

        // Create new book Constructor
        const newBook = new Book(bookInput.value, authorInput.value, numberInput.value);

        // Create new card
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        const newTitle = document.createElement('h2');
        newTitle.classList.add('card-title');
        newTitle.textContent = newBook.title;
        const newAuthor = document.createElement('h3');
        newAuthor.classList.add('card-undertext');
        newAuthor.textContent = newBook.author;
        const newPages = document.createElement('p');
        newPages.classList.add('card-pages');
        newPages.textContent = `${newBook.pages} pages`;

        // Buttons
        const newBtnGrid = document.createElement('div');
        newBtnGrid.classList.add('card-buttons');
        // New mark read button
        const newReadBtn = document.createElement('button');
        newReadBtn.classList.add('read-btn');
        newReadBtn.textContent = 'Mark read';
        // New remove button
        const newRemoveBtn = document.createElement('button');
        newRemoveBtn.classList.add('remove-btn');
        newRemoveBtn.textContent = 'Remove';

        // Append elements
        cardGrid.appendChild(newCard);
        newCard.append(newTitle, newAuthor, newPages);
        newCard.appendChild(newBtnGrid);
        newBtnGrid.append(newReadBtn, newRemoveBtn);

        // Remove button on new cards
        newRemoveBtn.addEventListener('click', () => {
            newCard.remove();
        });
    }
});

// Remove book button
cardGrid.addEventListener('click', () => {
    const removedCard = document.querySelector('.card');
    removedCard.remove();
});

// Close modal when Close pressed
calcelBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});