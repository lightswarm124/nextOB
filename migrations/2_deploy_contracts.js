const SimpleStorage = artifacts.require('./SimpleStorage.sol');
const SafeMathLib = artifacts.require('./WIP/SafeMathLib.sol');
const ERC20Lib = artifacts.require('./WIP/ERC20Lib.sol');
const StandardToken = artifacts.require('./WIP/StandardToken.sol');

/*
const SafeMath = artifacts.require('./SafeMath.sol');
const MetaCoin = artifacts.require('./MetaCoin.sol');
*/
module.exports = function (deployer) {
    deployer.deploy(SimpleStorage);
    deployer.deploy(SafeMathLib);
    deployer.link(SafeMathLib, [ ERC20Lib, StandardToken ]);
    deployer.deploy(ERC20Lib);
    deployer.link(ERC20Lib, StandardToken);
    deployer.deploy(StandardToken);   
}
