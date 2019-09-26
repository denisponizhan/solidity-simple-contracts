const Web3 = require('web3');
const SimpleAuction = artifacts.require('SimpleAuction');

const { networks } = require('../truffle.js');

module.exports = async (deployer, network) => {
  if ('development' === network) {
    const { provider } = networks[network] || {};

    if (!provider) {
      throw new Error(`Unable to find provider for network: ${network}`);
    }

    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const beneficiary = accounts[0];
    const hour = 3600000;

    await deployer.deploy(SimpleAuction, hour, beneficiary);
  }
};
