const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const mnemonic = require("./secrets.json").mnemonic
const provider = new HDWalletProvider(mnemonic, `wss://speedy-nodes-nyc.moralis.io/d0d28dd2bcefbbb94af7815e/bsc/testnet/ws`)
const web3 = new Web3(provider);

web3.setProvider(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();


}

module.exports = {

  networks: {

    bsc: {
      provider: () => provider,
      network_id: 97,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 10,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  compilers: {
    solc: {
      version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    }
  },

};
