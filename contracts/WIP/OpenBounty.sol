pragma solidity ^0.4.18;

import "./OpenBountyLib.sol";

contract OpenBounty {
    using OpenBountyLib for OpenBountyLib.BountyStorage;

    OpenBountyLib.BountyStorage bounty;

    function OpenBounty() public {
        bounty.init();
    }

    function isBountyManager(address account) public view returns (bool isTrue) {
        return bounty.isBountyManager(account);
    }

    function isProjectOwner(address account) public view returns (bool isTrue) {
        return bounty.isProjectOwner(account);
    }

    function checkLockBlockNumber () public view returns (bool unlock) {
        return bounty.checkLockBlockNumber();
    }

    function changeProjectOwner(address _newProjectOwner) public returns (address newOwner) {
        return bounty.changeProjectOwner(_newProjectOwner);
    }

    function addManager(address _newManager) public returns (bool success) {
        return bounty.addManager(_newManager);
    }

    function delManager(address _oldManager) public returns (bool success) {
        return bounty.delManager(_oldManager);
    }

    function lockProjectBounty() public returns (bool success) {
        return bounty.lockProjectBounty();
    }

    function unlockProjectBounty() public returns (bool success) {
        return bounty.unlockProjectBounty();
    }

    function submitBounty(uint _tokenAmount, bytes32 _pullRequestID) public returns (bool success) {
        return bounty.submitBounty(_tokenAmount, _pullRequestID);
    }

    event OwnerChanged (address _oldOwner, address _newOwner);
    event ManagerAdded (address _newManager);
    event ManagerDeleted (address _oldManager);
    event BountySubmitted (address _bountyHunter, uint _tokenAmount, bytes32 _pullRequestID);
    event BountyAccepted (address _projectManager, address _bountyHunter, uint _amount);
    event BountyFunded (address _funder, uint _amount);
    event BountyPending (address _locker, uint _lockBlockTime);
    event BountyApproved (address _unlocker, uint _unlockBlockTime);
    event BountyCLaimed (address _bountyHunter, uint _tokenAmount, uint _etherAmount);

}
