// app.js

// Importing the array of Book instances from books.js
import books from './books.js';

// Using Array.prototype.map to create an array of book summaries
const bookSummaries = books.map(book => book.getSummary());

// Logging the array of book summaries to the console
console.log(bookSummaries);