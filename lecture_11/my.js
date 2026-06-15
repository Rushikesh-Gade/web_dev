
// Array 
let library = [];

// add a book
function addBook(book) {
    library.push(book);
    console.log(library);
}

// display all books
function displayBooks() {
    if (library.length === 0) {
        console.log("Library is empty.");
    } else {
        console.log("Books in Library:");
        for (let i = 0; i < library.length; i++) {
            console.log((i + 1) + ". " + library[i]);
        }
    }
}

// find()
function searchBook(bookName) {
    let found = library.find(b => b === bookName);
    if (found) {
        console.log("Book found: " + found);
    } else {
        console.log("Book not found.");
    }
}

function popbook(){
    let removedElement = library.pop();
}

addBook("Book1");
addBook("Book2");
addBook("Book3");
displayBooks();
searchBook("Book2");   
addBook("Book4");
addBook("Book5");
addBook("Book6");  
searchBook("Book5");
displayBooks();
popbook();
displayBooks();
