import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { CryptoCurrency, CryptoCurrencySymbol, Redux, Transaction, UserCryptoCurrencies } from '../../types';
import { loadFromStorage } from '../utils/storage';
// @ts-ignore
import { API_URL, API_KEY } from '@env';

export type NewThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;

const setCryptocurrencies = (cryptocurrencies: CryptoCurrency[]) => {
  return {
    type: Redux.SetCryptocurrencies,
    payload: cryptocurrencies,
  };
};

export const fetchCryptocurrencies = () => async (dispatch: NewThunkDispatch) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': API_KEY,
    },
  };
  const { data } = await fetch(API_URL, options).then(response => response.json()).catch(error => console.error(error));
  const { BTC, ETH, DOGE, LTC, ADA, EOS, XLM, XMR } = data;
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
  await dispatch(loadFromStorage('transactions', setTransactions, true));
};

export const checkCachedCryptoCurrencies = () => async (dispatch: NewThunkDispatch) => {
  await dispatch(loadFromStorage('cryptocurrencies', setUserCryptoCurrencies, true));
};

export const checkFunds = () => async (dispatch: NewThunkDispatch) => {
  await dispatch(loadFromStorage('funds', setFunds));
};