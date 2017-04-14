import test from 'ava';
const cmc = require('../lib/constants/return_codes')
const config = require('../lib/config')
const filepathFailure='/path/to/imaginary/thing'
const filepathDefaultConfig = './config.yml'

var configValue;
test('config returns error value on wrong config filepath', t => {

  t.is(config(filepathFailure), cmc.ERROR);
})

test('config loads from defaiult path', t => {
  configValue = config(filepathDefaultConfig)
  console.log(configValue)
  t.not(configValue.whitelist, null);
});
