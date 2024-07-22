const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    ISBN: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    published: {
        type: Date,
        required: true
    }
}, {
    collection: 'books',
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book };
