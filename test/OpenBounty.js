const OpenBounty = artifacts.require('./WIP/OpenBounty.sol');

contract('Test OpenBounty Initialization', (accounts) => {
    it('Test initialization', async () => {
        let testOB;
        let ownerAddress;
        
        return OpenBounty.new().then((instance) => {
            testOB = instance;
            return testOB.ProjectOwner;
        }).then((array) => {        
            ownerAddress = array.toString();
            assert.equal(ownerAddress, accounts[0], "Check deployment address");
        }); 
    });
});  
