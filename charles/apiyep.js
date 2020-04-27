var express = require('express');

var hostname = 'localhost';
var port = 3000;


var app = express();
var router = express.Router();

router.route('/covid')

.get(function(req,res) {
    res.json({message : "List every countries", methode : req.methode});
})

.post(function(req,res) {
    res.json({message : "Add country", methode : req.methode});
})

.put(function(req,res) {
    res.json({message : "Counstry update", methode : req.methode});
})

.delete(function(req,res) {
    res.json({message : "Delete Counstry", methode : req.methode});
});

app.use(router);


app.listen(port, hostname, function() {
    console.log("server launch, lien http://"+hostname +":"+port+"\n");
});