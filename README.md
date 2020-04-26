# Organ Donation Blockchain

Organ Donation Blockchain is a prototype created as a proof-of-concept for a decentralized solution. The application is built on Ethereum, more specifically on Remix where the smart contract is compile and deployed. Metamask serves as a wallet for mananing the fake Ether provided by Ganache. A front-end interface application is built in JavaScript and interacts with the back-end via Web3.js. 

## Getting Started

The following instructions will create a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Meta Mask Chrome extension needs to be installed. (https://metamask.io)
- Ganache application needs to be installed. (https://www.trufflesuite.com/ganache)

### Installing

Clone the organ-donation-blockchain repository onto local machine.
```
git clone https://github.com/leokfwong/organ-donation-blockchain.git
```
Open the index.html file and ensure it displays the following:

## Setting up the Environment
- Ensure that Ganache is running and linked to Metamask.
- Go to https://remix.ethereum.org and import the OrganDonation.sol file.

### Compile and Deploy Smart Contract
- Compile Solidity file.
- Select Injected Web3 under Environment.
- Ensure account address matches the one in Ganache.
- Deploy and confirm.
- Ensure that the smart contract address matches the one in the web3.js file (line 277).
- Otherwise, update the address.

```
const contractAddress = 'insert smart contract address';
```

### Testing the Application
The website should now show that is it online.

