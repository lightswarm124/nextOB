pragma solidity ^0.4.18;

library OpenBountyLib {
    event OwnerChanged (address _oldOwner, address _newOwner);
    event ManagerAdded (address _newManager);
    event ManagerDeleted (address _oldManager);
    event BountySubmitted (address _bountyHunter, uint _tokenAmount, bytes32 _pullRequestID);
    event BountyAccepted (address _projectManager, address _bountyHunter, uint _amount);
    event BountyFunded (address _funder, uint _amount);
    event BountyPending (address _locker, uint _lockBlockTime);
    event BountyApproved (address _unlocker, uint _unlockBlockTime);
    event BountyCLaimed (address _bountyHunter, uint _tokenAmount, uint _etherAmount);

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
        address approveManager;
        uint bountyValue;
        lockState pullRequestStatus;
    }

    enum lockState {
        Inactive,
        Pending,
        Approved
    }

    function init (BountyStorage storage self) public {
        self.ProjectOwner = msg.sender;
        self.ProjectManagers[msg.sender] = true;
        self.bountyStatus = lockState.Inactive;
    }

    function isBountyManager (BountyStorage storage self) public returns (bool isTrue) {
        return self.ProjectManagers[msg.sender];
    }

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
        self.bountyStatus = lockState.Pending;
        self.lockBlockNumber = block.number;
        BountyPending(msg.sender, self.lockBlockNumber);
        return true;
    }

    function unlockProjectBounty (BountyStorage storage self) public returns (bool success) {
        require(msg.sender == self.ProjectOwner && self.bountyStatus != lockState.Inactive);
        self.bountyStatus = lockState.Approved;
        self.unlockBlockNumber = block.number;
        BountyPending(msg.sender, self.unlockBlockNumber);
        return true;
    }

    function submitBounty (BountyStorage storage self, uint _tokenAmount, bytes32 _pullRequestID) public returns (bool success) {
        require(self.pullRequests[_pullRequestID].bountyHunter == address(0) || self.pullRequests[_pullRequestID].bountyHunter == msg.sender);
        self.pullRequests[_pullRequestID] = pullRequestStruct ({
            bountyHunter: msg.sender,
            approveManager: address(0),
            bountyValue: _tokenAmount,
            pullRequestStatus: lockState.Pending
        });
        BountySubmitted(msg.sender, _tokenAmount, _pullRequestID);
        return true;
    }

    function acceptBounty (BountyStorage storage self, bytes32 _pullRequestID) public returns (bool success) {
        require(self.ProjectManagers[msg.sender] == true && self.pullRequests[_pullRequestID].approveManager == address(0));
        self.pullRequests[_pullRequestID].approveManager = msg.sender;
        BountyAccepted(msg.sender, self.pullRequests[_pullRequestID].bountyHunter, self.pullRequests[_pullRequestID].bountyValue);
        return true;
    }
}
