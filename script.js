const myLibrary = ['book1', 'book2'];

const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('#modal-container');
modal.classList.add('hidden');
console.log(modal);

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
    console.log(myLibrary);
};



addBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});