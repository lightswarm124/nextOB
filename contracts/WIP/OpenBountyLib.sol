pragma solidity ^0.4.18;

library OpenBountyLib {
    event OwnerChanged (address _oldOwner, address _newOwner);
    event ManagerAdded (address _newManager);
    event ManagerDeleted (address _oldManager);
    event BountySubmitted (address _bountyHunter, uint256 _tokenAmount, bytes32 _pullRequestID);
    event BountyAccepted (address _projectManager, address _bountyHunter, uint256 _amount);
    event BountyFunded (address _funder, uint256 _amount);
    event BountyLocked (address _locker, uint256 _lockBlockTime);
    event BountyUnlocked (address _unlocker, uint256 _unlockBlockTime);
    event BountyCLaimed (address _bountyHunter, uint256 _tokenAmount, uint256 _etherAmount);

    struct BountyStorage {
        lockState bountyStatus;
        address ProjectOwner;
        mapping (address => bool) ProjectManagers;

        mapping (bytes32 => pullRequestStruct) pullRequests;
        uint lockBlockNumber;
        uint unlockBlockNumber;
    }

    struct pullRequestStruct {
        address bountyHunter;
        uint256 bountyTokenAmount;
        lockState pullRequestStatus;
    }

    enum lockState {
        Inactive,
        Locked,
        Unlocked
    }

    function init (BountyStorage storage self) public {
        self.ProjectOwner = msg.sender;
        self.ProjectManagers[msg.sender] = true;
        self.bountyStatus = lockState.Inactive;
    }

    function isBountyManager (BountyStorage storage self) public returns (bool isTrue) {
        return self.ProjectManagers[msg.sender];
    }

//  Check if address is the ProjectOwner
//  @Output_Dev     Return "true" or "false" for "msg.sender" address
    function isProjectOwner (BountyStorage storage self) public returns (bool isTrue) {
        if (self.ProjectOwner != msg.sender) return false;
    }

    function changeProjectOwner (BountyStorage storage self, address _newProjectOwner) public returns (bool success) {
        require (msg.sender == self.ProjectOwner && _newProjectOwner != self.ProjectOwner);
        self.ProjectOwner = _newProjectOwner;
        OwnerChanged(msg.sender, _newProjectOwner);
        return true;
    }

    function addManager (BountyStorage storage self, address _newManager) public returns (bool success) {
        require (msg.sender == self.ProjectOwner);
        self.ProjectManagers[_newManager] = true;
        ManagerAdded(_newManager);
        return true;
    }

    function delManager (BountyStorage storage self, address _oldManager) public returns (bool success) {
        require (msg.sender == self.ProjectOwner);
        self.ProjectManagers[_oldManager] = true;
        ManagerDeleted(_oldManager);
        return true;
    }

    function lockProjectBounty (BountyStorage storage self) public returns (bool success) {
        require(self.ProjectManagers[msg.sender] == true && self.bountyStatus != lockState.Inactive);
        self.bountyStatus = lockState.Locked;
        self.lockBlockNumber = block.number;
        BountyLocked(msg.sender, self.lockBlockNumber);
        return true;
    }

    function unlockProjectBounty (BountyStorage storage self) public returns (bool success) {
        require(msg.sender == self.ProjectOwner && self.bountyStatus != lockState.Inactive);
        self.bountyStatus = lockState.Unlocked;
        self.unlockBlockNumber = block.number;
        BountyLocked(msg.sender, self.unlockBlockNumber);
        return true;
    }
}
