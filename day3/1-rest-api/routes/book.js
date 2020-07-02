const express = require('express');
const router = express.Router();

// models
const Book = require('../models/Book');
const { route } = require('.');

router.get('/get/:bookId', async (req, res) => {
	try {
		const book = await Book.findById(req.params.bookId);
		res.json(book);
	} catch {
		res.json({ error: { message: 'Book was not found.', code: 1001 } });
	}
});

router.get('/list', async (req, res, next) => {
	const books = await Book.find({}).limit(30).collation({ locale: 'en' }).sort({ year: 1 });
	res.json(books);
});

router.post('/', async (req, res) => {
	const book = new Book(req.body);

	try {
		const saveDb = await book.save();
		res.json(saveDb);
	} catch {
		console.log('catch');
	}
});

module.exports = router;
