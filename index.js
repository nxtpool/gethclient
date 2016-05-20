const config = require ('./lib/config')();
const express = require ('express');
const app = express();
const fs = require('fs');
const path = require('path')

function version(){ return 'gethclient v0.1.0'; }

app.get('/', function(req, res){
  res.send(version());
});

app.get('/geth/*', function(req, res, next){
  const ipv4 = req.ip.split(':').pop();
  if (config.whitelist.indexOf(ipv4) >= 0) next();
  else res.status(403).end();
});

app.get('/geth/*', function (req, res) {
  console.log(req.params);
  const scope = req.params[0];
  const task = req.params[1];

  if (!scope || !task) return res.send('Hello Kong!');
  
  const filepath = path.join(config.clientscripts, scope, task+".js");
  function send(data){ res.send(data); }
  fs.stat(filepath, function(err, stats) {
    if (stats) {
    } else send ("no such script");
    send('evaluating');
  });
});

console.log(config);

app.listen(config.PORT || 1838);
