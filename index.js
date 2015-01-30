// Create the app with express
var express = require('express'),
    app = express();

// The listening port
var PORT = 80;

// Route
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

// Bind to the port
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);