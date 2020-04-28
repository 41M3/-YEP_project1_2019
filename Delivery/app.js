var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors())

app.use('/', require('./routes/routes'));
app.use(express.static('public'));

app.listen(port);
console.log('Server running on port: ' + port);