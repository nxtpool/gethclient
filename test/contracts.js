import test from 'ava';

const contracts = require('../lib/contracts')
test('there are some contracts', t => {
  t.is(contracts.contracts.length > 2, true)
})

test('contracts are searchable by token', t => {
  t.is(contracts.contractByToken('DGD')[0], 'DigixGlobal')
})

test('contracts are searchable by name', t => {
  t.is(contracts.contractByName('DigixGlobal')[2], '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a')
})

test('contracts are searchable by address', t => {
  t.is(contracts.contractByAddress('0xE0B7927c4af23765cb51314a0e0521a9645f0e2a')[1],
  'DGD')
})
