var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var path = require('path');
const spell = require('spell-checker-js');
spell.load('en');


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/spellchecker.html'));
});

app.post('/checkSpell', (request, response) => {
    let checkChar = request.body.key;
    const check = spell.check(checkChar);
    console.log(check);
    response.json({ data: check });
})
console.log('serving on port 8080');
app.listen(8080);