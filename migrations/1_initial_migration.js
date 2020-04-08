const Migrations = artifacts.require("Migrations");
const Multicall2 = artifacts.require("Multicall2");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Multicall2);
};
