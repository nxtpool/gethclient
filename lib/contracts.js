"use strict";
// ['chaingear name', 'chaingear token', 'contract address', 'baseUnit string representation']
const contracts = [
  ['DigixGlobal', 'DGD', '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', '1e9'],
  ['VirtualAccelerator', 'HKG', '0x14f37b574242d366558db61f3335289a5035c506', '1e3'],
  ['FirstBlood', '1ST', '0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7', '1e18'],
  ['Golem', 'GNT', '0xa74476443119A942dE498590Fe1f2454d7D4aC0d', '1e18'],
  ['Iconomi', 'ICN', '0x888666CA69E0f178DED6D75b5726Cee99A87D698', '1e18'],
  ['Plutus', 'PLU', '0xd8912c10681d8b21fd3742244f44658dba12264e', '1e18'],
  ['Augur', 'REP', '0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5', '1e18'],
  ['SingularDTV', 'SNGLS', '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009', '1']
]
exports.contracts = contracts

exports.contractByName = function(name){
  return contracts.find(function(contract){
    return contract[0] == name;
  })
}

exports.contractByToken = function(token){
  return contracts.find(function(contract){
    return contract[1] == token;
  })
}

exports.contractByAddress = function(address){
  return contracts.find(function(contract){
    return contract[2].toLowerCase() == address.toLowerCase();
  })
}
