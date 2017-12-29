pragma solidity ^0.4.18;

import "./ERC20Lib.sol";

contract StandardToken {
    using ERC20Lib for ERC20Lib.TokenStorage;

    ERC20Lib.TokenStorage token;

    string public name = "OpenBountyToken";
    string public symbol = "OBT";
    uint8 public decimals = 8;
    uint INITIAL_SUPPLY = 100000;

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);

    function BountyTracker() public {
        token.init(INITIAL_SUPPLY);
    }

    function totalSupply() public constant returns (uint) {
        return token.totalSupply;
    }

    function balanceOf(address who) public constant returns (uint) {
        return token.balanceOf(who);
    }

    function transfer(address to, uint value) public returns (bool ok) {
        return token.transfer(to, value);
    }

    function transferFrom(address from, address to, uint value) public returns (bool ok) {
        return token.transferFrom(from, to, value);
    }

    function approve(address spender, uint value) public returns (bool ok) {
        return token.approve(spender, value);
    }

    function allowance(address owner, address spender) public constant returns (uint) {
        return token.allowance(owner, spender);
    }
}
