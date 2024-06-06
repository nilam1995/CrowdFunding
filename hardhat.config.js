require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };

const NEXT_PUBLIC_SEPOLIA_RPC = process.env.NEXT_PUBLIC_SEPOLIA_RPC;
const NEXT_PUBLIC_PRIVATE_KEY = process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: NEXT_PUBLIC_SEPOLIA_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
