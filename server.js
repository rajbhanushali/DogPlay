'use strict'
//var oracledb = require('oracledb');
//var dbConfig = require('./scripts/dbconfig.js');
var express = require('express');
var jwt = require('jwt-simple');
var lodash = require('lodash')
var bodyParser = require('body-parser')


var app = express(); 

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.listen(3007, function(){console.log('dogPlay listening on port 3007')});
//require('./scripts/api/dogAPI')(app);
// require('./scripts/api/commentAPI')(app);
// require('./scripts/api/offerAPI')(app);
// require('./scripts/api/userAPI')(app);
app.get('/', function(req,res){res.sendfile('index.html')});
