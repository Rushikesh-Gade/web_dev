// Array 
let library = [];

// add a book
function addBook(bookName, rentPrice) {
    let book = {
        name: bookName,
        rentPrice: rentPrice,
        isRented: false
    };
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
            let status = library[i].isRented ? " (Rented)" : " (Available)";
            console.log((i + 1) + ". " + library[i].name + " - Rent: ₹" + library[i].rentPrice + status);
        }
    }
}

// find()
function searchBook(bookName) {
    let found = library.find(b => b.name === bookName);
    if (found) {
        console.log("Book found: " + found.name);
    } else {
        console.log("Book not found.");
    }
}

// rent a book
function rentBook(bookName, days) {
    let book = library.find(b => b.name === bookName);
    if (book) {
        if (!book.isRented) {
            book.isRented = true;
            let totalRent = book.rentPrice * days;
            console.log(`You rented "${book.name}" for ${days} days. Total rent: ₹${totalRent}`);
        } else {
            console.log(`Sorry, "${book.name}" is already rented.`);
        }
    } else {
        console.log("Book not found.");
    }
}

// remove last book
function popbook(){
    let removedElement = library.pop();
    console.log("Removed book:", removedElement ? removedElement.name : "None");
}

// Example usage
addBook("Book1", 10);
addBook("Book2", 15);
addBook("Book3", 20);
displayBooks();

searchBook("Book2");   
rentBook("Book2", 5);   
displayBooks();

addBook("Book4", 12);
addBook("Book5", 18);
addBook("Book6", 25);  
searchBook("Book5");
displayBooks();

popbook();
displayBooks();
