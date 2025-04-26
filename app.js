// app.js

const express = require('express');
const bodyParser = require('body-parser');
const {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
} = require('./books');
const { registerUser, loginUser } = require('./users');
const {
    getBookReview,
    addOrUpdateReview,
    deleteReview
} = require('./reviews');

const app = express();
app.use(bodyParser.json());

// General Users
app.get('/books', getAllBooks); // Task 1
app.get('/books/isbn/:isbn', getBookByISBN); // Task 2
app.get('/books/author/:author', getBooksByAuthor); // Task 3
app.get('/books/title/:title', getBooksByTitle); // Task 4
app.get('/books/review/:isbn', getBookReview); // Task 5
app.post('/register', registerUser); // Task 6
app.post('/login', loginUser); // Task 7

// Registered Users
app.post('/books/review/:isbn', addOrUpdateReview); // Task 8
app.delete('/books/review/:isbn', deleteReview); // Task 9

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
