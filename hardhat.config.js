/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

API_URL="https://volta-rpc.energyweb.org/"
PRIVATE_KEY="8d2c97386086d3b6c667a94738b9402a251928f0f5cd84b36b9c3f53a89032fb"
CONTRACT_ADDRESS="0x8b5cCcdafd797D7E943c1da03e17ce4FC7c309F1"
module.exports = {
   solidity: "0.8.11",

   networks: {
   
      sepolia: {
         url: `https://sepolia.infura.io/v3/6fcd12f72b3c410e8226b544bd77f0b1`, // or use Alchemy, Quicknode etc.
         accounts: [`0x${PRIVATE_KEY}`], // private key from MetaMask
         chainId: 11155111
       }
   },
};
