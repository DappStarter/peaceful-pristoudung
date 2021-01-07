require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind atom harvest option bridge twice'; 
let testAccounts = [
"0xba0472648ffb4bef8fe6199ebc0a72676905e4383efda0a4602252690cf79c2c",
"0x155d3591c3b952aa641c513341d5a6eef3ac3903c219fe0c11dbc004dab3dce3",
"0xaa045961424476c29b2886d09373a5b8e1882ac4dd72020b5c0110bc4b0d037b",
"0xab3e49fb07c2bbc95a0cfb772e305ecea5dbc5bfc13ec3008b4abba4dd301db6",
"0xce9d429b6b950d7275c641b81baeaa7915de104e7df9cd0a823bda5a0258ddc2",
"0x6e84b842c9a5d4d0417e00b3db350b7639b5e32db611f95325ab1156f4c6682c",
"0xd4682118c20691500c0cb9dffd4f4882a627490c801ff935a7f3842e98ed0aba",
"0xed4aa6c89165edaa93ae9d2ac3ec021532a973902f77edc780eee0fdc4b281a7",
"0x32784b31ed6efcbc7d8323515da46335a0ba21afd70a0411be1715a030fcc790",
"0xd2c5a6a02021b244144a95109849c86114cee617cf55f034493b1eeb219dc949"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
