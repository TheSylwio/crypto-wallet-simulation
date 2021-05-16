import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import mockup from '../../mockup';
import { CryptoCurrency, CryptoCurrencySymbol, Redux, Transaction, UserCryptoCurrencies } from '../../types';
import storage from '../utils/storage';

type NewThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;

const setCryptocurrencies = (cryptocurrencies: CryptoCurrency[]) => {
  return {
    type: Redux.SetCryptocurrencies,
    payload: cryptocurrencies,
  };
};

export const fetchCryptocurrencies = () => async (dispatch: NewThunkDispatch) => {
  // TODO: Remove mockup
  const { BTC, ETH, DOGE, LTC, ADA, EOS, XLM, XMR } = mockup.data;
  const cryptocurrencies = [BTC, ETH, DOGE, LTC, ADA, EOS, XLM, XMR];
  const mappedCryptocurrencies = cryptocurrencies.map(({ name, symbol, quote }) => ({
    name,
    symbol,
    price: quote.USD.price,
    difference: quote.USD.percent_change_1h,
  }));

  dispatch(setCryptocurrencies(<CryptoCurrency[]>mappedCryptocurrencies));
};

export const setFunds = (funds: number) => async (dispatch: NewThunkDispatch) => {
  dispatch({
    type: Redux.SetFunds,
    payload: funds,
  });
};

export const addTransaction = (transaction: Transaction) => async (dispatch: NewThunkDispatch) => {
  dispatch({
    type: Redux.AddTransaction,
    payload: transaction,
  });
};

export const setUserCryptocurrency = (symbol: CryptoCurrencySymbol, amount: number) => async (dispatch: NewThunkDispatch) => {
  dispatch({
    type: Redux.SetUserCryptocurrency,
    payload: {
      symbol,
      amount,
    },
  });
};

export const setTransactions = (transactions: Transaction[]) => async (dispatch: NewThunkDispatch) => {
  dispatch({
    type: Redux.SetTransactions,
    payload: transactions,
  });
};

export const setUserCryptoCurrencies = (cryptocurrencies: UserCryptoCurrencies) => async (dispatch: NewThunkDispatch) => {
  dispatch({
    type: Redux.SetUserCryptoCurrencies,
    payload: cryptocurrencies,
  });
};

export const checkCachedTransactions = () => async (dispatch: NewThunkDispatch) => {
  await storage.load({ key: 'transactions' }).then(transactions => {
    dispatch(setTransactions(JSON.parse(transactions)));
  });
};

export const checkCachedCryptoCurrencies = () => async (dispatch: NewThunkDispatch) => {
  await storage.load({ key: 'cryptocurrencies' }).then(cryptocurrencies => {
    dispatch(setUserCryptoCurrencies(JSON.parse(cryptocurrencies)));
  });
};

export const checkFunds = () => async (dispatch: NewThunkDispatch) => {
  await storage.load({ key: 'funds' }).then(funds => {
    dispatch(setFunds(funds));
  });
};