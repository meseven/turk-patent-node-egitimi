const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.end('index');
});

module.exports = router;
