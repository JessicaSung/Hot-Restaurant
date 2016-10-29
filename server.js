// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// var apiroute=require('./app/routing/api-routes.js')(app);
// var htmlroute=require('./app/routing/html-routes.js')(app);


app.listen(PORT, function(){
	console.log("App listening on PORT: "+PORT);

});


//===============================
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

// app.get('/reservation', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'reservation.html'));
// });
// Search for Specific Character (or all characters) - provides JSON


