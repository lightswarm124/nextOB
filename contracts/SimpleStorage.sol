
pragma solidity ^0.4.18;

contract SimpleStorage {
  address storedContractData;

  function set(address x) public {
    storedContractData = x;
  }

  function get() public view returns (address) {
    return storedContractData;
  }
}
