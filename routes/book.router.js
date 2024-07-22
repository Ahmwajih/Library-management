const express = require('express');
const bookrouter = express.Router();

const bookcontrollers = require('../controllers/book.controller');

bookrouter.route('/')
    .get(bookcontrollers.getAllBooks)
    .post(bookcontrollers.createBook);

bookrouter.route('/:title')
    .get(bookcontrollers.getBookByTitle)
    .put(bookcontrollers.updateBook)
    .delete(bookcontrollers.deleteBook);

module.exports = bookrouter;
