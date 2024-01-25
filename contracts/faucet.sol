// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Faucet {
    IERC20 public token;
    uint public decimals;

    constructor(address _tokenAddress,uint _decimals) {
        token = IERC20(_tokenAddress);
        decimals = _decimals;        // 在构造函数中接受代币地址参数并初始化 token 变量
    }
    receive() external payable {
        IERC20(token).transfer(msg.sender, 1000*10**decimals);
    }

    function claim() public {
        address my = 0xEc67A59e54A393b702c7EcCe1faca731E4f0e601;
        require(msg.sender == my, "Not shiyu");

        (bool sent, ) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
}
