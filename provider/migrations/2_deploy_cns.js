const ContractNameService = artifacts.require('solidity/contracts/ContractNameService.sol');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(ContractNameService);
}
