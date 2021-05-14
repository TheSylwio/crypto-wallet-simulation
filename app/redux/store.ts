import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initializeStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default initializeStore;