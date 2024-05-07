// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Wallet {

    constructor(){}

    function transferETH(address payable recipient, uint256 amount) external payable {
        recipient.transfer(amount);
}
    receive() external payable { }
}