const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json(req.query);
});

router.post('/register', (req, res) => {
	res.json(req.body);
});

router.get('/detail', (req, res) => {
	res.end('user - detail');
});

module.exports = router;
