const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(parseInt(process.env.PORT), () => {
        console.log('listening on a port?');
});

app.get('/', (req,res) => {
        res.sendFile(__dirname + '/index.html');
});
