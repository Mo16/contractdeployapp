const Contract = artifacts.require("HappyMoonYear");
const IterableMapping = artifacts.require("IterableMapping")


module.exports = function (deployer) {
  deployer.deploy(IterableMapping)
  deployer.link(IterableMapping, Contract);
  deployer.deploy(Contract);
};
