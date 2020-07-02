const express = require('express');
const router = express.Router();

// models
const Book = require('../models/Book');

router.get('/', function (req, res, next) {
	res.send('book');
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
