// books.js

// Constructor function for Book
function Book(title, author, year) {
    this.title = title; // Title of the book
    this.author = author; // Author of the book
    this.year = year; // Year the book was published
}

// Adding a method to the Book prototype to get a summary of the book
Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Creating an array of Book instances
const books = [
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
    new Book('1984', 'George Orwell', 1949),
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 1951)
];

// Exporting the array of books
export default books;