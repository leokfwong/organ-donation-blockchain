// pragma experimental ABIEncoderV2
pragma solidity ^0.6.1;

contract TransplantMatching {
    
    uint public patientCount = 0;
    mapping(uint => Patient) public patients;
    
    uint public donorCount = 0;
    mapping(uint => Donor) public donors;
    
    struct Patient {
        uint id;
        string firstname;
        string lastname;
        string medid;
        string bloodtype;
        string height;
        string weight;
        string status;
    }
    
    struct Donor {
        uint id;
        string firstname;
        string lastname;
        string medid;
        string bloodtype;
        string height;
        string weight;
        string status;
    }
    
    function validateMedicalData(string memory _medid) public pure returns (string memory) {
        if (bytes(_medid).length > 0) {
            // In real life, would use oracle to access healthcare institution data for validation
            string memory _status = 'eligible';
            return _status;
        }
    }
    
    function addPatient(string memory _firstname, string memory _lastname, string memory _medid, string memory _bloodtype, string memory _height, string memory _weight) public {
        
        // Set parameters as required
        require(bytes(_firstname).length > 0);
        require(bytes(_lastname).length > 0);
        require(bytes(_medid).length > 0);
        require(bytes(_bloodtype).length > 0);
        require(bytes(_height).length > 0);
        require(bytes(_weight).length > 0);
        
        string memory _status = validateMedicalData(_medid);
        
        // Check if requirements satisfied
        if (bytes(_firstname).length > 0 && bytes(_lastname).length > 0 && bytes(_medid).length > 0 && bytes(_bloodtype).length > 0 && bytes(_height).length > 0 && bytes(_weight).length > 0) {
            patientCount++;
            patients[patientCount] = Patient(patientCount, _firstname, _lastname, _medid, _bloodtype, _height, _weight, _status);
        }
    }
    
    function addDonor(string memory _firstname, string memory _lastname, string memory _medid, string memory _bloodtype, string memory _height, string memory _weight) public {
        
        // Set parameters as required
        require(bytes(_firstname).length > 0);
        require(bytes(_lastname).length > 0);
        require(bytes(_medid).length > 0);
        require(bytes(_bloodtype).length > 0);
        require(bytes(_height).length > 0);
        require(bytes(_weight).length > 0);
        
        string memory _status = validateMedicalData(_medid);
        
        // Check if requirements satisfied
        if (bytes(_firstname).length > 0 && bytes(_lastname).length > 0 && bytes(_medid).length > 0 && bytes(_bloodtype).length > 0 && bytes(_height).length > 0 && bytes(_weight).length > 0) {
            donorCount++;
            donors[donorCount] = Donor(donorCount, _firstname, _lastname, _medid, _bloodtype, _height, _weight, _status);
        }
    }
    
    function getAllPatients(uint _index) public view returns (string memory, string memory, string memory, string memory, string memory, string memory, string memory) {
        return (patients[_index].firstname, patients[_index].lastname, patients[_index].medid, patients[_index].bloodtype, patients[_index].height, patients[_index].weight, patients[_index].status);
    }
    
    function getAllDonors(uint _index) public view returns (string memory, string memory, string memory, string memory, string memory, string memory, string memory) {
        return (donors[_index].firstname, donors[_index].lastname, donors[_index].medid, donors[_index].bloodtype, donors[_index].height, donors[_index].weight, donors[_index].status);
    }
    
}