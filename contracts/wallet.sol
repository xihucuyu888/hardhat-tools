// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract WalletERC20 {

    constructor(){}

    function transferERC20(address token, address payable recipient, uint256 amount) external payable {
        IERC20(token).transfer(recipient, amount);
        recipient.transfer(amount);
}
    receive() external payable { }
}