const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/zen-sleep'));


app.listen(process.env.PORT || 8080);

app.get('/teste', function(req, res) {
    res.send('Hello World!');
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/zen-sleep/index.html'));
});

console.log('Server running');