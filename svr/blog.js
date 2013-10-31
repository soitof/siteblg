// Module Dependecies
var express = require('express'),
app = express();

// Config 
app.configure( function() {
});

// Routes
app.get('/', function(req, res) {
	res.send('Hello World');
})

app.listen(3030);