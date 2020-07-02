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

router.put('/', async (req, res) => {
	const update = await Book.findByIdAndUpdate(req.body._id, req.body, { new: true });
	res.json(update);
});

router.delete('/:bookId', async (req, res) => {
	const { bookId } = req.params;
	if (!bookId) {
		res.json({
			error: {
				message: 'Book id was not enter.',
			},
		});
	}

	const remove = await Book.findByIdAndDelete(req.params.bookId);
	res.json(remove);
});

module.exports = router;
