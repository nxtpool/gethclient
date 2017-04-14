"use strict";
const theDAOABI = require('../theDAOABI')
const contracts = require('../contracts');
const contractsList = ['DGD', 'HKG', '1ST', 'GNT', 'ICN', 'PLU', 'REP', 'SNGLS', 'MLN', 'VSL']
module.exports = function address(web3, account) {
  const eth = web3.eth
  var etherBalance = web3.fromWei(eth.getBalance(account), "ether");
  let ret = {
    ETH: etherBalance
  }
  contractsList.forEach(function(token){
    let contract = contracts.contractByToken(token)

    if (contract) {
      let supply = eth.contract(theDAOABI).at(contract[2]).balanceOf(account) / parseFloat(contract[3]);
      ret[token] = supply;
    }
  })
  return ret;
};
