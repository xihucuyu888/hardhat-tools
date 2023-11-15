// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(99999999999999,"USDT","USDT");

  await token.deployed();
  const Faucet = await ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy(token.address,token.decimals());

  console.log("Token deployed to:", token.address);
  console.log("Faucet deployed to:", faucet.address);
  await token.transfer(faucet.address,10000000000000);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
