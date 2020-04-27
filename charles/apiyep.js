var express = require('express');

var hostname = 'localhost';
var port = 1000;

var app = express();
app.listen(port, hostname, function() {
    console.log("server launch, lien http://"+hostname +":"+port+"\n");
});