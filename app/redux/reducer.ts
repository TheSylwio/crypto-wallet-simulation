import { CryptoCurrencySymbol, Redux } from '../../types';

type ActionType = {
  type: Redux;
  payload: {
    symbol: CryptoCurrencySymbol;
    amount: number;
  };
};

const initialState = {
  cryptocurrencies: [],
  transactions: [],
  funds: 5000,
  userCryptocurrencies: {
    BTC: 0,
    ETH: 0,
    DOGE: 0,
    LTC: 0,
    ADA: 0,
    EOS: 0,
    XLM: 0,
    XMR: 0,
  },
};

const root = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Redux.SetCryptocurrencies:
      return {
        ...state,
        cryptocurrencies: action.payload,
      };
    case Redux.SetTransactions:
      return {
        ...state,
        transactions: action.payload,
      };
    case Redux.AddTransaction:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case Redux.SetFunds:
      return {
        ...state,
        funds: action.payload,
      };
    case Redux.SetUserCryptocurrency:
      return {
        ...state,
        userCryptocurrencies: {
          ...state.userCryptocurrencies,
          [action.payload.symbol]: state.userCryptocurrencies[action.payload.symbol] + action.payload.amount,
        },
      };
    default:
      return state;
  }
};

export default root;