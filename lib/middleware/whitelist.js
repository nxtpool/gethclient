"use strict";
const assert = require('assert');

module.exports = function(whitelist){

  assert(Array.isArray(whitelist), 'array given be must');
  return function(req, res, next){
    const ipv4 = req.ip.split(':').pop();
    if (whitelist.indexOf(ipv4) >= 0) next();
    else {
      console.log(`whitelist blocks ip: ${req.ip} (or ${ipv4}), whitelist is: ${whitelist}`)
      res.status(403).end("no!\n");
    }
  };
}
