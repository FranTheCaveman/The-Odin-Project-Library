const myLibrary = [];

// Book constructor
function Book(title, author, numPages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, numPages, isRead) {
    myLibrary.push(new Book(title, author, numPages, isRead));
}

addBookToLibrary("The Midnight Library", "Matt Haig", 123, false);
addBookToLibrary("All Tomorrows", "C.M. Kösemen", 111, false);
addBookToLibrary("Meditations", "Marcus Aurelius", 254, true);
addBookToLibrary("Rocco", "Sherryl Jordan", 246, true);
addBookToLibrary("If We Were Villains", "M. L. Rio", 354, false);
addBookToLibrary("The Humans", "Matt Haig", 285, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);

console.log(myLibrary);

let library = document.querySelector(".library");

function displayBooks() {
    myLibrary.forEach(book => {
        let placeholderBookCover = document.createElement('div');
        placeholderBookCover.className = 'book-cover';

        let newBook = document.createElement('div');
        newBook.className = 'book';
        newBook.id = book.id;
        
        let titleElement = document.createElement('h2');
        titleElement.className = 'book-title';
        titleElement.id = "bookTitle";
        titleElement.textContent = book.title;

        let authorElement = document.createElement('p');
        authorElement.id = "author";
        authorElement.textContent = book.author;

        let pagesElement = document.createElement('p');
        pagesElement.id = "pages";
        pagesElement.textContent = book.numPages + " pages";

        let readElement = document.createElement('p');
        readElement.id = "read";
        readElement.textContent = book.isRead ? "Read" : "Unread";
        readElement.className = book.isRead ? "read" : "unread";

        newBook.appendChild(placeholderBookCover);
        newBook.appendChild(titleElement);
        newBook.appendChild(authorElement);
        newBook.appendChild(pagesElement);
        newBook.appendChild(readElement);

        library.appendChild(newBook);
    });
}

function addBookElement() {
    
}

displayBooks();