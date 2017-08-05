var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.redirect('/views/index.html');
});

app.post('/views/add',function (req, res) {
    res.end((Number(req.body.number1) + Number(req.body.number2)).toString());
});

app.post('/views/sub',function (req, res) {
    res.end((Number(req.body.number1) - Number(req.body.number2)).toString());
});

app.post('/views/mul',function (req, res) {
    res.end((Number(req.body.number1) * Number(req.body.number2)).toString());
});

app.post('/views/div',function (req, res) {
    res.end((Number(req.body.number1) / Number(req.body.number2)).toString());
});

app.use(express.static('./public'));

module.exports = app;