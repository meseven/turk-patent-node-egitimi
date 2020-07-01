const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// routes
const index = require('./routes/index');
const settings = require('./routes/settings');
const user = require('./routes/user');


app.use('/', index);
app.use('/user', user);
app.use('/settings', settings);

app.listen(3000, () => console.log('Server is up on 3000 port. 🚀🚀'));
