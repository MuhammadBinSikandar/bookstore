// books.js

const books = [
    {
        isbn: '9780743273565',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        reviews: []
    },
    {
        isbn: '9780451524935',
        title: '1984',
        author: 'George Orwell',
        reviews: []
    },
    {
        isbn: '9780061120084',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        reviews: []
    }
];

function getAllBooks(req, res) {
    res.status(200).json(books);
}

function getBookByISBN(req, res) {
    const { isbn } = req.params;
    const book = books.find(b => b.isbn === isbn);
    if (book) return res.json(book);
    return res.status(404).json({ message: 'Book not found' });
}

function getBooksByAuthor(req, res) {
    const { author } = req.params;
    const result = books.filter(b => b.author.toLowerCase() === author.toLowerCase());
    res.json(result);
}

function getBooksByTitle(req, res) {
    const { title } = req.params;
    const result = books.filter(b => b.title.toLowerCase() === title.toLowerCase());
    res.json(result);
}

module.exports = {
    books,
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
