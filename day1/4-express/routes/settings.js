const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.end('Settings - Home');
});

router.get('/general', (req, res) => {
	res.end('Settings - General');
});

module.exports = router;
