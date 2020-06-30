const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.end('user - index');
});

router.get('/detail', (req, res) => {
	res.end('user - detail');
});

module.exports = router;
