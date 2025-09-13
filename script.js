const myLibrary = ['book1', 'book2'];

// To do:
////////////////////////////////////////////////////////
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



// Modal

// Open modal
function openModal() {
    modal.classList.remove('hidden');
};

// Hide modal
function hideModal() {
    modal.classList.toggle('hidden');
    bookInput.value = '';
    authorInput.value = '';
    numberInput.value = '';
};



// Create card
function createCard() {

    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = newBook.title;

    const author = document.createElement('h3');
    author.classList.add('card-undertext');
    author.textContent = newBook.author;

    const pages = document.createElement('p');
    pages.classList.add('card-pages');
    pages.textContent = `${newBook.pages} pages`;

    const readStatus = document.createElement('span');
    readStatus.classList.add('read-status');
    readStatus.textContent = 'Unread';

    const btnGrid = document.createElement('div');
    btnGrid.classList.add('card-buttons');

    const markBtn = document.createElement('button');
    markBtn.classList.add('read-btn');
    markBtn.textContent = 'Mark as read';

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';

    btnGrid.append(markBtn, removeBtn);
    card.append(title, author, pages, readStatus, btnGrid);

    return card;
};



// Buttons

// 'Add new book' button
addNewBookBtn.addEventListener('click', () => {
    openModal();
});

// X button
exitBtn.addEventListener('click', () => {
    hideModal();
});

// 'Add book' button (Modal)
addBtn.addEventListener('click', () => {
    const newBook = new Book(bookInput.value, authorInput.value, numberInput.value);

    const newCard = createCard(newBook);

    cardGrid.appendChild(newCard);

    hideModal();
});

// Card buttons (Mark as read, Remove)
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

// Cancel button
calcelBtn.addEventListener('click', () => {
    hideModal();
});