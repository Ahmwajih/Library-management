const { Book } = require('../models/book.model');

const bookcontrollers = {
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: 'no books found' });
        }
    },

    createBook: async (req, res) => {
        try {
            const book = await Book.create(req.body);
            res.status(201).json(book);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    getBookByTitle: async (req, res) => {
        try {
            const { title } = req.params;
            const book = await Book.findOne({ title });
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: 'book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateBook: async (req, res) => {
        try {
            const { title } = req.params;
            const book = await Book.findOneAndUpdate({ title }, req.body, { new: true });
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: 'book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const { title } = req.params;
            const book = await Book.findOneAndDelete({ title });
            if (book) {
                res.json({ message: 'book deleted' });
            } else {
                res.status(404).json({ message: 'book not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = bookcontrollers;
