const tintColorLight = '#455370';
const tintColorDark = '#fff';

export const CryptoColors = {
  Bitcoin: '#F7931A',
  Cardano: '#2059B0',
  Dogecoin: '#C2A633',
  Ethereum: '#3C3C3D',
  Litecoin: '#A6A9AA',
  Monero: '#FF6600',
  EOS: '#000000',
  Stellar: '#7D00FF',
};

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
