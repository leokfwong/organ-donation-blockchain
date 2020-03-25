//pragma experimental ABIEncoderV2
pragma solidity ^0.6.1;

contract TransplantMatching {
    
    uint public patientCount = 0;
    mapping(uint => Patient) public patients;
    
    struct Patient {
        uint id;
        string firstname;
        string lastname;
        string bloodtype;
        address patient_address;
    }
    
    function addPatient(string memory _firstname, string memory _lastname, string memory _bloodtype) public returns (string memory){
        if (bytes(_firstname).length == 0) {
            return "Required fields cannot be empty.";
        } else {
            patientCount++;
            patients[patientCount] = Patient(patientCount, _firstname, _lastname, _bloodtype, msg.sender);
            return "success";
        }
    }
    
    function getAllPatients(uint _index) public view returns (string memory, string memory, string memory) {
        uint index = _index;
        return (patients[index].firstname, patients[index].lastname, patients[index].bloodtype);
    }
    
}