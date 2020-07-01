const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		isLogin: false,
		name: 'Mehmet',
		job: 'Software developer',
		info: {
			age: 28,
		},
		friends: [
			{
				id: '1',
				name: 'Murat',
			},
			{
				id: '2',
				name: 'Tayfun',
			},
			{
				id: '3',
				name: 'Sevil',
			},
		],
	});
});

app.listen(3000, () => console.log('Server is up!'));