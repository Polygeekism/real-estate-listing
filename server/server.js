var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var properties = require('./routes/properties');

var mongoose = require('mongoose');

//middleware
app.use(express.static('./server/public'));
app.use(bodyParser.json());

//routes
app.use('/properties', properties);

//database connections
var databaseUrl = 'mongodb://localhost:27017/betelgeuse';
mongoose.connect(databaseUrl, 
{
    useMongoClient: true
});

// optional, but very nice
mongoose.connection.on('connected', function() {
    console.log('mongoose connected to : ', databaseUrl);    
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});

app.listen(port, function(){
    console.log('server is listening on port', port);
})
