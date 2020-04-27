var express = require('express');

var hostname = 'localhost';
var port = 3000;


var app = express();
var router = express.Router();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

router.route('/covid')

.get(function(req,res) {
    res.json({message : "List every countries",
    name : req.query.name,
    methode : req.methode});
})

.post(function(req,res) {
    res.json({message : "Add country",
    name : req.body.name,
    sick : req.body.confirmed,
    heal : req.body.recovered,
    dead : req.body.death,
    methode : req.methode});
})

.put(function(req,res) {
    res.json({message : "Country update", methode : req.methode});
})

.delete(function(req,res) {
    res.json({message : "Delete Country", methode : req.methode});
});

app.use(router);


app.listen(port, hostname, function() {
    console.log("server launch, lien http://"+hostname +":"+port+"\n");
});