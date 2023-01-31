// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token18 is ERC20, Ownable {
    constructor(uint256 initialSupply, string memory name, string memory symbol) ERC20(name, symbol) Ownable() {
      _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function decimals() public view virtual override returns (uint8) {
      return 18;
    }
}