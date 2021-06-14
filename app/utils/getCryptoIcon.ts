import { CryptoCurrencySymbol } from '../../types';

const getCryptoIcon = (symbol: CryptoCurrencySymbol) => {
  switch (symbol) {
    case 'ADA':
      return require('../assets/icons/cardano.png');
    case 'BTC':
      return require('../assets/icons/bitcoin.png');
    case 'DOGE':
      return require('../assets/icons/dogecoing.png');
    case 'EOS':
      return require('../assets/icons/eos.png');
    case 'ETH':
      return require('../assets/icons/ethereum.png');
    case 'LTC':
      return require('../assets/icons/litecoin.png');
    case 'XLM':
      return require('../assets/icons/stellar.png');
    case 'XMR':
      return require('../assets/icons/monero.png');
  }
};

export default getCryptoIcon;