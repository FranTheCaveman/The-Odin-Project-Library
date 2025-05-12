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

function displayBooks(myLibrary) {
    library.innerHTML = "";
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

        let deleteBookButton = document.createElement('button');
        deleteBookButton.textContent = "Delete Book";
        deleteBookButton.className = "delete-book-button";
        deleteBookButton.addEventListener("click", function(event) {
            let bookID = deleteBookButton.parentNode.id;
            myLibrary = myLibrary.filter((book) => book.id !== bookID);
            displayBooks(myLibrary);
        })

        newBook.appendChild(placeholderBookCover);
        newBook.appendChild(titleElement);
        newBook.appendChild(authorElement);
        newBook.appendChild(pagesElement);
        newBook.appendChild(readElement);
        newBook.appendChild(deleteBookButton);

        library.appendChild(newBook);
    });
}

// Create the container div
const bookForm = document.createElement('div');
bookForm.className = 'new-book-form';
bookForm.formMethod = "post";

// Create the form element
const form = document.createElement('form');
form.className = 'form';

// Create Title field
const titleDiv = document.createElement('div');
const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'Title');
titleLabel.textContent = 'Title';
const titleInput = document.createElement('input');
titleInput.id = 'Title';
titleInput.name = 'Title';
titleInput.setAttribute('required', 'true');

// Create Author field
const authorDiv = document.createElement('div');
const authorLabel = document.createElement('label');
authorLabel.setAttribute('for', 'Author');
authorLabel.textContent = 'Author';
const authorInput = document.createElement('input');
authorInput.id = 'Author';
authorInput.name = 'Author';
authorInput.setAttribute('required', 'true');

// Create Pages field
const pagesDiv = document.createElement('div');
const pagesLabel = document.createElement('label');
pagesLabel.setAttribute('for', 'Pages');
pagesLabel.textContent = 'Pages';
const pagesInput = document.createElement('input');
pagesInput.id = 'Pages';
pagesInput.name = 'Pages';
pagesInput.type = 'number';
pagesInput.setAttribute('required', 'true');

// Create "create" button
const submitDiv = document.createElement('div');
const submitButton = document.createElement('button');
submitButton.textContent = "Create Book";
submitButton.type = "submit"; 
submitButton.className = "new-book-button";
submitButton.style.marginLeft = '1rem';

// Create "isRead" checkbox
const isReadDiv = document.createElement('div');
const isReadCheckbox = document.createElement('input');
const isReadLabel = document.createElement('label');
isReadDiv.setAttribute('for', 'isRead');
isReadDiv.textContent = "Is read?";
isReadCheckbox.type = "checkbox";
isReadCheckbox.id = "is-read-checkbox";
isReadCheckbox.name = 'isRead';
isReadDiv.style.marginLeft = '1rem';

// Assemble the form
titleDiv.appendChild(titleLabel);
titleDiv.appendChild(titleInput);

authorDiv.appendChild(authorLabel);
authorDiv.appendChild(authorInput);

pagesDiv.appendChild(pagesLabel);
pagesDiv.appendChild(pagesInput);

isReadDiv.appendChild(isReadLabel);
isReadDiv.appendChild(isReadCheckbox);

submitDiv.appendChild(submitButton);

form.appendChild(titleDiv);
form.appendChild(authorDiv);
form.appendChild(pagesDiv);
pagesDiv.appendChild(isReadDiv);
form.appendChild(submitDiv);

bookForm.appendChild(form);

// Add form to page - you can specify where to insert it
// For example, to add it to the header:
const header = document.querySelector('.header');
header.appendChild(bookForm);

bookForm.style.display = 'none';
let newBookButton = document.querySelector('.new-book-button');

function toggleNewBook() {
    newBookButton.addEventListener('click', (e) => {
        if (bookForm.style.display === "none") {
            bookForm.style.display = "flex";
            console.log("hello");
        }
        else {
            bookForm.style.display = 'none';
        }
    });
}

bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const isRead = isReadCheckbox.checked;

    console.log('Book Data:', { title, author, pages, isRead });
    console.log('Book Data:', { isRead });
    
    addBookToLibrary(title, author, pages, isRead);
    displayBooks(myLibrary);
    
    // Reset the form
    form.reset();
    
    bookForm.style.display = 'none';
})

toggleNewBook();
displayBooks(myLibrary);