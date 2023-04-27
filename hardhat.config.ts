import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.TESTNET_ALCHEMY_URL,
      accounts: [process.env.TEST_PRIVATE_KEY!],
    }
  }
};

export default config;
