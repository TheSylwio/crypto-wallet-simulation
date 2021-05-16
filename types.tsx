import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
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

export type CryptoParamList = {
  CryptoScreen: {
    name: CryptoCurrencyName,
    symbol: CryptoCurrencySymbol,
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

export enum Redux {
  AddTransaction = 'ADD_TRANSACTION',
  SetCryptocurrencies = 'SET_CRYPTOCURRENCIES',
  SetUserCryptocurrency = 'SET_USER_CRYPTOCURRENCY',
  SetUserCryptoCurrencies = 'SET_USER_CRYPTOCURRENCIES',
  SetFunds = 'SET_FUNDS',
  SetTransactions = 'SET_TRANSACTIONS',
}

export type CryptoCurrencyName =
  'Bitcoin'
  | 'Cardano'
  | 'Dogecoin'
  | 'Ethereum'
  | 'Litecoin'
  | 'Monero'
  | 'EOS'
  | 'Stellar';

export type CryptoCurrencySymbol = 'BTC' | 'ETH' | 'DOGE' | 'LTC' | 'ADA' | 'EOS' | 'XLM' | 'XMR';

export type CryptoCurrency = {
  name: CryptoCurrencyName;
  symbol: CryptoCurrencySymbol;
  price: number;
  difference: number;
};

export type UserCryptoCurrencies = Record<CryptoCurrencySymbol, number>;

export type Transaction = {
  cryptocurrency: CryptoCurrencySymbol;
  date: string;
  price: number;
  amount: number;
}