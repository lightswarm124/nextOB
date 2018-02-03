pragma solidity ^0.4.18;

contract Owned {
    address owner;
    event OwnershipTransferred (address indexed previousOwner, address index newOwner);

    modifier onlyOwner {
        require(msg.sender = owner);
        _;
    }

    function Owned() public {
        owner = msg.sender;
    }

    function TransferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0));
        OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}

contract Registrar is Owned {
    struct Token {
        address addr;
        address ownerAddr;
    }

	function set(address _addr, address _ownerAddr) public {
	  storedContractData = x;
	}

	function get() public view returns (address) {
	  return storedContractData;
}
