const OpenBounty = artifacts.require('./WIP/OpenBounty.sol');

contract('Test OpenBounty Initialization', (accounts) => {
    it('Test address initialization', async () => {
        let ownerAddress;

        OpenBounty.new()
        .then((inst) => {
            return inst.bounty.ProjectOwner(accounts[0]);
        }).then((addr) => {
            ownerAddress = addr;
            assert.equal(ownerAddress, accounts[0], 'Contract deployer is not set to ProjectOwner');
        });
        /*
        OpenBounty.deployed()
        .then((inst) => {
            return inst.bounty.ProjectManagers[ownerAddress];
        }).then((isManager) => {
            assert.equal(isManager, true, 'Contract deployer is not set to ProjectManagers');
        });
        */
    });
});
