// reviews.js

const { books } = require('./books');

function getBookReview(req, res) {
    const { isbn } = req.params;
    const book = books.find(b => b.isbn === isbn);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ reviews: book.reviews });
}

function addOrUpdateReview(req, res) {
    const { isbn } = req.params;
    const { username, review } = req.body;
    const book = books.find(b => b.isbn === isbn);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const existingReview = book.reviews.find(r => r.username === username);
    if (existingReview) {
        existingReview.text = review;
    } else {
        book.reviews.push({ username, text: review });
    }

    res.json({ message: 'Review added/updated', reviews: book.reviews });
}

function deleteReview(req, res) {
    const { isbn } = req.params;
    const { username } = req.body;
    const book = books.find(b => b.isbn === isbn);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const initialLength = book.reviews.length;
    book.reviews = book.reviews.filter(r => r.username !== username);

    if (book.reviews.length === initialLength) {
        return res.status(404).json({ message: 'Review not found for this user' });
    }

    res.json({ message: 'Review deleted', reviews: book.reviews });
}

module.exports = {
    getBookReview,
    addOrUpdateReview,
    deleteReview
};
