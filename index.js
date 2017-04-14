"use strict";
const argv = require('minimist')(process.argv.slice(2))
const crc = require('./lib/constants/return_codes')
const config = require ('./lib/config')(argv.config||'./config.yml')
if (crc.isError(config)) {
  throw new Error("could not load config")
  exit(1)
}

const express = require ('express')
const app = express()
const pack = require('./package.json')
const version = `gethclient v${pack.version}\n`
app.get('/', function(req, res){  res.send(version) })

const whitelist = require('./lib/middleware/whitelist')(config.whitelist)
app.use(whitelist)

const serve = require('./lib/handlers/w3')
app.get('/Ethereum/*', serve)

console.log(`${version} starting with config: `)
console.log(config)

app.listen(config.PORT || 1838)
