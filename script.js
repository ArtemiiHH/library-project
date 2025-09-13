const myLibrary = ['book1', 'book2'];

// To do:
////////////////////////////////////////////////////////
// Change marker color + text when Mark as read pressed
// Erase input values when modal is open again
// Fix input validation
// Fix book input length
// Fix styles in general


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
// Mark as read button
const markAsReadBtn = document.querySelector('.read-btn');

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
        // New read marker status
        const newReadMarker = document.createElement('span');
        newReadMarker.classList.add('read-status');
        newReadMarker.textContent = 'Unread';

        // Buttons
        const newBtnGrid = document.createElement('div');
        newBtnGrid.classList.add('card-buttons');
        // New mark read button
        const newReadBtn = document.createElement('button');
        newReadBtn.classList.add('read-btn');
        newReadBtn.textContent = 'Mark as read';
        // New remove button
        const newRemoveBtn = document.createElement('button');
        newRemoveBtn.classList.add('remove-btn');
        newRemoveBtn.textContent = 'Remove';

        // Append elements
        cardGrid.appendChild(newCard);
        newCard.append(newTitle, newAuthor, newPages, newReadMarker);
        newCard.appendChild(newBtnGrid);
        newBtnGrid.append(newReadBtn, newRemoveBtn);

        // Remove button on new cards
        newRemoveBtn.addEventListener('click', () => {
            newCard.remove();
        });
    }
});

// Remove book button
cardGrid.addEventListener('click', (e) => {
    // Remove button
    if (e.target.classList.contains('remove-btn')) {
        e.target.closest('.card').remove();
    }
// Mark as read button
    if (e.target.classList.contains('read-btn')) {
        // Find status marker from card parent
        let findMakrer = e.target.closest('.card').querySelector('.read-status');

        // Switch markers color and text content
        if (findMakrer.textContent === 'Unread') {
            findMakrer.style.backgroundColor = '#A149FA';
            findMakrer.textContent = 'Read';
        } else if (findMakrer.textContent === 'Read') {
            findMakrer.style.backgroundColor = '';
            findMakrer.textContent = 'Unread';
        }
    }
});

// Close modal when Close pressed
calcelBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});