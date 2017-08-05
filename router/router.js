const express = require( 'express');
const bodyParser = require( 'body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.redirect('/views/index.html');
});

app.post('/views/add', (req, res) => {
    const result = Number(req.body.number1) + Number(req.body.number2);
    res.end(result.toString());
});

app.post('/views/sub', (req, res) => {
    const result = Number(req.body.number1) - Number(req.body.number2);
    res.end(result.toString());
});

app.post('/views/mul', (req, res) => {
    const result = Number(req.body.number1) * Number(req.body.number2);
    res.end(result.toString());
});

app.post('/views/div', (req, res) => {
    const result = Number(req.body.number1) / Number(req.body.number2);
    res.end(result.toString());
});

app.use(express.static('./public'));

module.exports = app;