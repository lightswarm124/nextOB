pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/WIP/StandardToken.sol";

contract TestStandardToken {
    function testTokenInitialized() public {
        StandardToken testToken = new StandardToken();

        uint expected = 10000;
    
        Assert.equal(testToken.totalSupply(), expected, "ERC20 Token's Total Supply should be 10000");
    }

    function testBalanceOf() public {
        StandardToken testToken = StandardToken(DeployedAddresses.StandardToken());

        uint expected = 10000;
    
        Assert.equal(testToken.balanceOf(tx.origin), expected, "'tx.origin' Address should have 10000 ERC20 Tokens in its balance");
    }

    function
}
