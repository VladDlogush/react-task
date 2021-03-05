import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import cityReducer from './city/cityReducer';

const store = createStore(
  cityReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
