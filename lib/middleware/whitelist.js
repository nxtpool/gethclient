"use strict";
const assert = require('assert');

module.exports = function(whitelist){
  
  assert(Array.isArray(whitelist), 'array given be must');
  return function(req, res, next){
    console.log(req)
    const ipv4 = req.ip.split(':').pop();
    if (whitelist.indexOf(ipv4) >= 0) next();
    else res.status(403).end("no!\n");
  };
}
