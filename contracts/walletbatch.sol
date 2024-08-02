// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract WalletBatch {

    constructor(){}

    function transferERC20(address token1, address[] calldata recipients, uint256 amount) external payable {
        for (uint256 i = 0; i < recipients.length; i++) {
            IERC20(token1).transfer(recipients[i], amount);
        }
    }
    function transferETH(address payable[] calldata recipients, uint256 amount) external payable {
        for (uint256 i = 0; i < recipients.length; i++) {
            recipients[i].transfer(amount);
        }
    }
    receive() external payable { }
}