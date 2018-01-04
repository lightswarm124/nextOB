pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/WIP/OpenBounty.sol";

contract OpenBountyTest {
    function testInitialize() public {
        OpenBounty openBounty = OpenBount(DeployedAddress.OpenBount());

        uint expected = 10000;

        Asser.equal(openBounty.totalSupply(), expected, 'Total Supply should be 10 000');
    }
}

