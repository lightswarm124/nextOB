const SimpleStorage = artifacts.require('./SimpleStorage.sol');
const SafeMathLib = artifacts.require('./WIP/SafeMathLib.sol');
const ERC20Lib = artifacts.require('./WIP/ERC20Lib.sol');
const StandardToken = artifacts.require('./WIP/StandardToken.sol');
const OpenBountyLib = artifacts.require('./WIP/OpenBountyLib.sol');
const OpenBounty = artifacts.require('./WIP/OpenBounty.sol');

module.exports = function (deployer, accounts) {
    deployer.deploy(SimpleStorage);
    deployer.deploy(SafeMathLib);
    deployer.link(SafeMathLib, [ ERC20Lib, StandardToken ]);
    deployer.deploy(ERC20Lib);
    deployer.link(ERC20Lib, StandardToken);
    deployer.deploy(StandardToken, accounts[0]);   
    deployer.deploy(OpenBountyLib);
    deployer.link(OpenBountyLib, OpenBounty);
    deployer.deploy(OpenBounty);
}
