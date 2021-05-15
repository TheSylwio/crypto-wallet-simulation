import { CryptoCurrency, Transaction } from '../../types';

export const getCryptocurrencies = (state: { cryptocurrencies: CryptoCurrency[] }) => state.cryptocurrencies;
export const getUserCryptocurrencies = (state: { cryptocurrencies: any }) => state.userCryptocurrencies;
export const getTransactions = (state: { transactions: Transaction[] }) => state.transactions;
export const getFunds = (state: { funds: number }) => state.funds;
