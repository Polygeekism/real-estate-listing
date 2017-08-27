var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var properties = require('./routes/properties')

//middleware
app.use(express.static('./server/public'));
app.use(bodyParser.json());

//routes
app.use('/properties', properties);

app.listen(port, function(){
    console.log('server is listening on port', port);
})
