const config = require ('./lib/config')();
const express = require ('express');
const app = express();
// geth --jspath "/root/gethscripts" --preload "sum.js" --exec "sum(2,3)" attach
const fs = require('fs');
const path = require('path')

function version(){ return 'gethclient v0.1.0\n'; }
app.get('/', function(req, res){  res.send(version()); });

const whitelist = require('./lib/middleware/whitelist')(config.whitelist);  
const serve = require('./lib/handlers/basic')(config.clientscripts);
app.get('/geth', whitelist);
app.get('/geth/*', whitelist);
app.get('/geth', function(req, res){  res.send('Hello kong!\n');});
app.get('/geth/*', serve);
 
console.log(config);
app.listen(config.PORT || 1838);
