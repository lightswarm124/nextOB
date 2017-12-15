const SimpleStorage = artifacts.require('./SimpleStorage.sol');
/*
const ConvertLib = artifacts.require('./ConvertLib.sol');
const MetaCoin = artifacts.require('./MetaCoin.sol');
*/
module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  /*deployer.deploy(ConvertLib);
  deployer.link(SimpleStorage, MetaCoin);
  deployer.deploy(SimpleStorage);
  */
}
