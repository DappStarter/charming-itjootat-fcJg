require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember company heavy kiwi tackle secret'; 
let testAccounts = [
"0x943324a7fc0369418fe3f61794c7f6d08de70795215fcc45592d2f6d2afa6676",
"0x179524ca051ce1cbb630302823cb2530e98d3dd498f262d0a6e34313c8109f2a",
"0x5907b5b11affb0368f5dceae56364358575d2307c245fd2411aa3d78af47d7da",
"0xaa43f0c78c8b2be4082a0385aa32efa748ff25604bd57825d23fc55b5a482a34",
"0xbd15b9b8474aca46c81c3dcc89b1686ea2ce89bcce7e9e849f4099d51b1adaab",
"0xb677efe411d44fc22144c77e3c63cb6557e73ec5347732b11b06b47ba2ad9bf0",
"0xc36c1689e8192aecdddf7c233da03dc35278823a623fcd50b3445ccc5845e636",
"0xbcfb035e097d751023b018ee3ae09499b7b05d293d5b17fd0988afef07694642",
"0xbc15621fb71fbee841af255670b301ec830c9bc5406c6efc096fa18a3f51d7ff",
"0x5f349a24cbc970fb8e5e8e8a80e181597464c18a3841cbd2f60ff1f882cc0e97"
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
            version: '^0.8.0'
        }
    }
};

