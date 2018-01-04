const StandardToken = artifacts.require('./WIP/StandardToken.sol');

contract('Test ERC20 Token Initialization', (accounts) => {
    it('Test init and totalSupply', async () => {
        const expected = 10000;
        
        const testToken = await StandardToken.deployed();
        const totalSupply = await testToken.totalSupply();

        assert.equal(totalSupply, expected, 'The total Supply does not match');
    });

    it('Test balanceOf', async () => {
        const expected = 10000;
        const testToken = await StandardToken.deployed();
        const accountBalance = await testToken.balanceOf(accounts[0]);

        assert.equal(accountBalance, expected, 'Token balance does not match')
    });

    it('Test transfer', async () => {
        let testToken;
        
        const amount = 2500;
        const acc1 = accounts[0];
        const acc2 = accounts[1];
        
        let acc1SBalance;
        let acc1EBalance;
        let acc2SBalance;
        let acc2EBalance;

        return StandardToken.deployed().then((instance) => {
            testToken = instance;
            return testToken.balanceOf(acc1); 
        }).then((balance) => {
            acc1SBalance = balance.toNumber();
            return testToken.balanceOf(acc2);
        }).then((balance) => {
            acc2SBalance = balance.toNumber();
            return testToken.transfer(acc2, amount, { from: acc1 });
        }).then(() => {
            return testToken.balanceOf(acc1);
        }).then((balance) => {
            acc1EBalance = balance.toNumber();
            return testToken.balanceOf(acc2);
        }).then((balance) => {
           acc2EBalance = balance.toNumber();

           assert.equal(acc1EBalance, acc1SBalance - amount, "Amount not correctly sent");
           assert.equal(acc2EBalance, acc2SBalance + amount, "Amount not correctly sent");
        });
    });

    it('Test transferFrom', async () => {
        let testToken;

        const acc1 = accounts[0];
        const acc2 = accounts[1];
        const acc3 = accounts[2];

        const amount = 2500;

        let acc1SBalance = 0;
        let acc1EBalance = 0;
        let acc2SBalance = 0;
        let acc2EBalance = 0;

        let acc3SAllowance = 0;
        let acc3EAllowance = 0;

        return StandardToken.new().then((instance) => {
            testToken = instance;
            return testToken.balanceOf(acc1);
        }).then((balance) => {
            acc1SBalance = balance.toNumber();
            return testToken.balanceOf(acc2);
        }).then((balance) => { 
            acc2SBalance = balance.toNumber();
            return testToken.approve(acc3, amount, { from: acc1 });
        }).then(() => {
            return testToken.allowance(acc1, acc3);
        }).then((allowedBalance) => {
            acc3SAllowance = allowedBalance.toNumber();
            return testToken.transferFrom(acc1, acc2, amount, { from: acc3 });
        }).then(() => {
            return testToken.balanceOf(acc1);
        }).then((balance) => {
            acc1EBalance = balance.toNumber();
            return testToken.balanceOf(acc2)
        }).then((balance) => {
            acc2EBalance = balance.toNumber();
            return testToken.allowance(acc1, acc3);
        }).then((allowedBalance) => {
            acc3EAllowance = allowedBalance.toNumber();
            
            assert.equal(acc3SAllowance, acc2EBalance, "Acc3 initial allowance matches acc2 end balance");
            assert.equal(acc3EAllowance, acc2SBalance, "Acc3 end allowance matches acc2 initial balance");
            assert.equal(acc2EBalance, acc1SBalance - acc1EBalance, "Token transferred"); 
        });
    });
});
