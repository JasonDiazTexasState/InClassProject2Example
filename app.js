// app.js
var express = require('express');
var BookController = require('./book/bookcontroller');

var app = express();
var db = require('./db'); //ADD THIS LINE

app.use('/books', BookController);

module.exports = app;