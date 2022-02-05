require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/saGDVgiIlRU1cOsqRNaUrliSBjY-R3s5',
      accounts: ['0a30ff9e7d4c71b92f175d77908fa3e99c8bfe5bfa726add4e913a68c98f94b1']
    }
  }
}