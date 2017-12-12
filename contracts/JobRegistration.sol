pragma solidity ^0.4.4;

contract JobRegistration  {
//  Maps Project Token Addresses to an IDing integer
    mapping(uint => address) jobTrackers;

//  @Issue_Dev      uint id duplication can erase existing project Addresses
//  @Input_Dev      id: Integer ID for Project Address
//  @Input_Dev      _jt: Address of Project being added
//  @Output_Dev     Store a mapping on jobTrackers
    function addJobTracker(uint id, address _jt) {
        jobTrackers[id] = _jt;
    }
//  Returns Project Token Address
//  @Input_Dev      id: Integer ID for Project Address
//  @Output_Dev     Return the ID mapping of Project Address
    function getJobTracker(uint id) constant returns (address) {
        return jobTrackers[id];
    }
}
