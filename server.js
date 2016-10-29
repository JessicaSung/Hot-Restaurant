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
//==================================================================

var currentReservation =[
	{
		name: 'Ed',
		phone: '512-111-1111',
		email:'ed.r@gmail.com',
		id:1
	},
	{
		name: 'bob',
		phone: '512-111-1111',
		email:'ed.r@gmail.com',
		id:1
	}];
var waitList =[{name: 'Aly',phone: '512-555-1212',email:'aly@gmail.com',id:2}];


//==================================================================

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

app.get('/reservation', function (req, res) {
	res.sendFile(path.join(__dirname, 'reservation.html'));
});


app.get('/api/tables', function(req,res){
		res.json(currentReservation);
});

app.get('/api/waitList', function(req,res) {
		res.json(waitList);
});

app.post('api/new', function (req,res) {
	var newreservation = req.body

	console.log(newreservation);
	if(currentReservation.length == 5) {
		waitList.push(newreservation);
	} else {
		currentReservation.push(newreservation);
	}
})
