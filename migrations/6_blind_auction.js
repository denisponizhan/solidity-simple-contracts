const Web3 = require('web3');
const BlindAuction = artifacts.require('BlindAuction');

const { networks } = require('../truffle.js');

module.exports = async (deployer, network) => {
  if (network === 'development') {
    const { provider } = networks[network] || {};

    if (!provider) {
      throw new Error(`Unable to find provider for network: ${network}`);
    }

    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const beneficiary = accounts[0];
    const hour = 3600000;
    const halfHour = hour / 2;

    await deployer.deploy(
      BlindAuction,
      halfHour / 10,
      halfHour / 10,
      beneficiary
    );
  }
};
