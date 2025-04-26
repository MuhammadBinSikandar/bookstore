// app.js
const express = require('express');
const dotenv = require('dotenv');
const { getBookList } = require('./book');

dotenv.config();  // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(express.json());

// Route to get the book list
app.get('/books', getBookList);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
