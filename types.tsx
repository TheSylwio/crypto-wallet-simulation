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

export type CryptoParamList = {
  CryptoScreen: {
    name: string,
    price: number,
    difference: number,
  };
  CryptoBuyScreen: undefined;
  CryptoSellScreen: undefined;
};

export type SettingsParamList = {
  SettingsScreen: undefined;
};
