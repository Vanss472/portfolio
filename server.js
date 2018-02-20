var express = require('express');
var app = express();
var open = require('open');

app.use('/', express.static('./build'));

app.listen('8080', function(){
	console.log('Magic happens on port 8080');
	open('http://localhost:8080')
});

module.exports = app;
