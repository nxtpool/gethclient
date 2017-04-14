"use strict";
const crc = require('../constants/return_codes')
const yamljs = require('yamljs')
const winston = require('winston')
const module_prefix = 'lib/config'
const defaultConfigPath = './config.yml'

var _config = function (pathToConfig) { //expect string.
  let filepath = pathToConfig || defaultConfigPath
  winston.info(`${module_prefix}: loading config from ${filepath}`)
  try {
    return yamljs.load(pathToConfig);
  } catch(e) {
    winston.error(`${module_prefix}: no file found at path ${filepath} or Yaml parse error`)
    return crc.ERROR;
  }
}

module.exports = _config
