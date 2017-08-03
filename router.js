var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

app.post("/add",function (req, res) {
   res.end((Number(req.body.number1) + Number(req.body.number2)).toString());
});

app.post("/sub",function (req, res) {
    res.end((Number(req.body.number1) - Number(req.body.number2)).toString());
});

app.post("/mul",function (req, res) {
    res.end((Number(req.body.number1) * Number(req.body.number2)).toString());
});

app.post("/div",function (req, res) {
    res.end((Number(req.body.number1) / Number(req.body.number2)).toString());
});

app.use(express.static("."));

module.exports = app;