require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545",
      accounts:['0x0f2fa518735815e26443e9ee7b58ec932e8ee3882415932307e27d132bb232f9']
    }

  }
};
