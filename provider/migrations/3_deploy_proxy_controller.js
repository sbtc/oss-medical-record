const ContractNameService = artifacts.require('./ContractNameService.sol'),
    ProxyController = artifacts.require('./ProxyController.sol'),
    ProxyControllerLogic_v1 = artifacts.require('./ProxyControllerLogic_v1.sol');

module.exports = function(deployer) {
    deployer.deploy(ProxyControllerLogic_v1, ContractNameService.address).then(function(){
        return deployer.deploy(ProxyController, ContractNameService.address, ProxyControllerLogic_v1.address);
    }).then(function() {
        return ContractNameService.deployed();
    }).then(function(instance) {
        return instance.setContract('ProxyController', 1, ProxyController.address, ProxyControllerLogic_v1.address);
    });
}