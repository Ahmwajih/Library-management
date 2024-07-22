const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Connection failed', error);
    });

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Book routes
app.use('/books', require('./routes/book.router'));

// Start server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
