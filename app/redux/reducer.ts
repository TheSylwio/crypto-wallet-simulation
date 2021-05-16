import { CryptoCurrencySymbol, Redux } from '../../types';
import storage from '../utils/storage';

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
      storage.save({
        key: 'transactions',
        data: JSON.stringify([...state.transactions, action.payload]),
        expires: null,
      });

      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case Redux.SetFunds:
      storage.save({
        key: 'funds',
        data: action.payload,
        expires: null,
      });

      return {
        ...state,
        funds: action.payload,
      };
    case Redux.SetUserCryptocurrency:
      const userCryptocurrencies = {
        ...state.userCryptocurrencies,
        [action.payload.symbol]: state.userCryptocurrencies[action.payload.symbol] + action.payload.amount,
      };

      storage.save({
        key: 'cryptocurrencies',
        data: JSON.stringify(userCryptocurrencies),
        expires: null,
      });

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