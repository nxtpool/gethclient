const theDAOABI = require('../theDAOABI')
module.exports = function address(web3, account) {
  const eth = web3.eth
  // var theDAOAddress = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413";
  // var theDAO = eth.contract(theDAOABI).at(theDAOAddress);

  var digixGoldAddress = "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a";
  var digixGold = eth.contract(theDAOABI).at(digixGoldAddress);

  var hackersAddress = "0x14f37b574242d366558db61f3335289a5035c506";
  var hackersGold = eth.contract(theDAOABI).at(hackersAddress);

  var firstbloodAddress = "0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7";
  var firstBlood = eth.contract(theDAOABI).at(firstbloodAddress);

  var golemAddress = "0xa74476443119A942dE498590Fe1f2454d7D4aC0d";
  var golem = eth.contract(theDAOABI).at(golemAddress);

  var iconomiAddress = "0x888666CA69E0f178DED6D75b5726Cee99A87D698";
  var iconomi = eth.contract(theDAOABI).at(iconomiAddress);

  var plutusAddress = "0xD8912C10681D8B21Fd3742244f44658dBA12264E";
  var plutus = eth.contract(theDAOABI).at(plutusAddress);

  var reputationAddress = "0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5";
  var reputation = eth.contract(theDAOABI).at(reputationAddress);

  var singularAddress = "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009";
  var singular = eth.contract(theDAOABI).at(singularAddress);

  //var daoBalance = theDAO.balanceOf(account) / parseFloat(1e16);
  var etherBalance = web3.fromWei(eth.getBalance(account), "ether");
  //  var daoSupply = theDAO.totalSupply() / parseFloat(1e16);
  //  var digixSupply = digixGold.totalSupply() / parseFloat(1e9);
  var digixBalance = digixGold.balanceOf(account) / parseFloat (1e9);
  var hackersBalance = hackersGold.balanceOf(account) / parseFloat (1e3);
  var bloodBalance = firstBlood.balanceOf(account) / parseFloat (1e18);
  var golemBalance = golem.balanceOf(account) / parseFloat (1e18);
  var iconomiBalance = iconomi.balanceOf(account) / parseFloat (1e18);
  var plutusBalance = plutus.balanceOf(account) / parseFloat (1e18);
  var reputationBalance = reputation.balanceOf(account) / parseFloat (1e18);
  var singularBalance = singular.balanceOf(account);

console.log(digixGold);
console.log(reputation.totalSupply().toString());

  //var mkrAddress = '0xc66ea802717bfb9833400264dd12c2bceaa34a6d'
  //var mkr = eth.contract(theDAOABI).at(mkrAddress);
  //var mkrSupply = mkr.totalSupply() / parseFloat (1e18);
  //var mkrBalance = mkr.balanceOf(account);

  return {
    ETH: etherBalance,
    DGD: digixBalance,
    HKG: hackersBalance,
    "1ST": bloodBalance,
    GNT: golemBalance,
    ICN: iconomiBalance,
    PLU: plutusBalance,
    REP: reputationBalance,
    SNGLS: singularBalance,
  }
};
