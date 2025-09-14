// Array to store books
const myLibrary = [];



// Add a new book button
const addNewBookBtn = document.querySelector('.add-new-btn');

// Modal container
const modal = document.querySelector('#modal-container');
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

// Book constructor
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
    console.log(myLibrary);
    return newBook;
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
function createCard(book) {

    const card = document.createElement('div');
    card.classList.add('card');

    const cardInfoGrid = document.createElement('div');
    cardInfoGrid.classList.add('card-info');

    card.dataset.id = book.id;

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = book.title;

    const author = document.createElement('h3');
    author.classList.add('card-undertext');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.classList.add('card-pages');
    pages.textContent = `${book.pages} pages`;

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
    card.append(title, author, pages, readStatus, cardInfoGrid, btnGrid);

    return card;
};



// Toggle read status
function toggleReadStatus(card) {
    const status = card.querySelector('.read-status');
    const button = card.querySelector('.read-btn');

    const isUnread = status.textContent === 'Unread';
    status.textContent = isUnread ? 'Read' : 'Unread';
    status.style.backgroundColor = isUnread ? '#A149FA' : '';
    button.textContent = isUnread ? 'Mark as unread' : 'Mark as read';
};



// Validate inputs
function validateInputs() {
    return bookInput.value && authorInput.value && numberInput.value;
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
    if (!validateInputs()) {
        alert('Enter you book information');
        openModal();
        return;
    }

    const newBook = addBookToLibrary(
        bookInput.value,
        authorInput.value,
        numberInput.value,
        false
    );

    const newCard = createCard(newBook);

    cardGrid.appendChild(newCard);

    hideModal();
});

// Card buttons (Mark as read, Remove)
cardGrid.addEventListener('click', (e) => {

    // Remove card from DOM
    if (e.target.classList.contains('remove-btn')) {
        const card = e.target.closest('.card');
        const id = card.dataset.id;

        // Remove card info from array
        const index = myLibrary.findIndex(book => book.id === id);
        if (index !== -1) myLibrary.splice(index, 1);

        card.remove();
        console.log(myLibrary);
    }

    // Toggle read status
    if (e.target.classList.contains('read-btn')) {
        toggleReadStatus(e.target.closest('.card'));
    }
});

// Cancel button
calcelBtn.addEventListener('click', () => {
    hideModal();
});