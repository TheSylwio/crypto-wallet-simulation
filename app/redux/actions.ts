import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import mockup from '../../mockup';
import { CryptoCurrency, Redux } from '../../types';

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