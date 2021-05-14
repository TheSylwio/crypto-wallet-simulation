import { Redux } from '../../types';

type ActionType = {
  type: Redux;
  payload: any;
};

const initialState = {
  cryptocurrencies: [],
};

const root = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Redux.SetCryptocurrencies:
      return {
        ...state,
        cryptocurrencies: action.payload,
      };
    default:
      return state;
  }
};

export default root;