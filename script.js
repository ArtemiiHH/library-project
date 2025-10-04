// Add a new book button
const addNewBookBtn = document.querySelector(".add-new-btn");

// Grab the DOM element once
const modalElement = document.querySelector("#modal-container");
modalElement.classList.add("hidden");

// Buttons
// Add book button (Modal)
const addBtn = document.querySelector(".add-btn");
// X button
const exitBtn = document.querySelector(".x-btn");
// Cancel button
const cancelBtn = document.querySelector(".cancel-btn");

// Inputs
const bookInput = document.querySelector(".book-input");
const authorInput = document.querySelector(".author-input");
const numberInput = document.querySelector(".number-input");

// Card grid
const cardGrid = document.querySelector(".card-grid");



// Book class
class Book {
  constructor(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }
}



// Library class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    this.books.push(newBook);
    return newBook;
  }
}
const myLibrary = new Library();



// Modal class
class Modal {
  constructor(modal, bookInput, authorInput, numberInput) {
    this.modal = modal;
    this.bookInput = bookInput;
    this.authorInput = authorInput;
    this.numberInput = numberInput;
  }

  open() {
    this.modal.classList.remove("hidden");
  }

  close() {
    this.modal.classList.add("hidden");
    this.bookInput.value = "";
    this.authorInput.value = "";
    this.numberInput.value = "";
  }
}
// Create a class instance with that element
const modal = new Modal(modalElement, bookInput, authorInput, numberInput);



class Card {
    constructor(book, library) {
        this.book = book;
        this.library = library;
    }
}

// Create card
function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInfoGrid = document.createElement("div");
  cardInfoGrid.classList.add("card-info");

  card.dataset.id = book.id;

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = book.title;

  const author = document.createElement("h3");
  author.classList.add("card-undertext");
  author.textContent = book.author;

  const pages = document.createElement("p");
  pages.classList.add("card-pages");
  pages.textContent = `${book.pages} pages`;

  const readStatus = document.createElement("span");
  readStatus.classList.add("read-status");
  readStatus.textContent = "Unread";

  const btnGrid = document.createElement("div");
  btnGrid.classList.add("card-buttons");

  const markBtn = document.createElement("button");
  markBtn.classList.add("read-btn");
  markBtn.textContent = "Mark as read";

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "Remove";

  btnGrid.append(markBtn, removeBtn);
  card.append(title, author, pages, readStatus, cardInfoGrid, btnGrid);

  return card;
}

// Toggle read status
function toggleReadStatus(card) {
  const status = card.querySelector(".read-status");
  const button = card.querySelector(".read-btn");

  const isUnread = status.textContent === "Unread";
  status.textContent = isUnread ? "Read" : "Unread";
  status.style.backgroundColor = isUnread ? "#A149FA" : "";
  button.textContent = isUnread ? "Mark as unread" : "Mark as read";
}

// Validate inputs
function validateInputs() {
  return bookInput.value && authorInput.value && numberInput.value;
}

// Buttons
// 'Add new book' button
addNewBookBtn.addEventListener("click", () => modal.open());

// X button
exitBtn.addEventListener("click", () => modal.close());

// 'Add book' button (Modal)
addBtn.addEventListener("click", () => {
  if (!validateInputs()) {
    alert("Enter you book information");
    modal.open();
    return;
  }

  const newBook = myLibrary.addBook(
    bookInput.value,
    authorInput.value,
    numberInput.value,
    false
  );

  const newCard = createCard(newBook);

  cardGrid.appendChild(newCard);

  modal.close();
});

// Card buttons (Mark as read, Remove)
cardGrid.addEventListener("click", (e) => {
  // Remove card from DOM
  if (e.target.classList.contains("remove-btn")) {
    const card = e.target.closest(".card");
    const id = card.dataset.id;

    // Remove card info from array
    const index = myLibrary.books.findIndex((book) => book.id === id);
    if (index !== -1) myLibrary.books.splice(index, 1);

    card.remove();
    console.log(myLibrary);
  }

  // Toggle read status
  if (e.target.classList.contains("read-btn")) {
    toggleReadStatus(e.target.closest(".card"));
  }
});

// Cancel button
cancelBtn.addEventListener("click", () => modal.close());