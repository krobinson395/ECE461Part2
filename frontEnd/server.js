console.log('Server-side code running');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(8080, () => {
	console.log('listening on 8080');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
