const config = require ('./lib/config')();
const express = require ('express');
const app = express();

app.get('/geth/:scope?/:task?', function(req, res, next){
  const ipv4 = req.ip.split(':').pop();
  if (config.whitelist.indexOf(ipv4) >= 0) next();
  res.status(403).end();
});

app.get('/geth/:scope?/:task?', function (req, res) {
  console.log(req.params);
  res.send('Hello Kong!');

});

console.log(config);

app.listen(config.PORT || 1838);
