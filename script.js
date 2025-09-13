const myLibrary = ['book1', 'book2'];

// To do:
////////////////////////////////////////////////////////
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

// Open modal
function openModal() {
    modal.classList.remove('hidden');
};

// Hide modal
function hideModal() {
    modal.classList.toggle('hidden');
};

// Open modal when Add button pressed
addNewBookBtn.addEventListener('click', () => {
    openModal();
});

// Close modal when X pressed
exitBtn.addEventListener('click', () => {
    hideModal();
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
        hideModal();

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

// Card buttons logic
cardGrid.addEventListener('click', (e) => {
    let targetCard = e.target.closest('.card');

    // Remove card when button pressed
    if (e.target.classList.contains('remove-btn')) {
        targetCard.remove();
    }
    // Mark as read button
    if (e.target.classList.contains('read-btn')) {
        // Find status marker from card parent
        let findMarker = targetCard.querySelector('.read-status');
        // Find Mark as read button from card parent
        let findMarkAsReadBtn = targetCard.querySelector('.read-btn');

        // Switch markers color and text content
        if (findMarker.textContent === 'Unread') {
            findMarker.style.backgroundColor = '#A149FA';
            findMarker.textContent = 'Read';
            // Change Mark as read text content
            findMarkAsReadBtn.textContent = 'Mark as unread';
        } else if (findMarker.textContent === 'Read') {
            findMarker.style.backgroundColor = '';
            findMarker.textContent = 'Unread';
            // Change Mark as read text content
            findMarkAsReadBtn.textContent = 'Mark as read';
        }
    }
});

// Close modal when Close pressed
calcelBtn.addEventListener('click', () => {
    hideModal();
});