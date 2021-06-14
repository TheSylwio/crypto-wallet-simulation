import { CryptoCurrencySymbol, Redux } from '../../types';
import { saveIntoStorage } from '../utils/storage';

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
      const transactions = [...state.transactions, action.payload];
      saveIntoStorage('transactions', transactions, true);

      return {
        ...state,
        transactions,
      };
    case Redux.SetFunds:
      saveIntoStorage('funds', action.payload);

      return {
        ...state,
        funds: action.payload,
      };
    case Redux.SetUserCryptocurrency:
      const userCryptocurrencies = {
        ...state.userCryptocurrencies,
        [action.payload.symbol]: state.userCryptocurrencies[action.payload.symbol] + action.payload.amount,
      };

      saveIntoStorage('cryptocurrencies', userCryptocurrencies, true);

      return {
        ...state,
        userCryptocurrencies,
      };
    case Redux.SetUserCryptoCurrencies:
      return {
        ...state,
        userCryptocurrencies: action.payload,
      };
    default:
      return state;
  }
};

export default root;