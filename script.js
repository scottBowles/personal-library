let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
  return `${title} by ${author}, ${pages} pages, ${this.read ? "read" : "not read yet"}`
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const table = document.querySelector("#tableContainer");

function render(myLibrary) {
  myLibrary.forEach(book => {
    let tableRule = document.createElement('tr');
    table.appendChild(tableRule);
    let titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    tableRule.appendChild(titleCell);
    authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    tableRule.appendChild(authorCell);
    pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;
    tableRule.appendChild(pagesCell);
    readCell = document.createElement('td');
    readCell.textContent = book.read ? "Read" : "Not yet read";
    tableRule.appendChild(readCell);
  })
}

addBookToLibrary("LOTR", "Tolkien", 442, false);
addBookToLibrary("Mere Christianity", "C.S. Lewis", 123, true);
render(myLibrary);