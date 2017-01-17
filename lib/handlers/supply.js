const theDAOABI = require('../theDAOABI')
const contracts = require('../contracts');
const contractsList = ['DGD', 'HKG', '1ST', 'GNT', 'ICN', 'PLU', 'REP', 'SNGLS']
module.exports = function address(web3) {
  const eth = web3.eth
  console.log(eth)
  let ret = {
    ETH: "how? "
  }
  contractsList.forEach(function(token){
    let contract = contracts.contractByToken(token)

    if (contract) {
      let  supply = eth.contract(theDAOABI).at(contract[2]).totalSupply()
      / parseFloat(contract[3]);
      ret[token] = supply;
    }
  })
  return ret;
};
