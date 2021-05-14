import { CryptoCurrency } from '../../types';

export const getCryptocurrencies = (state: { cryptocurrencies: CryptoCurrency[] }) => state.cryptocurrencies;
