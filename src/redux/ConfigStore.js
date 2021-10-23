import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './CountriesReducer.js';

const reducer = combineReducers({
  data: countryReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;