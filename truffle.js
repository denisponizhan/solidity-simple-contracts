const Web3 = require('web3');

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      provider: new Web3.providers.HttpProvider('http://127.0.0.1:7545/')
    }
  }
};
