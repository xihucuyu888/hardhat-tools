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

  const Token6 = await ethers.getContractFactory("Token6");
  const Token18 = await ethers.getContractFactory("Token18");

  const usdt = await Token6.deploy(99999999999999,"USDT","USDT");
  await usdt.deployed();
  console.log("USDT Token deployed to:", usdt.address);

  const usdc  = await Token6.deploy(99999999999999,"USDC","USDC");
  await usdc.deployed();
  console.log("USDC Token deployed to:", usdc.address);

  const nash = await Token18.deploy(99999999999999,"NASH","NASH");
  await nash.deployed();
  console.log("NASH Token deployed to:", nash.address);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
