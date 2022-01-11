const Migrations = artifacts.require("Migrations");
// const IterableMapping = artifacts.require("IterableMapping")

module.exports = function (deployer) {
  console.log(deployer)
  deployer.deploy(Migrations);
  // deployer.deploy(IterableMapping)
};
