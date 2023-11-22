const BigNumber = require('bignumber.js');
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

  const Token = await ethers.getContractFactory("Token18");
  const token = Token.attach('0x998C09a1DcbCf70a55F2EC36E678FEaCd9f7e54B')

  // await token.deployed();
  const Faucet = await ethers.getContractFactory("Faucet");
  const faucet = Faucet.attach('0x34009AD7422E7E19753C3Fc728cA5f45093D5E9e')

  console.log("Token deployed to:", token.address);
  console.log("Faucet deployed to:", faucet.address);
  const amount = new BigNumber(9999999999999).times(new BigNumber(10).pow(await token.decimals()));
  console.log(amount.toFixed())
  await token.transfer(faucet.address,amount.toFixed());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
