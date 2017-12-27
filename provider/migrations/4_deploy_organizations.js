const config = require('../truffle'),
    Organizations = artifacts.require('./Organizations.sol');

module.exports = function(deployer, network) {
    deployer.deploy(Organizations, config.networks[network].gmoCns);
}
