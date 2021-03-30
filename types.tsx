import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Crypto: undefined;
};

export type BottomTabParamList = {
  Wallet: undefined;
  Home: undefined;
};

export type WalletParamList = {
  WalletScreen: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type CryptoCurrencyName =
  'Bitcoin'
  | 'Cardano'
  | 'Dogecoin'
  | 'Ethereum'
  | 'Litecoin'
  | 'Monero'
  | 'Polkadot'
  | 'Stellar';

export type CryptoCurrencyCode = 'BTC' | 'ETH' | 'DOGE' | 'LTC' | 'ADA' | 'DOT' | 'XLM' | 'XMR';

export type CryptoParamList = {
  CryptoScreen: {
    name: CryptoCurrencyName,
    code: CryptoCurrencyCode,
    price: number,
    difference: number,
  };
  CryptoBuyScreen: {
    name: string,
  };
  CryptoSellScreen: {
    name: string,
  };
};

export type CryptoScreenRouteProp = RouteProp<CryptoParamList, 'CryptoScreen'>;

export type SettingsParamList = {
  SettingsScreen: undefined;
};
