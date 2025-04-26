// books.js

// Sample list of books (you can later replace this with actual database calls or API requests)
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565' },
    { id: 2, title: '1984', author: 'George Orwell', isbn: '9780451524935' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084' },
];

// Task 1: Get the book list available in the shop
function getBookList(req, res) {
    try {
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
}

module.exports = { getBookList };
