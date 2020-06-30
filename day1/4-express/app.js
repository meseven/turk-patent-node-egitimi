const express = require('express');
const app = express();

// routes
const index = require('./routes/index');
const settings = require('./routes/settings');
const user = require('./routes/user');

app.use((req, res, next) => {
	console.log('Ben arakatmanım.');
	next();
});

app.use('/', index);
app.use('/user', user);
app.use('/settings', settings);

app.listen(3000, () => console.log('Server is up on 3000 port. 🚀🚀'));
