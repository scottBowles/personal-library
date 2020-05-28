const myLibrary = [];
const table = document.querySelector("#tableContainer");
const openBookForm = document.querySelector("#openBookForm");
const addBook = document.querySelector("#addBook");
const bookForm = document.querySelector('#bookForm');
const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');
const pagesField = document.querySelector('#pages');
const readField = document.querySelector('#read');
const notYetReadField = document.querySelector('#notyetread');

function Book({ title, author, pages, read }) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.readDisplay = this.read ? "Read" : "Not yet read";
}

Book.prototype.info = function() {
  return `${title} by ${author}, ${pages} pages, ${this.read ? "read" : "not read yet"}`
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function createNewRow() {
  const newRow = document.createElement('tr');
  table.appendChild(newRow);
  return newRow;
}

function addPropertiesToRow(book, row) {
  const bookProperties = ["title", "author", "pages", "readDisplay"];
  bookProperties.forEach((property) => {
    const newCell = document.createElement('td');
    newCell.textContent = book[property];
    row.appendChild(newCell);
  })
};

function renderNewBook(book) {
  const newRow = createNewRow();
  addPropertiesToRow(book, newRow);
}

function renderLibrary(myLibrary) {
  myLibrary.forEach(renderNewBook);
};

function createBookFromForm() {
  newBook = new Book ({
    title: titleField.value,
    author: authorField.value,
    pages: pagesField.value,
    read: readField.checked,
  });
  return newBook;
};

function clearForm() {
  titleField.value = "";
  authorField.value = null;
  pages.value = undefined;
  readField.checked = false;
  notYetReadField.checked = false;
}

openBookForm.addEventListener("click", () => {
  openBookForm.classList.add("hidden");
  bookForm.classList.remove("hidden");
});

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  openBookForm.classList.remove("hidden");
  bookForm.classList.add("hidden");
  newBook = createBookFromForm();
  addBookToLibrary(newBook);
  renderNewBook(newBook);
  clearForm();
});


const LOTR = new Book ({ title: "LOTR", author: "Tolkien", pages: 442, read: false });
const mereChristianity = new Book ({ title: "Mere Christianity", author: "C.S. Lewis", pages: 123, read: true });
addBookToLibrary(LOTR);
addBookToLibrary(mereChristianity);
renderLibrary(myLibrary);
