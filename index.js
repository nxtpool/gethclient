"use strict";
const argv = require('minimist')(process.argv.slice(2));
const config = require ('./lib/config')(argv.config);
const express = require ('express');
const app = express();
// geth --jspath "/root/gethscripts" --preload "sum.js" --exec "sum(2,3)" attach
const whitelist = require('./lib/middleware/whitelist')(config.whitelist);
const pack = require('./package.json');
const version = `gethclient v${pack.version}\n`;
app.get('/', function(req, res){  res.send(version) });

//app.use(whitelist);

const serve = require('./lib/handlers/w3');
app.get('/Ethereum/*', serve);
console.log("")
console.log(config);
app.listen(config.PORT || 1838);
