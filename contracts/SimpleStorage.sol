
pragma solidity ^0.4.18;

contract SimpleStorage {
  uint storedContractData;

  function set(uint x) public {
    storedContractData = x;
  }

  function get() public view returns (uint) {
    return storedContractData;
  }
}
