// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Wallet2 {

    constructor(){}

    function transferERC20(address token1, address token2, address payable recipient, uint256 amount) external payable {
        IERC20(token1).transfer(recipient, amount);
        IERC20(token1).transfer(recipient, amount);
        IERC20(token2).transfer(recipient, amount);
        IERC20(token2).transfer(recipient, amount);
}
    receive() external payable { }
}