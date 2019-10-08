const Web3 = require('web3');
const Purchase = artifacts.require('Purchase');

const { networks } = require('../truffle.js');

module.exports = async (deployer, network) => {
  if (network === 'development') {
    const { provider } = networks[network] || {};

    if (!provider) {
      throw new Error(`Unable to find provider for network: ${network}`);
    }

    const web3 = new Web3(provider);

    await deployer.deploy(Purchase, {
      value: web3.utils.toWei('1', 'ether')
    });
  }
};
