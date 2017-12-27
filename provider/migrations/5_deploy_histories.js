const config = require('../truffle'),
    Organizations = artifacts.require('./Organizations.sol'),
    Histories = artifacts.require('./Histories.sol');


module.exports = function(deployer, network) {
    deployer.deploy(Histories, config.networks[network].gmoCns, Organizations.address);
}
