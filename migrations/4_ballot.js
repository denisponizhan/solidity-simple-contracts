const Web3 = require('web3');
const Ballot = artifacts.require('Ballot');

module.exports = function(deployer) {
  deployer.deploy(
    Ballot,
    ['Den', 'John', 'Bob'].map(item => Web3.utils.asciiToHex(item))
  );
};
