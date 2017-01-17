import test from 'ava';

const config = require('../lib/config')


test('config throws on wrong config filepath', t => {
  const filepath='/path/to/imaginary/thing'
  const error = t.throws(() => {
     config(filepath)
  }, Error);

  t.is(error.message, `no file found at path ${filepath} or Yaml parse error`);
});
