const Web3 = require('web3')
const address = require('./address')
const supply = require('./supply')
let web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

module.exports = function (req, res) {
  const callpath = req.params[0].replace(/[\;\"\\\(\)]/g, "").split('/');
  console.log(callpath)

  if (callpath[0] == 'syncStatus'){
    console.log(web3.eth);
    res.send(web3.eth.syncing);
    return;
  }

  if (callpath[0] == 'address') {
    const account = callpath[1];
    // todo: improve check
    if (!/^0x/.test(account) ) {
      res.status(400).send({error: 'invalid address format'})
      return;
    }
    res.send(address(web3, account)); return;
  }

  if (callpath[0] == 'supply') {
    res.send(supply(web3)); return;
  }

  res.status(404).send({error: 'could not resolve path'})
}
